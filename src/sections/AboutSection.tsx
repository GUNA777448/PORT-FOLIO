import { portfolioContent } from "../data/portfolioContent";
import { Card } from "../components/ui/Card";

export function AboutSection() {
  const aboutStats = portfolioContent.stats.slice(0, 4);
  const aboutHighlights = portfolioContent.domains.slice(0, 3);

  return (
    <section id="about" className="screen-section reveal-block">
      <div className="content-shell w-full">
        <h2 className="about-heading">ABOUT ME</h2>

        <p className="about-lead">
          I&apos;m <strong>{portfolioContent.name}</strong>,{" "}
          {portfolioContent.subtitle}.
        </p>

        <p className="about-description">
          {portfolioContent.summary} I specialize in building product-driven
          interfaces, scalable backend systems, and AI workflows that turn ideas
          into usable systems.
        </p>

        <div className="about-layout">
          <Card className="about-stats-card reveal-item">
            <div className="about-stats-grid">
              {aboutStats.map((stat) => (
                <div key={stat.label} className="about-stat-tile">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="about-do-card reveal-item">
            <h3>What I Do?</h3>
            <div className="about-do-list">
              {aboutHighlights.map((domain) => (
                <div key={domain.id} className="about-do-item">
                  <span className="about-do-icon" aria-hidden="true">
                    <i className={domain.iconClass} />
                  </span>
                  <div>
                    <h4>{domain.title}</h4>
                    <p>{domain.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
