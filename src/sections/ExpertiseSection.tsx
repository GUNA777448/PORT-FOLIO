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

export function ExpertiseSection() {
  const expertise = portfolioContent.expertise;

  return (
    <section
      id="expertise"
      className="section-surface section-surface-b w-full py-20 md:py-28"
    >
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div {...fadeInUp} className="max-w-3xl mb-12 space-y-4">
          <p className="text-[11px] font-semibold tracking-[0.24em] uppercase text-neutral-500">
            Expertise
          </p>
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
              className="rounded-3xl border border-neutral-200 bg-neutral-50 px-6 py-6"
            >
              <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                <h3 className="text-lg font-semibold text-neutral-900">
                  {item.title}
                </h3>
                <ArrowUpRight size={16} className="text-neutral-400" />
              </div>
              <ul className="mt-4 space-y-2 text-sm text-neutral-600 leading-relaxed">
                {item.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ExpertiseSection;
