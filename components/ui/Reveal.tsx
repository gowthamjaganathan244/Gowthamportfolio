"use client";

import { motion } from "framer-motion";
import { slideUp } from "@/lib/motion";
import { ReactNode } from "react";

export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode, delay?: number, className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: slideUp.hidden,
        show: {
          ...slideUp.show,
          transition: { ...slideUp.show.transition, delay },
        },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
