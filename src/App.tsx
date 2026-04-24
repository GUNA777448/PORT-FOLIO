import { useEffect, useState } from "react";
import type { Project } from "./types/portfolio";

import { SideRail } from "./components/layout/SideRail";
import { Footer } from "./components/layout/Footer";
import { Dialog } from "./components/ui/Dialog";

import { HeroSection } from "./sections/HeroSection";
import { AboutSection } from "./sections/AboutSection";
import { SkillsSection } from "./sections/SkillsSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { ExpertiseSection } from "./sections/ExpertiseSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { ContactSection } from "./sections/ContactSection";
import { links } from "./data/constants";

export default function App() {
  const [activeSection, setActiveSection] =
    useState<(typeof links)[number]>("hero");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const isNavSection = (id: string): id is (typeof links)[number] =>
      (links as readonly string[]).includes(id as any);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");

            const sectionId = entry.target.id;
            if (isNavSection(sectionId)) {
              setActiveSection(sectionId);
            }
          }
        });
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: 0.2 },
    );

    document
      .querySelectorAll<HTMLElement>(".reveal-block")
      .forEach((section) => observer.observe(section));

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", onEscape);

    return () => {
      observer.disconnect();
      window.removeEventListener("keydown", onEscape);
    };
  }, []);

  return (
    <div className="portfolio-app min-h-screen">
      <SideRail activeSection={activeSection} />

      <main className="w-full overflow-hidden">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ExpertiseSection />
        <ProjectsSection onSelectProject={setSelectedProject} />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />

      <Dialog
        open={Boolean(selectedProject)}
        title={selectedProject?.title ?? "Project Details"}
        onClose={() => setSelectedProject(null)}
      >
        {selectedProject ? (
          <>
            <p className="dialog-tech">{selectedProject.tech}</p>
            <p>{selectedProject.description}</p>
            <div className="dialog-links">
              {selectedProject.links.map((link) => (
                <a
                  key={`${selectedProject.title}-${link.label}`}
                  href={link.href}
                  target={link.external ? "_blank" : "_self"}
                  rel="noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </>
        ) : null}
      </Dialog>
    </div>
  );
}
