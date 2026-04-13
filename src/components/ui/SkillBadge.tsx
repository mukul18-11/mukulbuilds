// SkillBadge.tsx — Individual skill tag with hover lift effect

"use client";

import { motion } from "framer-motion";

interface SkillBadgeProps {
  name: string;
}

export function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <motion.span
      whileHover={{ scale: 1.05, y: -2 }}
      transition={{ duration: 0.2 }}
      className="inline-block rounded-md px-3 py-1.5 text-xs md:text-sm font-mono tracking-wide ring-1 ring-border/50 bg-card text-foreground hover:ring-accent/40 hover:bg-accent/5 transition-colors cursor-default"
    >
      {name}
    </motion.span>
  );
}
