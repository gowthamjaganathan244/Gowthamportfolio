"use client";

import { motion } from "framer-motion";
import { profile as personalInfo } from "@/data/profile";
const { trustBadges } = personalInfo;
import { AuroraBackground } from "../ui/AuroraBackground";
import { MagneticButton } from "../ui/MagneticButton";
import { ArrowRight, Mail, Download, CheckCircle2 } from "lucide-react";
import { slideUp, staggerContainer } from "@/lib/motion";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[600px] md:min-h-[100svh] flex flex-col justify-center overflow-hidden bg-midnight-950" aria-label="Hero">
      <AuroraBackground />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start pt-20"
        >
          {/* Availability Badge */}
          <motion.div variants={slideUp} className="mb-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-aurora-teal/10 border border-aurora-teal/20 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-aurora-teal opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-aurora-teal"></span>
            </span>
            <span className="text-xs font-medium text-aurora-teal uppercase tracking-wide">
              Open to new roles
            </span>
          </motion.div>

          <motion.h1
            variants={slideUp}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight mb-2 text-white"
          >
            {personalInfo.name.split(' ')[0]}<br />
            {personalInfo.name.split(' ')[1]}
          </motion.h1>

          <motion.h2
            variants={slideUp}
            className="text-2xl sm:text-3xl md:text-4xl font-display font-semibold text-aurora-teal mb-6 max-w-2xl text-glow-teal"
          >
            {personalInfo.title}
          </motion.h2>

          <motion.p
            variants={slideUp}
            className="text-base sm:text-lg text-slate-300 max-w-xl mb-8 leading-relaxed font-body"
          >
            {personalInfo.heroStatement}
          </motion.p>

          {/* Specialty Pills */}
          <motion.div variants={slideUp} className="flex flex-wrap gap-2 mb-10">
            {["AWS Cloud", "Workflow Automation", "Secure Systems", "React Development"].map((skill, i) => (
              <span key={i} className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-slate-300 backdrop-blur-sm">
                {skill}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={slideUp} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <MagneticButton
              variant="primary"
              className="w-full sm:w-auto bg-white text-midnight-950 hover:bg-slate-200 shadow-glow-teal"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Projects <ArrowRight size={18} />
            </MagneticButton>
            <MagneticButton
              variant="outline"
              className="w-full sm:w-auto border-white/20 text-white hover:bg-white/5"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contact Me <Mail size={18} />
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Hint */}
      <motion.div
        animate={{ y: [0, 8, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute bottom-8 left-6 sm:left-12 md:left-16 lg:left-24 xl:left-32 z-10 flex items-center gap-3"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-aurora-teal to-transparent" />
        <span className="text-xs tracking-[0.2em] text-slate-500 uppercase font-mono [writing-mode:vertical-lr] rotate-180">Scroll</span>
      </motion.div>
    </section>
  );
}
