import { motion } from "framer-motion";
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
          <p className="text-[11px] font-semibold tracking-[0.24em] uppercase text-neutral-500">
            Testimonials
          </p>
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
              className="rounded-3xl border border-neutral-200 bg-neutral-50 px-6 py-6"
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
