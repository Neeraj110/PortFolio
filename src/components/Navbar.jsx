import { useState, useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);
  const menuRef = useRef(null);
  const linksRef = useRef([]);

  useGSAP(() => {
    // Hide navbar on scroll down, show on scroll up
    const showAnim = gsap.from(navRef.current, {
      yPercent: -100,
      paused: true,
      duration: 0.3,
      ease: "power2.out",
    }).progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: (self) => {
        if (self.direction === -1) {
          showAnim.play();
        } else if (self.direction === 1 && self.scroll() > 50) {
          if (!isMenuOpen) showAnim.reverse();
        }
      }
    });
  }, { scope: navRef, dependencies: [isMenuOpen] });

  // Mobile Menu Animation
  useGSAP(() => {
    if (isMenuOpen) {
      gsap.to(menuRef.current, {
        clipPath: "circle(150% at calc(100% - 2rem) 2rem)",
        duration: 0.8,
        ease: "power3.inOut"
      });
      gsap.fromTo(linksRef.current, 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.5, delay: 0.3, ease: "power2.out" }
      );
    } else {
      gsap.to(menuRef.current, {
        clipPath: "circle(0% at calc(100% - 2rem) 2rem)",
        duration: 0.8,
        ease: "power3.inOut"
      });
    }
  }, { dependencies: [isMenuOpen] });

  // Handle Smooth Scrolling
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    if (isMenuOpen) setIsMenuOpen(false);
    
    const target = document.getElementById(targetId);
    if (target) {
      // Use native smooth scroll which Lenis can intercept or work alongside
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav ref={navRef} className="fixed top-0 left-0 w-full z-[60] mix-blend-difference px-6 py-5">
        <div className="flex items-center justify-between max-w-[1400px] mx-auto">
          <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')} className="text-2xl font-bold tracking-tighter text-white hover:opacity-70 transition-opacity">
            NG.
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
            {["About", "Projects", "Experience", "Contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={(e) => handleNavClick(e, item.toLowerCase())}
                className="text-neutral-400 hover:text-white transition-colors uppercase"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white relative z-[70]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        ref={menuRef} 
        className="md:hidden fixed inset-0 bg-neutral-950 z-[55] flex flex-col items-center justify-center gap-8 text-4xl font-bold tracking-tighter"
        style={{ clipPath: "circle(0% at calc(100% - 2rem) 2rem)" }}
      >
        {["About", "Projects", "Experience", "Contact"].map((item, index) => (
          <a 
            key={item}
            href={`#${item.toLowerCase()}`} 
            onClick={(e) => handleNavClick(e, item.toLowerCase())} 
            className="text-white hover:text-neutral-400 uppercase"
            ref={el => linksRef.current[index] = el}
          >
            {item}
          </a>
        ))}
        
        <div className="flex gap-8 mt-12" ref={el => linksRef.current[4] = el}>
          <a href="https://github.com/Neeraj110" target="_blank" rel="noopener noreferrer" className="text-white hover:text-neutral-400"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/neerajgaur12" target="_blank" rel="noopener noreferrer" className="text-white hover:text-neutral-400"><FaLinkedin /></a>
          <a href="https://x.com/Neerajgaur__" target="_blank" rel="noopener noreferrer" className="text-white hover:text-neutral-400"><FaSquareTwitter /></a>
        </div>
      </div>
    </>
  );
}

export default Navbar;

