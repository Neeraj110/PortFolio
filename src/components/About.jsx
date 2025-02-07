import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const About = () => {
  // Split about text into paragraphs
  const paragraphs = ABOUT_TEXT.split("  ").filter((p) => p.trim());

  return (
    <section className="w-full py-12 md:py-24">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold tracking-tight text-center mb-8 md:mb-12 lg:text-4xl"
      >
        About Me
      </motion.h2>

      <Card className="border-neutral-800 bg-neutral-950/50 backdrop-blur-sm">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="p-6 md:p-8"
        >
          <div className="space-y-6">
            {paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-neutral-300 text-base md:text-lg leading-relaxed"
              >
                {paragraph.trim()}
              </motion.p>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            <div className="text-center p-4 rounded-lg bg-neutral-900/50">
              <h3 className="text-2xl font-bold text-neutral-100">2+</h3>
              <p className="text-sm text-neutral-400">Years Learning</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-neutral-900/50">
              <h3 className="text-2xl font-bold text-neutral-100">5+</h3>
              <p className="text-sm text-neutral-400">Projects</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-neutral-900/50">
              <h3 className="text-2xl font-bold text-neutral-100">5+</h3>
              <p className="text-sm text-neutral-400">Technologies</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-neutral-900/50">
              <h3 className="text-2xl font-bold text-neutral-100">100%</h3>
              <p className="text-sm text-neutral-400">Dedication</p>
            </div>
          </motion.div>
        </motion.div>
      </Card>
    </section>
  );
};

export default About;
