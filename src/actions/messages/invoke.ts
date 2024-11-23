import browser from "webextension-polyfill";
import { prompt } from "@/lib/prompts";

import {
  InvokeRequest,
  InvokeResponse,
  invokeResponseSchema,
} from "@/types/actions/messages/invoke";
import { logger } from "@/lib/logger";
import { invokeClaudeAPI } from "../llm/cluade";

export async function invoke(
  input: InvokeRequest,
): Promise<InvokeResponse | void> {
  try {
    logger.info(`Invoke request initiated`);
    console.log(input);
    // TODO: Database, LLM, etc.
    // const response =
    // const invokeResponse = invokeResponseSchema.parse(response.data);
    const final_prompt = prompt
      .replace("{url}", input.pageState.url)
      .replace("{textContent}", input.pageState.textContent)
      .replace("{screenshot}", input.pageState.screenshot);
    const response = await invokeClaudeAPI(final_prompt);

    logger.info(`Invoke response received ${response}`);

    // TODO: Revert the return shape to not have void
    // return invokeResponse;
  } catch (error: unknown) {
    logger.error(`Invoke error: ${error}`);
    throw error;
  }
}
