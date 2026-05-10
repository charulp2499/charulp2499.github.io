"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { GitHubIcon, LinkedInIcon, XIcon, GoogleScholarIcon } from "@/components/ui/Icons";
import dynamic from "next/dynamic";

const ParticleField = dynamic(() => import("@/components/ui/ParticleField"), {
  ssr: false,
});

const expertiseTags = [
  "LLMs",
  "Computer Vision",
  "Generative AI",
  "Multimodal AI",
  "AI Infrastructure",
  "Healthcare AI",
  "Agentic AI",
  "Research Engineering",
];

const socialLinks = [
  { icon: GitHubIcon, href: "https://github.com/charulp2499/", label: "GitHub" },
  { icon: LinkedInIcon, href: "https://www.linkedin.com/in/charulp2499/", label: "LinkedIn" },
  { icon: GoogleScholarIcon, href: "https://scholar.google.com/citations?user=kWB9bUkAAAAJ&hl=en", label: "Google Scholar" },
  { icon: XIcon, href: "https://twitter.com/charulp2499", label: "X / Twitter" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg" />
      <ParticleField />

      {/* Ambient gradient orbs */}
      <div className="ambient-orb ambient-orb-cyan w-[600px] h-[600px] -top-40 -right-40 animate-pulse-glow" />
      <div className="ambient-orb ambient-orb-purple w-[500px] h-[500px] -bottom-40 -left-40 animate-pulse-glow" style={{ animationDelay: "2s" }} />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-2/80 backdrop-blur-sm border border-border mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-sm text-text-secondary">
            AI Engineer · Researcher · Builder
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-space-grotesk)] tracking-tight leading-[1.1] mb-6"
        >
          Researching &{" "}
          <span className="text-gradient">Engineering</span>
          <br />
          the Future of AI
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-base md:text-lg text-text-muted max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Building intelligent systems at the intersection of applied research
          and production engineering — from computer vision to LLMs,
          generative AI to scalable infrastructure.
        </motion.p>

        {/* Expertise tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-2 mb-10 max-w-2xl mx-auto"
        >
          {expertiseTags.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.9 + i * 0.05 }}
              className="px-3 py-1 text-xs font-medium rounded-md bg-surface-3/80 text-text-secondary border border-border/50 hover:border-accent/30 hover:text-accent transition-all duration-300"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-xl bg-accent text-background font-semibold text-sm hover:bg-accent/90 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.3)]"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            className="px-8 py-3.5 rounded-xl bg-transparent text-foreground font-semibold text-sm border border-border hover:border-accent/50 hover:text-accent transition-all duration-300"
          >
            Download CV
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="flex items-center justify-center gap-4"
        >
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-3 rounded-xl bg-surface-2/50 text-text-muted border border-border/50 hover:text-accent hover:border-accent/30 hover:bg-surface-2 transition-all duration-300"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a href="#about" aria-label="Scroll down">
          <ArrowDown
            size={20}
            className="text-text-muted animate-scroll-indicator"
          />
        </a>
      </motion.div>
    </section>
  );
}
