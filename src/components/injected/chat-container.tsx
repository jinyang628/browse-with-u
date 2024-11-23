import { useState, useRef, useEffect } from "react";
import { Message } from "@/types/messages/base";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import browser from "webextension-polyfill";
import { getCurrentPageState } from "@/utils/pagestate/get";
import { logger } from "@/lib/logger";

type ChatContainerProps = {
  isVisible: boolean;
  onContainerClose: () => void;
};

export function ChatContainer({
  isVisible,
  onContainerClose,
}: ChatContainerProps) {
  const [messages, setMessages] = useState<Message[]>([]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // TODO: This is just to test whether the api key is set, we should access it directly in the agent layer logic instead
  useEffect(() => {
    const retrieveApiKey = async () => {
      const result = await browser.storage.sync.get("apiKey");
      const pageState = await getCurrentPageState();
      console.log(result.apiKey);
      console.log(pageState);
    };
    retrieveApiKey();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (!isVisible) return null;

  return (
    <div className="w-[350px] h-[500px] bg-white dark:bg-gray-900 transition-colors duration-200 border-2 border-black dark:border-white rounded-lg">
      <div className="flex flex-col w-full h-full">
        <div className="px-4 py-3 flex justify-between items-center border-b dark:border-gray-700">
          <h1 className="font-semibold text-gray-900 dark:text-white">
            Browzy
          </h1>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-500 dark:text-gray-400"
            onClick={onContainerClose}
          >
            <X size={20} />
          </Button>
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
      </div>
    </div>
  );
}
