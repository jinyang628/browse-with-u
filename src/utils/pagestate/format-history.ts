import { PageState } from "@/types/page";

export function formatHistory(history: Partial<PageState>[]): string {
    return history
      .map(item => `URL: ${item.url}\nResponse: ${item.textContent}`)
      .join('\n\n');
  }