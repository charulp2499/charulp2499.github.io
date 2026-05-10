"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  Lightbulb,
  Target,
  Users,
  Rocket,
  Brain,
  Compass,
  MessageSquare,
  Zap,
  Shield,
  HeartPulse,
  Factory,
} from "lucide-react";

const leadershipTraits = [
  { icon: Brain, label: "Technical Leadership", description: "Driving AI architecture decisions across teams" },
  { icon: Lightbulb, label: "Innovation Strategy", description: "Novel approaches to complex AI challenges" },
  { icon: Target, label: "Product Thinking", description: "Building AI with user and business impact" },
  { icon: Rocket, label: "Startup Mindset", description: "Move fast, iterate, ship production systems" },
  { icon: Compass, label: "System Design", description: "Architecting scalable AI infrastructure" },
  { icon: Users, label: "Cross-functional Leadership", description: "Bridging research, engineering, and product" },
  { icon: MessageSquare, label: "Research Communication", description: "Publishing and presenting at top venues" },
  { icon: Zap, label: "High Ownership", description: "End-to-end ownership from idea to deployment" },
];

const ventureAreas = [
  { icon: HeartPulse, label: "Healthcare AI", description: "Intelligent diagnostic and clinical systems" },
  { icon: Shield, label: "Defense AI", description: "Computer vision for national security" },
  { icon: Factory, label: "Industry AI", description: "Scalable AI automation for enterprise" },
];

export default function Leadership() {
  return (
    <section className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Beyond Engineering"
          title="Builder's Mindset"
          description="Engineering depth × founder thinking × research rigor"
        />

        {/* Leadership traits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {leadershipTraits.map(({ icon: Icon, label, description }, i) => (
            <ScrollReveal key={label} delay={i * 0.06}>
              <div className="group p-5 rounded-2xl bg-surface-2 border border-border hover:border-accent/20 transition-all duration-400 h-full">
                <Icon
                  size={20}
                  className="text-accent mb-3 group-hover:scale-110 transition-transform duration-300"
                />
                <h3 className="text-sm font-semibold text-foreground mb-1">
                  {label}
                </h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  {description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Future ventures */}
        <ScrollReveal>
          <div className="p-8 rounded-2xl bg-gradient-to-br from-surface-2 to-surface-3 border border-border">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold font-[family-name:var(--font-space-grotesk)] text-foreground mb-2">
                Building Toward
              </h3>
              <p className="text-sm text-text-muted max-w-lg mx-auto">
                Exploring AI-driven ventures where deep technology meets real-world impact
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {ventureAreas.map(({ icon: Icon, label, description }) => (
                <div
                  key={label}
                  className="p-5 rounded-xl bg-surface/50 border border-border/50 text-center hover:border-accent/20 transition-all duration-300"
                >
                  <Icon size={24} className="text-accent mx-auto mb-3" />
                  <h4 className="text-sm font-semibold text-foreground mb-1">
                    {label}
                  </h4>
                  <p className="text-xs text-text-muted">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
