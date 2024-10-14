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
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.2 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <motion.div className="" initial="hidden" whileInView="visible">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="mb-5 flex flex-wrap lg:justify-center"
            initial="hidden"
            whileInView="visible"
            variants={projectVariants(index)}
          >
            <div className="w-full lg:w-1/4">
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="rounded-lg"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((technology, index) => (
                <span
                  key={index}
                  className="inline-block bg-neutral-900 text-neutral-300 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
                >
                  {technology}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Projects;
