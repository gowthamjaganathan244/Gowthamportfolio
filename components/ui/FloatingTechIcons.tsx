"use client";

import { motion } from "framer-motion";
import { Cloud, Server, Database, Code2, Shield } from "lucide-react";
import { useEffect, useState } from "react";

const icons = [
  { Icon: Cloud, color: "text-cyan-400", delay: 0 },
  { Icon: Server, color: "text-violet-400", delay: 1 },
  { Icon: Database, color: "text-emerald-400", delay: 2 },
  { Icon: Code2, color: "text-pink-400", delay: 1.5 },
  { Icon: Shield, color: "text-blue-400", delay: 0.5 },
];

export function FloatingTechIcons() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none hidden md:block opacity-30">
      {icons.map(({ Icon, color, delay }, i) => {
        // Distribute them around the edges roughly
        const xPos = i % 2 === 0 ? 10 + i * 5 : 80 - i * 5;
        const yPos = 20 + i * 15;
        
        return (
          <motion.div
            key={i}
            className={`absolute ${color}`}
            style={{ left: `${xPos}%`, top: `${yPos}%` }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: delay,
            }}
          >
            <Icon size={48} className="opacity-50 blur-[1px]" />
          </motion.div>
        );
      })}
    </div>
  );
}
