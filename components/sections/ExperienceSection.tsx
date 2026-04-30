'use client'

import { experience } from '@/data/experience'
import { cn } from '@/lib/utils'

const typeColors: Record<string, string> = {
  'full-time':  'text-aurora-teal   bg-aurora-teal/10   border-aurora-teal/30',
  'internship': 'text-aurora-cyan   bg-aurora-cyan/10   border-aurora-cyan/30',
  'part-time':  'text-aurora-violet bg-aurora-violet/10 border-aurora-violet/30',
  'contract':   'text-aurora-indigo bg-aurora-indigo/10 border-aurora-indigo/30',
}

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-28 md:py-36 px-6 sm:px-10 md:px-16 bg-midnight-950 scroll-mt-28">
      <div className="absolute inset-0" aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 80% 50%, rgba(167,139,250,0.05) 0%, transparent 60%)' }} />

      <div className="relative mx-auto max-w-4xl">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-8 bg-aurora-teal/60" />
          <span className="text-xs font-mono font-medium text-aurora-teal tracking-widest uppercase">Experience</span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-12 leading-[1.05]">
          Where I&apos;ve been<br />
          <span className="text-aurora-teal/90">building things.</span>
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-aurora-teal/40 via-aurora-violet/30 to-transparent ml-5 hidden sm:block" aria-hidden="true" />

          <div className="space-y-10">
            {experience.map((item, idx) => (
              <div key={item.id} className="relative sm:pl-16">
                {/* Timeline dot */}
                <div className="absolute left-0 top-6 hidden sm:flex items-center justify-center w-11 h-11 rounded-full border border-white/10 bg-midnight-900/80 backdrop-blur-sm">
                  <span className="text-xs font-mono font-bold text-aurora-teal">{String(idx + 1).padStart(2, '0')}</span>
                </div>

                {/* Card */}
                <div className="group p-6 md:p-8 rounded-2xl border border-white/8 bg-white/4 backdrop-blur-sm hover:border-aurora-teal/20 hover:bg-white/6 transition-all duration-300 shadow-glass">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-aurora-teal/90 transition-colors leading-tight">
                        {item.role}
                      </h3>
                      <p className="font-body text-sm text-slate-400 mt-0.5">{item.company} · {item.location}</p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className={cn(
                        'px-2.5 py-1 rounded-full text-xs font-mono font-medium border capitalize',
                        typeColors[item.type] ?? 'text-slate-400 bg-white/5 border-white/15'
                      )}>
                        {item.type}
                      </span>
                      <span className="text-xs font-mono text-slate-500">{item.period}</span>
                    </div>
                  </div>

                  <p className="font-body text-sm text-slate-400 leading-relaxed mb-5">{item.summary}</p>

                  {/* Highlights */}
                  <ul className="space-y-2.5 mb-6" role="list">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex gap-3 text-sm font-body text-slate-300">
                        <span className="flex-shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-aurora-teal/70" aria-hidden="true" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.tools.map(tool => (
                      <span key={tool} className="px-2 py-0.5 rounded text-xs font-mono text-slate-500 border border-white/8 bg-white/4">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
