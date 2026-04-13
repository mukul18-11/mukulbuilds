// Projects.tsx — Two project category cards in a responsive grid

"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { projectCategories } from "@/lib/data";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { DotPattern } from "@/components/ui/DotPattern";

export function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden">
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
            Projects
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl">
            Things I&apos;ve built — from full-stack web apps to intelligent AI agents.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectCategories.map((category) => (
            <ProjectCard key={category.id} {...category} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
