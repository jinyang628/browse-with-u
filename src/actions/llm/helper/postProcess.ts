import { TextBlock } from "@anthropic-ai/sdk/resources/messages.mjs";

export default function postProcessClaudeResponse(response: TextBlock): string {
  const processed = _removeFirstAndLastQuotes(response.text);
  return processed;
}

function _removeFirstAndLastQuotes(input: string): string {
  let processed = input;

  if (processed[0] === '"' || processed[0] === "'") {
    processed = processed.slice(1);
  }

  if (
    processed[processed.length - 1] === '"' ||
    processed[processed.length - 1] === "'"
  ) {
    processed = processed.slice(0, -1);
  }

  return processed;
}
