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

    const updateActiveFromViewport = () => {
      const viewportAnchor = window.innerHeight * 0.42;

      let bestMatch: (typeof links)[number] = "hero";
      let bestDistance = Number.POSITIVE_INFINITY;

      links.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
        if (!isInViewport) return;

        const distance = Math.abs(rect.top - viewportAnchor);
        if (distance < bestDistance) {
          bestDistance = distance;
          bestMatch = id;
        }
      });

      setActiveSection(bestMatch);
    };

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

    links.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    // Scroll fallback keeps nav highlight in sync when observer timings vary.
    window.addEventListener("scroll", updateActiveFromViewport, {
      passive: true,
    });
    window.addEventListener("resize", updateActiveFromViewport);
    updateActiveFromViewport();

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", onEscape);

    return () => {
      observer.disconnect();
      window.removeEventListener("keydown", onEscape);
      window.removeEventListener("scroll", updateActiveFromViewport);
      window.removeEventListener("resize", updateActiveFromViewport);
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
