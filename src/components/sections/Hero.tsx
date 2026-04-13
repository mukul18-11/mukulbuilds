// Hero.tsx — Hero section with profile photos, name, rotating interest tags, bio, and stat counters

"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { heroData } from "@/lib/data";
import { ProfilePhotos } from "@/components/ui/ProfilePhotos";
import { RotatingTags } from "@/components/ui/RotatingTags";
import { StatCounter } from "@/components/ui/StatCounter";
import { GradientMesh } from "@/components/ui/GradientMesh";
import { DotPattern } from "@/components/ui/DotPattern";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <DotPattern className="opacity-20" />
      <GradientMesh />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative mx-auto max-w-site px-6 py-32 md:py-40 w-full"
      >
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          {/* Profile photos */}
          <ProfilePhotos
            image1={heroData.profileImages.image1}
            image2={heroData.profileImages.image2}
          />

          {/* Name */}
          <motion.h1
            variants={fadeUp}
            className="font-sans text-4xl md:text-7xl font-semibold tracking-tight mb-4"
          >
            {heroData.name}
          </motion.h1>

          {/* Title */}
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-accent font-medium tracking-tight mb-6"
          >
            {heroData.title}
          </motion.p>

          {/* Interest tags */}
          <div className="mb-8">
            <RotatingTags tags={heroData.interestTags} />
          </div>

          {/* Bio */}
          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg text-muted-foreground leading-relaxed mb-12 max-w-xl"
          >
            {heroData.bio}
          </motion.p>

          {/* Stat counters */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 w-full"
          >
            {heroData.stats.map((stat) => (
              <StatCounter key={stat.label} {...stat} />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
