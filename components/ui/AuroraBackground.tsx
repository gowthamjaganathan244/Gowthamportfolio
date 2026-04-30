"use client";

import dynamic from "next/dynamic";

const HeroCanvas = dynamic(() => import("./HeroCanvas"), {
  ssr: false,
  loading: () => <WebGLFallback />,
});

function WebGLFallback() {
  return (
    <div
      className="absolute inset-0 bg-aurora-gradient"
      aria-hidden="true"
      style={{
        background: `
          radial-gradient(ellipse 80% 50% at 50% -10%, rgba(45,212,191,0.18) 0%, transparent 55%),
          radial-gradient(ellipse 50% 40% at 80% 70%, rgba(167,139,250,0.12) 0%, transparent 45%),
          radial-gradient(ellipse 40% 30% at 15% 55%, rgba(103,232,249,0.09) 0%, transparent 40%)
        `,
      }}
    />
  );
}

export function AuroraBackground() {
  return (
    <div className="absolute inset-0 z-0 bg-midnight-950 overflow-hidden pointer-events-none">
      <WebGLFallback />
      <HeroCanvas />
      
      {/* Depth vignette overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#010d18_100%)] opacity-40 mix-blend-multiply pointer-events-none" />
      
      {/* Bottom fade into the next section */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-midnight-950 to-transparent pointer-events-none" />
    </div>
  );
}
