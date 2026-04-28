import { motion } from "framer-motion";
import { portfolioContent } from "../data/portfolioContent";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { AnimatedTextGenerate } from "../components/ui/animated-textgenerate";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export function SkillsSection() {
  const categories = Object.entries(portfolioContent.skillCategories);
  const totalSkills = categories.reduce(
    (sum, [, skills]) => sum + skills.length,
    0,
  );
  const introText =
    "Pressure changes everything. Some people fold, but the right stack keeps you focused, fast, and steady when the deadline gets real.";

  return (
    <section
      id="skills"
      className="section-surface section-surface-b w-full py-20 md:py-28"
    >
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div {...fadeInUp} className="max-w-3xl mb-12 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-[11px] font-semibold tracking-[0.24em] uppercase text-neutral-500">
              Technology Stack
            </p>
            <span className="inline-flex items-center gap-1 rounded-full border border-sky-200 bg-sky-50 px-2.5 py-1 text-[10px] font-semibold tracking-[0.12em] uppercase text-sky-700">
              <Sparkles size={12} />
              {totalSkills} Capabilities
            </span>
          </div>
          <AnimatedTextGenerate
            className="max-w-3xl"
            textClassName="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-900 leading-[1.12]"
            text={introText}
            blurEffect
            speed={1}
            highlightWords={["Pressure", "focused", "fast", "deadline"]}
            highlightClassName="text-sky-700 dark:text-sky-400 font-bold"
            linkWords={["focused", "deadline", "stack"]}
            linkHrefs={["#projects", "#contact", "#about"]}
            linkClassNames={[
              "decoration-sky-500 hover:decoration-sky-400",
              "decoration-rose-500 hover:decoration-rose-400",
              "decoration-violet-500 hover:decoration-violet-400",
            ]}
          />
          <p className="text-base text-neutral-600 leading-relaxed">
            A compact stack that helps me ship fast, keep systems maintainable,
            and scale with confidence.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {categories.map(([category, skills]) => (
            <motion.article
              key={category}
              variants={fadeInUp}
              className="group rounded-3xl border border-neutral-200 bg-neutral-50 px-6 py-6 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-sm"
            >
              <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                <h3 className="text-lg font-semibold text-neutral-900">
                  {category}
                </h3>
                <ArrowUpRight
                  size={16}
                  className="text-neutral-400 transition group-hover:text-neutral-700"
                />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <p className="text-[11px] tracking-[0.12em] uppercase text-neutral-500">
                  {skills.length} Skills
                </p>
                <span className="rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-[10px] font-medium tracking-[0.08em] uppercase text-neutral-600">
                  Active
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-700 transition group-hover:border-neutral-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default SkillsSection;
