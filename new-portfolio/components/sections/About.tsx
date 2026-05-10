"use client";

import AnimatedCounter from "@/components/ui/AnimatedCounter";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { Award, BookOpen, Briefcase, GraduationCap } from "lucide-react";

const stats = [
  { icon: Briefcase, value: 3, suffix: "+", label: "Years Experience" },
  { icon: BookOpen, value: 5, suffix: "+", label: "Publications" },
  { icon: Award, value: 3, suffix: "", label: "Awards" },
  { icon: GraduationCap, value: 2, suffix: "", label: "IIT Collaborations" },
];

const domains = [
  "Computer Vision",
  "LLMs & VLMs",
  "Generative AI",
  "Healthcare AI",
  "Multimodal AI",
  "Agentic Systems",
  "AI Infrastructure",
  "Research Engineering",
];

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="About"
          title="Engineer. Researcher. Builder."
          description="Bridging cutting-edge AI research with production-grade engineering"
        />

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left column — Bio */}
          <ScrollReveal className="lg:col-span-3 space-y-6">
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p className="text-foreground text-lg font-medium">
                I&apos;m Charul Chodvadiya — an AI Engineer at Radin Health, building
                intelligent systems that operate at the intersection of applied
                research and real-world impact.
              </p>
              <p>
                My work spans large language models, computer vision, generative
                AI, and scalable AI infrastructure. I&apos;ve published at top-tier
                venues including <span className="text-accent">IEEE ISBI</span>,{" "}
                <span className="text-accent">IEEE INOCON</span>, and{" "}
                <span className="text-accent">AIxPAC</span> — developing novel
                approaches in medical image segmentation, thermal imaging, and
                distributed learning.
              </p>
              <p>
                With research collaborations at{" "}
                <span className="text-foreground font-medium">IIT Bombay</span>{" "}
                and{" "}
                <span className="text-foreground font-medium">
                  IIT Hyderabad
                </span>
                , and a Gold Medal in MTech AI, I bring both research depth and
                engineering rigor to every system I build. Currently focused on
                LLM-powered agents, vision-language models, and AI-driven
                healthcare solutions.
              </p>
            </div>

            {/* Education highlights */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <div className="flex-1 p-4 rounded-xl bg-surface-2 border border-border">
                <div className="flex items-center gap-2 mb-1">
                  <GraduationCap size={16} className="text-accent" />
                  <span className="text-sm font-semibold text-foreground">
                    MTech — Artificial Intelligence
                  </span>
                </div>
                <p className="text-xs text-text-muted">
                  PDEU · CGPA 8.94/10 ·{" "}
                  <span className="text-amber-400 font-semibold">
                    Gold Medalist
                  </span>
                </p>
              </div>
              <div className="flex-1 p-4 rounded-xl bg-surface-2 border border-border">
                <div className="flex items-center gap-2 mb-1">
                  <GraduationCap size={16} className="text-accent" />
                  <span className="text-sm font-semibold text-foreground">
                    BE — Computer Engineering
                  </span>
                </div>
                <p className="text-xs text-text-muted">
                  GTU · CGPA 7.95/10 · First Class with Distinction
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right column — Stats & Domains */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats grid */}
            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-2 gap-3">
                {stats.map(({ icon: Icon, value, suffix, label }, i) => (
                  <div
                    key={label}
                    className="p-4 rounded-xl bg-surface-2 border border-border hover:border-accent/20 transition-all duration-300 group"
                  >
                    <Icon
                      size={18}
                      className="text-accent mb-2 group-hover:scale-110 transition-transform"
                    />
                    <div className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)]">
                      <AnimatedCounter
                        end={value}
                        suffix={suffix}
                        duration={1500 + i * 200}
                      />
                    </div>
                    <p className="text-xs text-text-muted mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Domain expertise */}
            <ScrollReveal delay={0.3}>
              <div className="p-5 rounded-xl bg-surface-2 border border-border">
                <h3 className="text-sm font-semibold text-foreground mb-3">
                  Domain Expertise
                </h3>
                <div className="flex flex-wrap gap-2">
                  {domains.map((domain) => (
                    <span
                      key={domain}
                      className="px-3 py-1.5 text-xs font-medium rounded-lg bg-surface-3 text-text-secondary border border-border/50 hover:border-accent/30 hover:text-accent transition-all duration-300 cursor-default"
                    >
                      {domain}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
