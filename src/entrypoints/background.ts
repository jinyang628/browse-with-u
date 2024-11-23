import { CAPTURE_SCREENSHOT_ACTION } from "@/constants/browser";

export default defineBackground(() => {
  browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === CAPTURE_SCREENSHOT_ACTION) {
      browser.tabs
        .query({ active: true, currentWindow: true })
        .then((tabs) => {
          if (tabs.length > 0 && tabs[0].id !== undefined) {
            return browser.tabs.captureVisibleTab(tabs[0].windowId || 0, {
              format: "png",
            });
          }
          throw new Error("No active tab found");
        })
        .then((dataUrl) => {
          sendResponse(dataUrl);
        })
        .catch((error) => {
          sendResponse({ error: error.message });
        });
    }
    return true;
  });
});
