'use client'

import { ExternalLink, Github, Activity, ShieldCheck, Cpu, Smartphone, Layout, Zap, Cloud, Code2, BarChart3 } from 'lucide-react'
import { featuredProjects, beProjects, type Project } from '@/data/projects'
import { cn } from '@/lib/utils'
import { Reveal } from '../ui/Reveal'

const categoryColors: Record<string, string> = {
  cloud: 'text-aurora-teal   border-aurora-teal/30   bg-aurora-teal/10',
  automation: 'text-aurora-violet border-aurora-violet/30 bg-aurora-violet/10',
  fullstack: 'text-aurora-cyan   border-aurora-cyan/30   bg-aurora-cyan/10',
  backend: 'text-aurora-indigo border-aurora-indigo/30 bg-aurora-indigo/10',
  iot: 'text-slate-400     border-white/10         bg-white/5',
  embedded: 'text-slate-400     border-white/10         bg-white/5',
  mobile: 'text-slate-400     border-white/10         bg-white/5',
  frontend: 'text-slate-400     border-white/10         bg-white/5',
}

const categoryIcons: Record<string, any> = {
  cloud: Cloud,
  automation: Zap,
  fullstack: Code2,
  backend: BarChart3,
  iot: Cpu,
  embedded: ShieldCheck,
  mobile: Smartphone,
  frontend: Layout,
}

function FeaturedProjectCard({ project }: { project: Project }) {
  const Icon = categoryIcons[project.category] || Code2

  return (
    <article className="group relative flex flex-col h-full rounded-2xl border border-white/8 bg-white/4 backdrop-blur-sm overflow-hidden hover:border-white/15 hover:shadow-glass-lg transition-all duration-400">
      {/* Top gradient strip */}
      <div className={cn(
        'h-1.5 w-full bg-gradient-to-r',
        project.gradient
      )} aria-hidden="true" />

      <div className="flex flex-col flex-1 p-6 md:p-8">
        {/* Badges row */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className={cn('inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider border', categoryColors[project.category])}>
            <Icon size={12} />
            {project.categoryLabel}
          </span>
          {project.badge && (
            <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-white/10 text-white border border-white/20">
              {project.badge}
            </span>
          )}
          <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-white/5 text-slate-400 border border-white/10">
            {project.statusLabel}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-aurora-teal transition-colors leading-tight">
          {project.title}
        </h3>

        <p className="font-body text-sm sm:text-base leading-relaxed text-slate-300 mb-6">
          {project.description}
        </p>

        {/* Outcome Box */}
        {project.outcome && (
          <div className="mb-6 p-4 rounded-xl bg-aurora-teal/5 border border-aurora-teal/10">
            <h4 className="text-[10px] font-mono font-bold text-aurora-teal uppercase tracking-widest mb-2">Outcome & Impact</h4>
            <p className="text-xs font-body text-slate-300 leading-relaxed">
              {project.outcome}
            </p>
          </div>
        )}

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1.5 mb-8">
          {project.tags.map(tag => (
            <span key={tag} className="px-2 py-0.5 text-[10px] font-mono text-slate-500 border border-white/8 rounded bg-white/2">
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        {(project.githubUrl || project.liveUrl) && (
          <div className="flex gap-4 mt-auto pt-5 border-t border-white/8">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors"
              >
                <Github size={14} /> GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium text-aurora-teal hover:text-aurora-cyan transition-colors"
              >
                <ExternalLink size={14} /> Live Build
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}

function BEProjectCard({ project }: { project: Project }) {
  const Icon = categoryIcons[project.category] || Code2

  return (
    <article className="group p-5 rounded-xl border border-white/8 bg-white/2 hover:border-white/15 transition-all duration-300 flex flex-col h-full">
      <div className="flex items-center justify-between mb-3">
        <span className="inline-flex items-center gap-1 text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest">
          <Icon size={10} className="text-slate-600" />
          {project.categoryLabel}
        </span>
        <span className="text-[9px] font-mono text-slate-600 uppercase">{project.statusLabel}</span>
      </div>
      <h4 className="font-display text-base sm:text-lg font-semibold text-white mb-2 group-hover:text-aurora-teal transition-colors leading-snug">
        {project.title}
      </h4>
      <p className="font-body text-sm leading-relaxed text-slate-400 mb-4 flex-grow">
        {project.shortDescription}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {project.tags.slice(0, 5).map(tag => (
          <span key={tag} className="text-[9px] font-mono text-slate-600 border border-white/5 px-1.5 py-0.5 rounded">
            {tag}
          </span>
        ))}
      </div>
    </article>
  )
}

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-28 md:py-36 px-6 sm:px-10 md:px-16 bg-midnight-950 scroll-mt-28 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-aurora-teal/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-aurora-violet/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <Reveal>
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-aurora-teal/60" />
              <span className="text-xs font-mono font-medium text-aurora-teal tracking-widest uppercase">Projects</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-4 leading-[1.05]">
              Selected work<br />
              <span className="text-aurora-teal/90">that proves the path.</span>
            </h2>
            <p className="font-body text-sm sm:text-base md:text-lg text-slate-400 max-w-3xl leading-relaxed">
              Projects that connect cloud certification, automation experience, full-stack development, and earlier engineering foundations.
            </p>
          </div>
        </Reveal>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-28">
          {featuredProjects.map((project, idx) => (
            <Reveal key={project.id} delay={idx * 0.1}>
              <FeaturedProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        {/* B.E. Projects Section */}
        <div className="relative pt-20 border-t border-white/5">
          <Reveal>
            <div className="mb-12">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
                B.E. Engineering Projects
              </h3>
              <p className="font-body text-slate-400 text-sm max-w-2xl leading-relaxed">
                Earlier hands-on builds from my Bachelor of Engineering journey across IoT, embedded systems, mobile apps, and frontend foundations.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {beProjects.map((project, idx) => (
              <Reveal key={project.id} delay={idx * 0.05}>
                <BEProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
