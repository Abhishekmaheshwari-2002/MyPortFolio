import { FaJava, FaNode } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiExpress, SiJavascript, SiMongodb, SiNextdotjs } from "react-icons/si";
import { motion } from "framer-motion";
import { TbBrandRedux } from "react-icons/tb";
import { BiBarChartAlt2 } from "react-icons/bi";


const iconVar = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Tech = () => {
    return (
        <div className="pb-24">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl">
                Technologies I Use
            </motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVar(2.5)}
                    className="p-4"
                >
                    <RiReactjsLine className="text-6xl md:text-7xl text-cyan-400" />
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVar(3)}
                    className="p-4"
                >
                    <SiNextdotjs className="text-6xl md:text-7xl" />
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVar(2)}
                    className="p-4"
                >
                    <SiJavascript className="text-6xl md:text-7xl text-yellow-700" />
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVar(3)}
                    className="p-4"
                >
                    <SiMongodb className="text-6xl md:text-7xl text-cyan-500" />
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVar(2.5)}
                    className="p-4"
                >
                    <FaNode className="text-7xl md:text-8xl text-green-500" />
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVar(3)}
                    className="p-4"
                >
                    <SiExpress className="text-6xl md:text-7xl text-sky-500" />
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVar(2.5)}
                    className="p-4"
                >
                    <FaJava className="text-6xl md:text-7xl text-white-500" />
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVar(2)}
                    className="p-4"
                >
                    <BiBarChartAlt2 className="text-5xl md:text-6xl text-yellow-400" />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Tech;
