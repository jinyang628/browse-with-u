import { CAPTURE_SCREENSHOT_ACTION } from "@/constants/browser";
import { screenshotPhaseSchema } from "@/types/messages/actions";
import { screenshotRequestSchema } from "@/types/messages/requests";

export async function getScreenshot(): Promise<string> {
  return new Promise((resolve, reject) => {
    const screenshotRequest = screenshotRequestSchema.parse({
      phase: screenshotPhaseSchema.Values.before,
    });
    window.postMessage(screenshotRequest, "*");

    // Small delay to ensure style changes take effect
    setTimeout(() => {
      // Send message to background script
      browser.runtime
        .sendMessage({ action: CAPTURE_SCREENSHOT_ACTION })
        .then((dataUrl: string) => {
          resolve(dataUrl);
        })
        .catch((error) => {
          reject(error);
        })
        .finally(() => {
          const screenshotRequest = screenshotRequestSchema.parse({
            phase: screenshotPhaseSchema.Values.after,
          });
          window.postMessage(screenshotRequest, "*");
        });
    }, 10);
  });
}
