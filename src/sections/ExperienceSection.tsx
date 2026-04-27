import { motion } from "framer-motion";
import { portfolioContent } from "../data/portfolioContent";
import { ArrowUpRight } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export function ExperienceSection() {
  const experiences = portfolioContent.timeline;
  const academics = portfolioContent.academics;

  return (
    <section
      id="experience"
      className="section-surface section-surface-a w-full py-20 md:py-28"
    >
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div {...fadeInUp} className="max-w-3xl mb-12 space-y-4">
          <p className="text-[11px] font-semibold tracking-[0.24em] uppercase text-neutral-500">
            Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 leading-[1.08]">
            Milestones shaped by delivery, ownership, and continuous learning.
          </h2>
          <p className="text-base text-neutral-600 leading-relaxed">
            A concise view of professional impact and academic foundation.
          </p>
        </motion.div>

        <div className="space-y-12">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
              <h3 className="text-lg font-semibold text-neutral-900">
                Professional
              </h3>
              <ArrowUpRight size={16} className="text-neutral-400" />
            </div>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {experiences.map((exp) => (
                <motion.article
                  key={`${exp.title}-${exp.organization}`}
                  variants={fadeInUp}
                  className="rounded-3xl border border-neutral-200 bg-white px-6 py-6"
                >
                  <p className="text-[11px] tracking-[0.12em] uppercase text-neutral-500">
                    {exp.date}
                  </p>
                  <h4 className="mt-2 text-xl font-semibold text-neutral-900">
                    {exp.title}
                  </h4>
                  <p className="mt-1 text-sm text-neutral-600">
                    {exp.organization}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-neutral-600 leading-relaxed">
                    {exp.points.map((point, idx) => (
                      <li key={idx}>• {point}</li>
                    ))}
                  </ul>
                  {exp.metrics?.length ? (
                    <div className="mt-5 flex flex-wrap gap-3 border-t border-neutral-200 pt-4">
                      {exp.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="rounded-xl bg-neutral-50 px-3 py-2"
                        >
                          <p className="text-sm font-semibold text-neutral-900">
                            {metric.value}
                          </p>
                          <p className="text-[10px] tracking-widest uppercase text-neutral-500">
                            {metric.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </motion.article>
              ))}
            </motion.div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
              <h3 className="text-lg font-semibold text-neutral-900">
                Academic
              </h3>
              <ArrowUpRight size={16} className="text-neutral-400" />
            </div>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {academics.map((academic) => (
                <motion.article
                  key={academic.title}
                  variants={fadeInUp}
                  className="rounded-3xl border border-neutral-200 bg-white px-6 py-6"
                >
                  <p className="text-[11px] tracking-[0.12em] uppercase text-neutral-500">
                    {academic.date}
                  </p>
                  <h4 className="mt-2 text-lg font-semibold text-neutral-900">
                    {academic.title}
                  </h4>
                  <p className="mt-1 text-sm text-neutral-600">
                    {academic.institution}
                  </p>
                  <p className="mt-4 inline-flex rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700">
                    {academic.score} {academic.scoreLabel}
                  </p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
