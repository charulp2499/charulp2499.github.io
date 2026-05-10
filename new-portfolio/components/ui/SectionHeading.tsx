"use client";

import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  label,
  title,
  description,
  className = "",
  align = "center",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <ScrollReveal className={`flex flex-col gap-4 mb-16 ${alignClass} ${className}`}>
      {label && (
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-accent/10 text-accent border border-accent/20">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-glow" />
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-text-muted text-base md:text-lg max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </ScrollReveal>
  );
}
