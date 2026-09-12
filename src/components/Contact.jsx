import { useRef, useState } from "react";
import { CONTACT } from "../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Copy, Check, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Contact() {
  const containerRef = useRef(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useGSAP(() => {
    gsap.from(".contact-element", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse"
      },
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  return (
    <section id="contact" ref={containerRef} className="w-full py-32 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto border-t border-neutral-900">
      
      <div className="flex flex-col items-center text-center">
        <h2 className="contact-element text-[10vw] sm:text-[8vw] leading-[1] font-bold tracking-tighter uppercase text-white mb-8">
          Let's Work
        </h2>
        
        <p className="contact-element text-xl text-neutral-400 mb-16 max-w-xl text-balance">
          Have a project in mind or want to collaborate? I'm currently available for freelance opportunities.
        </p>

        <div className="contact-element flex flex-col items-center gap-8 w-full max-w-2xl">
          
          <div className="w-full flex flex-col sm:flex-row items-center justify-between p-4 sm:p-6 border border-neutral-800 rounded-lg bg-neutral-950/50 hover:bg-white/5 transition-colors group gap-4">
            <span className="text-base sm:text-xl md:text-2xl font-mono text-white tracking-wide break-all text-center sm:text-left">
              {CONTACT.email}
            </span>
            <div className="flex gap-4 shrink-0">
              <button onClick={copyEmail} className="text-neutral-500 hover:text-white transition-colors" title="Copy Email">
                {copiedEmail ? <Check size={24} className="text-green-500" /> : <Copy size={24} />}
              </button>
              <a href={`mailto:${CONTACT.email}`} className="text-neutral-500 hover:text-white transition-colors">
                <ArrowUpRight size={24} />
              </a>
            </div>
          </div>

          <div className="flex gap-8 mt-12">
            <a href="https://github.com/Neeraj110" target="_blank" rel="noopener noreferrer" className="text-sm font-mono uppercase tracking-widest text-neutral-500 hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[1px] after:bg-white after:origin-right after:scale-x-0 hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/neerajgaur12" target="_blank" rel="noopener noreferrer" className="text-sm font-mono uppercase tracking-widest text-neutral-500 hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[1px] after:bg-white after:origin-right after:scale-x-0 hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300">
              LinkedIn
            </a>
            <a href="https://x.com/Neerajgaur__" target="_blank" rel="noopener noreferrer" className="text-sm font-mono uppercase tracking-widest text-neutral-500 hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[1px] after:bg-white after:origin-right after:scale-x-0 hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300">
              Twitter
            </a>
          </div>

        </div>
      </div>
      
    </section>
  );
}

