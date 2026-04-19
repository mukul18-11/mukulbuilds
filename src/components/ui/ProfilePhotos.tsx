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
        <div
          className="w-full h-full bg-background bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${image1})` }}
        />
      </motion.div>
      <motion.div
        variants={photoRight}
        className="relative w-28 md:w-44 aspect-square rounded-xl overflow-hidden ring-2 ring-border/50 shadow-dramatic z-10"
      >
        <div
          className="w-full h-full bg-background bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${image2})` }}
        />
      </motion.div>
    </div>
  );
}
