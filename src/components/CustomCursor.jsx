import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useGSAP(() => {
    // Only run on non-touch devices
    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
      return;
    }

    const cursor = cursorRef.current;
    
    // Set quick setters for better performance
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.15, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.15, ease: "power3" });

    const onMouseMove = (e) => {
      // Center the cursor dot
      xTo(e.clientX - 10);
      yTo(e.clientY - 10);
    };

    // Make cursor visible when mouse enters window
    const onMouseEnter = () => {
      gsap.to(cursor, { opacity: 1, duration: 0.2 });
    };

    // Hide cursor when mouse leaves window
    const onMouseLeave = () => {
      gsap.to(cursor, { opacity: 0, duration: 0.2 });
    };

    // Handle hover states for links/buttons
    const onLinkHoverStart = () => {
      gsap.to(cursor, { scale: 2.5, backgroundColor: "transparent", border: "1px solid rgba(255, 255, 255, 0.5)", duration: 0.3, ease: "power2.out" });
    };

    const onLinkHoverEnd = () => {
      gsap.to(cursor, { scale: 1, backgroundColor: "white", border: "none", duration: 0.3, ease: "power2.out" });
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);

    // We can use event delegation for links and buttons to be more efficient
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button'
      ) {
        onLinkHoverStart();
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button'
      ) {
        onLinkHoverEnd();
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="custom-cursor fixed top-0 left-0 w-5 h-5 bg-white rounded-full pointer-events-none z-[10000] opacity-0 mix-blend-difference"
      style={{ transform: "translate(0px, 0px)" }}
    />
  );
}
