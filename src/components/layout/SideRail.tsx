
import { clsx } from "../../utils/clsx";
import { links, sectionLabels, sectionIcons } from "../../data/constants";

export function SideRail({ activeSection }: { activeSection: string }) {
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
