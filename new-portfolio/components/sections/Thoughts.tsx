"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import GlowCard from "@/components/ui/GlowCard";
import { ExternalLink, BookOpen } from "lucide-react";
import { LinkedInIcon } from "@/components/ui/Icons";

const thoughts = [
  {
    title: "Scaling AI Systems in Healthcare",
    description:
      "Perspectives on deploying VLMs and LLMs in clinical workflows — challenges, architectures, and lessons learned from building production medical AI.",
    category: "Healthcare AI",
    platform: "LinkedIn",
    icon: LinkedInIcon,
    url: "https://www.linkedin.com/in/charulp2499/",
    color: "#0077b5",
  },
  {
    title: "The Future of Multimodal Intelligence",
    description:
      "Exploring how vision-language models are converging with agentic systems — and why multimodal reasoning is the next frontier in AI engineering.",
    category: "AI Research",
    platform: "Medium",
    icon: BookOpen,
    url: "https://medium.com/@charulp2499",
    color: "#00d4ff",
  },
  {
    title: "From Research to Production",
    description:
      "Bridging the gap between ML research papers and production-grade AI systems. Practical insights on model optimization, deployment, and scalable inference.",
    category: "Engineering",
    platform: "LinkedIn",
    icon: LinkedInIcon,
    url: "https://www.linkedin.com/in/charulp2499/",
    color: "#0077b5",
  },
  {
    title: "Computer Vision at the Edge",
    description:
      "Building efficient computer vision systems — from thermal imaging for defense applications to real-time depth estimation. Optimizing for latency and accuracy.",
    category: "Computer Vision",
    platform: "Medium",
    icon: BookOpen,
    url: "https://medium.com/@charulp2499",
    color: "#00d4ff",
  },
];

export default function Thoughts() {
  return (
    <section className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Perspectives"
          title="Thoughts & Insights"
          description="Technical deep-dives, research breakdowns, and AI industry perspectives"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {thoughts.map((thought, i) => (
            <ScrollReveal key={thought.title} delay={i * 0.08}>
              <GlowCard
                className="h-full"
                glowColor={
                  thought.color === "#0077b5"
                    ? "0, 119, 181"
                    : "0, 212, 255"
                }
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-accent/10 text-accent">
                      {thought.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-text-muted">
                      <thought.icon size={14} />
                      {thought.platform}
                    </div>
                  </div>

                  <h3 className="text-base font-semibold text-foreground font-[family-name:var(--font-space-grotesk)] mb-2 leading-snug">
                    {thought.title}
                  </h3>

                  <p className="text-sm text-text-muted leading-relaxed mb-4 flex-1">
                    {thought.description}
                  </p>

                  <a
                    href={thought.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-text-muted hover:text-accent transition-colors"
                  >
                    Read more
                    <ExternalLink size={12} />
                  </a>
                </div>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
