// types.ts — TypeScript interfaces for all site data structures

export interface HeroData {
  name: string;
  title: string;
  bio: string;
  interestTags: string[];
  stats: StatItem[];
  profileImages: {
    image1: string;
    image2: string;
  };
}

export interface StatItem {
  value: number | string;
  label: string;
  suffix?: string;
}

export interface ProjectCategory {
  id: string;
  title: string;
  count: number;
  description: string;
  coverImage: string;
  href: string;
}

export interface ExperienceEntry {
  id: string;
  title: string;
  company: string;
  companyLogo?: string;
  dateRange: string;
  description: string[];
  isCurrent: boolean;
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategoryData {
  id: string;
  title: string;
  yearRange: string;
  skills: Skill[];
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface ContactData {
  email: string;
  website: string;
  websiteUrl: string;
  socials: SocialLink[];
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  ogImage: string;
}
