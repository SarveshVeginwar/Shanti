import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export const InteractiveHeroBackground = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const { left, top, width, height } =
          containerRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Smooth out the mouse movement
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Transformations for the floating elements
  const x1 = useTransform(smoothX, [0, 1], [-20, 20]);
  const y1 = useTransform(smoothY, [0, 1], [-20, 20]);
  
  const x2 = useTransform(smoothX, [0, 1], [30, -30]);
  const y2 = useTransform(smoothY, [0, 1], [30, -30]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden -z-10 pointer-events-none"
    >
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5" />
      
      {/* Animated Orbs/Shapes */}
      <motion.div
        style={{ x: x1, y: y1 }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"
      />
      <motion.div
        style={{ x: x2, y: y2 }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px]"
      />

      {/* Grid Overlay with interactive perspective */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
            backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
        }}
      >
      </div>

    </div>
  );
};
