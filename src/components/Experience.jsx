import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const experienceVariants = (direction) => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -100 : 100,
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

function Experience() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.2 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h2>
      <div className="">
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            className="mb-5 flex flex-wrap lg:justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }} // Triggers every time you scroll
            variants={experienceVariants(index % 2 === 0 ? "left" : "right")}
          >
            <div className="w-full lg:w-1/4">
              <h3 className="text-lg font-semibold">{experience.year}</h3>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-6 font-semibold">
                {experience.role}-{" "}
                <span className="text-sm text-purple-100">
                  {experience.company}
                </span>
              </h6>
              <p className="mb-3 text-neutral-400">{experience.description}</p>
              {experience.technologies.map((technology, index) => (
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
      </div>
    </div>
  );
}

export default Experience;
