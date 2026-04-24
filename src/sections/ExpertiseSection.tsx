
import { portfolioContent } from "../data/portfolioContent";
import { Card } from "../components/ui/Card";

export function ExpertiseSection() {
  return (
    <section id="expertise" className="screen-section reveal-block">
      <div className="content-shell w-full">
        <h2 className="section-title">Core Expertise</h2>
        <div className="expertise-grid">
          {portfolioContent.expertise.map((card) => (
            <Card key={card.title} className="reveal-item">
              <div className="expertise-head">
                <span className="expertise-icon" aria-hidden="true">
                  <i className={card.iconClass} />
                </span>
                <h3>{card.title}</h3>
              </div>
              <ul className="expertise-list">
                {card.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
