import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
  glowHover?: boolean;
  intensity?: "light" | "medium" | "heavy";
}

export function GlassPanel({ 
  children, 
  className, 
  glowHover = false,
  intensity = "medium"
}: GlassPanelProps) {
  
  const intensityMap = {
    light: "bg-white/3 border-white/6",
    medium: "bg-white/4 border-white/8 backdrop-blur-sm shadow-glass",
    heavy: "bg-white/5 border-white/10 backdrop-blur-md shadow-glass-lg"
  };

  return (
    <div className={cn(
      "relative rounded-2xl overflow-hidden transition-all duration-400 group border",
      intensityMap[intensity],
      glowHover && "hover:border-aurora-teal/25 hover:shadow-glow-teal",
      className
    )}>
      {/* Subtle hover gradient overlay */}
      {glowHover && (
        <div className="absolute inset-0 bg-gradient-to-br from-aurora-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
      )}
      
      {/* Inner Highlight */}
      <div className="absolute inset-0 rounded-2xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] pointer-events-none" />
      
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
}
