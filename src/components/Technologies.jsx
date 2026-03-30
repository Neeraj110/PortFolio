import { FaGithub } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import {
  SiExpress,
  SiMongodb,
  SiSocketdotio,
  SiRedis,
  SiPostman,
  SiRedux,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { motion } from "framer-motion";

const TECHNOLOGIES = [
  { icon: RiReactjsLine, name: "React", color: "#61DAFB" },
  { icon: FaNodeJs, name: "Node.js", color: "#68A063" },
  { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { icon: RiTailwindCssFill, name: "Tailwind CSS", color: "#38BDF8" },
  { icon: SiExpress, name: "Express.js", color: "#ffffff" },
  { icon: TbBrandNextjs, name: "Next.js", color: "#ffffff" },
  { icon: FaGithub, name: "GitHub", color: "#ffffff" },
  { icon: SiSocketdotio, name: "Socket.io", color: "#ffffff" },
  { icon: SiRedis, name: "Redis", color: "#DC382D" },
  { icon: SiPostman, name: "Postman", color: "#FF6C37" },
  { icon: SiRedux, name: "Redux", color: "#764ABC" },
];

function Technologies() {
  // Duplicate the list to create a seamless loop
  const doubledTech = [...TECHNOLOGIES, ...TECHNOLOGIES];

  return (
    <section className="w-full py-12 md:py-24 overflow-hidden">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold tracking-tight text-center mb-4 lg:text-4xl"
      >
        Technologies I Work With
      </motion.h2>
      <motion.p
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-neutral-400 text-sm md:text-base text-center mb-12 md:mb-16 max-w-lg mx-auto"
      >
        Tools and frameworks I use to bring ideas to life.
      </motion.p>

      {/* Marquee container */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-neutral-950 to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-neutral-950 to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div className="flex marquee-track">
          {doubledTech.map((tech, index) => (
            <div
              key={index}
              className="group flex-shrink-0 flex flex-col items-center justify-center mx-4 md:mx-6 px-6 md:px-8 py-5 md:py-6 rounded-xl border border-neutral-800 bg-neutral-950/50 backdrop-blur-sm hover:bg-neutral-900/60 hover:border-neutral-700 transition-all duration-300 cursor-default min-w-[120px] md:min-w-[140px]"
            >
              <tech.icon
                className="text-4xl md:text-5xl lg:text-6xl transition-transform duration-300 group-hover:scale-110"
                style={{ color: tech.color }}
              />
              <span className="mt-3 text-xs md:text-sm text-neutral-500 group-hover:text-neutral-200 transition-colors whitespace-nowrap font-medium">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Technologies;