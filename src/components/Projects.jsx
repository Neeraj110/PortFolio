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
import { ExternalLink, Github, Sparkles, ArrowUpRight } from "lucide-react";

const projectVariants = (index) => ({
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      delay: index * 0.12,
    },
  },
});

const sectionHeader = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function Projects() {
  const featuredProject = PROJECTS.find((p) => p.featured);
  const otherProjects = PROJECTS.filter((p) => !p.featured);

  return (
    <section className="w-full py-12 md:py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionHeader}
        className="text-center mb-12 md:mb-16"
      >
        <h2 className="text-3xl font-bold tracking-tight lg:text-4xl mb-3">
          Projects
        </h2>
        <p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto">
          A curated collection of full-stack applications I&apos;ve built — from
          concept to deployment.
        </p>
      </motion.div>

      {/* Featured Project */}
      {featuredProject && (
        <motion.div
          variants={projectVariants(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mb-8 md:mb-10"
        >
          <Card className="relative overflow-hidden border border-purple-500/30 bg-gradient-to-br from-neutral-950 via-neutral-900/80 to-purple-950/20 backdrop-blur-sm group transition-all duration-500 hover:border-purple-500/50 hover:shadow-[0_0_40px_-12px_rgba(168,85,247,0.25)]">
            {/* Animated gradient shimmer */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

            <div className="relative flex flex-col lg:flex-row">
              {/* Left: Content */}
              <div className="flex-1 p-6 sm:p-8 lg:p-10">
                <div className="flex items-center gap-2 mb-4">
                  <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0 text-xs font-semibold px-3 py-1">
                    <Sparkles className="h-3 w-3 mr-1.5" />
                    Featured
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-purple-500/40 text-purple-300 text-xs"
                  >
                    Latest
                  </Badge>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-50 mb-4 tracking-tight">
                  {featuredProject.title}
                </h3>

                <p className="text-neutral-300 text-base lg:text-lg leading-relaxed mb-6 max-w-2xl">
                  {featuredProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {featuredProject.technologies.map((tech, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="bg-neutral-800/80 text-neutral-200 hover:bg-neutral-700 text-xs sm:text-sm border border-neutral-700/50 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  {featuredProject.link && (
                    <Button
                      asChild
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white border-0 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all duration-300 text-sm sm:text-base group/btn"
                    >
                      <a
                        href={featuredProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </a>
                    </Button>
                  )}
                  {featuredProject.github && (
                    <Button
                      asChild
                      variant="outline"
                      className="border-neutral-700 hover:bg-neutral-800 hover:border-neutral-600 text-sm sm:text-base transition-all duration-300"
                    >
                      <a
                        href={featuredProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <Github className="h-4 w-4" />
                        Source Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              {/* Right: Decorative visual card */}
              <div className="hidden lg:flex items-center justify-center p-10 relative">
                <div className="w-52 h-52 rounded-2xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-purple-500/20 flex items-center justify-center backdrop-blur-sm">
                  <span className="text-7xl">💸</span>
                </div>
                {/* Floating dots */}
                <div className="absolute top-8 right-12 w-3 h-3 rounded-full bg-purple-500/40 animate-pulse" />
                <div className="absolute bottom-12 right-8 w-2 h-2 rounded-full bg-blue-500/40 animate-pulse delay-300" />
                <div className="absolute top-16 right-32 w-2 h-2 rounded-full bg-purple-400/30 animate-pulse delay-700" />
              </div>
            </div>
          </Card>
        </motion.div>
      )}

      {/* Other Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        {otherProjects.map((project, index) => (
          <motion.div
            key={index}
            variants={projectVariants(index + 1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Card className="h-full flex flex-col overflow-hidden border border-neutral-800 bg-neutral-950/50 backdrop-blur-sm group transition-all duration-300 hover:bg-neutral-900/60 hover:border-neutral-700 hover:shadow-[0_0_30px_-12px_rgba(120,119,198,0.15)]">
              <CardHeader className="p-5 sm:p-6 pb-3">
                <div className="flex items-start justify-between gap-3">
                  <CardTitle className="text-lg sm:text-xl md:text-2xl text-neutral-100 leading-tight group-hover:text-white transition-colors">
                    {project.title}
                  </CardTitle>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-500 hover:text-neutral-200 transition-colors flex-shrink-0 mt-1"
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </CardHeader>

              <CardContent className="flex-1 px-5 sm:px-6 pb-5">
                <p className="text-neutral-400 text-sm md:text-base mb-5 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="bg-neutral-800/70 text-neutral-300 hover:bg-neutral-700 text-xs sm:text-sm border border-neutral-800 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="px-5 sm:px-6 pb-5 pt-0">
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
                      className="w-full text-sm sm:text-base border-neutral-700 hover:bg-neutral-800"
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
    </section>
  );
}

export default Projects;
