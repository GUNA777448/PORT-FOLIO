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

export function AboutSection() {
  const aboutStats = portfolioContent.stats.slice(0, 4);
  const aboutHighlights = portfolioContent.domains;

  return (
    <section
      id="about"
      className="section-surface section-surface-a w-full py-20 md:py-28"
    >
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20">
          <div className="lg:col-span-7 space-y-10">
            <motion.div {...fadeInUp} className="space-y-5">
              <p className="text-[11px] font-semibold tracking-[0.24em] uppercase text-neutral-500">
                About
              </p>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 leading-[1.08]">
                Building products that feel simple, fast, and inevitable.
              </h2>
              <div className="space-y-5 text-neutral-600 leading-relaxed max-w-2xl">
                <p className="text-lg">
                  I&apos;m {portfolioContent.name}, {portfolioContent.subtitle}.
                  I focus on removing friction so people can move from intention
                  to outcome with clarity.
                </p>
                <p className="text-base">
                  {portfolioContent.summary} My process combines strong
                  engineering foundations, thoughtful product decisions, and
                  clean execution across web, mobile, and AI systems.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-3"
            >
              {aboutStats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={fadeInUp}
                  className="rounded-2xl border border-neutral-200 bg-white px-6 py-5"
                >
                  <p className="text-3xl md:text-4xl font-semibold text-neutral-900">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[11px] tracking-[0.14em] uppercase text-neutral-500">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              {...fadeInUp}
              className="rounded-3xl border border-neutral-200 bg-white px-7 py-8"
            >
              <div className="flex items-center justify-between pb-5 border-b border-neutral-200">
                <h3 className="text-xl font-semibold text-neutral-900">
                  Core Expertise
                </h3>
                <ArrowUpRight size={18} className="text-neutral-400" />
              </div>

              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="pt-3"
              >
                {aboutHighlights.map((domain) => (
                  <motion.article
                    key={domain.id}
                    variants={fadeInUp}
                    className="py-5 border-b border-neutral-200 last:border-b-0"
                  >
                    <h4 className="text-base font-medium text-neutral-900">
                      {domain.title}
                    </h4>
                    <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                      {domain.summary}
                    </p>
                    <p className="mt-3 text-[11px] tracking-[0.12em] uppercase text-neutral-500">
                      {domain.tags.slice(0, 3).join(" • ")}
                    </p>
                  </motion.article>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
