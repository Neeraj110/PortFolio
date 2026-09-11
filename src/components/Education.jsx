import { useRef } from "react";
import { EDUCATION } from "../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Education() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const items = gsap.utils.toArray('.edu-item');
    
    items.forEach((item) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          end: "bottom 85%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });
    });
  }, { scope: containerRef });

  return (
    <section id="education" ref={containerRef} className="w-full py-32 px-6 md:px-12 lg:px-24 max-w-[1200px] mx-auto border-t border-neutral-900">
      
      <div className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-neutral-800 pb-6">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase text-white">Education</h2>
      </div>

      <div className="flex flex-col gap-12">
        {EDUCATION.map((edu, index) => (
          <div key={index} className="edu-item flex flex-col md:flex-row gap-6 md:gap-12 group">
            
            <div className="w-full md:w-1/4 shrink-0">
              <span className="text-sm font-mono uppercase tracking-widest text-neutral-500">{edu.year}</span>
            </div>
            
            <div className="w-full md:w-3/4">
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-2 group-hover:text-neutral-300 transition-colors">{edu.degree}</h3>
              <h4 className="text-xl text-neutral-400 mb-6">{edu.institution}</h4>
              <p className="text-neutral-500 leading-relaxed text-lg max-w-2xl text-balance">
                {edu.description}
              </p>
            </div>
            
          </div>
        ))}
      </div>

    </section>
  );
}

