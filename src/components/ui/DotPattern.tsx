// DotPattern.tsx — Subtle dot grid background overlay for sections

import { cn } from "@/lib/utils";

export function DotPattern({ className }: { className?: string }) {
  return (
    <div
      className={cn("absolute inset-0 dots-pattern opacity-40", className)}
      aria-hidden="true"
    />
  );
}
