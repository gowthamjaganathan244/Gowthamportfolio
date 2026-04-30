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
    <section
      id="hero"
      className="relative z-10 flex min-h-svh w-full scroll-mt-24 items-center justify-center overflow-hidden px-4 pb-10 pt-24 sm:px-6 sm:pb-14 sm:pt-28 md:px-8 md:pt-32 lg:px-12 xl:px-0"
    >
      <div className="mx-auto flex w-full max-w-7xl justify-center">
        <div className="w-full max-w-[72rem] rounded-[1.65rem] border border-white/10 bg-white/[0.035] px-4 py-6 text-center shadow-2xl shadow-black/20 backdrop-blur-md sm:rounded-3xl sm:px-7 sm:py-8 md:px-10 md:py-10 lg:px-12 lg:py-11">
          <div
            className="mb-4 flex justify-center animate-fade-in opacity-0"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            <span className="flex max-w-full flex-wrap items-center justify-center gap-2 text-center text-[8.5px] font-mono font-bold uppercase leading-4 tracking-[0.12em] text-aurora-teal/80 min-[390px]:text-[9px] sm:text-[10px] sm:tracking-[0.16em] md:text-xs">
              <span className="hidden h-px w-5 bg-aurora-teal/50 sm:block" />
              AWS Certified Solutions Architect Associate
              <span className="hidden h-px w-5 bg-aurora-teal/50 sm:block" />
            </span>
          </div>

          <div
            className="mb-5 flex justify-center animate-fade-in opacity-0 sm:mb-7"
            style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
          >
            <span className="inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-aurora-teal/30 bg-aurora-teal/10 px-3 py-1.5 text-center text-[10.5px] font-mono font-medium leading-4 tracking-wide text-aurora-teal sm:px-3.5 sm:text-xs">
              <span className="h-1.5 w-1.5 shrink-0 animate-pulse-slow rounded-full bg-aurora-teal" />
              {profile.availability}
            </span>
          </div>

          <div
            className="animate-fade-in opacity-0"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            <h1 className="mx-auto mb-4 max-w-5xl break-words font-display text-[2.25rem] font-bold leading-[1.03] tracking-tight min-[390px]:text-[2.55rem] sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
              <span className="text-white">{firstName}</span>{' '}
              {lastName && (
                <span className="bg-gradient-to-r from-cyan-300 via-violet-300 to-teal-300 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(45,212,191,0.08)]">
                  {lastName}
                </span>
              )}
            </h1>
          </div>

          <div
            className="animate-fade-in opacity-0"
            style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
          >
            <p
              className="mx-auto mb-5 max-w-3xl font-display text-[0.95rem] font-semibold leading-snug tracking-wide sm:mb-6 sm:text-xl md:text-2xl lg:text-2xl"
              style={{ color: 'rgb(45 212 191 / 0.9)' }}
            >
              {profile.role}
            </p>
          </div>

          <div
            className="mx-auto mb-7 max-w-3xl animate-fade-in opacity-0 sm:mb-8"
            style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
          >
            <p className="font-body text-sm leading-6 text-slate-300 sm:text-[15px] sm:leading-7 md:text-base">
              {profile.tagline}
            </p>
          </div>

          <div
            className="mb-7 flex flex-wrap justify-center gap-2 animate-fade-in opacity-0 sm:mb-10 sm:gap-2.5"
            style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
          >
            {specialties.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center justify-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 text-[10px] font-mono font-medium text-slate-300 backdrop-blur-sm sm:px-3 sm:text-xs"
              >
                <Icon size={12} className="shrink-0 text-aurora-cyan opacity-80" />
                {label}
              </span>
            ))}
          </div>

          <div
            className="flex flex-col justify-center gap-3 animate-fade-in opacity-0 min-[420px]:flex-row sm:flex-wrap sm:gap-3.5"
            style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
          >
            <a
              href="#projects"
              className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-lg bg-aurora-teal px-5 py-3 font-body text-sm font-semibold text-midnight-950 transition-all duration-300 hover:scale-[1.02] hover:shadow-glow-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aurora-teal focus-visible:ring-offset-2 focus-visible:ring-offset-midnight-950 min-[420px]:w-auto sm:px-6"
            >
              <span className="relative z-10">Explore Projects</span>
              <ArrowDown size={16} className="relative z-10 transition-transform duration-300 group-hover:translate-y-0.5" />
              <span className="absolute inset-0 -translate-x-full skew-x-12 bg-white/20 transition-transform duration-500 group-hover:translate-x-0" />
            </a>

            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-3 font-body text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-midnight-950 min-[420px]:w-auto sm:px-6"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
