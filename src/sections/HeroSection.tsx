import { useEffect, useState } from "react";
import { portfolioContent } from "../data/portfolioContent";
import { Button } from "../components/ui/Button";
const heroArt = new URL("../assets/Hero.svg", import.meta.url).href;

const typingTitles = [
  "Full-Stack Developer (MERN)",
  "AI Product Developer",
  "GenAI Engineer (LangChain, RAG)",
  "Flutter App Developer",
  "Building AI-Powered Apps",
  "SaaS Product Builder",
  "Frontend Developer (React + Tailwind)",
  "Backend Developer (Node.js APIs)",
  "Cross-Platform Mobile Developer",
  "LLM Application Developer",
];

export function HeroSection() {
  const [typedSubtitle, setTypedSubtitle] = useState("");
  const [isDeletingSubtitle, setIsDeletingSubtitle] = useState(false);
  const [subtitleIndex, setSubtitleIndex] = useState(0);

  useEffect(() => {
    const fullText = typingTitles[subtitleIndex];
    let timeoutId: number;

    if (!isDeletingSubtitle && typedSubtitle === fullText) {
      timeoutId = window.setTimeout(() => {
        setIsDeletingSubtitle(true);
      }, 1300);
    } else if (isDeletingSubtitle && typedSubtitle.length === 0) {
      timeoutId = window.setTimeout(() => {
        setIsDeletingSubtitle(false);
        setSubtitleIndex(
          (currentIndex) => (currentIndex + 1) % typingTitles.length,
        );
      }, 350);
    } else {
      timeoutId = window.setTimeout(
        () => {
          const nextLength = isDeletingSubtitle
            ? typedSubtitle.length - 1
            : typedSubtitle.length + 1;

          setTypedSubtitle(fullText.slice(0, nextLength));
        },
        isDeletingSubtitle ? 45 : 85,
      );
    }

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [typedSubtitle, isDeletingSubtitle, subtitleIndex]);

  return (
    <section id="hero" className="screen-section reveal-block">
      <div className="content-shell hero-grid w-full">
        <div className="hero-copy">
          <p className="eyebrow">{portfolioContent.heroTag}</p>
          <h1 className="hero-name">{portfolioContent.name}</h1>
          <p className="hero-subtitle" aria-label={typingTitles.join(", ")}>
            {typedSubtitle}
            <span className="typing-cursor" aria-hidden="true">
              |
            </span>
          </p>
          <p className="hero-summary">{portfolioContent.summary}</p>
          <div className="hero-actions">
            <Button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Projects
            </Button>
            <Button
              variant="secondary"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact Me
            </Button>
          </div>
        </div>

        <div className="hero-visual reveal-item" aria-hidden="true">
          <img src={heroArt} alt="" className="hero-illustration" />
        </div>
      </div>
    </section>
  );
}
