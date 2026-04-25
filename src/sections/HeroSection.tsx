import { useEffect, useState } from "react";
import { portfolioContent } from "../data/portfolioContent";
import { Button } from "../components/ui/Button";
import heroArt from "../assets/Hero.svg";

export function HeroSection() {
  const [typedSubtitle, setTypedSubtitle] = useState("");
  const [isDeletingSubtitle, setIsDeletingSubtitle] = useState(false);

  useEffect(() => {
    const fullText = portfolioContent.subtitle;
    let timeoutId: number;

    if (!isDeletingSubtitle && typedSubtitle === fullText) {
      timeoutId = window.setTimeout(() => {
        setIsDeletingSubtitle(true);
      }, 1300);
    } else if (isDeletingSubtitle && typedSubtitle.length === 0) {
      timeoutId = window.setTimeout(() => {
        setIsDeletingSubtitle(false);
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
  }, [typedSubtitle, isDeletingSubtitle]);

  return (
    <section id="hero" className="screen-section reveal-block">
      <div className="content-shell hero-grid w-full">
        <div className="hero-copy">
          <p className="eyebrow">{portfolioContent.heroTag}</p>
          <h1 className="hero-name">{portfolioContent.name}</h1>
          <p className="hero-subtitle" aria-label={portfolioContent.subtitle}>
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
