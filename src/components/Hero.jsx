import { HERO_CONTENT as Hero_Content } from "../constants/index";
import profilePic from "../assets/profilePic.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: delay,
    },
  },
});

function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4  lg:mb-35 ">
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              // transition={{ delay: 0.5 }}
              className="text-4xl lg:text-5xl font-bold text-neutral-100"
            >
              Neeraj Gaur
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent mt-4"
            >
              FrontEnd Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className=" lg:text-xl text-neutral-300 mt-4 lg:mt-4 "
            >
              {Hero_Content}
            </motion.p>
          </div>
        </div>
        <div className=" w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              src={profilePic}
              alt="Profile Picture of Neeraj Gaur"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
