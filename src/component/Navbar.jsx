import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/Logo2.webp";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <a href="/" aria-label="home">
                    <img src={logo} className="mx-2" width={50} height={50} alt="logo" />
                </a>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/abhishek-maheshwari-602344226/" target="blank" rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin />
                </a>
                <a href="https://github.com/Abhishekmaheshwari-2002" target="blank" rel="noopener noreferrer"
                    aria-label="GitHub"
                >
                    <FaGithub />
                </a>
                <a href="https://www.instagram.com/_.abhishekmaheshwari/" target="blank" rel="noopener noreferrer"
                    aria-label="Instagram"
                >
                    <FaInstagram />
                </a>

            </div>
        </nav>

    );
};

export default Navbar;