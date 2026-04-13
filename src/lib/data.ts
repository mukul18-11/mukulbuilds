// data.ts — All site content as typed objects. Edit this file to update content.

import type {
  HeroData,
  ProjectCategory,
  ExperienceEntry,
  SkillCategoryData,
  ContactData,
  SiteConfig,
} from "./types";

export const siteConfig: SiteConfig = {
  name: "Mukul Kumar",
  title: "Mukul Kumar — Backend Developer & AI Builder",
  description:
    "Self-taught backend developer and founder of CombineApps. Building AI-powered web apps and automation tools for businesses.",
  url: "https://combineapps.com",
  ogImage: "/og-image.png",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;

export const heroData: HeroData = {
  name: "Mukul Kumar",
  title: "Backend Developer & AI Builder",
  bio: "I'm a self-taught backend developer and founder of CombineApps — building AI-powered web apps and automation tools for businesses.",
  interestTags: [
    "Backend Dev",
    "AI Agents",
    "DSA",
    "Open Source",
    "Building Products",
  ],
  stats: [
    { value: 5, label: "Projects Built", suffix: "+" },
    { value: 10, label: "GitHub Repos", suffix: "+" },
    { value: 1, label: "Agency", suffix: "" },
    { value: 2, label: "Years Coding", suffix: "+" },
  ],
  profileImages: {
    image1: "/images/profile-1.jpg",
    image2: "/images/profile-2.jpg",
  },
};

export const projectCategories: ProjectCategory[] = [
  {
    id: "web-projects",
    title: "Web Projects",
    count: 4,
    description:
      "Full-stack web applications built with Next.js, React, and Node.js",
    coverImage: "/images/web-projects-cover.jpg",
    href: "#projects",
  },
  {
    id: "ai-agent-projects",
    title: "AI Agent Projects",
    count: 3,
    description:
      "Intelligent agents and automation tools built with LangChain, LangGraph, and CrewAI",
    coverImage: "/images/ai-projects-cover.jpg",
    href: "#projects",
  },
];

export const experiences: ExperienceEntry[] = [
  {
    id: "combineapps",
    title: "Founder",
    company: "CombineApps",
    companyLogo: "/images/combineapps-logo.svg",
    dateRange: "2024 — Present",
    description: [
      "Building AI-powered web applications and automation tools for businesses",
      "End-to-end product development from concept to deployment on Vercel",
    ],
    isCurrent: true,
  },
  {
    id: "self-taught",
    title: "Self-taught Backend Developer",
    company: "Independent",
    dateRange: "2022 — Present",
    description: [
      "Mastered backend development through self-directed learning and building real projects",
      "Built full-stack applications with Node.js, Express, PostgreSQL, and modern AI frameworks",
    ],
    isCurrent: true,
  },
];

export const skillCategories: SkillCategoryData[] = [
  {
    id: "backend",
    title: "Backend",
    yearRange: "2–3 years",
    skills: [
      { name: "Node.js", icon: "nodedotjs" },
      { name: "Express.js", icon: "express" },
      { name: "REST APIs", icon: "rest" },
    ],
  },
  {
    id: "database",
    title: "Database",
    yearRange: "1–2 years",
    skills: [
      { name: "Supabase", icon: "supabase" },
      { name: "PostgreSQL", icon: "postgresql" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    yearRange: "0–1 years",
    skills: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextdotjs" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
    ],
  },
  {
    id: "ai-agents",
    title: "AI / Agents",
    yearRange: "0–1 years",
    skills: [
      { name: "LangChain", icon: "langchain" },
      { name: "LangGraph", icon: "langgraph" },
      { name: "CrewAI", icon: "crewai" },
    ],
  },
  {
    id: "languages",
    title: "Languages",
    yearRange: "2–3 years",
    skills: [
      { name: "C++", icon: "cplusplus" },
      { name: "JavaScript", icon: "javascript" },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    yearRange: "2–3 years",
    skills: [
      { name: "VS Code", icon: "vscode" },
      { name: "GitHub", icon: "github" },
      { name: "Cloudflare", icon: "cloudflare" },
      { name: "Namecheap", icon: "namecheap" },
    ],
  },
];

export const contactData: ContactData = {
  email: "contact@combineapps.com",
  website: "combineapps.com",
  websiteUrl: "https://combineapps.com",
  socials: [
    { platform: "GitHub", url: "#" },
    { platform: "Twitter", url: "#" },
    { platform: "LinkedIn", url: "#" },
  ],
};
