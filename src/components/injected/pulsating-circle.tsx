"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";
type PulsatingCircleProps = {
  isVisible: boolean;
  onIconClick: () => void;
};
export default function PulsatingCircle({
  isVisible,
  onIconClick,
}: PulsatingCircleProps) {
  const [isLarge, setIsLarge] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsLarge((prev) => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="relative w-16 h-16 rounded-full">
      <motion.div
        className="absolute inset-0 rounded-full bg-yellow-400 opacity-50"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute inset-0 rounded-full bg-white flex items-center justify-center"
        animate={{
          scale: isLarge ? 1 : 0.9,
        }}
        transition={{
          duration: 0.3,
        }}
      >
        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-yellow-400 flex items-center justify-center">
          <Zap
            size={24}
            className="text-yellow-500 cursor-pointer"
            onClick={onIconClick}
          />
        </div>
      </motion.div>
    </div>
  );
}
