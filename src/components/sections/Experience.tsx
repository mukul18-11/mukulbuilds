// Experience.tsx — Vertical timeline of roles and experience

"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { experiences } from "@/lib/data";
import { ExperienceItem } from "@/components/ui/ExperienceItem";
import { GradientMesh } from "@/components/ui/GradientMesh";

export function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden">
      <GradientMesh />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative mx-auto max-w-site px-6 py-24 md:py-32"
      >
        <motion.div variants={fadeUp} className="mb-12">
          <h2 className="font-serif text-3xl md:text-5xl font-semibold tracking-tight mb-4">
            Experience
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl">
            My journey from self-taught developer to building an AI web agency.
          </p>
        </motion.div>

        <div className="max-w-2xl">
          {/* Timeline line */}
          <div className="relative border-l-2 border-border/50">
            {experiences.map((entry) => (
              <ExperienceItem key={entry.id} {...entry} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
