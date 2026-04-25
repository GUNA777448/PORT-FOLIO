// Dependencies in index.html:
// <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;900&family=Barlow:wght@400;500;600&display=swap" rel="stylesheet" />
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />

import { portfolioContent } from "../data/portfolioContent";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ExpertiseCard {
  title: string;
  iconClass: string;
  points: string[];
}

// ─── Sidebar Nav (shared pattern from SkillsSection) ─────────────────────────

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

// ─── Expertise Card ───────────────────────────────────────────────────────────

function ExpertiseCard({ card, index }: { card: ExpertiseCard; index: number }) {
  // Alternating accent position — first two cards get top accent, last two get side accent
  const isAccentTop = index % 2 === 0;

  return (
    <div
      className={`relative bg-white border border-black/10 rounded-sm overflow-hidden flex flex-col
        hover:shadow-[5px_5px_0px_#F5A623] hover:-translate-y-[3px] hover:-translate-x-[3px]
        transition-all duration-200 group`}
    >
      {/* Top yellow accent line */}
      <span
        className={`block h-[3px] w-full bg-[#F5A623] transition-all duration-300
          ${isAccentTop ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
      />

      <div className="p-6 flex flex-col flex-1">
        {/* Card head */}
        <div className="flex items-center gap-4 mb-5">
          {/* Icon box */}
          <div className="w-11 h-11 bg-black flex items-center justify-center rounded-sm shrink-0
            group-hover:bg-[#F5A623] transition-colors duration-300">
            <i className={`${card.iconClass} text-[#F5A623] group-hover:text-white text-base transition-colors duration-300`} />
          </div>

          <div>
            <h3
              className="text-base font-black uppercase tracking-widest text-black leading-none
                font-['Barlow_Condensed',sans-serif]"
            >
              {card.title}
            </h3>
            <span className="block w-6 h-[2px] bg-[#F5A623] mt-[6px]" />
          </div>

          {/* Index number — top-right corner */}
          <span
            className="ml-auto text-4xl font-black text-black/5 leading-none select-none
              group-hover:text-[#F5A623]/10 transition-colors duration-300
              font-['Barlow_Condensed',sans-serif]"
          >
            0{index + 1}
          </span>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-black/8 mb-5" />

        {/* Points list */}
        <ul className="flex flex-col gap-3 flex-1">
          {card.points.map((point) => (
            <li key={point} className="flex items-start gap-3">
              {/* Bullet */}
              <span
                className="mt-[5px] w-[6px] h-[6px] rounded-full bg-[#F5A623] shrink-0
                  group-hover:scale-125 transition-transform duration-200"
              />
              <span
                className="text-sm text-neutral-600 leading-snug font-['Barlow',sans-serif]
                  group-hover:text-black transition-colors duration-200"
              >
                {point}
              </span>
            </li>
          ))}
        </ul>

        {/* Bottom tag */}
        <div className="mt-6 pt-4 border-t border-black/8">
          <span
            className="inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em]
              text-neutral-300 group-hover:text-[#F5A623] transition-colors duration-300"
          >
            <i className={`${card.iconClass} text-[9px]`} />
            {card.title}
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export function ExpertiseSection() {
  const expertise = portfolioContent.expertise as ExpertiseCard[];

  return (
    <div
      className="flex min-h-screen bg-[#f0ede8] font-['Barlow_Condensed',sans-serif]"
      id="expertise"
    >
      <SidebarNav />

      {/* Main content */}
      <main className="flex-1 min-w-0 py-10 px-6 lg:px-10 xl:px-14 overflow-y-auto">

        {/* Section heading */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="block w-8 h-[3px] bg-[#F5A623]" />
            <p className="text-[10px] font-black tracking-[0.25em] uppercase text-neutral-400">
              What I do
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-5xl sm:text-6xl font-black uppercase tracking-tight text-black leading-none">
              CORE<br />
              <span className="text-[#F5A623]">EXPERTISE</span>
            </h2>

            {/* Summary strip */}
            <div className="flex items-center gap-4 pb-1">
              <div className="text-right">
                <p className="text-3xl font-black text-black leading-none">{expertise.length}</p>
                <p className="text-[9px] font-black uppercase tracking-widest text-neutral-400 mt-[2px]">
                  Disciplines
                </p>
              </div>
              <div className="w-px h-10 bg-black/15" />
              <div className="text-right">
                <p className="text-3xl font-black text-black leading-none">
                  {expertise.reduce((s, c) => s + c.points.length, 0)}
                </p>
                <p className="text-[9px] font-black uppercase tracking-widest text-neutral-400 mt-[2px]">
                  Core skills
                </p>
              </div>
            </div>
          </div>

          <p className="text-sm text-neutral-500 mt-4 max-w-md leading-relaxed font-['Barlow',sans-serif]">
            From full-stack engineering to applied AI — here's where I deliver the most impact.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {expertise.map((card, i) => (
            <ExpertiseCard key={card.title} card={card} index={i} />
          ))}
        </div>

        {/* Bottom accent */}
        <div className="mt-10 flex items-center gap-4">
          <span className="block flex-1 h-px bg-black/10" />
          <span className="text-[9px] font-black uppercase tracking-[0.3em] text-neutral-300">
            Benjamin · Core Expertise
          </span>
          <span className="block flex-1 h-px bg-black/10" />
        </div>
      </main>
    </div>
  );
}

export default ExpertiseSection;