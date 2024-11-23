import { createRoot } from "react-dom/client";
import { ChatContainer } from "@/components/chat/chat-container";
import React from "react";
import "@/styles/globals.css";
import { QueryProvider } from "@/components/shared/query-provider";
import { WEB_COMPANION_CHAT_CONTAINER_ID } from "@/constants/id";
import {
  ScreenshotPhase,
  screenshotPhaseSchema,
} from "@/types/messages/actions";
import { logger } from "@/lib/logger";
import {
  invokeSpeechRequestSchema,
  screenshotRequestSchema,
} from "@/types/messages/requests";
import { ShadowRootContentScriptUiOptions } from "wxt/client";
import talkify from "talkify-tts";

const shadowRootOptions: ShadowRootContentScriptUiOptions<any> = {
  name: WEB_COMPANION_CHAT_CONTAINER_ID,
  position: "inline",
  anchor: "body",
  async onMount(container: HTMLElement) {
    // We read the theme from storage instead of system so that the theme value is stored in a single source of truth (popup theme updates will store the new theme in storage)
    const { theme: storedTheme } = await browser.storage.sync.get("theme");

    const rootContainer = document.createElement("div");
    rootContainer.id = WEB_COMPANION_CHAT_CONTAINER_ID;
    rootContainer.classList.add(storedTheme);
    Object.assign(rootContainer.style, {
      position: "fixed",
      bottom: "20px",
      right: "20px",
      zIndex: "999999",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      overflow: "hidden",
    });
    container.appendChild(rootContainer);
    const root = createRoot(rootContainer);

    root.render(
      React.createElement(
        QueryProvider,
        null,
        React.createElement(ChatContainer),
      ),
    );

    window.addEventListener("message", async (event) => {
      if (event.source !== window) return;

      const screenshotParseResult = screenshotRequestSchema.safeParse(
        event.data,
      );
      if (screenshotParseResult.success) {
        const phase: ScreenshotPhase = screenshotParseResult.data.phase;

        switch (phase) {
          case screenshotPhaseSchema.Values.before:
            rootContainer.style.display = "none";
            break;
          case screenshotPhaseSchema.Values.after:
            rootContainer.style.display = "";
            break;
          default:
            logger.error(
              "Invalid screenshot phase. Expected 'before' or 'after'",
            );
            break;
        }
      }
    });

    // Listen for theme changes in storage. This cannot be handled by next-themes in ChatContainer because we are wrapping the root container in a shadow root.
    const handleStorageChange = (changes: {
      [key: string]: browser.storage.StorageChange;
    }) => {
      if (changes.theme) {
        if (changes.theme.newValue === "dark") {
          rootContainer.classList.add("dark");
          rootContainer.classList.remove("light");
        } else {
          rootContainer.classList.add("light");
          rootContainer.classList.remove("dark");
        }
      }
    };

    browser.storage.onChanged.addListener(handleStorageChange);

    return () => {
      browser.storage.onChanged.removeListener(handleStorageChange);
    };
  },
};

export default defineContentScript({
  matches: ["<all_urls>"],
  cssInjectionMode: "ui",
  async main(ctx) {
    const ui = await createShadowRootUi(ctx, shadowRootOptions);
    ui.mount();
  },
});
