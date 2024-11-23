import browser from "webextension-polyfill";

import {
  InvokeRequest,
  InvokeResponse,
  invokeResponseSchema,
} from "@/types/actions/messages/invoke";
import { logger } from "@/lib/logger";
import { invokeClaudeAPI } from "../llm/cluade";
import { PageStateHistory } from "@/types/state/history";
import {
  addHistory,
  addWebpage,
  getHistoryBySessionId,
  History,
  POST,
  Webpage,
} from "@/stores/supabase";
import { PageState } from "@/types/page";

export const prompt = `You are an expert at identifying what users are trying to do when they are browsing the web.

You are given a list of the user's past visited webpages, for each webpage you are given the URL and the text content.

Given a webpage with:
- URL: {url}
- Text content: {textContent}

Your task is to identify what is the objective of the user, respond in a clear, structured format. You should not return anything except the objective.

Refer to the following examples of good and bad responses:

<GOOD RESPONSES>
- "I am looking for food"
- "User is looking for fastest way to get a driver's license"
- "I am looking for a content marketing agency"
- "I am looking for a SEO agency"
</GOOD RESPONSES>
Above are good responses because they are concise and direct.

<BAD RESPONSES>
bad responses: 
"Based on the URL and text content, the user is looking for information about "swimming lessons" - this appears to be a search query on Google.
</BAD RESPONSES>
Above is a bad response because it is contains a lot of redundant information like reasoning, a good reponse would be "I am looking for swimming lessons"
`;

const LTM = `
User's preferences:
- allergies: none
- dietary restrictions: none
`;

/**
 * takes in a list of pageStates and returns a formatted string of the pageStates
 * @param url - The URL to parse
 * @returns The decoded search query string if found, null otherwise
 */
function parsePageStates(url: string): string | null {
  try {
    // Create URL object
    const urlObj = new URL(url);

    // Get the 'q' parameter
    const searchQuery = urlObj.searchParams.get("q");

    // Return the decoded query or null if not found
    return searchQuery;
  } catch (error) {
    console.error("Error parsing URL:", error);
    return null;
  }
}

function formatPageStates(pageStates: PageState[]): string {
  return pageStates
    .map((page, index) => 
      `Page ${index + 1}:
URL: ${page.url}
Content: ${page.textContent}
`).join('\n');
}

export async function invoke(
  input: InvokeRequest,
): Promise<InvokeResponse | void> {
  try {
    logger.info(`Invoke request initiated`);
    logger.info(input.pageState.textContent);
    const webpage: Webpage = {
      url: input.pageState.url,
      page_data: input.pageState.textContent,
      base64_image: input.pageState.screenshot,
      response: null,
      session_id: 1, // Hard coded for now
    };
    const webpages: Webpage[] = await POST("webpages", [webpage]);
    console.log(webpages);
    // const webpage_id: number = await addWebpage(webpage);
    // Update history
    // const history: History | null = await getHistoryBySessionId();
    // if (!history) {
    //   await addHistory({
    //     session_id: 1,

    //   })
    // }
    // console.log("help", history);

    // TODO: Database, LLM, etc.
    // const response =
    // const invokeResponse = invokeResponseSchema.parse(response.data);
    const formatted_pages = formatPageStates(input.pageStates);
    const final_prompt = prompt
      .replace("{url}", input.pageState.url)
    console.log(formatted_pages);
//    const response = await invokeClaudeAPI(final_prompt);
      .replace("{textContent}", input.pageState.textContent);
    const final_response = await invokeClaudeAPI(final_prompt);

    const invokeResponse = { response: final_response.text };
    return invokeResponse;
  } catch (error: unknown) {
    logger.error(`Invoke error: ${error}`);
    throw error;
  }
}
