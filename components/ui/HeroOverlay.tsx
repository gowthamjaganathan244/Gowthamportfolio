'use client'

import { ArrowDown, Zap, Cloud, Code2 } from 'lucide-react'
import { profile } from '@/data/profile'

const specialties = [
  { icon: Cloud, label: 'AWS Cloud' },
  { icon: Zap, label: 'Workflow Automation' },
  { icon: Code2, label: 'Secure Systems' },
  { icon: Code2, label: 'React Development' },
]

export function HeroOverlay() {
  const [firstName, ...lastNameParts] = profile.name.split(' ')
  const lastName = lastNameParts.join(' ')

  return (
    <section className="relative z-10 flex min-h-screen w-full items-center justify-center px-5 pt-28 pb-16 sm:px-8 sm:pt-32 md:px-10 lg:px-12 xl:px-0">
      <div className="mx-auto flex w-full max-w-7xl justify-center">
        <div className="w-full max-w-6xl rounded-3xl border border-white/10 bg-white/[0.035] px-6 py-8 text-center shadow-2xl shadow-black/20 backdrop-blur-md sm:px-8 sm:py-9 md:px-10 md:py-10 lg:px-12 lg:py-11">
          {/* Trust Label - AWS SAA */}
          <div
            className="mb-4 flex justify-center animate-fade-in opacity-0"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            <span className="flex items-center justify-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-aurora-teal/80 sm:text-xs">
              <span className="h-px w-6 bg-aurora-teal/50" />
              AWS Certified Solutions Architect Associate
              <span className="h-px w-6 bg-aurora-teal/50" />
            </span>
          </div>

          {/* Availability badge */}
          <div
            className="mb-7 flex justify-center animate-fade-in opacity-0"
            style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
          >
            <span className="inline-flex items-center justify-center gap-2 rounded-full border border-aurora-teal/30 bg-aurora-teal/10 px-3.5 py-1.5 text-xs font-mono font-medium tracking-wide text-aurora-teal">
              <span className="h-1.5 w-1.5 animate-pulse-slow rounded-full bg-aurora-teal" />
              {profile.availability}
            </span>
          </div>

          {/* Name */}
          <div
            className="animate-fade-in opacity-0"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            <h1 className="mx-auto mb-4 max-w-5xl font-display text-4xl font-bold leading-[1] tracking-tight sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
              <span className="text-white">{firstName}</span>{' '}
              {lastName && (
                <span className="bg-gradient-to-r from-cyan-300 via-violet-300 to-teal-300 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(45,212,191,0.08)]">
                  {lastName}
                </span>
              )}
            </h1>
          </div>

          {/* Role */}
          <div
            className="animate-fade-in opacity-0"
            style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
          >
            <p
              className="mx-auto mb-6 max-w-3xl font-display text-lg font-semibold leading-tight tracking-wide sm:text-xl md:text-2xl lg:text-2xl"
              style={{ color: 'rgb(45 212 191 / 0.9)' }}
            >
              {profile.role}
            </p>
          </div>

          {/* Value statement */}
          <div
            className="mx-auto mb-8 max-w-3xl animate-fade-in opacity-0"
            style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
          >
            <p className="font-body text-sm leading-7 text-slate-300 sm:text-[15px] md:text-base">
              {profile.tagline}
            </p>
          </div>

          {/* Specialty pills */}
          <div
            className="mb-10 flex flex-wrap justify-center gap-2.5 animate-fade-in opacity-0"
            style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
          >
            {specialties.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center justify-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-mono font-medium text-slate-300 backdrop-blur-sm sm:text-xs"
              >
                <Icon size={12} className="text-aurora-cyan opacity-80" />
                {label}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap justify-center gap-3.5 animate-fade-in opacity-0"
            style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg bg-aurora-teal px-6 py-3 font-body text-sm font-semibold text-midnight-950 transition-all duration-300 hover:scale-[1.02] hover:shadow-glow-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aurora-teal focus-visible:ring-offset-2 focus-visible:ring-offset-midnight-950"
            >
              <span className="relative z-10">Explore Projects</span>
              <ArrowDown size={16} className="relative z-10 transition-transform duration-300 group-hover:translate-y-0.5" />
              <span className="absolute inset-0 -translate-x-full skew-x-12 bg-white/20 transition-transform duration-500 group-hover:translate-x-0" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-body text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-midnight-950"
            >
              Get in Touch
            </a>

          </div>
        </div>
      </div>
    </section>
  )
}
