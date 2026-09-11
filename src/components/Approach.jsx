import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const APPROACHES = [
  "Architecture",
  "Performance",
  "Scalability",
  "AI Engineering",
];

export default function Approach() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const items = gsap.utils.toArray('.approach-item');

    items.forEach((item, i) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          end: "bottom 85%",
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: "power3.out",
        delay: i * 0.1
      });
    });
  }, { scope: containerRef });

  return (
    <section id="approach" ref={containerRef} className="w-full py-32 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto border-t border-neutral-900">
      
      <div className="mb-24 w-full text-left">
        <h2 className="text-2xl md:text-3xl font-mono uppercase tracking-widest text-neutral-500 mb-6">Approach</h2>
        <div className="w-full h-[1px] bg-neutral-800"></div>
      </div>

      <div className="flex flex-col w-full text-left">
        {APPROACHES.map((approach, index) => (
          <div key={index} className="approach-item w-full py-6 border-b border-neutral-900 last:border-none">
            <h3 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter uppercase text-white opacity-80 hover:opacity-100 transition-opacity duration-300">
              {approach}
            </h3>
          </div>
        ))}
      </div>

    </section>
  );
}
