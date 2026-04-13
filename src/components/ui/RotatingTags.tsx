// RotatingTags.tsx — Row of interest tags with one cycling highlight every 2.5 seconds

"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { InterestTag } from "./InterestTag";
import { fadeUp } from "@/lib/animations";

interface RotatingTagsProps {
  tags: string[];
}

export function RotatingTags({ tags }: RotatingTagsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % tags.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [tags.length]);

  return (
    <motion.div variants={fadeUp} className="flex flex-wrap gap-2 justify-center">
      {tags.map((tag, index) => (
        <InterestTag key={tag} label={tag} isActive={index === activeIndex} />
      ))}
    </motion.div>
  );
}
