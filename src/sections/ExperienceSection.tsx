
import { portfolioContent } from "../data/portfolioContent";
import { Card } from "../components/ui/Card";

export function ExperienceSection() {
  return (
    <section id="experience" className="screen-section reveal-block">
      <div className="content-shell w-full">
        <h2 className="section-title">Experience</h2>
        <div className="experience-grid">
          {portfolioContent.timeline.map((item) => (
            <Card key={item.title} className="reveal-item experience-card">
              <p className="experience-meta">{item.date}</p>
              <h3>{item.title}</h3>
              <p className="experience-org">{item.organization}</p>
              <ul className="experience-points">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="experience-metrics">
                {item.metrics.map((metric) => (
                  <span key={metric.label} className="metric-chip">
                    <strong>{metric.value}</strong> {metric.label}
                  </span>
                ))}
              </div>
            </Card>
          ))}

          {portfolioContent.academics.map((academic) => (
            <Card key={academic.title} className="reveal-item academic-card">
              <p className="experience-meta">{academic.date}</p>
              <h3>{academic.title}</h3>
              <p className="experience-org">{academic.institution}</p>
              <p className="academic-score">
                {academic.scoreLabel}: <strong>{academic.score}</strong>
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
