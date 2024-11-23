import { invokeClaudeAPI } from "@/actions/llm/claude";
import { getUrlHistory } from "@/components/injected/base";
import { logger } from "@/lib/logger";
import {
  AskRequest,
  AskResponse,
  askResponseSchema,
} from "@/types/actions/messages/ask";
import { formatHistory } from "@/utils/pagestate/format-history";

const prompt = `You are a helpful assistant that answers a user's questions based on the provided page state.

The user is currently on the page {url} and the text content present on the page is as follows:\n{textContent}.

The user has visited the following pages in the past before this:\n{history}.

Please provide a short and concise response to the user's question/statement below. Your response should not be more than 2 sentences:

{prompt}
`;

export async function ask(input: AskRequest): Promise<AskResponse> {
  try {
    logger.info(`Ask request initiated`);

    const browser_history = await getUrlHistory();
    const formatted_history = formatHistory(browser_history);

    const final_prompt = prompt
      .replace("{url}", input.pageState.url)
      .replace("{textContent}", input.pageState.textContent)
      .replace("{history}", formatted_history)
      .replace("{prompt}", input.prompt);

    const final_response = await invokeClaudeAPI(final_prompt);

    logger.info(`Ask response received ${final_response}`);
    const askResponse = askResponseSchema.parse({
      response: final_response,
    });
    return askResponse;
  } catch (error: unknown) {
    logger.error(`Ask error: ${error}`);
    throw error;
  }
}
