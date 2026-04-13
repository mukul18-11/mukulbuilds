// StatCounter.tsx — Animated stat counter that counts up when scrolled into view

"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { useCounter } from "@/hooks/useCounter";
import { useInView } from "@/hooks/useInView";
import type { StatItem } from "@/lib/types";

export function StatCounter({ value, label, suffix = "" }: StatItem) {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const numericValue = typeof value === "number" ? value : 0;
  const count = useCounter(numericValue, 1500, inView);
  const displayValue = typeof value === "number" ? count : value;

  return (
    <motion.div ref={ref} variants={fadeUp} className="text-center">
      <div className="text-3xl md:text-4xl font-bold tracking-tighter text-foreground">
        {displayValue}
        {suffix && <span className="text-accent">{suffix}</span>}
      </div>
      <div className="text-xs md:text-sm font-mono tracking-wider uppercase text-muted-foreground mt-1">
        {label}
      </div>
    </motion.div>
  );
}
