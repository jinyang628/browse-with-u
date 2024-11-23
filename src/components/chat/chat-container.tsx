import { useState, useRef, useEffect } from "react";
import { Message } from "@/types/messages/base";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { User } from "@/stores/supabase";

export function ChatContainer() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [user, setUser] = useState<User | null>(null);
  const [inputValue, setInputValue] = useState<string>("");

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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
            onClick={() => setIsVisible(false)}
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
