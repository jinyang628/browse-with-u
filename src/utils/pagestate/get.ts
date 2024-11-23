import { logger } from "@/lib/logger";
import { PageState, pageStateSchema } from "@/types/page";
import { generateArticle } from "@/utils/pagestate/article";
import { getScreenshot } from "@/utils/pagestate/screenshot";

export const getCurrentPageState = async (): Promise<PageState | undefined> => {
  const article = generateArticle();
  if (!article) {
    logger.error("Accessibility tree is not available");
    return;
  }
  const textContent: string = article.textContent.replaceAll("\n", " ");

  const screenshot = await getScreenshot();
  if (!screenshot) {
    logger.error("Screenshot is not available");
    return;
  }

  const currentPageState = pageStateSchema.parse({
    url: window.location.href,
    textContent: textContent,
    screenshot: screenshot,
  });

  return currentPageState;
};
