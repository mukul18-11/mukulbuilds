// GradientMesh.tsx — Atmospheric gradient blob background for visual depth

import { cn } from "@/lib/utils";

export function GradientMesh({ className }: { className?: string }) {
  return (
    <div
      className={cn("absolute inset-0 gradient-mesh", className)}
      aria-hidden="true"
    />
  );
}
