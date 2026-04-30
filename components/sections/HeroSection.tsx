'use client'

import dynamic from 'next/dynamic'
import { HeroOverlay } from '../ui/HeroOverlay'

// Dynamically import the 3D canvas — isolates WebGL from SSR and lazy-loads three.js
const HeroCanvas = dynamic(
  () => import('../ui/HeroCanvas').then(m => ({ default: m.default })),
  { ssr: false, loading: () => null }
)

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[600px] flex items-center overflow-hidden"
      style={{ background: '#010d18' }}
      aria-label="Introduction"
    >
      {/* Aurora gradient background layers */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(ellipse 90% 55% at 50% -5%, rgba(45,212,191,0.13) 0%, transparent 55%),
            radial-gradient(ellipse 55% 35% at 85% 75%, rgba(167,139,250,0.09) 0%, transparent 45%),
            radial-gradient(ellipse 35% 25% at 10% 55%, rgba(103,232,249,0.07) 0%, transparent 40%)
          `,
        }}
      />

      {/* 3D Particle Canvas */}
      <HeroCanvas />

      {/* Depth vignette for visual depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(1,13,24,0.6) 100%)',
        }}
      />

      {/* Text content overlay */}
      <HeroOverlay />

      {/* Bottom fade to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        aria-hidden="true"
        style={{ background: 'linear-gradient(to bottom, transparent, #010d18)' }}
      />
    </section>
  )
}
