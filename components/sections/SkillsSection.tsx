'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { skillGroups } from '@/data/skills'

const levelDot: Record<string, string> = {
  core:       'bg-aurora-teal shadow-glow-teal',
  proficient: 'bg-aurora-indigo shadow-glow-indigo',
  familiar:   'bg-slate-600',
  learning:   'bg-slate-700 animate-pulse-slow',
}

const colorAccent: Record<string, { border: string; heading: string; dot: string }> = {
  teal:     { border: 'border-aurora-teal/25',   heading: 'text-aurora-teal',   dot: 'bg-aurora-teal/40' },
  violet:   { border: 'border-aurora-violet/25', heading: 'text-aurora-violet', dot: 'bg-aurora-violet/40' },
  cyan:     { border: 'border-aurora-cyan/25',   heading: 'text-aurora-cyan',   dot: 'bg-aurora-cyan/40' },
  indigo:   { border: 'border-aurora-indigo/25', heading: 'text-aurora-indigo', dot: 'bg-aurora-indigo/40' },
  silver:   { border: 'border-white/15',         heading: 'text-slate-300',     dot: 'bg-slate-500/40' },
  midnight: { border: 'border-white/10',         heading: 'text-slate-400',     dot: 'bg-slate-600/40' },
}

export function SkillsSection() {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <section id="skills" className="relative py-28 md:py-36 px-6 sm:px-10 md:px-16 bg-midnight-950 scroll-mt-28">
      <div className="absolute inset-0" aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 80%, rgba(45,212,191,0.04) 0%, transparent 60%)' }} />

      <div className="relative mx-auto max-w-7xl">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-8 bg-aurora-teal/60" />
          <span className="text-xs font-mono font-medium text-aurora-teal tracking-widest uppercase">Skills & Tools</span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-5 leading-[1.05]">
          What I work with<br />
          <span className="text-aurora-teal/90">every day.</span>
        </h2>

        {/* Legend */}
        <div className="flex items-center gap-5 mb-12">
          {[['Core', 'bg-aurora-teal'], ['Proficient', 'bg-aurora-indigo'], ['Familiar', 'bg-slate-600'], ['Learning', 'bg-slate-700 animate-pulse-slow']].map(([label, color]) => (
            <span key={label} className="flex items-center gap-1.5 text-xs font-mono text-slate-500">
              <span className={`w-2 h-2 rounded-full ${color}`} aria-hidden="true" />
              {label}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {skillGroups.map(group => {
            const accent = colorAccent[group.color] || colorAccent['silver']
            const isSelected = selected === group.category
            return (
              <div
                key={group.category}
                onClick={() => setSelected(isSelected ? null : group.category)}
                className={cn(
                  'group p-6 rounded-2xl border bg-white/4 backdrop-blur-sm cursor-pointer transition-all duration-300',
                  isSelected
                    ? `${accent.border} bg-white/7 shadow-glass`
                    : 'border-white/8 hover:border-white/15 hover:bg-white/6'
                )}
                role="button"
                tabIndex={0}
                aria-expanded={isSelected}
                aria-label={`Toggle ${group.category} skills`}
                onKeyDown={e => e.key === 'Enter' && setSelected(isSelected ? null : group.category)}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className={`w-2 h-2 rounded-full ${accent.dot}`} aria-hidden="true" />
                  <h3 className={cn('font-display text-sm font-bold tracking-wide', accent.heading)}>
                    {group.category}
                  </h3>
                </div>
                <ul className="space-y-2.5" role="list">
                  {group.items.map(item => (
                    <li key={item.name} className="flex items-center justify-between gap-3">
                      <span className="text-sm font-body text-slate-300 leading-snug">{item.name}</span>
                      {item.level && (
                        <span className={cn('flex-shrink-0 w-2 h-2 rounded-full', levelDot[item.level] ?? 'bg-slate-700')} aria-label={item.level} />
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
