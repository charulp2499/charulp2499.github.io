"use client";

import { experiences } from "@/lib/data/experience";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { Building2, FlaskConical, GraduationCap } from "lucide-react";

const typeConfig = {
  industry: { icon: Building2, color: "text-accent", bg: "bg-accent/10", border: "border-accent/20" },
  research: { icon: FlaskConical, color: "text-purple-400", bg: "bg-purple-400/10", border: "border-purple-400/20" },
  academic: { icon: GraduationCap, color: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/20" },
};

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading
          label="Experience"
          title="Building Across Research & Industry"
          description="From top IIT research labs to production AI systems"
        />

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-border to-transparent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => {
              const config = typeConfig[exp.type];
              const Icon = config.icon;

              return (
                <ScrollReveal key={exp.id} delay={i * 0.1}>
                  <div className="flex gap-6 group">
                    {/* Timeline dot */}
                    <div className="hidden md:flex flex-col items-center pt-1">
                      <div
                        className={`w-10 h-10 rounded-full ${config.bg} border ${config.border} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon size={16} className={config.color} />
                      </div>
                    </div>

                    {/* Content card */}
                    <div className="flex-1 p-6 rounded-2xl bg-surface-2 border border-border hover:border-border-hover transition-all duration-400 group-hover:translate-x-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                        <div>
                          <h3 className="text-lg font-semibold text-foreground font-[family-name:var(--font-space-grotesk)]">
                            {exp.role}
                          </h3>
                          <p className={`text-sm font-medium ${config.color}`}>
                            {exp.company}
                            {exp.companyDetail && (
                              <span className="text-text-muted font-normal">
                                {" "}
                                — {exp.companyDetail}
                              </span>
                            )}
                          </p>
                        </div>
                        <span className="text-xs text-text-muted font-mono bg-surface-3 px-3 py-1 rounded-md whitespace-nowrap self-start">
                          {exp.period}
                        </span>
                      </div>

                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, j) => (
                          <li
                            key={j}
                            className="text-sm text-text-secondary leading-relaxed flex gap-2"
                          >
                            <span className={`${config.color} mt-1.5 shrink-0`}>
                              ›
                            </span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
