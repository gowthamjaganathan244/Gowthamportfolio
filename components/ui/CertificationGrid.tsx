import { certifications } from "@/data/certifications";
import { GlassPanel } from "./GlassPanel";
import { Reveal } from "./Reveal";
import { Award, CheckCircle } from "lucide-react";

export function CertificationGrid() {
  const importantCerts = certifications.filter(c => c.important);
  const regularCerts = certifications.filter(c => !c.important);

  return (
    <section id="certifications" className="py-28 md:py-36 px-6 sm:px-10 md:px-16 relative bg-midnight-950">
      <div className="absolute inset-0 bg-section-glow opacity-30 pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <Reveal>
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-aurora-indigo"></div>
              <span className="text-xs font-mono font-medium tracking-widest text-aurora-indigo uppercase">Achievements</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Certifications & <span className="text-aurora-indigo">Training</span>
            </h2>
          </div>
        </Reveal>

        {/* Highlighted Certs */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {importantCerts.map((cert, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <GlassPanel glowHover className="p-8 flex items-start gap-5 border-l-4 border-l-aurora-indigo hover:border-aurora-indigo/50">
                <div className="p-3 bg-aurora-indigo/10 rounded-xl shrink-0 border border-aurora-indigo/20">
                  <Award size={24} className="text-aurora-indigo" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1 font-display leading-tight">{cert.name}</h3>
                  <p className="text-sm text-aurora-indigo/80 font-medium font-body">{cert.issuer}</p>
                </div>
              </GlassPanel>
            </Reveal>
          ))}
        </div>

        {/* Regular Certs */}
        <Reveal>
          <GlassPanel className="p-8">
            <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-6 font-display">Additional Learning</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularCerts.map((cert, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <CheckCircle size={18} className="text-slate-500 shrink-0 mt-0.5 group-hover:text-aurora-indigo transition-colors" />
                  <div>
                    <p className="text-sm text-slate-200 font-medium leading-tight mb-1 group-hover:text-white transition-colors">{cert.name}</p>
                    <p className="text-xs text-slate-500">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>
        </Reveal>
      </div>
      <hr className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
