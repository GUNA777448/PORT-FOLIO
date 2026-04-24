
import { portfolioContent } from "../data/portfolioContent";
import { Card } from "../components/ui/Card";

export function AboutSection() {
  return (
    <section id="about" className="screen-section reveal-block">
      <div className="content-shell w-full">
        <h2 className="section-title">About</h2>
        <div className="about-grid">
          <Card className="reveal-item">
            <p>{portfolioContent.aboutParagraphs[0]}</p>
            <p>{portfolioContent.aboutParagraphs[1]}</p>
          </Card>

          <Card className="reveal-item">
            <h3>Approach</h3>
            <ul className="about-list">
              {portfolioContent.approach.map((step) => (
                <li key={step.number}>
                  <strong>{step.number}</strong>
                  <div>
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}
