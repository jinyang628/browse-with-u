import { invoke } from "@/actions/messages/invoke";
import { ChatContainer } from "@/components/injected/chat-container";
import PulsatingCircle from "@/components/injected/pulsating-circle";
import { logger } from "@/lib/logger";
import { invokeRequestSchema } from "@/types/actions/messages/invoke";
import { usePageStateHistoryStore } from "@/types/store/history";
import { useRecordingStore } from "@/types/store/recording";
import { getCurrentPageState } from "@/utils/pagestate/get";

import { useState, useEffect } from "react";

export default function InjectedBase() {
  const [isChatContainerVisible, setIsChatContainerVisible] =
    useState<boolean>(false);
  const [isRendered, setIsRendered] = useState<boolean>(false);
  const { recordingState, setRecordingState } = useRecordingStore();
  const { pageStateHistory, setPageStateHistory } = usePageStateHistoryStore();

  useEffect(() => {
    setIsRendered(true);
  }, [isChatContainerVisible]);

  const handleRecording = async () => {
    const pageState = await getCurrentPageState();
    if (!pageState) {
      logger.error("Page state is not available");
      return;
    }

    if (pageStateHistory.history.length >= 10) {
      pageStateHistory.history.shift();
    }
    pageStateHistory.history.push(pageState);
    setPageStateHistory(pageStateHistory);

    const invokeRequest = invokeRequestSchema.parse({
      pageState: pageState,
    });
    const invokeResponse = await invoke(invokeRequest);
    return invokeResponse;
  };

  // Handle keyboard shortcuts
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
      />
    );
  }

  return (
    <PulsatingCircle
      isVisible={!isChatContainerVisible}
      isRecording={recordingState.isRecording}
      onIconClick={() => {
        setIsRendered(false);
        setIsChatContainerVisible(true);
      }}
    />
  );
}
