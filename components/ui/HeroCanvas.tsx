"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { ParticleField } from "./ParticleField";
import { PARTICLE_CONFIG } from "@/lib/constants";

export default function HeroCanvas() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Canvas
        dpr={[1, PARTICLE_CONFIG.DPR_CAP]}
        camera={{
          position: [0, 0, PARTICLE_CONFIG.CAMERA_Z],
          fov: 60,
          near: 0.1,
          far: 100,
        }}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "low-power",
          failIfMajorPerformanceCaveat: false,
        }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <ParticleField />
        </Suspense>
      </Canvas>
    </div>
  );
}
