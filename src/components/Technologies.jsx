import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ROW_1 = ["React", "Node.js", "MongoDB", "Tailwind CSS", "Express.js", "Next.js", "GitHub", "Git" ,"Mongoose", "React Router"]
const ROW_2 = ["Socket.io", "Redis", "Postman", "Redux ToolKit", "TypeScript", "LangChain", "Gemini", "Zod", "JWT",];

export default function Technologies() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Row 1 moves left
    gsap.fromTo('.tech-row-1', 
      { xPercent: 0 },
      {
        xPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        }
      }
    );

    // Row 2 moves right
    gsap.fromTo('.tech-row-2', 
      { xPercent: -50 },
      {
        xPercent: 0,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section id="technologies" ref={containerRef} className="w-full py-32 overflow-hidden flex flex-col justify-center max-w-[100vw]">
      
      <div className="mb-24 w-full px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-mono uppercase tracking-widest text-neutral-500 mb-6">Frontend → Backend → Database → AI</h2>
        <div className="w-full h-[1px] bg-neutral-800"></div>
      </div>

      <div className="flex flex-col gap-8 md:gap-16 w-full opacity-90">
        
        {/* Row 1 */}
        <div className="tech-row-1 flex gap-8 md:gap-14 whitespace-nowrap min-w-max px-4">
          {[...ROW_1, ...ROW_1].map((tech, index) => (
            <h3 key={index} className="text-[12vw] sm:text-[8vw] font-bold tracking-tighter uppercase text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.3)] hover:[-webkit-text-stroke:2px_rgba(255,255,255,1)] text-white hover:text-white transition-all duration-300 cursor-default">
              {tech}
            </h3>
          ))}
        </div>

        {/* Row 2 */}
        <div className="tech-row-2 flex gap-8 md:gap-14 whitespace-nowrap min-w-max px-4">
          {[...ROW_2, ...ROW_2].map((tech, index) => (
            <h3 key={index} className="text-[12vw] sm:text-[8vw] font-bold tracking-tighter uppercase text-white hover:text-white opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-default">
              {tech}
            </h3>
          ))}
        </div>

      </div>

    </section>
  );
}