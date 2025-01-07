import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/Logo2.webp";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between py-4 px-4 md:px-8">
            <div className="flex flex-shrink-0 items-center">
                <a href="/" aria-label="home">
                    <img src={logo} className="mx-2" width={50} height={50} alt="logo" />
                </a>
            </div>
            <div className="flex items-center justify-center gap-4 text-2xl">
                <a
                    href="https://www.linkedin.com/in/abhishek-maheshwari-602344226/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="hover:text-blue-600 transition-colors duration-300"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://github.com/Abhishekmaheshwari-2002"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="hover:text-gray-800 transition-colors duration-300"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.instagram.com/_.abhishekmaheshwari/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="hover:text-pink-600 transition-colors duration-300"
                >
                    <FaInstagram />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;