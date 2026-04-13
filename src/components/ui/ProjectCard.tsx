// ProjectCard.tsx — Large project category card with gradient cover, hover lift, and arrow

"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import type { ProjectCategory } from "@/lib/types";

export function ProjectCard({
  title,
  count,
  description,
}: ProjectCategory) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card cursor-pointer"
    >
      {/* Gradient cover placeholder */}
      <div className="relative h-48 md:h-56 overflow-hidden">
        <div className="absolute inset-0 bg-background transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-serif text-6xl md:text-7xl font-bold text-foreground/5 group-hover:text-foreground/10 transition-colors duration-300">
            {count}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-sans text-xl md:text-2xl font-semibold tracking-tight">
            {title}
          </h3>
          <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0 mt-1" />
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
        <div className="mt-4 flex items-center gap-2">
          <span className="font-mono text-2xl font-bold text-accent">
            {count}
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
            projects
          </span>
        </div>
      </div>
    </motion.div>
  );
}
