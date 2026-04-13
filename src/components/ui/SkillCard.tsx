// SkillCard.tsx — Skill tile with brand icon, name, and year range

"use client";

import { motion } from "framer-motion";
import { BrandIcon } from "@/components/ui/BrandIcon";

interface SkillCardProps {
  name: string;
  icon?: string;
  yearRange?: string;
}

export function SkillCard({ name, icon, yearRange }: SkillCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group relative flex items-center gap-3 rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm px-4 py-4 shadow-sm hover:bg-card/80 hover:border-border/70"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted/40 ring-1 ring-border/30">
        <BrandIcon
          icon={icon}
          className="h-5 w-5 opacity-90"
        />
      </div>

      <div className="min-w-0">
        <div className="text-sm font-medium tracking-tight text-foreground truncate">
          {name}
        </div>
      </div>

      {yearRange ? (
        <div className="ml-auto text-xs font-mono tracking-wider text-muted-foreground">
          {yearRange}
        </div>
      ) : null}
    </motion.div>
  );
}

