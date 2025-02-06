import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const projectVariants = (index) => ({
  hidden: {
    opacity: 0,
    x: index % 2 === 0 ? -100 : 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
});

function Projects() {
  return (
    <section className="container mx-auto px-4 py-10">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.2 }}
        className="mb-12 text-center text-4xl font-bold"
      >
        Projects
      </motion.h2>

      <motion.div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="rounded-lg border border-gray-200 p-6 shadow-lg"
            initial="hidden"
            whileInView="visible"
            variants={projectVariants(index)}
          >
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="mt-2 text-gray-600">{project.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="rounded bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600"
              >
                View Project
              </a>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Projects;