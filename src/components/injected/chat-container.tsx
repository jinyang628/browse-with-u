import { useState, useRef, useEffect } from "react";
import { Message } from "@/types/messages/base";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import browser from "webextension-polyfill";
import { logger } from "@/lib/logger";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { RecordingStatusBadge } from "@/components/injected/recording-status-badge";

type ChatContainerProps = {
  isVisible: boolean;
  isRecording: boolean;
  onContainerClose: () => void;
  onPlayButtonClick: () => void;
  onPauseButtonClick: () => void;
};

export function ChatContainer({
  isVisible,
  isRecording,
  onContainerClose,
  onPlayButtonClick,
  onPauseButtonClick,
}: ChatContainerProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [inputValue, setInputValue] = useState<string>("");

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;
    setInputValue("");
    console.log("Sending message");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

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
              className="max-w-[80%] px-3 py-2 rounded-lg break-words bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 self-start rounded-bl-none"
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
      </div>
    </div>
  );
}
