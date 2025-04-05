/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { Menu, X } from "lucide-react";

function Navbar({
  onAboutClick,
  onTechClick,
  onProjectsClick,
  onContactClick,
  onHomeClick,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (callback) => {
    setIsMenuOpen(false);
    callback();
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-sm">
      <div className="flex items-center justify-between py-4">
        <div className="flex flex-shrink-0 items-center">
          <Button
            onClick={onHomeClick}
            variant="link"
            className="text-3xl text-neutral-300 hover:text-neutral-100"
          >
            NG
          </Button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4 ">
          <Button
            variant="ghost"
            onClick={onAboutClick}
            className="text-neutral-300 hover:text-black text-xl hover:bg-neutral-100"
          >
            About
          </Button>
          <Button
            variant="ghost"
            onClick={onTechClick}
            className="text-neutral-300 hover:text-black text-xl hover:bg-neutral-100"
          >
            Technologies
          </Button>
          <Button
            variant="ghost"
            onClick={onProjectsClick}
            className="text-neutral-300 hover:text-black text-xl hover:bg-neutral-100"
          >
            Projects
          </Button>
          <Button
            variant="ghost"
            onClick={onContactClick}
            className="text-neutral-300 hover:text-black text-xl hover:bg-neutral-100"
          >
            Contact
          </Button>
        </div>

        {/* Social Icons - Desktop */}
        <div className="hidden md:flex items-center gap-4 text-2xl">
          <a
            href="https://github.com/Neeraj110"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-300 hover:text-neutral-100 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/neeraj-gaur-a913b9238?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-300 hover:text-neutral-100 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/Neerajgaur_?t=81oxTcipdykjMYxjpH7qzg&s=08"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-300 hover:text-neutral-100 transition-colors"
          >
            <FaSquareTwitter />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          className="md:hidden text-neutral-300 hover:text-neutral-100 "
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-x-0 bg-neutral-950/95 backdrop-blur-sm border-b border-neutral-800 px-4 py-3">
          <div className="flex flex-col gap-4">
            <Button
              variant="ghost"
              onClick={() => handleNavClick(onAboutClick)}
              className="text-neutral-300 hover:text-neutral-100 w-full justify-start"
            >
              About
            </Button>
            <Button
              variant="ghost"
              onClick={() => handleNavClick(onTechClick)}
              className="text-neutral-300 hover:text-neutral-100 w-full justify-start"
            >
              Technologies
            </Button>
            <Button
              variant="ghost"
              onClick={() => handleNavClick(onProjectsClick)}
              className="text-neutral-300 hover:text-neutral-100 w-full justify-start"
            >
              Projects
            </Button>
            <Button
              variant="ghost"
              onClick={() => handleNavClick(onContactClick)}
              className="text-neutral-300 hover:text-black-100 w-full justify-start"
            >
              Contact
            </Button>

            {/* Social Icons - Mobile */}
            <div className="flex items-center gap-4 text-2xl pt-4 border-t border-neutral-800">
              <a
                href="https://github.com/Neeraj110"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-neutral-100 transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/neeraj-gaur"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-neutral-100 transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-neutral-100 transition-colors"
              >
                <FaSquareTwitter />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
