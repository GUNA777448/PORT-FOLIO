import { useMemo } from "react";
import { portfolioContent } from "../data/portfolioContent";
import { Card } from "../components/ui/Card";

export function SkillsSection() {
  const groupedSkills = useMemo(
    () =>
      Object.entries(portfolioContent.skillCategories).map(
        ([title, items]) => ({
          title,
          items,
        }),
      ),
    [],
  );

  return (
    <section id="skills" className="screen-section reveal-block">
      <div className="content-shell w-full">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {groupedSkills.map((group) => (
            <Card key={group.title} className="reveal-item">
              <h3>{group.title}</h3>
              <div className="pill-wrap">
                {group.items.map((item) => (
                  <span className="skill-pill" key={`${group.title}-${item}`}>
                    {item}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
