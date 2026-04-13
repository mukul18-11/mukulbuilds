// SkillCategory.tsx — Skill group with category heading, year range, and badge grid

"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { SkillCard } from "@/components/ui/SkillCard";
import type { SkillCategoryData } from "@/lib/types";

export function SkillCategory({ title, yearRange, skills }: SkillCategoryData) {
  return (
    <motion.div variants={fadeUp}>
      <h3 className="font-sans text-xl md:text-2xl font-semibold tracking-tight mb-4">
        {title}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {skills.map((skill) => (
          <SkillCard
            key={skill.name}
            name={skill.name}
            icon={skill.icon}
            yearRange={yearRange}
          />
        ))}
      </div>
    </motion.div>
  );
}
