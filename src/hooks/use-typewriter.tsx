import { useState, useEffect } from "react";

interface UseTypewriterOptions {
  text: string;
  speed?: number;
  delay?: number;
  onComplete?: () => void;
  loop?: boolean;
  pauseTime?: number;
  eraseSpeed?: number;
}

export const useTypewriter = ({ 
  text, 
  speed = 100, 
  delay = 0,
  onComplete,
  loop = false,
  pauseTime = 2000,
  eraseSpeed = 50
}: UseTypewriterOptions) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {
    if (delay > 0) {
      const delayTimer = setTimeout(() => {
        setIsTyping(true);
      }, delay);
      return () => clearTimeout(delayTimer);
    } else {
      setIsTyping(true);
    }
  }, [delay]);

  useEffect(() => {
    if (!isTyping) return;

    // Typing phase
    if (!isErasing && displayedText.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);

      return () => clearTimeout(timer);
    } 
    // Completed typing
    else if (!isErasing && displayedText.length === text.length) {
      if (!isComplete) {
        setIsComplete(true);
        onComplete?.();
      }
      
      // If loop is enabled, pause then start erasing
      if (loop) {
        const pauseTimer = setTimeout(() => {
          setIsErasing(true);
          setIsComplete(false);
        }, pauseTime);
        return () => clearTimeout(pauseTimer);
      }
    }
    // Erasing phase
    else if (isErasing && displayedText.length > 0) {
      const timer = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length - 1));
      }, eraseSpeed);

      return () => clearTimeout(timer);
    }
    // Completed erasing, restart typing
    else if (isErasing && displayedText.length === 0) {
      setIsErasing(false);
    }
  }, [displayedText, text, speed, isTyping, isComplete, onComplete, loop, pauseTime, isErasing, eraseSpeed]);

  return { displayedText, isTyping, isComplete };
};
