import { useRef } from "react";
import { ABOUT_TEXT } from "../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function About() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        end: "bottom 80%",
        scrub: 1, // Smooth scrub
      }
    });

    tl.from(".about-statement", {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    })
    .from(".about-paragraph", {
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5")
    .from(".about-stat", {
      scale: 0.8,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "back.out(1.7)"
    }, "-=0.5");

  }, { scope: containerRef });

  const paragraphs = ABOUT_TEXT.split("  ").filter((p) => p.trim());

  return (
    <section id="about" ref={containerRef} className="w-full min-h-screen py-32 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto flex flex-col justify-center">
      
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-start">
        
        {/* Large Statement Side */}
        <div className="w-full lg:w-1/2">
          <h2 className="about-statement text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.9] text-white">
            How I build software
          </h2>
        </div>

        {/* Supporting Information Side */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8 mt-4 lg:mt-0">
          <div className="space-y-6">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="about-paragraph text-lg md:text-xl text-neutral-400 font-medium leading-relaxed text-balance">
                {paragraph.trim()}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-12 border-t border-neutral-800 mt-8">
            <div className="about-stat">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tighter">2+</h3>
              <p className="text-xs uppercase tracking-widest text-neutral-500 font-mono">Years Exp</p>
            </div>
            <div className="about-stat">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tighter">15+</h3>
              <p className="text-xs uppercase tracking-widest text-neutral-500 font-mono">Projects</p>
            </div>
            <div className="about-stat">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tighter">5+</h3>
              <p className="text-xs uppercase tracking-widest text-neutral-500 font-mono">Tech Stack</p>
            </div>
            <div className="about-stat">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tighter">100%</h3>
              <p className="text-xs uppercase tracking-widest text-neutral-500 font-mono">Commitment</p>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}

