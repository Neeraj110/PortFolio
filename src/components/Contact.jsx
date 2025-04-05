/* eslint-disable no-unused-vars */
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Copy, Check, ExternalLink, Github } from "lucide-react";
import { useState } from "react";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === "email") {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      } else {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      }
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="max-w-2xl mx-auto"
        >
          <motion.h2
            variants={contactVariants}
            className="text-3xl font-bold tracking-tight text-center mb-8 md:mb-12 lg:text-4xl"
          >
            Get in Touch
          </motion.h2>

          <Card className="backdrop-blur-sm bg-neutral-950/50 border-neutral-800">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl text-center text-neutral-200">
                Let&apos;s Connect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Email Section */}
              <motion.div
                variants={contactVariants}
                className="flex flex-col gap-2"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 rounded-lg bg-neutral-900/50 hover:bg-neutral-800/50 transition-colors gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <Mail className="w-5 h-5 text-neutral-400 flex-shrink-0" />
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="text-sm md:text-base text-neutral-200 hover:text-neutral-100 truncate"
                    >
                      {CONTACT.email}
                    </a>
                  </div>
                  <div className="flex gap-2 justify-end">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => copyToClipboard(CONTACT.email, "email")}
                      className="hover:text-neutral-100 hover:bg-black text-white"
                    >
                      {copiedEmail ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      asChild
                      className="hover:text-neutral-100 hover:bg-black text-white"
                    >
                      <a href={`mailto:${CONTACT.email}`}>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>

              {/* Phone Section */}
              <motion.div
                variants={contactVariants}
                className="flex flex-col gap-2"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 rounded-lg bg-neutral-900/50 hover:bg-neutral-800/50 transition-colors gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <Github className="w-5 h-5 text-neutral-400 flex-shrink-0" />
                    <a
                      href={`${CONTACT.phoneNo}`}
                      className="text-sm md:text-base text-neutral-200 hover:text-neutral-100 truncate"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      github.com/Neeraj110
                    </a>
                  </div>
                  <div className="flex gap-2 justify-end">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => copyToClipboard(CONTACT.phoneNo, "phone")}
                      className="hover:text-neutral-100 hover:bg-black text-white"
                    >
                      {copiedPhone ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      asChild
                      className="hover:text-neutral-100 hover:bg-black text-white"
                    >
                      <a href={CONTACT.github}>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
