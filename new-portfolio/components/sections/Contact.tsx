"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  Mail,
  Calendar,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { GitHubIcon, LinkedInIcon, XIcon, GoogleScholarIcon } from "@/components/ui/Icons";

const socialLinks = [
  { icon: GitHubIcon, href: "https://github.com/charulp2499/", label: "GitHub" },
  { icon: LinkedInIcon, href: "https://www.linkedin.com/in/charulp2499/", label: "LinkedIn" },
  { icon: XIcon, href: "https://twitter.com/charulp2499", label: "X / Twitter" },
  { icon: GoogleScholarIcon, href: "https://scholar.google.com/citations?user=kWB9bUkAAAAJ&hl=en", label: "Google Scholar" },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background ambient effects */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="ambient-orb ambient-orb-cyan w-[500px] h-[500px] -bottom-60 right-0 animate-pulse-glow" />
      <div className="ambient-orb ambient-orb-purple w-[400px] h-[400px] -top-40 -left-40 animate-pulse-glow" style={{ animationDelay: "2s" }} />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-accent/10 text-accent border border-accent/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-glow" />
            Open to opportunities
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] tracking-tight mb-6">
            Let&apos;s Build Something{" "}
            <span className="text-gradient">Extraordinary</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-text-muted text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Open to research collaborations, ambitious AI opportunities,
            and conversations about building the future of intelligent systems.
            Whether it&apos;s healthcare AI, defense tech, or the next big AI venture —
            let&apos;s connect.
          </p>
        </ScrollReveal>

        {/* CTA buttons */}
        <ScrollReveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="https://calendly.com/charulpatel2499/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-background font-semibold text-sm hover:bg-accent/90 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.3)]"
            >
              <Calendar size={16} />
              Schedule a Call
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>
            <a
              href="mailto:charulpatel2499@gmail.com"
              className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-transparent text-foreground font-semibold text-sm border border-border hover:border-accent/50 hover:text-accent transition-all duration-300"
            >
              <Mail size={16} />
              charulpatel2499@gmail.com
            </a>
          </div>
        </ScrollReveal>

        {/* Location */}
        <ScrollReveal delay={0.4}>
          <div className="flex items-center justify-center gap-2 text-text-muted text-sm mb-8">
            <MapPin size={14} />
            Based in India 🇮🇳
          </div>
        </ScrollReveal>

        {/* Social links */}
        <ScrollReveal delay={0.5}>
          <div className="flex items-center justify-center gap-3">
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
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
