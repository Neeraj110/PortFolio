import { useRef } from "react";
import { EXPERIENCES } from "../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Experience() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const items = gsap.utils.toArray('.timeline-item');
    
    // Animate the main timeline line
    gsap.from(".timeline-line", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%",
        end: "bottom 80%",
        scrub: 1,
      },
      scaleY: 0,
      transformOrigin: "top center",
      ease: "none"
    });

    items.forEach((item, index) => {
      const isLeft = index % 2 === 0;
      
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          end: "bottom 85%",
          toggleActions: "play none none reverse",
        },
        x: isLeft ? -50 : 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });
      
      // Animate the dot
      gsap.from(item.querySelector('.timeline-dot'), {
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        scale: 0,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(2)"
      });
    });

  }, { scope: containerRef });

  return (
    <section id="experience" ref={containerRef} className="w-full py-32 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto overflow-hidden">
      
      <div className="mb-24 text-center md:text-left">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-6 text-white">Experience</h2>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Central Line */}
        <div className="timeline-line absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-neutral-800 -translate-x-1/2 hidden md:block"></div>
        {/* Mobile Line */}
        <div className="timeline-line absolute left-6 top-0 bottom-0 w-[1px] bg-neutral-800 block md:hidden"></div>

        <div className="flex flex-col gap-12 md:gap-0">
          {EXPERIENCES.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={index} className={`timeline-item relative flex flex-col md:flex-row items-start md:items-center w-full ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}>
                
                {/* Timeline Dot */}
                <div className="timeline-dot absolute left-[24px] md:left-1/2 top-0 md:top-1/2 w-3 h-3 bg-white rounded-full -translate-x-1/2 md:-translate-y-1/2 z-10 hidden md:block"></div>
                <div className="timeline-dot absolute left-[24px] top-[10px] w-3 h-3 bg-white rounded-full -translate-x-1/2 z-10 block md:hidden"></div>

                {/* Content Box */}
                <div className={`w-full md:w-[45%] pl-16 md:pl-0 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                  <span className="text-xs uppercase tracking-widest text-neutral-500 font-mono mb-2 block">{exp.year}</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-1">{exp.role}</h3>
                  <h4 className="text-lg text-neutral-400 font-medium mb-4">{exp.company}</h4>
                  
                  <p className="text-neutral-500 leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <div className={`flex flex-wrap gap-2 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="text-xs font-mono uppercase px-3 py-1 bg-white/5 text-neutral-300 rounded border border-white/10">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            )
          })}
        </div>
      </div>

    </section>
  );
}

