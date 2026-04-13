// ScrollIndicator.tsx — Bouncing arrow that scrolls to the next section on click

"use client";

import { ChevronDown } from "lucide-react";

interface ScrollIndicatorProps {
  targetId: string;
  label?: string;
}

export function ScrollIndicator({ targetId, label }: ScrollIndicatorProps) {
  const handleClick = () => {
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      className="flex flex-col items-center gap-2 py-8 mx-auto text-muted-foreground hover:text-foreground transition-colors"
      aria-label={label ? `Scroll to ${label}` : "Scroll down"}
    >
      {label && (
        <span className="text-xs font-mono tracking-wider uppercase">
          {label}
        </span>
      )}
      <ChevronDown className="w-5 h-5 animate-bounce-slow" />
    </button>
  );
}
