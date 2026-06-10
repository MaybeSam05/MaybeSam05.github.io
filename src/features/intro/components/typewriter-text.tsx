"use client";

import { useEffect, useState } from "react";

type TypewriterTextProps = {
  text: string;
  className?: string;
  speed?: number;
  startDelay?: number;
  onComplete?: () => void;
  showCursor?: boolean;
  cursorWhileTypingOnly?: boolean;
};

export function TypewriterText({
  text,
  className,
  speed = 28,
  startDelay = 250,
  onComplete,
  showCursor = true,
  cursorWhileTypingOnly = false,
}: TypewriterTextProps) {
  const [visibleText, setVisibleText] = useState("");
  const isComplete = visibleText.length >= text.length;

  useEffect(() => {
    let currentIndex = 0;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const typeNextCharacter = () => {
      currentIndex += 1;
      setVisibleText(text.slice(0, currentIndex));

      if (currentIndex < text.length) {
        timeoutId = setTimeout(typeNextCharacter, speed);
      } else {
        onComplete?.();
      }
    };

    timeoutId = setTimeout(typeNextCharacter, startDelay);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [onComplete, startDelay, speed, text]);

  return (
    <span className={className}>
      {visibleText}
      {showCursor && (!cursorWhileTypingOnly || !isComplete) ? (
        <span className="ml-1 inline-block h-[1em] w-[0.62ch] animate-pulse bg-current align-[-0.12em] opacity-80" />
      ) : null}
    </span>
  );
}
