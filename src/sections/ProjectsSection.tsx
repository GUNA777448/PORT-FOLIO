
import { portfolioContent } from "../data/portfolioContent";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import type { Project } from "../types/portfolio";

export function ProjectsSection({
  onSelectProject,
}: {
  onSelectProject: (project: Project) => void;
}) {
  return (
    <section id="projects" className="screen-section reveal-block">
      <div className="content-shell w-full">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {portfolioContent.projects.map((project) => (
            <Card key={project.title} className="project-card reveal-item">
              <div className="project-head">
                <h3>{project.title}</h3>
                {project.status ? (
                  <span className="project-status">{project.status}</span>
                ) : null}
              </div>
              <p className="project-tech">{project.tech}</p>
              <p>{project.description}</p>

              <div className="project-actions">
                <Button
                  variant="secondary"
                  onClick={() => onSelectProject(project)}
                >
                  View Details
                </Button>
                {project.links[0] ? (
                  <a
                    className="project-link"
                    href={project.links[0].href}
                    target={project.links[0].external ? "_blank" : "_self"}
                    rel="noreferrer"
                  >
                    Open
                  </a>
                ) : null}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
