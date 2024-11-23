import browser from "webextension-polyfill";
import { logger } from "@/lib/logger";
import Anthropic from "@anthropic-ai/sdk";

interface ClaudeMessage {
  role: "user" | "assistant";
  content: string;
}

export async function invokeClaudeAPI(query: string): Promise<any> {
  try {
    const { apiKey } = await browser.storage.sync.get("apiKey");

    if (!apiKey) {
      throw new Error("Claude API key not found");
    }

    logger.info("Invoking Claude API");

    const anthropic = new Anthropic({
      apiKey: apiKey.toString(),
      dangerouslyAllowBrowser: true,
    });

    const result = await anthropic.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 1024,
      messages: [{ role: "user", content: query }],
    });

    console.log('result', result);
    logger.info(`Claude API response received ${result}`);
    return result;
  } catch (error) {
    logger.error(`Claude API error: ${error}`);
    throw error;
  }
}
