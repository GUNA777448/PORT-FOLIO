import { useEffect, useMemo, useState } from "react";
import { portfolioContent } from "./data/portfolioContent";
import type { Project } from "./types/portfolio";

const links = [
  "hero",
  "about",
  "skills",
  "experience",
  "expertise",
  "projects",
  "testimonials",
  "contact",
] as const;

const sectionLabels: Record<(typeof links)[number], string> = {
  hero: "Home",
  about: "About",
  skills: "Skills",
  experience: "Experience",
  expertise: "Expertise",
  projects: "Projects",
  testimonials: "Testimonials",
  contact: "Contact",
};

const sectionIcons: Record<(typeof links)[number], string> = {
  hero: "fas fa-house",
  about: "fas fa-user",
  skills: "fas fa-code",
  experience: "fas fa-briefcase",
  expertise: "fas fa-brain",
  projects: "fas fa-folder-open",
  testimonials: "fas fa-comments",
  contact: "fas fa-envelope",
};

const testimonials = [
  {
    name: "Yaswanth Varada",
    role: "Organiser-GDGVITB",
    image:
      "https://res.cloudinary.com/dlupkibvq/image/upload/Yaswanth_Varada_Organisor_hmclul.png",
    quote:
      "I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
  },
  {
    name: "Chinni Suryan Hota",
    role: "Founder -Hota Creatives",
    image:
      "src\assets\WhatsApp Image 2026-04-24 at 10.49.45 PM.jpeg",
    quote:
      "I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
  },
  {
    name: "K Narasimha Naidu",
    role: "Technical Lead , Ecell VITB",
    image:
      "https://res.cloudinary.com/dlupkibvq/image/upload/v1767886987/ngv6uefackvxzjz1rozc.png",
    quote:
      "I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
  },
];

function clsx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

function Button({
  children,
  variant = "primary",
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
}) {
  return (
    <button
      className={clsx(
        "ui-button",
        variant === "secondary" && "ui-button-secondary",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <article className={clsx("ui-card", className)}>{children}</article>;
}

function Input(
  props: React.InputHTMLAttributes<HTMLInputElement> & { label: string },
) {
  const { label, id, className, ...inputProps } = props;
  const inputId = id ?? `field-${label.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <label className="field-group" htmlFor={inputId}>
      <span>{label}</span>
      <input
        id={inputId}
        className={clsx("ui-input", className)}
        {...inputProps}
      />
    </label>
  );
}

function Textarea(
  props: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string },
) {
  const { label, id, className, ...textareaProps } = props;
  const textareaId =
    id ?? `field-${label.toLowerCase().replace(/\s+/g, "-")}-textarea`;

  return (
    <label className="field-group" htmlFor={textareaId}>
      <span>{label}</span>
      <textarea
        id={textareaId}
        className={clsx("ui-input ui-textarea", className)}
        {...textareaProps}
      />
    </label>
  );
}

function Dialog({
  open,
  title,
  onClose,
  children,
}: {
  open: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  if (!open) return null;

  return (
    <div className="dialog-backdrop" role="presentation" onClick={onClose}>
      <section
        className="dialog-panel"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="dialog-header">
          <h3>{title}</h3>
          <button
            className="dialog-close"
            aria-label="Close dialog"
            onClick={onClose}
            type="button"
          >
            ×
          </button>
        </div>
        <div className="dialog-body">{children}</div>
      </section>
    </div>
  );
}

export default function App() {
  const [activeSection, setActiveSection] =
    useState<(typeof links)[number]>("hero");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [typedSubtitle, setTypedSubtitle] = useState("");
  const [isDeletingSubtitle, setIsDeletingSubtitle] = useState(false);

  useEffect(() => {
    const isNavSection = (id: string): id is (typeof links)[number] =>
      (links as readonly string[]).includes(id);

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

    document
      .querySelectorAll<HTMLElement>(".reveal-block")
      .forEach((section) => observer.observe(section));

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", onEscape);

    return () => {
      observer.disconnect();
      window.removeEventListener("keydown", onEscape);
    };
  }, []);

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
    <div className="portfolio-app">
      <aside className="side-rail" aria-label="Section navigation">
        {links.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={clsx("side-rail-link", activeSection === id && "active")}
            aria-label={sectionLabels[id]}
            title={sectionLabels[id]}
          >
            <i className={sectionIcons[id]} aria-hidden="true" />
          </a>
        ))}
      </aside>

      <main>
        <section id="hero" className="screen-section reveal-block">
          <div className="content-shell hero-grid">
            <div>
              <p className="eyebrow">{portfolioContent.heroTag}</p>
              <h1>{portfolioContent.name}</h1>
              <p
                className="hero-subtitle"
                aria-label={portfolioContent.subtitle}
              >
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
          </div>
        </section>

        <section id="about" className="screen-section reveal-block">
          <div className="content-shell">
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

        <section id="skills" className="screen-section reveal-block">
          <div className="content-shell">
            <h2 className="section-title">Skills</h2>
            <div className="skills-grid">
              {groupedSkills.map((group) => (
                <Card key={group.title} className="reveal-item">
                  <h3>{group.title}</h3>
                  <div className="pill-wrap">
                    {group.items.map((item) => (
                      <span
                        className="skill-pill"
                        key={`${group.title}-${item}`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="screen-section reveal-block">
          <div className="content-shell">
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
                <Card
                  key={academic.title}
                  className="reveal-item academic-card"
                >
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

        <section id="expertise" className="screen-section reveal-block">
          <div className="content-shell">
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

        <section id="projects" className="screen-section reveal-block">
          <div className="content-shell">
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
                      onClick={() => setSelectedProject(project)}
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

        <section id="testimonials" className="screen-section reveal-block">
          <div className="content-shell">
            <h2 className="section-title">Testimonials</h2>
            <div className="testimonials-showcase">
              {testimonials.map((item) => (
                <article
                  key={item.name}
                  className="reveal-item testimonial-ui-card"
                >
                  <div className="testimonial-ui-head">
                    <img
                      className="testimonial-ui-avatar"
                      src={item.image}
                      alt={item.name}
                    />
                    <div className="testimonial-ui-title">
                      <h3>{item.name}</h3>
                      <p>{item.role}</p>
                    </div>
                  </div>

                  <p className="testimonial-ui-quote">{item.quote}</p>

                  <div
                    className="testimonial-ui-stars"
                    aria-label="5 out of 5 stars"
                  >
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="screen-section reveal-block">
          <div className="content-shell">
            <h2 className="section-title">Contact</h2>
            <div className="contact-grid">
              <Card className="reveal-item">
                <h3>{portfolioContent.contactTitle}</h3>
                <p>{portfolioContent.contactText}</p>
                <ul className="contact-list">
                  {portfolioContent.contactItems.map((item) => (
                    <li key={item.value}>{item.value}</li>
                  ))}
                </ul>
              </Card>

              <Card className="reveal-item">
                <form
                  className="contact-form"
                  onSubmit={(event) => event.preventDefault()}
                >
                  <Input
                    label="Name"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                  <Textarea
                    label="Message"
                    name="message"
                    placeholder="Tell me about your project"
                    rows={5}
                    required
                  />
                  <Button type="submit">Send Message</Button>
                </form>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="content-shell footer-inner">
          <p>
            © {new Date().getFullYear()} {portfolioContent.name}
          </p>
          <div className="footer-links">
            {portfolioContent.socialLinks.map((social, index) => (
              <a
                key={`${social.href}-${index}`}
                href={social.href}
                target="_blank"
                rel="noreferrer"
              >
                Connect {index + 1}
              </a>
            ))}
          </div>
        </div>
      </footer>

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
