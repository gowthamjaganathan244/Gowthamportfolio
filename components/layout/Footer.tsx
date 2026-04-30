import { profile as personalInfo } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-10 text-center border-t border-white/8 relative z-10 bg-midnight-deep overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-sm text-slate-400 font-medium mb-3">
          Built by <span className="text-slate-200">Gowtham Jaganathan</span> &copy; {year}
        </p>
        
        <p className="text-xs text-slate-500 font-mono tracking-wide">
          Designed with <span className="text-aurora-teal">Next.js</span> & <span className="text-aurora-violet">React Three Fiber</span>
        </p>
      </div>
    </footer>
  );
}
