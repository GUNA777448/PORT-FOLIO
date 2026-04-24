import { clsx } from "../../lib/clsx";

type LinkId =
  | "hero"
  | "about"
  | "skills"
  | "experience"
  | "expertise"
  | "projects"
  | "testimonials"
  | "contact";

type SectionRailProps = {
  links: readonly LinkId[];
  activeSection: LinkId;
  sectionLabels: Record<LinkId, string>;
  sectionIcons: Record<LinkId, string>;
};

export function SectionRail({
  links,
  activeSection,
  sectionLabels,
  sectionIcons,
}: SectionRailProps) {
  return (
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
  );
}
