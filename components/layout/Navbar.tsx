"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "About", href: "#hero" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("About")

  useEffect(() => {
    const updateNavbar = () => {
      setScrolled(window.scrollY > 20)

      const currentSection = navItems.find((item) => {
        const sectionId = item.href.replace("#", "")
        const element = document.getElementById(sectionId)

        if (!element) return false

        const rect = element.getBoundingClientRect()
        return rect.top <= 140 && rect.bottom >= 140
      })

      if (currentSection) {
        setActiveSection(currentSection.name)
      }
    }

    updateNavbar()

    const timeout = window.setTimeout(updateNavbar, 100)

    window.addEventListener("scroll", updateNavbar, { passive: true })
    window.addEventListener("resize", updateNavbar)
    window.addEventListener("hashchange", updateNavbar)

    return () => {
      window.clearTimeout(timeout)
      window.removeEventListener("scroll", updateNavbar)
      window.removeEventListener("resize", updateNavbar)
      window.removeEventListener("hashchange", updateNavbar)
    }
  }, [])

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener("keydown", handleEscape)

    return () => {
      window.removeEventListener("keydown", handleEscape)
    }
  }, [])

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-[9999] border-b transition-all duration-300",
        scrolled
          ? "border-white/10 bg-midnight-950/85 py-4 shadow-glass backdrop-blur-xl"
          : "border-transparent bg-midnight-950/40 py-5 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a href="#hero" className="group flex items-center" aria-label="Home">
          <img
            src="/GJ.png"
            alt="GJ Logo"
            className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative px-4 py-2 text-sm font-medium transition-colors"
              onClick={() => {
                setActiveSection(item.name)
                setMobileMenuOpen(false)
              }}
            >
              <span
                className={cn(
                  "relative z-10 transition-colors duration-300",
                  activeSection === item.name
                    ? "text-white"
                    : "text-slate-400 hover:text-white"
                )}
              >
                {item.name}
              </span>

              {activeSection === item.name && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute bottom-1 left-4 right-4 h-px bg-aurora-teal"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </a>
          ))}
        </nav>

        <button
          className="rounded-md p-2 text-slate-300 hover:text-white md:hidden"
          onClick={() => setMobileMenuOpen((value) => !value)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute left-0 top-full w-full overflow-hidden border-b border-white/10 bg-midnight-950/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="border-b border-white/5 py-3 text-base font-medium text-slate-300 transition-colors hover:text-aurora-teal"
                  onClick={() => {
                    setActiveSection(item.name)
                    setMobileMenuOpen(false)
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}