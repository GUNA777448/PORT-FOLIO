import { motion } from "framer-motion";
import { portfolioContent } from "../data/portfolioContent";
import { ArrowUpRight } from "lucide-react";

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

  return (
    <section
      id="skills"
      className="section-surface section-surface-b w-full py-20 md:py-28"
    >
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div {...fadeInUp} className="max-w-3xl mb-12 space-y-4">
          <p className="text-[11px] font-semibold tracking-[0.24em] uppercase text-neutral-500">
            Technology Stack
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 leading-[1.08]">
            Tools selected for reliability, speed, and product quality.
          </h2>
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
              className="rounded-3xl border border-neutral-200 bg-neutral-50 px-6 py-6"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-neutral-900">
                  {category}
                </h3>
                <ArrowUpRight size={16} className="text-neutral-400" />
              </div>
              <p className="mt-3 text-[11px] tracking-[0.12em] uppercase text-neutral-500">
                {skills.length} Skills
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-700"
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
