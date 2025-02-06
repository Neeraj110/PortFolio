import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-10 text-center text-4xl">About Me</h1>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full "
      >
        <div className="flex items-center justify-center">
          <p className=" lg:text-xl text-neutral-300 mt-4 lg:mt-4 whitespace-normal">
            {ABOUT_TEXT}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
