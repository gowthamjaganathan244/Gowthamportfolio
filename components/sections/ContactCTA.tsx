"use client"

import { profile as personalInfo } from "@/data/profile"
import { Reveal } from "../ui/Reveal"
import { Mail, Github, Linkedin, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export function ContactCTA() {
  const cleanEmail = personalInfo.contactEmail.replace(/^mailto:/i, "")

  const subject = encodeURIComponent("Collaboration Inquiry - Portfolio")
  const body = encodeURIComponent(
    "Hi Gowtham,\n\nI came across your portfolio and would like to connect.\n\nRegards,"
  )

  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${cleanEmail}&su=${subject}&body=${body}`

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-midnight-deep px-6 py-20 scroll-mt-28 sm:px-10 md:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-section-glow opacity-30" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <Reveal>
          <div className="mb-12">
            <h2 className="mb-4 font-display text-3xl font-bold leading-[1.05] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-5xl">
              Let&apos;s Build <span className="text-gradient-aurora">Something</span>
            </h2>

            <p className="mx-auto max-w-3xl font-body text-sm leading-relaxed text-slate-400 sm:text-base md:text-lg">
              I&apos;m currently open to cloud, automation, application support,
              DevOps, and software opportunities. The fastest way to reach me is
              through email or LinkedIn.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <motion.a
              href={gmailLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group relative mb-12 inline-flex cursor-pointer items-center gap-2 overflow-hidden rounded-full bg-white px-10 py-4 text-lg font-bold text-midnight-950 shadow-xl outline-none transition-all hover:shadow-glow-teal"
              aria-label="Send email to Gowtham"
            >
              <span className="relative z-10 flex items-center gap-2 font-display">
                Say Hello
                <Mail size={20} className="transition-transform group-hover:rotate-12" />
              </span>
            </motion.a>

            <div className="flex w-full max-w-lg flex-wrap items-center justify-center gap-4 border-t border-white/10 pt-8 md:gap-8">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-400">
                <MapPin size={16} className="text-aurora-teal" />
                <span>{personalInfo.location}</span>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-400 transition-all hover:bg-white/10 hover:text-white"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-400 transition-all hover:bg-white/10 hover:text-white"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}