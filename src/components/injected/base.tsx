import { invoke } from "@/actions/messages/invoke";
import { ChatContainer } from "@/components/injected/chat-container";
import PulsatingCircle from "@/components/injected/pulsating-circle";
import { invokeRequestSchema } from "@/types/actions/messages/invoke";
import { useRecordingStore } from "@/types/store/recording";
import { getCurrentPageState } from "@/utils/pagestate/get";

import { useState, useEffect } from "react";

export default function InjectedBase() {
  const [isChatContainerVisible, setIsChatContainerVisible] =
    useState<boolean>(false);
  const [isRendered, setIsRendered] = useState<boolean>(false);
  const { recordingState, setRecordingState } = useRecordingStore();

  useEffect(() => {
    setIsRendered(true);
  }, [isChatContainerVisible]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsChatContainerVisible((prev) => !prev);
      }

      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "l") {
        e.preventDefault();
				setRecordingState({ ...recordingState, isRecording: !recordingState.isRecording });
      }
    };

    window.addEventListener("keydown", handleKeyDown, true);
    return () => window.removeEventListener("keydown", handleKeyDown, true);
  }, []);

  // Handle recording
  useEffect(() => {
    if (recordingState.url === window.location.href) return; // Don't record if the URL hasn't changed

    setRecordingState({ ...recordingState, url: window.location.href });

    if (!recordingState.isRecording) return;

    const handleRecording = async () => {
      const pageState = await getCurrentPageState();
      const invokeRequest = invokeRequestSchema.parse({
        pageState: pageState,
      });
      const invokeResponse = await invoke(invokeRequest);
      return invokeResponse;
    };

    handleRecording();
  }, [recordingState.isRecording]);

  if (!isRendered) return null;

  if (isChatContainerVisible) {
    return (
      <ChatContainer
        isVisible={isChatContainerVisible}
        onContainerClose={() => {
          setIsChatContainerVisible(false);
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
