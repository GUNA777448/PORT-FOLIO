import { portfolioContent } from "../data/portfolioContent";

const heroArt = new URL("../assets/Hero.svg", import.meta.url).href;

const experienceImages = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYg7-xo8pyYpNuAW5Xro2uAOYlQNZAf8RL9A&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqMKKEKaS0oHNF6THZGB4ciqrD-lDsuCtEEA&s",
];

const academicImages = [
  "https://ik.imagekit.io/syustaging/SYU_PREPROD/Logo_bJ3YDL-nJ.webp?tr=w-3840",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV4f3szxe4WVLRtZ6kEPWvnnMs-gEfAm0Lmg&s",
];

type ExperienceCardModel = {
  title: string;
  organization: string;
  date: string;
  iconClass: string;
  points: string[];
  metrics: { value: string; label: string }[];
  imageSrc: string;
  kind: "experience" | "education";
};

function SidebarNav() {
  return <></>;
}

function ExperienceCard({
  card,
  index,
}: {
  card: ExperienceCardModel;
  index: number;
}) {
  return (
    <div
      className="relative bg-white border border-black/10 rounded-sm overflow-hidden flex flex-col
        hover:shadow-[5px_5px_0px_#F5A623] hover:-translate-y-0.75 hover:-translate-x-0.75
        transition-all duration-200 group"
    >
      <span className="block h-0.75 w-full bg-[#F5A623]" />

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-4 mb-5">
          <div className="w-11 h-11 bg-black flex items-center justify-center rounded-sm shrink-0 transition-colors duration-300 group-hover:bg-[#F5A623]">
            <i
              className={`${card.iconClass} text-[#F5A623] group-hover:text-white text-base transition-colors duration-300`}
            />
          </div>

          <div className="min-w-0">
            <h3
              className="text-base font-black uppercase tracking-widest text-black leading-none
                font-['Barlow_Condensed',sans-serif]"
            >
              {card.title}
            </h3>
            <p className="text-[10px] text-neutral-500 mt-1.5 truncate font-['Barlow',sans-serif]">
              {card.organization}
            </p>
            <span className="block w-6 h-0.5 bg-[#F5A623] mt-1.5" />
          </div>

          <span
            className="ml-auto text-4xl font-black text-black/5 leading-none select-none
              group-hover:text-[#F5A623]/10 transition-colors duration-300
              font-['Barlow_Condensed',sans-serif]"
          >
            0{index + 1}
          </span>
        </div>

        <div className="w-full h-px bg-black/8 mb-4" />

        <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#F5A623] mb-4">
          {card.date}
        </p>

        <ul className="flex flex-col gap-3 flex-1">
          {card.points.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <span className="mt-1.25 w-1.5 h-1.5 rounded-full bg-[#F5A623] shrink-0 group-hover:scale-125 transition-transform duration-200" />
              <span className="text-sm text-neutral-600 leading-snug font-['Barlow',sans-serif] group-hover:text-black transition-colors duration-200">
                {point}
              </span>
            </li>
          ))}
        </ul>

        {card.metrics.length > 0 ? (
          <div className="mt-5 flex flex-wrap gap-2">
            {card.metrics.map((metric) => (
              <span
                key={metric.label}
                className="inline-flex items-center gap-1 px-2 py-0.75 text-[9px] font-black uppercase tracking-[0.15em]
                  border border-black/10 rounded-sm text-neutral-500 group-hover:border-[#F5A623]/40 group-hover:text-[#F5A623]
                  transition-colors duration-200"
              >
                <strong>{metric.value}</strong>
                {metric.label}
              </span>
            ))}
          </div>
        ) : null}

        <div className="mt-5 pt-4 border-t border-black/8 flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-neutral-300 group-hover:text-[#F5A623] transition-colors duration-300">
            <i className={`${card.iconClass} text-[9px]`} />
            {card.kind === "experience" ? "Role" : "Academic"}
          </span>

          <img
            src={card.imageSrc}
            alt=""
            aria-hidden="true"
            className="w-9 h-9 rounded-sm object-cover border border-black/10"
          />
        </div>
      </div>
    </div>
  );
}

export function ExperienceSection() {
  const experienceCards: ExperienceCardModel[] = [
    ...portfolioContent.timeline.map((item, index) => ({
      title: item.title,
      organization: item.organization,
      date: item.date,
      iconClass: item.iconClass,
      points: item.points,
      metrics: item.metrics,
      imageSrc: experienceImages[index] ?? heroArt,
      kind: "experience" as const,
    })),
    ...portfolioContent.academics.map((academic, index) => ({
      title: academic.title,
      organization: academic.institution,
      date: academic.date,
      iconClass: "fas fa-graduation-cap",
      points: [`${academic.scoreLabel}: ${academic.score}`],
      metrics: [{ value: academic.score, label: academic.scoreLabel }],
      imageSrc: academicImages[index] ?? heroArt,
      kind: "education" as const,
    })),
  ];

  return (
    <section id="experience" className="screen-section reveal-block">
      <div className="content-shell w-full">
        <SidebarNav />

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="block w-8 h-0.75 bg-[#F5A623]" />
            <p className="text-[10px] font-black tracking-[0.25em] uppercase text-neutral-400">
              Career Journey
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-5xl sm:text-6xl font-black uppercase tracking-tight text-black leading-none">
              EXPERIENCE
              <br />
              <span className="text-[#F5A623]">TIMELINE</span>
            </h2>

            <div className="flex items-center gap-4 pb-1">
              <div className="text-right">
                <p className="text-3xl font-black text-black leading-none">
                  {portfolioContent.timeline.length}
                </p>
                <p className="text-[9px] font-black uppercase tracking-widest text-neutral-400 mt-0.5">
                  Roles
                </p>
              </div>
              <div className="w-px h-10 bg-black/15" />
              <div className="text-right">
                <p className="text-3xl font-black text-black leading-none">
                  {portfolioContent.academics.length}
                </p>
                <p className="text-[9px] font-black uppercase tracking-widest text-neutral-400 mt-0.5">
                  Academics
                </p>
              </div>
            </div>
          </div>

          <p className="text-sm text-neutral-500 mt-4 max-w-md leading-relaxed font-['Barlow',sans-serif]">
            A compact view of the leadership roles, delivery impact, and
            academic foundation behind my work.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {experienceCards.map((card, index) => (
            <ExperienceCard
              key={`${card.kind}-${card.title}`}
              card={card}
              index={index}
            />
          ))}
        </div>

        <div className="mt-10 flex items-center gap-4">
          <span className="block flex-1 h-px bg-black/10" />
          <span className="text-[9px] font-black uppercase tracking-[0.3em] text-neutral-300">
            Benjamin · Experience Timeline
          </span>
          <span className="block flex-1 h-px bg-black/10" />
        </div>
      </div>
    </section>
  );
}
