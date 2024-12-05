"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className = "",
  filter = true,
  duration = 0.5,
  boldWords = [], 
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  boldWords?: string[]; 
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    if (scope.current) {
      animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration || 1,
          delay: stagger(0.2),
        }
      );
    }
  }, [animate, filter, duration, scope]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          const cleanWord = word.trim().toLowerCase(); // Normalize word for matching
          const isBold = boldWords
            .map((w) => w.trim().toLowerCase())
            .includes(cleanWord); // Normalize bold words for matching

          return (
            <motion.span
              key={word + idx}
              className={`dark:text-white text-white opacity-0 ${
                isBold ? "font-bold" : ""
              }`} // Apply font-bold if the word is in boldWords array
              style={{
                filter: filter ? "blur(0px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn(className)}>
      <div className="mt-4">
        <div className="text-white">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
