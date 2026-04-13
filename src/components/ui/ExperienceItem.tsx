// ExperienceItem.tsx — Single timeline entry with date, title, company, and description

"use client";

import { motion } from "framer-motion";
import { slideFromLeft } from "@/lib/animations";
import type { ExperienceEntry } from "@/lib/types";

export function ExperienceItem({
  title,
  company,
  dateRange,
  description,
  isCurrent,
}: ExperienceEntry) {
  return (
    <motion.div variants={slideFromLeft} className="relative pl-8 pb-12 last:pb-0">
      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 border-accent bg-background z-10" />

      {/* Current indicator pulse */}
      {isCurrent && (
        <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-accent/40 animate-ping" />
      )}

      {/* Date range */}
      <span className="inline-block font-mono text-xs tracking-wider uppercase text-accent mb-2">
        {dateRange}
      </span>

      {/* Title & company */}
      <h3 className="font-sans text-xl font-semibold tracking-tight mb-1">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground mb-3">{company}</p>

      {/* Description */}
      <ul className="space-y-1.5">
        {description.map((item, i) => (
          <li
            key={i}
            className="text-sm text-muted-foreground leading-relaxed flex gap-2"
          >
            <span className="text-accent/60 mt-1 flex-shrink-0">&#8226;</span>
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
