import { CONTACT } from "../constants";
import { motion } from "framer-motion";

// Animation variants for contact details
const contactVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

// Container to stagger the animations of each contact detail
const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Delay between each contact detail animation
    },
  },
};

function Contact() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-10 text-center text-4xl">Get in Touch</h2>
      <motion.div
        className="text-center tracking-tighter mb-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }} // Trigger animation when 50% of the element is in view
        variants={containerVariants}
      >
        <motion.p className="my-4 text-2xl" variants={contactVariants}>
          {CONTACT.phoneNo}
        </motion.p>
        <motion.a className="border-b text-2xl" variants={contactVariants}>
          {CONTACT.email}
        </motion.a>
      </motion.div>
    </div>
  );
}

export default Contact;
