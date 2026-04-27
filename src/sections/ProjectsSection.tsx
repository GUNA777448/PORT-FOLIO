import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { portfolioContent } from "../data/portfolioContent";
import type { Project } from "../types/portfolio";

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

export function ProjectsSection({
  onSelectProject,
}: {
  onSelectProject: (project: Project) => void;
}) {
  const projects = portfolioContent.projects as Project[];

  return (
    <section
      id="projects"
      className="section-surface section-surface-a w-full py-20 md:py-28"
    >
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div {...fadeInUp} className="max-w-3xl mb-12 space-y-4">
          <p className="text-[11px] font-semibold tracking-[0.24em] uppercase text-neutral-500">
            Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 leading-[1.08]">
            Selected work with a focus on clarity, performance, and impact.
          </h2>
          <p className="text-base text-neutral-600 leading-relaxed">
            Production products, community platforms, and AI-powered systems
            delivered end to end.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {projects.map((project) => {
            const primaryLink = project.links.find((link) => !link.disabled);

            return (
              <motion.article
                key={project.title}
                variants={fadeInUp}
                className="rounded-3xl border border-neutral-200 bg-white px-6 py-6"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-neutral-900">
                    {project.title}
                  </h3>
                  {project.status ? (
                    <span className="rounded-full border border-neutral-200 bg-neutral-50 px-2 py-1 text-[10px] tracking-widest uppercase text-neutral-600">
                      {project.status}
                    </span>
                  ) : null}
                </div>

                <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                  {project.description}
                </p>
                <p className="mt-3 text-[11px] tracking-[0.12em] uppercase text-neutral-500">
                  {project.tech}
                </p>

                <div className="mt-5 flex items-center gap-3 border-t border-neutral-200 pt-4">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="rounded-full bg-neutral-900 px-4 py-2 text-xs font-medium text-white hover:bg-black transition-colors"
                  >
                    View Details
                  </button>

                  {primaryLink ? (
                    <a
                      href={primaryLink.href}
                      target={primaryLink.external ? "_blank" : "_self"}
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 rounded-full border border-neutral-200 px-4 py-2 text-xs font-medium text-neutral-700 hover:border-neutral-300"
                    >
                      {primaryLink.label}
                      <ArrowUpRight size={14} />
                    </a>
                  ) : null}
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default ProjectsSection;
