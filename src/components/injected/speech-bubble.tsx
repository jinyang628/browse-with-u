"use client";

import { motion, AnimatePresence } from "framer-motion";

interface TogglableSpeechBubbleProps {
  text: string;
  isVisible: boolean;
}

export default function TogglableSpeechBubble({
  text,
  isVisible,
}: TogglableSpeechBubbleProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="relative bg-white p-4 rounded-lg shadow-md max-w-xs mb-4 mr-4"
        >
          <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-white transform rotate-45" />
          <div className="relative z-10 text-lg font-extrabold">{text}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
