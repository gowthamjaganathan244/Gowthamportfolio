"use client";

import { motion } from "framer-motion";
import { ReactNode, useRef, useState } from "react";

export function MagneticButton({
  children,
  className,
  onClick,
  variant = "primary"
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    if (!ref.current) return;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = "relative px-6 py-3 rounded-full font-medium transition-colors duration-300 flex items-center justify-center gap-2 overflow-hidden";
  
  const variants = {
    primary: "bg-white text-black hover:bg-slate-200",
    secondary: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20",
    outline: "bg-transparent text-white border border-white/20 hover:bg-white/5",
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
}
