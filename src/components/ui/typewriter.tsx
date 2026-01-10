import { useTypewriter } from "@/hooks/use-typewriter";
import { cn } from "@/lib/utils";

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  showCursor?: boolean;
  onComplete?: () => void;
  loop?: boolean;
  pauseTime?: number;
  eraseSpeed?: number;
}

export const Typewriter = ({ 
  text, 
  speed = 100, 
  delay = 0,
  className,
  showCursor = true,
  onComplete,
  loop = false,
  pauseTime = 2000,
  eraseSpeed = 50
}: TypewriterProps) => {
  const { displayedText, isComplete } = useTypewriter({ 
    text, 
    speed, 
    delay,
    onComplete,
    loop,
    pauseTime,
    eraseSpeed
  });

  return (
    <span className={cn("inline-block", className)}>
      {displayedText}
      {showCursor && (
        <span 
          className={cn(
            "inline-block w-[3px] h-[1em] ml-1.5 bg-current align-middle rounded-sm",
            !isComplete && "typewriter-cursor",
            isComplete && "opacity-0 transition-opacity duration-300"
          )}
        />
      )}
    </span>
  );
};
