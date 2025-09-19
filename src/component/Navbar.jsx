// import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
// import logo from "../assets/Logo2.webp";

// const Navbar = () => {
//     return (
//         <nav className="flex items-center justify-between py-4 px-4 md:px-8">
//             <div className="flex flex-shrink-0 items-center">
//                 <a href="/" aria-label="home">
//                     <img src={logo} className="mx-2" width={50} height={50} alt="logo" />
//                 </a>
//             </div>
//             <div className="flex items-center justify-center gap-4 text-2xl">
//                 <a
//                     href="https://www.linkedin.com/in/abhishek-maheshwari-602344226/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="LinkedIn"
//                     className="hover:text-blue-600 transition-colors duration-300"
//                 >
//                     <FaLinkedin />
//                 </a>
//                 <a
//                     href="https://github.com/Abhishekmaheshwari-2002"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="GitHub"
//                     className="hover:text-gray-800 transition-colors duration-300"
//                 >
//                     <FaGithub />
//                 </a>
//                 <a
//                     href="https://www.instagram.com/_.abhishekmaheshwari/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Instagram"
//                     className="hover:text-pink-600 transition-colors duration-300"
//                 >
//                     <FaInstagram />
//                 </a>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;



import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/Logo2.webp";
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full z-50 bg-white/20 dark:bg-black/30 backdrop-blur-md shadow-md"
        >
            <div className="flex items-center justify-between py-4 px-6 md:px-12">
                {/* Logo */}
                <motion.a
                    href="/"
                    aria-label="home"
                    whileHover={{ scale: 1.1, rotate: 3 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center"
                >
                    <img
                        src={logo}
                        className="mx-2 drop-shadow-lg"
                        width={55}
                        height={55}
                        alt="logo"
                    />
                </motion.a>

                {/* Social Icons */}
                <div className="flex items-center justify-center gap-6 text-2xl">
                    {[
                        {
                            href: "https://www.linkedin.com/in/abhishek-maheshwari-602344226/",
                            icon: <FaLinkedin />,
                            color: "hover:text-blue-600",
                        },
                        {
                            href: "https://github.com/Abhishekmaheshwari-2002",
                            icon: <FaGithub />,
                            color: "hover:text-gray-900 dark:hover:text-gray-200",
                        },
                        {
                            href: "https://www.instagram.com/_.abhishekmaheshwari/",
                            icon: <FaInstagram />,
                            color: "hover:text-pink-600",
                        },
                    ].map(({ href, icon, color }, index) => (
                        <motion.a
                            key={index}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="social-link"
                            whileHover={{
                                scale: 1.2,
                                rotate: 6,
                                textShadow: "0px 0px 8px rgba(255,255,255,0.9)",
                                boxShadow: "0px 0px 12px rgba(255,255,255,0.5)",
                            }}
                            whileTap={{ scale: 0.9 }}
                            className={`relative transition-colors duration-300 ${color}`}
                        >
                            {icon}
                            {/* Animated underline */}
                            <span className="absolute left-0 bottom-[-6px] w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-full"></span>
                        </motion.a>
                    ))}
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
