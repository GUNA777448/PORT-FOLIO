import { useMemo, useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface SkillGroup {
  title: string;
  iconClass: string;
  items: string[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const skillCategories: Record<string, string[]> = {
  Languages: ["Python", "Java", "Dart", "C", "JavaScript", "SQL"],
  Frameworks: [
    "React.js",
    "Node.js",
    "Express.js",
    "Flask",
    "Next.js",
    "Flutter",
  ],
  Tools: ["Git", "GitHub", "VSCode", "Postman", "n8n", "Android Studio"],
  Databases: ["Firebase", "Supabase", "MongoDB", "Pinecone", "MySQL"],
};

const categoryIcons: Record<string, string> = {
  Languages: "fas fa-code",
  Frameworks: "fas fa-cubes",
  Tools: "fas fa-screwdriver-wrench",
  Databases: "fas fa-database",
};

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

function getSkillIcon(skill: string, fallback: string): string {
  return skillIcons[skill.toLowerCase()] ?? fallback;
}

// ─── Nav items (mirroring the template) ───────────────────────────────────────

const navItems = [
  "HOME",
  "ABOUT ME",
  "RESUME",
  "PORTFOLIO",
  "TESTIMONIALS",
  "CONTACT",
];
const navIcons = [
  "fas fa-house",
  "fas fa-user",
  "fas fa-file-lines",
  "fas fa-briefcase",
  "fas fa-comment-dots",
  "fas fa-envelope",
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function SidebarNav() {
  return <></>;
}

function SkillPill({ item, iconClass }: { item: string; iconClass: string }) {
  return (
    <span
      className="inline-flex items-center gap-[6px] px-3 py-[6px] bg-white border border-black/10
        text-[11px] font-semibold text-neutral-700 tracking-wide rounded-sm
        hover:bg-[#F5A623] hover:text-white hover:border-[#F5A623] transition-all duration-200 cursor-default group"
    >
      <i
        className={`${getSkillIcon(item, iconClass)} text-[#F5A623] group-hover:text-white transition-colors duration-200 text-[10px]`}
      />
      <span>{item}</span>
    </span>
  );
}

function MeterBar({ strength }: { strength: number }) {
  return (
    <div className="w-full h-[3px] bg-black/10 rounded-full overflow-hidden mt-3 mb-4">
      <div
        className="h-full bg-[#F5A623] rounded-full transition-all duration-700"
        style={{ width: `${strength}%` }}
      />
    </div>
  );
}

function SkillCard({
  group,
  strength,
}: {
  group: SkillGroup;
  strength: number;
}) {
  return (
    <div
      className="bg-white border border-black/10 rounded-sm p-5
        hover:shadow-[4px_4px_0px_#F5A623] hover:-translate-y-[2px] hover:-translate-x-[2px]
        transition-all duration-200 flex flex-col gap-0 group"
    >
      {/* Card head */}
      <div className="flex items-center gap-3 mb-1">
        <div className="w-9 h-9 bg-black flex items-center justify-center rounded-sm shrink-0 transition-colors duration-200 group-hover:bg-[#F5A623]">
          <i
            className={`${group.iconClass} text-[#F5A623] text-sm transition-colors duration-200 group-hover:text-black`}
          />
        </div>
        <div>
          <h3 className="text-sm font-black text-black tracking-wider uppercase leading-none">
            {group.title}
          </h3>
          <p className="text-[10px] text-neutral-400 mt-[2px] font-medium tracking-widest uppercase">
            {group.items.length} tools
          </p>
        </div>
        <span className="ml-auto text-[11px] font-black text-[#F5A623]">
          {strength}%
        </span>
      </div>

      <MeterBar strength={strength} />

      {/* Pills */}
      <div className="flex flex-wrap gap-[6px]">
        {group.items.map((item) => (
          <SkillPill key={item} item={item} iconClass={group.iconClass} />
        ))}
      </div>
    </div>
  );
}

function StatsBar({ groups }: { groups: SkillGroup[] }) {
  const total = groups.reduce((s, g) => s + g.items.length, 0);

  return (
    <div className="flex flex-wrap items-center gap-6 py-4 px-5 bg-black mb-6 rounded-sm">
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-black text-[#F5A623]">{total}</span>
        <span className="text-[10px] text-white/50 uppercase tracking-widest font-bold">
          Tools in stack
        </span>
      </div>
      <div className="w-px h-6 bg-white/10 hidden sm:block" />
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-black text-[#F5A623]">
          {groups.length}
        </span>
        <span className="text-[10px] text-white/50 uppercase tracking-widest font-bold">
          Skill tracks
        </span>
      </div>
      <div className="w-px h-6 bg-white/10 hidden sm:block" />
      <div className="flex flex-wrap gap-2 ml-auto">
        {groups.map((g) => (
          <span
            key={g.title}
            className="text-[9px] font-black uppercase tracking-widest px-2 py-1
              border border-[#F5A623]/40 text-[#F5A623]/80 rounded-sm"
          >
            {g.title}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export function SkillsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const groups: SkillGroup[] = useMemo(() => {
    const entries = Object.entries(skillCategories);
    const max = Math.max(...entries.map(([, items]) => items.length), 1);
    return entries.map(([title, items]) => ({
      title,
      items,
      iconClass: categoryIcons[title] ?? "fas fa-bolt",
      strength: Math.round((items.length / max) * 100),
    }));
  }, []);

  const filters = ["All", ...groups.map((g) => g.title)];

  const visibleGroups = useMemo(
    () =>
      activeFilter === "All"
        ? groups
        : groups.filter((g) => g.title === activeFilter),
    [activeFilter, groups],
  );

  return (
    /* Font import via link tag — include in your index.html if not already:
       <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;900&family=Barlow:wght@400;500;600&display=swap" rel="stylesheet" />
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
    */
    <div
      className="flex min-h-screen bg-[#f0ede8] font-['Barlow_Condensed',sans-serif]"
      id="skills"
    >
      <SidebarNav />

      {/* Main content */}
      <main className="flex-1 min-w-0 py-10 px-6 lg:px-10 xl:px-14 overflow-y-auto">
        {/* Section heading */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            {/* Yellow accent bar */}
            <span className="block w-8 h-[3px] bg-[#F5A623]" />
            <p className="text-[10px] font-black tracking-[0.25em] uppercase text-neutral-400">
              Stack overview
            </p>
          </div>
          <h2 className="text-5xl sm:text-6xl font-black uppercase tracking-tight text-black leading-none">
            SKILLS
          </h2>
          <p className="text-sm text-neutral-500 mt-3 max-w-md leading-relaxed font-['Barlow',sans-serif]">
            My toolkit spans product engineering, AI workflows, and
            shipping-ready platforms.
          </p>
        </div>

        {/* Stats bar */}
        <StatsBar groups={groups} />

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-[6px] text-[10px] font-black uppercase tracking-widest rounded-sm
                border transition-all duration-150
                ${
                  activeFilter === f
                    ? "bg-[#F5A623] text-white border-[#F5A623]"
                    : "bg-white text-black border-black/20 hover:border-[#F5A623] hover:text-[#F5A623]"
                }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-4">
          {visibleGroups.map((group) => (
            <SkillCard
              key={group.title}
              group={group}
              strength={Math.round(
                (group.items.length /
                  Math.max(...groups.map((g) => g.items.length), 1)) *
                  100,
              )}
            />
          ))}
        </div>

        {/* Bottom accent line */}
        <div className="mt-10 flex items-center gap-4">
          <span className="block flex-1 h-px bg-black/10" />
          <span className="text-[9px] font-black uppercase tracking-[0.3em] text-neutral-300">
            Benjamin · Skills
          </span>
          <span className="block flex-1 h-px bg-black/10" />
        </div>
      </main>
    </div>
  );
}

export default SkillsSection;
