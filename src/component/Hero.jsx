import { HERO_CONTENT } from "../constaints/index";
import profilePic from "../assets/img.jpg";
import { motion } from "framer-motion";

const containerVar = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.5,
        }
    }
};

const childVar = {
    hidden: {
        opacity: 0,
        x: -100
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5
        }
    }
}

const Hero = () => {
    return (
        <div className="lg:mb-36">
            <div className="flex flex-wrap lg:flex-row-reverse">
                <div className="w-full lg:w-1/2 flex justify-center items-center">
                    <motion.img
                        src={profilePic}
                        alt="Abhishek Maheshwari"
                        className="border border-stone-900 rounded-3xl w-full h-auto lg:max-w-lg object-cover mr-56"
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 100, opacity: 1 }}
                        transition={{ duration: 1, delay: 1.5 }}
                    />
                </div>


                <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVar}
                        className="flex flex-col items-center lg:items-start mt-10 px-4">
                        <motion.h2
                            variants={childVar}
                            className="pb-2 text-5xl md:text-6xl lg:text-8xl tracking-tighter text-center lg:text-left">
                            Abhishek Maheshwari
                        </motion.h2>
                        <motion.span
                            variants={childVar}
                            className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-2xl md:text-3xl tracking-tight text-transparent text-center lg:text-left">
                           Software Developer
                        </motion.span>
                        <motion.p
                            variants={childVar}
                            className="my-2 max-w-lg py-6 text-lg md:text-xl leading-relaxed tracking-tighter text-center lg:text-left">
                            {HERO_CONTENT}
                        </motion.p>
                        <motion.a
                            variants={childVar}
                            href="https://drive.google.com/file/d/1YZON7v8T-z2KVq6hC-SJ9r0m7eGlMl3o/view?usp=drive_link"
                            target="blank"
                            rel="noopener noreferrer"
                            download
                            className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10"
                        >
                            Get My Resume
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
