import { useState, useRef, useEffect } from "react";
import { Message, roleSchema } from "@/types/messages/base";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import browser from "webextension-polyfill";
import { logger } from "@/lib/logger";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { RecordingStatusBadge } from "@/components/injected/recording-status-badge";
import { askRequestSchema } from "@/types/actions/messages/ask";
import { getCurrentPageState } from "@/utils/pagestate/get";
import { ask } from "@/actions/messages/ask";

type ChatContainerProps = {
  messages: Message[];
  isVisible: boolean;
  isRecording: boolean;
  onContainerClose: () => void;
  onPlayButtonClick: () => void;
  onPauseButtonClick: () => void;
  onMessagesUpdate: (messages: Message[]) => void;
  longTermMemory: string;
  setLongTermMemory: (longTermMemory: string) => void;
};

export function ChatContainer({
  messages,
  isVisible,
  isRecording,
  onContainerClose,
  onPlayButtonClick,
  onPauseButtonClick,
  onMessagesUpdate,
  longTermMemory,
  setLongTermMemory,
}: ChatContainerProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [inputValue, setInputValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isAccepted, setIsAccepted] = useState<boolean>(false);
  const [isRejected, setIsRejected] = useState<boolean>(false);

  const handleSendMessage = async () => {
    if (inputValue.trim() === "" || isLoading) return;
    setIsLoading(true);

    try {
      // Create new array with user message
      const userMessage = {
        content: inputValue,
        role: roleSchema.Values.user,
      };
      const updatedMessages = [...messages, userMessage];

      // Update messages immediately with user input
      onMessagesUpdate(updatedMessages);
      setInputValue("");

      // Get page state and send request
      const pageState = await getCurrentPageState();
      const askRequest = askRequestSchema.parse({
        prompt: inputValue,
        pageState: pageState,
      });

      const askResponse = await ask(askRequest);

      // Create final messages array with assistant response
      const assistantMessage = {
        content: askResponse.response,
        role: roleSchema.Values.assistant,
      };
      const finalMessages = [...updatedMessages, assistantMessage];

      // Update with final messages including assistant response
      onMessagesUpdate(finalMessages);
      logger.info("Updated messages", finalMessages);
    } catch (error) {
      logger.error("Error sending message:");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
      return;
    }
  };

  useEffect(() => {
    if (isAccepted || isRejected) {
      // Add 1 second delay using setTimeout
      const timer = setTimeout(() => {
        setIsAccepted(false);
        setIsRejected(false);
        setLongTermMemory("");
      }, 1000);

      // Cleanup timeout if component unmounts or effect re-runs
      return () => clearTimeout(timer);
    }
  }, [isAccepted, isRejected]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (!isVisible) return null;

  return (
    <div className="w-[350px] h-[500px] bg-white dark:bg-gray-900 transition-colors duration-200 border-2 border-black dark:border-white rounded-lg">
      <div className="flex flex-col w-full h-full">
        <div className="px-4 py-3 flex justify-between items-center border-b dark:border-gray-700">
          <div className="flex items-center gap-2">
            <h1 className="font-semibold text-gray-900 dark:text-white">
              Browzy
            </h1>
          </div>
          <div className="flex items-center gap-1">
            <RecordingStatusBadge
              isRecording={isRecording}
              onPlayButtonClick={onPlayButtonClick}
              onPauseButtonClick={onPauseButtonClick}
            />
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-500 dark:text-gray-400"
              onClick={onContainerClose}
            >
              <X size={20} />
            </Button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-2 min-h-0">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`max-w-[80%] px-3 py-2 rounded-lg break-words ${
                message.role === roleSchema.Values.user
                  ? "bg-blue-500 text-white self-end rounded-br-none"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 self-start rounded-bl-none"
              }`}
            >
              {message.content}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 border-t border-gray-200 dark:border-gray-700 shadow-lg">
          <div className="flex gap-2 w-full pb-2">
            <Input
              type="text"
              className="flex-1 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 
                dark:text-white dark:placeholder-gray-400 focus:ring-blue-500 dark:focus:ring-blue-400"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type a message..."
            />
            <Button onClick={handleSendMessage}>Send</Button>
          </div>
          <Separator />
        </div>
        {longTermMemory && !isAccepted && !isRejected && (
          <>
          <h2 className="text-xs text-center font-semibold mt-1">Long Term Memory suggestion</h2>
          <div className="p-2 flex flex-row gap-2">
            <div className="flex flex-col gap-2 w-4/5">
            <p className="text-gray-600 dark:text-gray-400 text-sm bg-gray-100 ">{longTermMemory}</p>
            </div>
            <div className="flex gap-2 w-1/5">
            <div className="w-5 h-5 bg-black rounded-sm text-white flex justify-center items-center" onClick={() => setIsRejected(true)}>✗</div>
            <div className="w-5 h-5 bg-black rounded-sm text-white flex justify-center items-center" onClick={() => setIsAccepted(true)}>✓</div>
          </div>
        </div>
        </>
        )}
        {isAccepted && (
          <p className="text-black text-xs text-center bg-gray-100 p-4 rounded-lg">
            Long term memory saved.
          </p>
        )}
        {isRejected && (
          <p className="text-black text-xs text-center bg-gray-100 p-4 rounded-lg">
            Long term memory rejected.
          </p>
        )}
      </div>
    </div>
  );
}
