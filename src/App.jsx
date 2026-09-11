import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Approach from "./components/Approach";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function App() {
  const appRef = useRef(null);
  
  // Set up Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: "vertical", 
      gestureDirection: "vertical", 
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // Keep GSAP ScrollTrigger in sync with Lenis
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000); // time * 1000 is to convert seconds to milliseconds
    });
    
    gsap.ticker.lagSmoothing(0); // lagSmoothing(0) is to make the scroll smooth

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf); // remove the raf from the ticker 
    };
  }, []);

  // Global Background Object Animation
  useGSAP(() => {
    gsap.to('.bg-grid', {
      y: '20vh',
      ease: 'none',
      scrollTrigger: {
        trigger: document.documentElement,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1
      }
    });
  }, { scope: appRef });

  return (
    <div ref={appRef} className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Custom Desktop Cursor */}
      <CustomCursor />

      {/* Atmospheric Backgrounds */}
      <div className="bg-noise"></div>
      
      {/* Premium Moving Grid Background */}
      <div className="fixed inset-0 z-[0] pointer-events-none overflow-hidden">
        <div 
          className="bg-grid absolute inset-[-50%] opacity-20"
          style={{
            backgroundImage: `linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)`,
            backgroundSize: `4rem 4rem`,
            maskImage: `radial-gradient(circle at center, black, transparent 70%)`,
            WebkitMaskImage: `radial-gradient(circle at center, black, transparent 70%)`
          }}
        ></div>
      </div>

      <Navbar />

      <main className="relative z-10 w-full flex flex-col items-center">
        <Hero />
        <Experience />
        <Projects />
        <Technologies />
        <About />
        <Approach />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;

