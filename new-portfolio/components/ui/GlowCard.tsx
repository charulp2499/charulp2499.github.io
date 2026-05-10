"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export default function GlowCard({
  children,
  className = "",
  glowColor = "0, 212, 255",
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden rounded-2xl bg-surface-2 border border-border transition-all duration-500 ${className}`}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      style={{
        boxShadow: isHovered
          ? `0 0 0 1px rgba(${glowColor}, 0.2), 0 0 40px rgba(${glowColor}, 0.08)`
          : "none",
      }}
    >
      {/* Gradient glow that follows mouse */}
      {isHovered && (
        <div
          className="absolute pointer-events-none transition-opacity duration-300"
          style={{
            left: mousePosition.x - 150,
            top: mousePosition.y - 150,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(${glowColor}, 0.1), transparent 70%)`,
            zIndex: 0,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
