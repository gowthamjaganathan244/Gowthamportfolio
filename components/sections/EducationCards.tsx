import { education } from "@/data/education";
import { GlassPanel } from "../ui/GlassPanel";
import { Reveal } from "../ui/Reveal";
import { GraduationCap, Award } from "lucide-react";

export function EducationCards() {
  return (
    <section id="education" className="py-28 md:py-36 px-6 sm:px-10 md:px-16 relative bg-midnight-950 scroll-mt-28">
      <div className="max-w-5xl mx-auto relative z-10">
        <Reveal>
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-aurora-teal"></div>
              <span className="text-xs font-mono font-medium tracking-widest text-aurora-teal uppercase">Education</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-display font-bold text-white mb-4 leading-[1.05]">
              Academic <span className="text-aurora-teal">Background</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <GlassPanel glowHover className="p-8 h-full flex flex-col group hover:border-aurora-teal/30 transition-all">
                <div className="w-14 h-14 rounded-xl bg-aurora-teal/10 border border-aurora-teal/20 flex items-center justify-center mb-6 shadow-inner group-hover:bg-aurora-teal/20 transition-colors">
                  <GraduationCap className="text-aurora-teal w-7 h-7" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 font-display leading-tight">{edu.institution}</h3>
                <h4 className="text-aurora-teal font-medium mb-6 font-body text-sm sm:text-base">{edu.degree}</h4>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm text-slate-400 mt-auto gap-3">
                  <span className="font-mono text-xs uppercase tracking-wide bg-white/5 px-3 py-1 rounded-full border border-white/10 w-fit">{edu.period}</span>
                  {edu.details && (
                    <span className="flex items-center gap-1.5 text-aurora-teal/90 font-medium bg-aurora-teal/10 px-3 py-1 rounded-full border border-aurora-teal/20 w-fit">
                      <Award size={14} /> {edu.details}
                    </span>
                  )}
                </div>
              </GlassPanel>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
