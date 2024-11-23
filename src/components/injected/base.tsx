import { invoke } from "@/actions/messages/invoke";
import { ChatContainer } from "@/components/injected/chat-container";
import PulsatingCircle from "@/components/injected/pulsating-circle";
import { logger } from "@/lib/logger";
import { invokeRequestSchema } from "@/types/actions/messages/invoke";
import { UrlHistory } from "@/types/state/history";
import { useRecordingStore } from "@/types/store/recording";
import { getCurrentPageState } from "@/utils/pagestate/get";

import { useState, useEffect } from "react";

export default function InjectedBase() {
  const [isChatContainerVisible, setIsChatContainerVisible] =
    useState<boolean>(false);
  const [isRendered, setIsRendered] = useState<boolean>(false);
  const [latestResponse, setLatestResponse] = useState<string>("");
  const { recordingState, setRecordingState } = useRecordingStore();

  useEffect(() => {
    setIsRendered(true);
  }, [isChatContainerVisible]);

  const saveUrlHistory = (history: UrlHistory[]) => {
    localStorage.setItem('urlHistory', JSON.stringify(history));
  };

  const getUrlHistory = (): UrlHistory[] => {
    const history = localStorage.getItem('urlHistory');
    return history ? JSON.parse(history) : [];
  };

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
    if (invokeResponse) {
      setLatestResponse(invokeResponse.response);
    }

    const currentHistory = getUrlHistory();
      const newHistoryEntry: UrlHistory = {
        url: window.location.href,
        response: invokeResponse?.response || "",
        timestamp: Date.now(),
      };

    const updatedHistory = [...currentHistory, newHistoryEntry].slice(-10);
    saveUrlHistory(updatedHistory);

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
        latestResponse={latestResponse}
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
