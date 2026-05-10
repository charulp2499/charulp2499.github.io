"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories } from "@/lib/data/skills";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Skills() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section id="skills" className="section-padding relative">
      {/* Subtle background effect */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Technical Architecture"
          title="AI Engineering Ecosystem"
          description="Deep expertise across the full AI/ML stack — from research to production"
        />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillCategories.map((category, i) => {
            const Icon = category.icon;
            const isActive = activeId === category.id;

            return (
              <ScrollReveal key={category.id} delay={i * 0.08}>
                <motion.div
                  onClick={() =>
                    setActiveId(isActive ? null : category.id)
                  }
                  className={`relative p-5 rounded-2xl bg-surface-2 border cursor-pointer transition-all duration-500 ${
                    isActive
                      ? "border-opacity-40 row-span-2"
                      : "border-border hover:border-border-hover"
                  }`}
                  style={{
                    borderColor: isActive
                      ? category.color
                      : undefined,
                    boxShadow: isActive
                      ? `0 0 30px ${category.color}15`
                      : undefined,
                  }}
                  layout
                >
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{
                        backgroundColor: `${category.color}15`,
                      }}
                    >
                      <Icon
                        size={18}
                        style={{ color: category.color }}
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground">
                        {category.title}
                      </h3>
                      <p className="text-xs text-text-muted">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skill count badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="text-xs font-mono px-2 py-0.5 rounded-md"
                      style={{
                        backgroundColor: `${category.color}10`,
                        color: category.color,
                      }}
                    >
                      {category.skills.length} skills
                    </span>
                  </div>

                  {/* Skills - always visible, expanded when active */}
                  <AnimatePresence>
                    <motion.div
                      initial={false}
                      animate={{
                        height: isActive ? "auto" : "2.5rem",
                      }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-wrap gap-1.5">
                        {category.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-surface-3 text-text-secondary border border-border/30 hover:text-foreground transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Expand indicator */}
                  {!isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-surface-2 to-transparent rounded-b-2xl pointer-events-none" />
                  )}
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
