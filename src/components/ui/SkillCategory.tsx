// SkillCategory.tsx — Skill group with category heading, year range, and badge grid

"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { SkillBadge } from "./SkillBadge";
import type { SkillCategoryData } from "@/lib/types";

export function SkillCategory({ title, yearRange, skills }: SkillCategoryData) {
  return (
    <motion.div variants={fadeUp}>
      <div className="flex items-baseline gap-3 mb-3">
        <h3 className="font-serif text-lg font-semibold tracking-tight">
          {title}
        </h3>
        <span className="font-mono text-xs text-muted-foreground tracking-wider">
          {yearRange}
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillBadge key={skill.name} name={skill.name} />
        ))}
      </div>
    </motion.div>
  );
}
