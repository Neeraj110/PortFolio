import { useRef } from "react";
import { PROJECTS } from "../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ExternalLink, Github } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Projects() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const projects = gsap.utils.toArray('.project-section');

    projects.forEach((project) => {
      const title = project.querySelector('.project-title');
      const desc = project.querySelector('.project-desc');
      const tags = project.querySelector('.project-tags');
      const links = project.querySelector('.project-links');
      const visual = project.querySelector('.project-visual');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: project,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
        }
      });

      tl.fromTo(visual, 
        { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", scale: 1.05 },
        { clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)", scale: 1, duration: 1.2, ease: "power3.inOut" }
      )
      .fromTo([title, desc, tags, links],
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out" },
        "-=0.6"
      );
    });

  }, { scope: containerRef });

  return (
    <section id="projects" ref={containerRef} className="w-full min-h-screen py-32 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto">
      
      <div className="mb-32">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-6 text-white">Selected Work</h2>
        <div className="w-full h-[1px] bg-neutral-800"></div>
      </div>

      <div className="flex flex-col gap-32 md:gap-48">
        {PROJECTS.map((project, index) => (
          <div key={index} className={`project-section flex flex-col gap-12 lg:gap-24 items-center ${index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
            
            {/* Visual Side */}
            <div className="w-full lg:w-1/2 aspect-[4/3] bg-neutral-900 overflow-hidden relative group rounded-md">
              <div className="project-visual w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-950 flex items-center justify-center border border-neutral-800 relative">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
                ) : (
                  <div className="text-neutral-700 font-mono opacity-20 text-9xl group-hover:scale-110 transition-transform duration-700">
                    {(index + 1).toString().padStart(2, '0')}
                  </div>
                )}
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2 flex flex-col items-start">
              <span className="text-neutral-500 font-mono text-sm mb-4">{(index + 1).toString().padStart(2, '0')} — {project.featured ? "Featured" : "Project"}</span>
              
              <h3 className="project-title text-3xl md:text-5xl font-bold tracking-tight mb-6 text-white">
                {project.title}
              </h3>
              
              <p className="project-desc text-lg text-neutral-400 mb-8 max-w-xl text-balance">
                {project.description}
              </p>

              <div className="project-tags flex flex-wrap gap-3 mb-10">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="px-4 py-1.5 text-sm border border-neutral-800 rounded-full text-neutral-300">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links flex gap-4">
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-neutral-400 transition-colors uppercase text-sm tracking-wider font-bold">
                    View Project <ExternalLink size={16} />
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors uppercase text-sm tracking-wider font-bold">
                    Source Code <Github size={16} />
                  </a>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}

