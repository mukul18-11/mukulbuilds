// ProfilePhotos.tsx — Two overlapping rotated profile photos like the reference site

"use client";

import { motion } from "framer-motion";
import { photoLeft, photoRight } from "@/lib/animations";

interface ProfilePhotosProps {
  image1: string;
  image2: string;
}

export function ProfilePhotos({ image1, image2 }: ProfilePhotosProps) {
  return (
    <div className="flex items-center justify-center -space-x-6 mb-8">
      <motion.div
        variants={photoLeft}
        className="relative w-28 md:w-44 aspect-square rounded-xl overflow-hidden ring-2 ring-border/50 shadow-dramatic"
      >
        {/* Gradient placeholder until real photo is provided */}
        <div
          className="w-full h-full bg-background bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${image1})` }}
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <span className="font-serif text-3xl md:text-5xl font-bold text-foreground/30">
            M
          </span>
        </div>
      </motion.div>
      <motion.div
        variants={photoRight}
        className="relative w-28 md:w-44 aspect-square rounded-xl overflow-hidden ring-2 ring-border/50 shadow-dramatic z-10"
      >
        <div
          className="w-full h-full bg-background bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${image2})` }}
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <span className="font-serif text-3xl md:text-5xl font-bold text-foreground/30">
            K
          </span>
        </div>
      </motion.div>
    </div>
  );
}
