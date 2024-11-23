import browser from "webextension-polyfill";

import {
  InvokeRequest,
  InvokeResponse,
  invokeResponseSchema,
} from "@/types/actions/messages/invoke";
import { logger } from "@/lib/logger";
import { invokeClaudeAPI } from "../llm/cluade";
import { PageStateHistory } from "@/types/state/history";
import { History, POST, Webpage } from "@/stores/supabase";
import { getUrlHistory } from "@/components/injected/base";
import { formatHistory } from "@/utils/pagestate/format-history";

export const prompt = `Given a webpage with:
- URL: {url}
- Current web page text content: {textContent}

- History of previous web pages: {history}

Your task is to identify what is the objective of the user, and help the user achieve their objective in 
the most efficient and concise way possible. Try to understand the user's intent and provide a really concise (15 words or less) response.

- User details: {user_details}


<GOOD RESPONSES>
- "There's a Ramen restaurant nearby  which you might like"
- "This link seems to have all the info."

Above are good responses because they are concise and direct.

<BAD RESPONSES>
bad responses: 
"Based on the URL and text content, the user is looking for information about "swimming lessons" - this appears to be a search query on Google.

This can be determined from:
1. The search query parameter in the URL (q=swimming)
2. The swimming related terms in the page content"
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

    const webpage_id: number = await POST("webpages", [webpage]);
    const browser_history = await getUrlHistory();

    const formatted_history = formatHistory(browser_history);

    const final_prompt = prompt
      .replace("{url}", input.pageState.url)
      .replace("{textContent}", input.pageState.textContent)
      .replace("{history}", formatted_history);

    const final_response = await invokeClaudeAPI(final_prompt);

    console.log(final_response);
    const invokeResponse = { response: final_response.text };
    return invokeResponse;
  } catch (error: unknown) {
    logger.error(`Invoke error: ${error}`);
    throw error;
  }
}
