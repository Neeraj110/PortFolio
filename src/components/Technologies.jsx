import { FaGithub } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const TECHNOLOGIES = [
  {
    icon: RiReactjsLine,
    name: "React",
    color: "#61DAFB",
    duration: 2.5,
  },
  {
    icon: FaNodeJs,
    name: "Node.js",
    color: "#68A063",
    duration: 3,
  },
  {
    icon: SiMongodb,
    name: "MongoDB",
    color: "#47A248",
    duration: 2,
  },
  {
    icon: RiTailwindCssFill,
    name: "Tailwind CSS",
    color: "#38BDF8",
    duration: 5,
  },
  {
    icon: SiExpress,
    name: "Express.js",
    color: "#ffffff",
    duration: 2,
  },
  {
    icon: TbBrandNextjs,
    name: "Next.js",
    color: "#ffffff",
    duration: 6,
  },
  {
    icon: FaGithub,
    name: "GitHub",
    color: "#ffffff",
    duration: 3,
  },
];

const iconVariants = (duration) => ({
  initial: { y: 0, scale: 1 },
  animate: {
    y: [-10, 10, -10],
    scale: [1, 1.1, 1],
    transition: {
      duration: duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
  hover: {
    scale: 1.2,
    transition: {
      duration: 0.3,
    },
  },
});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function Technologies() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold tracking-tight text-center mb-12 md:mb-16 lg:text-4xl"
        >
          Technologies I Work With
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {TECHNOLOGIES.map((tech, index) => (
            <Card
              key={index}
              className="group relative flex flex-col items-center justify-center p-6 backdrop-blur-sm bg-neutral-950/50 border-neutral-800 hover:bg-neutral-900/50 transition-all duration-300"
            >
              <motion.div
                variants={iconVariants(tech.duration)}
                initial="initial"
                animate="animate"
                whileHover="hover"
                className="relative"
              >
                <tech.icon 
                  className="text-5xl md:text-6xl lg:text-7xl transition-all duration-300" 
                  style={{ color: tech.color }}
                />
              </motion.div>
              <span className="mt-4 text-sm md:text-base text-neutral-400 group-hover:text-neutral-200 transition-colors">
                {tech.name}
              </span>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Technologies;