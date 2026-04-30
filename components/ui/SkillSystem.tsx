import { skillGroups, type SkillGroup } from "@/data/skills";
import { GlassPanel } from "./GlassPanel";
import { Reveal } from "./Reveal";
import {
  Cloud,
  Layout,
  Server,
  Settings,
  Database,
  Terminal,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  "Cloud & AWS": Cloud,
  "Frontend & UI": Layout,
  "Backend & APIs": Server,
  "Automation & Microsoft 365": Settings,
  "Data & Tools": Database,
  "Operating Systems": Terminal,
};

const levelColors: Record<string, string> = {
  core: "bg-aurora-teal shadow-glow-teal",
  proficient: "bg-aurora-cyan shadow-glow-cyan",
  familiar: "bg-slate-500",
  learning: "bg-slate-700 animate-pulse-slow",
};

export function SkillSystem() {
  return (
    <section
      id="skills"
      className="relative bg-midnight-950 px-6 py-28 sm:px-10 md:px-16 md:py-36"
    >
      <div className="pointer-events-none absolute inset-0 bg-section-glow opacity-40" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <Reveal>
          <div className="mb-16 text-center md:text-left">
            <div className="mb-3 flex items-center justify-center gap-3 md:justify-start">
              <div className="h-px w-8 bg-aurora-cyan" />
              <span className="font-mono text-xs font-medium uppercase tracking-widest text-aurora-cyan">
                Expertise
              </span>
            </div>

            <h2 className="font-display text-4xl font-bold text-white md:text-5xl">
              Technical <span className="text-aurora-cyan">Arsenal</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = icons[group.category] || Terminal;

            return (
              <Reveal key={group.category} delay={index * 0.1}>
                <GlassPanel
                  glowHover
                  className="group flex h-full flex-col border-t-2 border-t-transparent p-8 transition-all hover:border-t-aurora-cyan"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-3 transition-colors group-hover:border-aurora-cyan/30 group-hover:bg-aurora-cyan/10">
                      <Icon size={24} className="text-aurora-cyan" />
                    </div>

                    <h3 className="font-display text-xl font-bold text-white">
                      {group.category}
                    </h3>
                  </div>

                  <ul className="mt-2 flex-grow space-y-3">
                    {group.items.map((item) => (
                      <li key={item.name} className="flex items-center justify-between gap-3">
                        <div className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-aurora-cyan/50 transition-colors group-hover:bg-aurora-cyan" />
                          <span className="font-body text-sm leading-relaxed text-slate-300">
                            {item.name}
                          </span>
                        </div>
                        {item.level && (
                          <span 
                            className={cn("h-1.5 w-1.5 shrink-0 rounded-full", levelColors[item.level])} 
                            title={item.level}
                          />
                        )}
                      </li>
                    ))}
                  </ul>
                </GlassPanel>
              </Reveal>
            );
          })}
        </div>
      </div>

      <hr className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
