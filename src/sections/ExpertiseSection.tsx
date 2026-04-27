import { motion } from "framer-motion";
import { portfolioContent } from "../data/portfolioContent";
import { ArrowUpRight, Sparkles } from "lucide-react";

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

export function ExpertiseSection() {
  const expertise = portfolioContent.expertise;

  return (
    <section
      id="expertise"
      className="section-surface section-surface-b w-full py-20 md:py-28"
    >
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div {...fadeInUp} className="max-w-3xl mb-12 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-[11px] font-semibold tracking-[0.24em] uppercase text-neutral-500">
              Expertise
            </p>
            <span className="inline-flex items-center gap-1 rounded-full border border-violet-200 bg-violet-50 px-2.5 py-1 text-[10px] font-semibold tracking-[0.12em] uppercase text-violet-700">
              <Sparkles size={12} />
              Focus Areas
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 leading-[1.08]">
            Focus areas where engineering and product thinking meet.
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {expertise.map((item) => (
            <motion.article
              key={item.title}
              variants={fadeInUp}
              className="group rounded-3xl border border-neutral-200 bg-neutral-50 px-6 py-6 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-sm"
            >
              <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                <h3 className="text-lg font-semibold text-neutral-900">
                  {item.title}
                </h3>
                <ArrowUpRight
                  size={16}
                  className="text-neutral-400 transition group-hover:text-neutral-700"
                />
              </div>
              <ul className="mt-4 space-y-2 text-sm text-neutral-600 leading-relaxed">
                {item.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-neutral-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2 border-t border-neutral-200 pt-4">
                <span className="rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-[10px] font-medium tracking-[0.08em] uppercase text-neutral-600">
                  Product Impact
                </span>
                <span className="rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-[10px] font-medium tracking-[0.08em] uppercase text-neutral-600">
                  Scalable Systems
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ExpertiseSection;
