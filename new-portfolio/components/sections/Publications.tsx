"use client";

import { publications } from "@/lib/data/publications";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { ExternalLink, Award, GraduationCap } from "lucide-react";

export default function Publications() {
  return (
    <section id="research" className="section-padding relative">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative max-w-4xl mx-auto px-6">
        <SectionHeading
          label="Research"
          title="Published Research"
          description="Contributions to AI/ML at international conferences and journals"
        />

        <div className="space-y-5">
          {publications.map((pub, i) => (
            <ScrollReveal key={pub.id} delay={i * 0.1}>
              <div className="group p-6 rounded-2xl bg-surface-2 border border-border hover:border-border-hover transition-all duration-400">
                {/* Venue tag + award */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-accent/10 text-accent border border-accent/20">
                    {pub.venueTag}
                  </span>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-surface-3 text-text-muted">
                    {pub.year}
                  </span>
                  {pub.award && (
                    <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center gap-1">
                      <Award size={12} />
                      {pub.award}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold text-foreground mb-2 leading-snug group-hover:text-accent transition-colors duration-300">
                  {pub.title}
                </h3>

                {/* Authors — highlight self */}
                <p className="text-sm text-text-muted mb-3">
                  {pub.authors.split(/(C Chodvadiya\*?)/g).map((part, j) =>
                    part.match(/C Chodvadiya/) ? (
                      <span key={j} className="text-accent font-medium">
                        {part}
                      </span>
                    ) : (
                      <span key={j}>{part}</span>
                    )
                  )}
                </p>

                {/* Venue */}
                <p className="text-xs text-text-muted mb-4 italic">
                  {pub.venue}
                </p>

                {/* Link */}
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-text-muted hover:text-accent transition-colors"
                >
                  <ExternalLink size={13} />
                  View Publication
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Google Scholar CTA */}
        <ScrollReveal delay={0.3} className="mt-10 text-center">
          <a
            href="https://scholar.google.com/citations?user=kWB9bUkAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-surface-2 text-text-secondary border border-border hover:border-accent/30 hover:text-accent transition-all duration-300 text-sm font-medium"
          >
            <GraduationCap size={16} />
            View all publications on Google Scholar
            <ExternalLink size={14} />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
