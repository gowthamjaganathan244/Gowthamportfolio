'use client'

import { BadgeCheck, Clock, BookOpen } from 'lucide-react'
import { certifications } from '@/data/certifications'
import { cn } from '@/lib/utils'

const statusConfig = {
  active:              { label: 'Active',            icon: BadgeCheck, color: 'text-aurora-teal   bg-aurora-teal/10   border-aurora-teal/30' },
  'Credential earned': { label: 'Credential Earned', icon: BadgeCheck, color: 'text-aurora-teal   bg-aurora-teal/10   border-aurora-teal/30' },
  'in-progress':       { label: 'In Progress',      icon: Clock,      color: 'text-amber-400    bg-amber-400/10    border-amber-400/30' },
  planned:             { label: 'Planned',           icon: BookOpen,   color: 'text-slate-400    bg-white/5         border-white/15' },
  completed:           { label: 'Completed',         icon: BadgeCheck, color: 'text-slate-400    bg-white/5         border-white/15' },
}

const levelLabel: Record<string, string> = {
  foundational: 'Foundational',
  associate:    'Associate',
  professional: 'Professional',
  specialty:    'Specialty',
}

export function CertificationsSection() {
  const featured  = certifications.filter(c => c.type === 'featured')
  const secondary = certifications.filter(c => c.type === 'secondary')

  return (
    <section id="certifications" className="relative py-28 md:py-36 px-6 sm:px-10 md:px-16 bg-midnight-950 scroll-mt-28">
      <div className="absolute inset-0" aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse 55% 40% at 75% 20%, rgba(103,232,249,0.05) 0%, transparent 50%)' }} />

      <div className="relative mx-auto max-w-5xl">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-8 bg-aurora-teal/60" />
          <span className="text-xs font-mono font-medium text-aurora-teal tracking-widest uppercase">Certifications</span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-12 leading-[1.05]">
          Validated skills,<br />
          <span className="text-aurora-teal/90">recognised credentials.</span>
        </h2>

        {/* Featured certs */}
        <div className="mb-16">
          <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-6">Featured Certifications</p>
          <div className="grid gap-6 sm:grid-cols-2">
            {featured.map(cert => {
              const status = statusConfig[cert.status as keyof typeof statusConfig] || statusConfig['active']
              const StatusIcon = status.icon
              return (
                <div
                  key={cert.id}
                  className="group relative p-6 md:p-8 rounded-2xl border border-white/10 bg-white/4 backdrop-blur-sm hover:border-aurora-teal/25 hover:shadow-glass transition-all duration-300"
                >
                  <div className="absolute inset-0 rounded-2xl bg-aurora-teal/0 group-hover:bg-aurora-teal/3 transition-all duration-300 pointer-events-none" />

                  <div className="flex items-start justify-between mb-4">
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wide">
                      {cert.issuer}
                    </span>
                    <span className={cn(
                      'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold border',
                      status.color
                    )}>
                      <StatusIcon size={12} />
                      {status.label}
                    </span>
                  </div>

                  <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-aurora-teal transition-colors leading-tight">
                    {cert.name}
                  </h3>

                  <p className="text-xs font-mono text-slate-500 mb-4">
                    {cert.code} · {levelLabel[cert.level] || cert.level}
                  </p>

                  <p className="text-sm font-body text-slate-400 leading-relaxed mb-6">
                    {cert.description}
                  </p>

                  {cert.date && (
                    <div className="pt-4 border-t border-white/8 text-xs font-mono text-slate-500 font-medium">
                      {cert.date}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Additional Learning */}
        <div>
          <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-6">Additional Learning & Foundations</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {secondary.map(cert => (
              <div
                key={cert.id}
                className="flex flex-col p-4 rounded-xl border border-white/8 bg-white/3 backdrop-blur-sm hover:border-white/15 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wide truncate pr-2">
                    {cert.issuer}
                  </span>
                  <BadgeCheck size={12} className="text-slate-600" />
                </div>
                <h4 className="text-sm font-display font-semibold text-white mb-1 leading-tight">{cert.name}</h4>
                <p className="text-[10px] font-mono text-slate-500">{cert.level}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

