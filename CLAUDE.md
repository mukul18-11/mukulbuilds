# CLAUDE.md — Project Memory

## What This Project Is
A personal portfolio website for Mukul Kumar, founder of CombineApps (combineapps.com). A self-taught backend developer building AI-powered web apps and automation tools for businesses. This site showcases work, skills, experience, and acts as the public face of the agency.

## Tech Stack
- Framework: Next.js 14 (App Router)
- Styling: Tailwind CSS
- Animations: Framer Motion
- Theme: next-themes (dark default)
- Icons: lucide-react
- Deployment: Vercel
- No backend — fully static site

## Folder Structure and What Each Folder Does
```
/src/app                    → Next.js App Router pages
/src/app/page.tsx           → Main homepage (all sections)
/src/app/layout.tsx         → Root layout, fonts, metadata, ThemeProvider
/src/app/globals.css        → CSS variables, dot pattern, noise overlay
/src/components/layout/     → Navbar, Footer, Section wrapper, ScrollIndicator
/src/components/sections/   → Full-page sections (Hero, Projects, Experience, Skills, Contact)
/src/components/ui/         → Small reusable pieces (ThemeToggle, ProfilePhotos, tags, cards, badges)
/src/components/providers/  → ThemeProvider wrapper
/src/lib/                   → Utility functions, constants, data, types, animations, fonts
/src/lib/data.ts            → All site content as typed arrays
/src/lib/types.ts           → TypeScript interfaces
/src/lib/animations.ts      → Framer Motion variant definitions
/src/lib/fonts.ts           → Google Font imports (Playfair Display, Sora, JetBrains Mono)
/src/lib/utils.ts           → cn() helper (clsx + tailwind-merge)
/src/hooks/                 → Custom React hooks (useScrollProgress, useInView, useCounter)
/public/                    → Static assets (images, noise.svg, favicon)
/public/images/             → Profile photos, project covers, logos
/api/                       → EMPTY — future backend API endpoints
/database/                  → EMPTY — future database schemas
/services/                  → EMPTY — future service integrations
```

## How Content Works
All content (projects, experience, skills, bio) lives in `/src/lib/data.ts` as typed TypeScript objects. To update content — edit only this file. Components read from here. Never hardcode content inside components.

## Component Architecture
- Each section in `/src/components/sections/` is a standalone React component
- Sections are imported and composed in `/src/app/page.tsx` in order
- Small UI pieces live in `/src/components/ui/` and are used across sections
- No prop drilling — each section imports its own data from `/src/lib/data.ts`

## Design Rules (Read Every Time)
- Dark mode default, light mode toggle via next-themes
- Fonts: Playfair Display (serif headings), Sora (sans body), JetBrains Mono (mono/dates)
- NO Inter, Roboto, Arial, or system fonts
- CSS variables for all colors in globals.css (HSL values)
- Color scheme: deep blue-black bg (#0f1117), warm off-white text (#edece8), teal-green accent (#20c5a0)
- Light mode: warm cream bg (#f9f7f4), dark text, slightly darker teal (#189e7e)
- NO purple gradients, no generic AI aesthetics
- Framer Motion for: page load staggered reveals, scroll-triggered section entrances, hover micro-interactions
- Atmosphere: gradient meshes, noise texture overlay, dot patterns, layered transparencies
- Layouts: asymmetry, overlap, generous negative space
- Every animation must feel intentional, not decorative noise
- Mobile responsive from day one

## Coding Conventions
- TypeScript strict mode — all components fully typed
- No inline styles — Tailwind classes only
- Component files: PascalCase (HeroSection.tsx)
- Data/util files: camelCase (data.ts)
- Always use named exports for components
- Keep components under 150 lines — split if larger
- One-line comment at top of every major file explaining what it does

## How to Add a New Section
1. Create `/src/components/sections/NewSection.tsx`
2. Add its data to `/src/lib/data.ts`
3. Import and place it in `/src/app/page.tsx`
4. Never create a section without adding its data to data.ts first

## How to Add a New Project
Open `/src/lib/data.ts` and add to the `projectCategories` array. Fields: id, title, count, description, coverImage, href.

## Deployment
- Push to main branch → auto-deploys on Vercel
- Domain: combineapps.com (Cloudflare DNS → Vercel)
- Check Vercel dashboard for build logs if deploy fails

## Reference Design
Inspired by https://www.emanueledipietro.com/ — clean personal site with hero stats, overlapping rotated profile photos, project cards, timeline experience, skill grid, contact. Recreated from scratch in Next.js + Tailwind, not copied.

## Last Updated
2026-04-14
