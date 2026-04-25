import { useMemo } from "react";
import { portfolioContent } from "../data/portfolioContent";
import { Card } from "../components/ui/Card";

const skillIcons: Record<string, string> = {
  python: "fab fa-python",
  java: "fab fa-java",
  dart: "fas fa-bullseye",
  c: "fas fa-c",
  javascript: "fab fa-js",
  sql: "fas fa-database",
  "react.js": "fab fa-react",
  "node.js": "fab fa-node-js",
  "express.js": "fas fa-server",
  flask: "fas fa-flask",
  "next.js": "fas fa-n",
  flutter: "fas fa-mobile-screen-button",
  git: "fab fa-git-alt",
  github: "fab fa-github",
  vscode: "fas fa-code",
  postman: "fas fa-paper-plane",
  n8n: "fas fa-diagram-project",
  "android studio": "fab fa-android",
  firebase: "fas fa-fire",
  supabase: "fas fa-layer-group",
  mongodb: "fas fa-leaf",
  pinecone: "fas fa-circle-nodes",
  mysql: "fas fa-database",
};

function getSkillIcon(skill: string, fallback: string) {
  return skillIcons[skill.toLowerCase()] ?? fallback;
}

export function SkillsSection() {
  const groupedSkills = useMemo(() => {
    const iconByCategory: Record<string, string> = {
      Languages: "fas fa-code",
      Frameworks: "fas fa-cubes",
      Tools: "fas fa-screwdriver-wrench",
      Databases: "fas fa-database",
    };

    const entries = Object.entries(portfolioContent.skillCategories);
    const largestCategorySize = Math.max(
      ...entries.map(([, items]) => items.length),
      1,
    );

    return entries.map(([title, items]) => ({
      title,
      items,
      iconClass: iconByCategory[title] ?? "fas fa-bolt",
      strength: Math.round((items.length / largestCategorySize) * 100),
    }));
  }, []);

  const totalSkills = useMemo(
    () => groupedSkills.reduce((count, group) => count + group.items.length, 0),
    [groupedSkills],
  );

  const featuredSkills = useMemo(
    () => groupedSkills.flatMap((group) => group.items).slice(0, 8),
    [groupedSkills],
  );

  return (
    <section id="skills" className="screen-section reveal-block">
      <div className="content-shell w-full">
        <h2 className="section-title">Skills</h2>
        <p className="skills-intro">
          My toolkit spans product engineering, AI workflows, and shipping-ready
          platforms.
        </p>

        <div className="skills-summary reveal-item">
          <div className="skills-summary-item">
            <strong>{groupedSkills.length}</strong>
            <span>Skill tracks</span>
          </div>
          <div className="skills-summary-item">
            <strong>{totalSkills}</strong>
            <span>Tools in active stack</span>
          </div>
          <div className="skills-summary-item skills-summary-tags">
            {featuredSkills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>

        <div className="skills-grid">
          {groupedSkills.map((group) => (
            <Card key={group.title} className="reveal-item skills-card">
              <div className="skills-card-head">
                <span className="skills-icon" aria-hidden="true">
                  <i className={group.iconClass} />
                </span>
                <div>
                  <h3>{group.title}</h3>
                  <p>{group.items.length} items</p>
                </div>
              </div>

              <div className="skills-meter" aria-hidden="true">
                <span style={{ width: `${group.strength}%` }} />
              </div>

              <div className="pill-wrap">
                {group.items.map((item) => (
                  <span className="skill-pill" key={`${group.title}-${item}`}>
                    <i
                      className={getSkillIcon(item, group.iconClass)}
                      aria-hidden="true"
                    />
                    <span>{item}</span>
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
