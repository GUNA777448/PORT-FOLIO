import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { testimonialsData } from "../data/constants";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="section-surface section-surface-b w-full py-20 md:py-28"
    >
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div {...fadeInUp} className="max-w-3xl mb-12 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-[11px] font-semibold tracking-[0.24em] uppercase text-neutral-500">
              Testimonials
            </p>
            <span className="inline-flex items-center gap-1 rounded-full border border-cyan-200 bg-cyan-50 px-2.5 py-1 text-[10px] font-semibold tracking-[0.12em] uppercase text-cyan-700">
              <Sparkles size={12} />
              Trusted Delivery
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 leading-[1.08]">
            Trusted by teams that value execution, quality, and ownership.
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {testimonialsData.map((item) => (
            <motion.article
              key={item.name}
              variants={fadeInUp}
              className="group rounded-3xl border border-neutral-200 bg-neutral-50 px-6 py-6 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-sm"
            >
              <div className="flex items-center gap-4">
                <img
                  className="h-12 w-12 rounded-full object-cover border border-neutral-200"
                  src={item.image}
                  alt={item.name}
                />
                <div>
                  <h3 className="text-base font-semibold text-neutral-900">
                    {item.name}
                  </h3>
                  <p className="text-sm text-neutral-600">{item.role}</p>
                </div>
                <span className="ml-auto rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-[10px] font-medium tracking-[0.08em] uppercase text-neutral-600">
                  Verified
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-neutral-700">
                {item.quote}
              </p>
              <p className="mt-4 text-[11px] tracking-[0.12em] uppercase text-neutral-500">
                ★★★★★
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
