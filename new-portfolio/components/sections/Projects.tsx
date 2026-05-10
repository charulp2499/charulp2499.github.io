"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, projectCategories } from "@/lib/data/projects";
import GlowCard from "@/components/ui/GlowCard";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ExternalLink, FileText, ChevronRight } from "lucide-react";
import { GitHubIcon } from "@/components/ui/Icons";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Projects"
          title="Systems I've Built"
          description="From research prototypes to production AI products"
        />

        {/* Filter tabs */}
        <ScrollReveal className="flex flex-wrap justify-center gap-2 mb-12">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-accent/15 text-accent border border-accent/30"
                  : "bg-surface-2 text-text-muted border border-border hover:text-foreground hover:border-border-hover"
              }`}
            >
              {cat}
            </button>
          ))}
        </ScrollReveal>

        {/* Project grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <GlowCard className="h-full">
                  <div className="p-6 flex flex-col h-full">
                    {/* Category + metrics */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-accent/10 text-accent">
                        {project.category}
                      </span>
                      {project.metrics && (
                        <span className="text-xs font-medium text-emerald-400 flex items-center gap-1">
                          <ChevronRight size={12} />
                          {project.metrics}
                        </span>
                      )}
                    </div>

                    {/* Title & description */}
                    <h3 className="text-lg font-semibold text-foreground font-[family-name:var(--font-space-grotesk)] mb-2 leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-surface-3 text-text-secondary border border-border/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-3 pt-3 border-t border-border/50">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-medium text-text-muted hover:text-accent transition-colors"
                        >
                          <GitHubIcon size={14} />
                          Code
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-medium text-text-muted hover:text-accent transition-colors"
                        >
                          <ExternalLink size={14} />
                          Demo
                        </a>
                      )}
                      {project.paper && (
                        <a
                          href={project.paper}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-medium text-text-muted hover:text-accent transition-colors"
                        >
                          <FileText size={14} />
                          Paper
                        </a>
                      )}
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
