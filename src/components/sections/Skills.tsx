// Skills.tsx — Categorized skill badges in a responsive grid

"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { skillCategories } from "@/lib/data";
import { SkillCategory } from "@/components/ui/SkillCategory";
import { DotPattern } from "@/components/ui/DotPattern";

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden">
      <DotPattern className="opacity-20" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative mx-auto max-w-site px-6 py-24 md:py-32"
      >
        <motion.div variants={fadeUp} className="mb-12">
          <h2 className="font-sans text-3xl md:text-5xl font-semibold tracking-tight mb-4">
            Skills
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl">
            Technologies and tools I work with, grouped by area.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-14">
          {skillCategories.map((category) => (
            <SkillCategory key={category.id} {...category} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
