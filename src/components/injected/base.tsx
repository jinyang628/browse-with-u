import { analyzeNewWebpages } from "@/actions/llm/longTermMemory";
import React, { useState, useEffect } from "react";
import { invoke } from "@/actions/messages/invoke";
import { ChatContainer } from "@/components/injected/chat-container";
import PulsatingCircle from "@/components/injected/pulsating-circle";
import TogglableSpeechBubble from "@/components/injected/speech-bubble";
import { logger } from "@/lib/logger";
import { invokeRequestSchema } from "@/types/actions/messages/invoke";
import { Message, roleSchema } from "@/types/messages/base";
import { PageState } from "@/types/page";
import { useRecordingStore } from "@/types/store/recording";
import { getCurrentPageState } from "@/utils/pagestate/get";

export const saveUrlHistory = (history: Partial<PageState>[]) => {
  chrome.storage.local.set({ urlHistory: JSON.stringify(history) });
};

export const getUrlHistory = async (): Promise<Partial<PageState>[]> => {
  const result = await chrome.storage.local.get("urlHistory");
  return result?.urlHistory ? JSON.parse(result.urlHistory) : [];
};

export default function InjectedBase() {
  const [isChatContainerVisible, setIsChatContainerVisible] =
    useState<boolean>(false);
  const [isRendered, setIsRendered] = useState<boolean>(false);
  const { recordingState, setRecordingState } = useRecordingStore();
  const [messages, setMessages] = useState<Message[]>([]);
  const [unseenMessageExist, setUnseenMessageExist] = useState(false);
  const [longTermMemory, setLongTermMemory] = useState<string>("");

  useEffect(() => {
    setIsRendered(true);
  }, [isChatContainerVisible]);

  const handleRecording = async () => {
    const pageState = await getCurrentPageState();
    if (!pageState) {
      logger.error("Page state is not available");
      return;
    }

    const invokeRequest = invokeRequestSchema.parse({
      pageState: pageState,
    });

    const invokeResponse = await invoke(invokeRequest);
    setMessages([
      ...messages,
      { content: invokeResponse.response, role: roleSchema.Values.assistant },
    ]);
    if (!isChatContainerVisible) {
      setUnseenMessageExist(true);
    }

    const newHistoryEntry: Partial<PageState> = {
      url: pageState.url,
      textContent: pageState.textContent,
    };

    const previousHistory = await getUrlHistory();
    saveUrlHistory([...previousHistory, newHistoryEntry].slice(-10));

    setTimeout(async () => {
      const analysis = await analyzeNewWebpages().catch(err => logger.error("Failed to analyze pages:", err));
      if (analysis) {
      setLongTermMemory(analysis);
      }
    }, 0);


    return invokeResponse;
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsChatContainerVisible((prev) => !prev);
      }

      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "l") {
        e.preventDefault();
        const newIsRecording = !recordingState.isRecording;
        console.log(newIsRecording);

        const newUrl = window.location.href;

        if (recordingState.url === newUrl) {
          setRecordingState({ isRecording: newIsRecording, url: newUrl });
          return;
        }

        setRecordingState({ isRecording: newIsRecording, url: newUrl });
      }
    };

    window.addEventListener("keydown", handleKeyDown, true);
    return () => window.removeEventListener("keydown", handleKeyDown, true);
  }, [handleRecording, setRecordingState]);

  useEffect(() => {
    if (!recordingState.isRecording) return;
    handleRecording();
  }, []);

  if (!isRendered) return null;

  if (isChatContainerVisible) {
    return (
      <ChatContainer
        messages={messages}
        isVisible={isChatContainerVisible}
        isRecording={recordingState.isRecording}
        onContainerClose={() => {
          setIsChatContainerVisible(false);
        }}
        onPlayButtonClick={() => {
          logger.info("Play button clicked");
          setRecordingState({ ...recordingState, isRecording: true });
        }}
        onPauseButtonClick={() => {
          logger.info("Pause button clicked");
          setRecordingState({ ...recordingState, isRecording: false });
        }}
        onMessagesUpdate={(messages) => {
          setMessages(messages);
        }}
        longTermMemory={longTermMemory}
        setLongTermMemory={setLongTermMemory}
      />
    );
  }

  return (
    <div className={`fixed inset-0 pointer-events-none ${unseenMessageExist ? "animate-subtle-bounce" : ""}`}>
      {/* <div className="absolute bottom-11 right-11">
        <TogglableSpeechBubble text={"!!!"} isVisible={unseenMessageExist} />
      </div> */}
      <div className="absolute bottom-4 right-4 pointer-events-auto">
        <PulsatingCircle
          isVisible={!isChatContainerVisible}
          isRecording={recordingState.isRecording}
          onIconClick={() => {
            setIsRendered(false);
            setIsChatContainerVisible(true);
            setUnseenMessageExist(false);
          }}
        />
      </div>
    </div>
  );
}
