// Section.tsx — Reusable section wrapper with optional dot pattern and gradient backgrounds

"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/DotPattern";
import { GradientMesh } from "@/components/ui/GradientMesh";

interface SectionProps {
  id: string;
  children: React.ReactNode;
  withDots?: boolean;
  withGradient?: boolean;
  className?: string;
}

export function Section({
  id,
  children,
  withDots = false,
  withGradient = false,
  className,
}: SectionProps) {
  return (
    <section id={id} className="relative overflow-hidden">
      {withDots && <DotPattern />}
      {withGradient && <GradientMesh />}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className={cn(
          "relative mx-auto max-w-site px-6 py-24 md:py-32",
          className
        )}
      >
        {children}
      </motion.div>
    </section>
  );
}
