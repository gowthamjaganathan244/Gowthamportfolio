import { experience } from "@/data/experience";
import { GlassPanel } from "./GlassPanel";
import { Reveal } from "./Reveal";
import { Briefcase } from "lucide-react";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-28 md:py-36 px-6 sm:px-10 md:px-16 relative bg-midnight-950">
      <div className="max-w-4xl mx-auto relative z-10">
        <Reveal>
          <div className="mb-20 text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="text-xs font-mono font-medium tracking-widest text-aurora-violet uppercase">Career</span>
              <div className="h-px w-8 bg-aurora-violet"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Professional <span className="text-aurora-violet">Journey</span>
            </h2>
          </div>
        </Reveal>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-gradient-to-b before:from-transparent before:via-white/15 before:to-transparent">
          {experience.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <Reveal key={index} delay={0.1}>
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  
                  {/* Timeline Dot */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-midnight-950 bg-aurora-violet shadow-glow-violet shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <Briefcase size={14} className="text-midnight-950" />
                  </div>
                  
                  <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] ${isEven ? 'md:pr-8' : 'md:pl-8'} py-2`}>
                    <GlassPanel glowHover className="p-8 group-hover:border-aurora-violet/30 transition-colors">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                        <h3 className="font-display font-bold text-xl text-white">{item.company}</h3>
                        <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 shrink-0">
                          {item.period}
                        </span>
                      </div>
                      
                      <h4 className="text-aurora-violet font-medium mb-6">{item.role}</h4>
                      
                      <ul className="space-y-3 mb-6">
                        {item.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="text-sm text-slate-300 flex items-start">
                            <span className="text-aurora-violet/60 mr-3 mt-1 shrink-0">▹</span>
                            <span className="leading-relaxed font-body">{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                        {item.technologies.map(tech => (
                          <span key={tech} className="text-[11px] font-mono font-medium text-slate-400 uppercase bg-white/5 px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </GlassPanel>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
      <hr className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
