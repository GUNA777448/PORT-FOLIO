// Dependencies in index.html:
// <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;900&family=Barlow:wght@400;500;600&display=swap" rel="stylesheet" />
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />

import { portfolioContent } from "../data/portfolioContent";
import type { Project } from "../types/portfolio";

// ─── Sidebar Nav ──────────────────────────────────────────────────────────────

const navItems = ["HOME", "ABOUT ME", "RESUME", "PORTFOLIO", "TESTIMONIALS", "CONTACT"];
const navIcons = [
  "fas fa-house",
  "fas fa-user",
  "fas fa-file-lines",
  "fas fa-briefcase",
  "fas fa-comment-dots",
  "fas fa-envelope",
];

function SidebarNav() {
  return (
    <></>
  );
}

// ─── Status Badge ─────────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: string }) {
  const isFeatured = status.toLowerCase() === "featured";
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-[3px] text-[9px] font-black uppercase tracking-widest rounded-sm
        ${isFeatured
          ? "bg-[#F5A623] text-white"
          : "bg-black text-[#F5A623] border border-[#F5A623]/30"
        }`}
    >
      {isFeatured && <i className="fas fa-star text-[7px]" />}
      {!isFeatured && <i className="fas fa-hammer text-[7px]" />}
      {status}
    </span>
  );
}

// ─── Tech Pills ───────────────────────────────────────────────────────────────

function TechPills({ tech }: { tech: string }) {
  const tags = tech.split("|").map((t) => t.trim());
  return (
    <div className="flex flex-wrap gap-[5px]">
      {tags.map((tag) => (
        <span
          key={tag}
          className="px-2 py-[3px] text-[9px] font-bold tracking-wide uppercase
            bg-black/5 text-neutral-500 border border-black/8 rounded-sm
            group-hover:border-[#F5A623]/30 group-hover:text-neutral-700 transition-colors duration-200"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

// ─── Project Card ─────────────────────────────────────────────────────────────

function ProjectCard({
  project,
  index,
  onSelectProject,
}: {
  project: Project;
  index: number;
  onSelectProject: (p: Project) => void;
}) {
  const primaryLink = project.links[0];
  const secondaryLink = project.links[1];

  return (
    <div
      className="relative bg-white border border-black/10 rounded-sm overflow-hidden flex flex-col
        group hover:shadow-[5px_5px_0px_#F5A623] hover:-translate-y-[3px] hover:-translate-x-[3px]
        transition-all duration-200"
    >
      {/* Top accent bar */}
      <span className="block h-[3px] w-full bg-[#F5A623]" />

      <div className="p-5 flex flex-col flex-1 gap-4">

        {/* Head row */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            {/* Icon box */}
            <div
              className="w-10 h-10 bg-black flex items-center justify-center rounded-sm shrink-0
                group-hover:bg-[#F5A623] transition-colors duration-300"
            >
              <i
                className={`${project.iconClass} text-[#F5A623] group-hover:text-white text-sm transition-colors duration-300`}
              />
            </div>

            <div>
              <h3
                className="text-base font-black uppercase tracking-widest text-black leading-none
                  font-['Barlow_Condensed',sans-serif]"
              >
                {project.title}
              </h3>
              {project.status && (
                <div className="mt-[5px]">
                  <StatusBadge status={project.status} />
                </div>
              )}
            </div>
          </div>

          {/* Ghost index */}
          <span
            className="text-4xl font-black text-black/5 leading-none select-none shrink-0
              group-hover:text-[#F5A623]/10 transition-colors duration-300
              font-['Barlow_Condensed',sans-serif]"
          >
            0{index + 1}
          </span>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-black/8" />

        {/* Tech stack */}
        <TechPills tech={project.tech} />

        {/* Description */}
        <p className="text-sm text-neutral-500 leading-relaxed font-['Barlow',sans-serif] flex-1">
          {project.description}
        </p>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-1 border-t border-black/8">
          <button
            onClick={() => onSelectProject(project)}
            className="flex items-center gap-2 px-4 py-[7px] bg-black text-white text-[10px] font-black
              uppercase tracking-widest rounded-sm hover:bg-[#F5A623] transition-colors duration-200"
          >
            <i className="fas fa-eye text-[9px]" />
            View Details
          </button>

          {primaryLink && !primaryLink.disabled && (
            <a
              href={primaryLink.href}
              target={primaryLink.external ? "_blank" : "_self"}
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-[7px] border border-black/20 text-black text-[10px]
                font-black uppercase tracking-widest rounded-sm hover:border-[#F5A623] hover:text-[#F5A623]
                transition-colors duration-200"
            >
              <i className="fas fa-arrow-up-right-from-square text-[9px]" />
              {primaryLink.label}
            </a>
          )}

          {secondaryLink && !secondaryLink.disabled && (
            <a
              href={secondaryLink.href}
              target={secondaryLink.external ? "_blank" : "_self"}
              rel="noreferrer"
              className="ml-auto flex items-center gap-1 text-[9px] font-black uppercase tracking-widest
                text-neutral-300 hover:text-[#F5A623] transition-colors duration-200"
            >
              <i className="fas fa-code-branch text-[9px]" />
              {secondaryLink.label}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Stats Bar ────────────────────────────────────────────────────────────────

function StatsBar({ projects }: { projects: Project[] }) {
  const featured = projects.filter((p) => p.status?.toLowerCase() === "featured").length;
  const live = projects.filter((p) => p.links.some((l) => l.external)).length;

  return (
    <div className="flex flex-wrap items-center gap-6 py-4 px-5 bg-black mb-6 rounded-sm">
      {[
        { value: projects.length, label: "Projects" },
        { value: featured, label: "Featured" },
        { value: live, label: "Live" },
      ].map(({ value, label }, i, arr) => (
        <div key={label} className="flex items-center gap-6">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-[#F5A623]">{value}</span>
            <span className="text-[10px] text-white/50 uppercase tracking-widest font-bold">{label}</span>
          </div>
          {i < arr.length - 1 && <div className="w-px h-6 bg-white/10 hidden sm:block" />}
        </div>
      ))}

      {/* Tech tag cloud */}
      <div className="flex flex-wrap gap-2 ml-auto">
        {["React", "Node.js", "Next.js", "Docker"].map((tag) => (
          <span
            key={tag}
            className="text-[9px] font-black uppercase tracking-widest px-2 py-1
              border border-[#F5A623]/40 text-[#F5A623]/80 rounded-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export function ProjectsSection({
  onSelectProject,
}: {
  onSelectProject: (project: Project) => void;
}) {
  const projects = portfolioContent.projects as Project[];

  return (
    <div
      className="flex min-h-screen bg-[#f0ede8] font-['Barlow_Condensed',sans-serif]"
      id="projects"
    >
      <SidebarNav />

      <main className="flex-1 min-w-0 py-10 px-6 lg:px-10 xl:px-14 overflow-y-auto">

        {/* Section heading */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="block w-8 h-[3px] bg-[#F5A623]" />
            <p className="text-[10px] font-black tracking-[0.25em] uppercase text-neutral-400">
              What I've built
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-5xl sm:text-6xl font-black uppercase tracking-tight text-black leading-none">
              PROJECT<br />
              <span className="text-[#F5A623]">SHOWCASE</span>
            </h2>

            {/* Quick counts */}
            <div className="flex items-center gap-4 pb-1">
              <div className="text-right">
                <p className="text-3xl font-black text-black leading-none">{projects.length}</p>
                <p className="text-[9px] font-black uppercase tracking-widest text-neutral-400 mt-[2px]">Projects</p>
              </div>
              <div className="w-px h-10 bg-black/15" />
              <div className="text-right">
                <p className="text-3xl font-black text-black leading-none">
                  {projects.reduce((s, p) => s + p.links.filter((l) => !l.disabled).length, 0)}
                </p>
                <p className="text-[9px] font-black uppercase tracking-widest text-neutral-400 mt-[2px]">Live links</p>
              </div>
            </div>
          </div>

          <p className="text-sm text-neutral-500 mt-4 max-w-md leading-relaxed font-['Barlow',sans-serif]">
            Production-grade systems, community platforms, and AI-powered applications — shipped and iterated.
          </p>
        </div>

        {/* Stats bar */}
        <StatsBar projects={projects} />

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              onSelectProject={onSelectProject}
            />
          ))}
        </div>

        {/* Bottom accent */}
        <div className="mt-10 flex items-center gap-4">
          <span className="block flex-1 h-px bg-black/10" />
          <span className="text-[9px] font-black uppercase tracking-[0.3em] text-neutral-300">
            Benjamin · Projects
          </span>
          <span className="block flex-1 h-px bg-black/10" />
        </div>
      </main>
    </div>
  );
}

export default ProjectsSection;