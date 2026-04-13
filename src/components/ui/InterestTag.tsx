// InterestTag.tsx — Single interest badge with optional active highlight state

"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface InterestTagProps {
  label: string;
  isActive?: boolean;
}

export function InterestTag({ label, isActive = false }: InterestTagProps) {
  return (
    <motion.span
      layout
      className={cn(
        "inline-block rounded-md px-3 py-1 text-xs font-medium font-mono tracking-wide transition-colors duration-300",
        "ring-1 ring-border/50",
        isActive
          ? "bg-accent/15 text-accent ring-accent/40"
          : "bg-card text-muted-foreground"
      )}
    >
      {label}
    </motion.span>
  );
}
