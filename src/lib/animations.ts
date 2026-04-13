// animations.ts — Framer Motion variant definitions for all components

import type { Variants } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease,
    },
  },
};

export const fadeInScale: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.85,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease,
    },
  },
};

export const photoLeft: Variants = {
  hidden: {
    opacity: 0,
    rotate: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    rotate: -6,
    scale: 1,
    transition: {
      duration: 0.8,
      ease,
    },
  },
};

export const photoRight: Variants = {
  hidden: {
    opacity: 0,
    rotate: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    rotate: 6,
    scale: 1,
    transition: {
      duration: 0.8,
      ease,
      delay: 0.15,
    },
  },
};

export const slideFromLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease,
    },
  },
};

export const tagEnter = {
  initial: { opacity: 0, y: 12, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -12, scale: 0.95 },
  transition: { duration: 0.4, ease: "easeInOut" as const },
};

export const cardHover = {
  rest: {
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
  hover: {
    y: -6,
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
};
