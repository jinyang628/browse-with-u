import { invoke } from "@/actions/messages/invoke";
import { ChatContainer } from "@/components/injected/chat-container";
import PulsatingCircle from "@/components/injected/pulsating-circle";
import { invokeRequestSchema } from "@/types/actions/messages/invoke";
import { getCurrentPageState } from "@/utils/pagestate/get";

import { useState, useEffect } from "react";

export default function InjectedBase() {
  const [isChatContainerVisible, setIsChatContainerVisible] =
    useState<boolean>(false);
  const [isRendered, setIsRendered] = useState<boolean>(false);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const urlRef = useRef<string>("");

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
        setIsRecording((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown, true);
    return () => window.removeEventListener("keydown", handleKeyDown, true);
  }, []);

  // Handle recording
  useEffect(() => {
    if (!isRecording) return;
    if (urlRef.current === window.location.href) return;
    urlRef.current = window.location.href;

    const handleRecording = async () => {
      const pageState = await getCurrentPageState();
      const invokeRequest = invokeRequestSchema.parse({
        pageState: pageState,
      });
      const invokeResponse = await invoke(invokeRequest);
      return invokeResponse;
    };

    handleRecording();
  }, [isRecording]);

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
      isRecording={isRecording}
      onIconClick={() => {
        setIsRendered(false);
        setIsChatContainerVisible(true);
      }}
    />
  );
}
