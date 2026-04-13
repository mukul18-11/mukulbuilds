// BrandIcon.tsx — Render a brand/logo icon (simple-icons) with a safe fallback

import type { ComponentProps, ElementType } from "react";
import type { SimpleIcon } from "simple-icons";
import {
  siCloudflare,
  siCplusplus,
  siCrewai,
  siExpress,
  siGithub,
  siJavascript,
  siLangchain,
  siLanggraph,
  siNamecheap,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siReact,
  siSupabase,
  siTailwindcss,
  siVscodium,
} from "simple-icons";
import { Braces, Code2, Database, Terminal } from "lucide-react";

const brandIcons: Record<string, SimpleIcon> = {
  nodedotjs: siNodedotjs,
  express: siExpress,
  supabase: siSupabase,
  postgresql: siPostgresql,
  react: siReact,
  nextdotjs: siNextdotjs,
  tailwindcss: siTailwindcss,
  langchain: siLangchain,
  langgraph: siLanggraph,
  crewai: siCrewai,
  cplusplus: siCplusplus,
  javascript: siJavascript,
  github: siGithub,
  cloudflare: siCloudflare,
  namecheap: siNamecheap,
  vscode: siVscodium,
};

const fallbackIcons: Record<string, ElementType> = {
  rest: Braces,
  api: Braces,
  database: Database,
  cli: Terminal,
  code: Code2,
};

type BrandIconProps = Omit<ComponentProps<"svg">, "children"> & {
  icon?: string;
  title?: string;
};

export function BrandIcon({ icon, title, ...props }: BrandIconProps) {
  const key = icon?.toLowerCase().trim();
  const brand = key ? brandIcons[key] : undefined;

  if (brand) {
    return (
      <svg
        viewBox="0 0 24 24"
        role="img"
        aria-label={title ?? brand.title}
        style={{ color: `#${brand.hex}` }}
        {...props}
      >
        <path d={brand.path} fill="currentColor" />
      </svg>
    );
  }

  const Fallback = key ? (fallbackIcons[key] ?? Code2) : Code2;
  return <Fallback aria-hidden="true" {...props} />;
}
