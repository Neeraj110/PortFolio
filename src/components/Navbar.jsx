/* eslint-disable no-unused-vars */
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";

function Navbar() {
  return (
    <nav className="mb-5 flex items-center justify-between py-4">
      <div className="flex flex-shrink-0 items-center"></div>
      <div className="m-5 flex items-center justify-center gap-4 text-4xl">
        <a
          href="https://github.com/Neeraj110"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="cursor-pointer hover:text-gray-500 transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/neeraj-gaur"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="cursor-pointer hover:text-gray-500 transition" />
        </a>
        {/* <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="cursor-pointer hover:text-gray-500 transition" />
        </a> */}
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaSquareTwitter className="cursor-pointer hover:text-gray-500 transition" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
