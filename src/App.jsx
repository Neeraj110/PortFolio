import { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const aboutRef = useRef(null);
  const techRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const homeRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Background Styling */}
      <div className="fixed top-0 -z-10 w-full h-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 shadow-md px-8 py-4  max-w-6xl mx-auto rounded-b-lg">
        <Navbar
          onAboutClick={() => scrollToSection(aboutRef)}
          onTechClick={() => scrollToSection(techRef)}
          onProjectsClick={() => scrollToSection(projectsRef)}
          onContactClick={() => scrollToSection(contactRef)}
          onHomeClick={() => scrollToSection(homeRef)}
        />
      </div>

      {/* Main Content (with padding to avoid overlap with Navbar) */}
      <div className="container mx-auto px-8 pt-20">
        <div ref={homeRef}>
          <Hero />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={techRef}>
          <Technologies />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
