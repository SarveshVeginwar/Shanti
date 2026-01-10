import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealTextProps {
  text: string;
  className?: string;
  contianerClassName?: string;
}

export const ScrollRevealText = ({ text, className, contianerClassName }: ScrollRevealTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = text.split(" ");

  return (
    <div ref={containerRef} className={cn("flex flex-wrap leading-relaxed", contianerClassName)}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]} className={className}>
            {word}
          </Word>
        );
      })}
    </div>
  );
};

const Word = ({ children, progress, range, className }: any) => {
  const opacity = useTransform(progress, range, [0.1, 1]);
  return (
    <span className="relative mr-2 last:mr-0 inline-block">
      <span className={cn("absolute opacity-10", className)}>{children}</span>
      <motion.span style={{ opacity }} className={cn(className)}>
        {children}
      </motion.span>
    </span>
  );
};
