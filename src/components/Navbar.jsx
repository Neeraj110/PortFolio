import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo.png";
import { FaSquareTwitter } from "react-icons/fa6";

function Navbar() {
  return (
    <nav className="mb-5 flex items-center justify-between py-4">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="mx-2 w-10" />
      </div>
      <div className="m-5 flex items-center justify-center gap-4 text-2xl ">
        <FaGithub />
        <FaLinkedin />
        <FaInstagram />
        <FaSquareTwitter />
      </div>
    </nav>
  );
}

export default Navbar;
