import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projectVariants = (index) => ({
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: index * 0.1,
    },
  },
});

function Projects() {
  return (
    <div className="flex flex-col gap-6">
      {PROJECTS.map((project, index) => (
        <motion.div
          key={index}
          variants={projectVariants(index)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Card className="h-full flex flex-col overflow-hidden border border-neutral-800 bg-neutral-950/50 backdrop-blur-sm hover:bg-neutral-900/50 transition-colors">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-lg sm:text-xl md:text-2xl text-neutral-100 line-clamp-2">
                {project.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 p-4 sm:p-6 pt-0">
              <p className="text-neutral-400 text-sm md:text-base mb-4 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2  ">
                {project.technologies.map((tech, idx) => (
                  <Badge
                    key={idx}
                    variant="secondary"
                    className="bg-neutral-800 text-neutral-200 hover:bg-neutral-700 text-xs sm:text-sm"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="p-4 sm:p-6 pt-0">
              <div className="flex flex-col sm:flex-row w-full gap-3">
                {project.link && (
                  <Button
                    asChild
                    variant="default"
                    className="w-full text-sm sm:text-base"
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.github && (
                  <Button
                    asChild
                    variant="outline"
                    className="w-full text-sm sm:text-base"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                )}
              </div>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

export default Projects;
