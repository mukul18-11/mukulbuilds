// page.tsx — Homepage: assembles all sections with scroll indicators between them

import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { ScrollIndicator } from "@/components/layout/ScrollIndicator";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <ScrollIndicator targetId="projects" label="See Projects" />
        <Projects />
        <ScrollIndicator targetId="experience" label="Experience" />
        <Experience />
        <ScrollIndicator targetId="skills" label="Skills" />
        <Skills />
        <ScrollIndicator targetId="contact" label="Get in Touch" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
