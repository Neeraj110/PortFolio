import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { HERO_CONTENT } from "../constants";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    // Initial state
    gsap.set(".hero-element", { y: 100, opacity: 0 });
    gsap.set(".hero-scroll-indicator", { opacity: 0 });

    tl.to(".hero-element", {
      y: 0,
      opacity: 1,
      duration: 1.5,
      stagger: 0.15,
      delay: 0.2
    })
    .to(".hero-scroll-indicator", {
      opacity: 1,
      duration: 1
    }, "-=0.5");

    // Scroll indicator bounce
    gsap.to(".hero-scroll-indicator-dot", {
      y: 15,
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "power2.inOut"
    });

    // Parallax effect on massive text
    gsap.to(".hero-text-parallax", {
      y: -150,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1
      }
    });

  }, { scope: containerRef });

  return (
    <section id="hero" ref={containerRef} className="w-full min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-20 max-w-[1600px] mx-auto">
      
      {/* Small introduction */}
      <div className="hero-element mb-6 flex items-center gap-4">
        <div className="w-12 h-[1px] bg-neutral-400"></div>
        {/* <p className="text-neutral-400 font-mono text-sm uppercase tracking-widest">
          Available for freelance
        </p> */}
      </div>

      {/* Massive Typography */}
      <div className="hero-text-parallax">
        <div className="hero-element mb-2">
          <h1 className="text-[12vw] sm:text-[10vw] leading-[0.85] font-bold tracking-tighter uppercase">
            <span className="text-white">Full </span>
            <span className="text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.8)]">Stack</span>
          </h1>
        </div>
        <div className="hero-element mb-12 ml-0 sm:ml-[10vw]">
          <h1 className="text-[12vw] sm:text-[10vw] leading-[0.85] font-bold tracking-tighter text-white uppercase opacity-90">
            Developer
          </h1>
        </div>
      </div>

      <div className="hero-element flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mt-12 sm:mt-24">
        {/* Short statement */}
        <div className="max-w-xl">
          <p className="text-neutral-500 font-mono text-sm uppercase tracking-widest mb-4">
            AI + Backend + Frontend
          </p>
          <p className="text-xl sm:text-2xl lg:text-3xl font-medium leading-tight text-neutral-300 text-balance">
            {HERO_CONTENT}
          </p>
        </div>

        {/* CTA / Links */}
        <div className="flex gap-6 shrink-0">
          <a
            href="/Neerajgaur.pdf"
            download="Neeraj_Gaur_CV.pdf"
            className="group relative px-6 py-3 border border-neutral-700 hover:border-white transition-colors overflow-hidden rounded-full"
          >
            <span className="relative z-10 text-sm font-medium tracking-wider uppercase text-white">Download CV</span>
            <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
            <span className="absolute inset-0 z-20 flex items-center justify-center text-sm font-medium tracking-wider uppercase text-black translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out">Download CV</span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll-indicator absolute bottom-8 left-12 flex items-center gap-4">
        <div className="w-[1px] h-16 bg-neutral-800 relative overflow-hidden">
          <div className="hero-scroll-indicator-dot absolute top-0 left-0 w-full h-1/3 bg-white"></div>
        </div>
        <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 rotate-90 origin-left translate-y-4">Scroll</span>
      </div>

    </section>
  );
}

