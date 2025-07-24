// import { FaJava, FaNode } from "react-icons/fa";
// import { RiReactjsLine } from "react-icons/ri";
// import { SiExpress, SiJavascript, SiMongodb, SiNextdotjs } from "react-icons/si";
// import { motion } from "framer-motion";
// import { TbBrandRedux } from "react-icons/tb";
// import { BiBarChartAlt2 } from "react-icons/bi";
// import { RiDatabase2Line } from "react-icons/ri";



// const iconVar = (duration) => ({
//     initial: { y: -10 },
//     animate: {
//         y: [10, -10],
//         transition: {
//             duration: duration,
//             ease: "linear",
//             repeat: Infinity,
//             repeatType: "reverse",
//         }
//     }
// })

// const Tech = () => {
//     return (
//         <div className="pb-24">
//             <motion.h2
//                 whileInView={{ opacity: 1, y: 0 }}
//                 initial={{ opacity: 0, y: -100 }}
//                 transition={{ duration: 1.5 }}
//                 className="my-20 text-center text-4xl">
//                 Technologies I Use
//             </motion.h2>
//             <motion.div
//                 whileInView={{ opacity: 1, x: 0 }}
//                 initial={{ opacity: 0, x: -100 }}
//                 transition={{ duration: 1.5 }}
//                 className="flex flex-wrap items-center justify-center gap-4">
//                 <motion.div
//                     initial="initial"
//                     animate="animate"
//                     variants={iconVar(2.5)}
//                     className="p-4"
//                 >
//                     <RiReactjsLine className="text-6xl md:text-7xl text-cyan-400" />
//                 </motion.div>
//                 <motion.div
//                     initial="initial"
//                     animate="animate"
//                     variants={iconVar(3)}
//                     className="p-4"
//                 >
//                     <SiNextdotjs className="text-6xl md:text-7xl" />
//                 </motion.div>
//                 <motion.div
//                     initial="initial"
//                     animate="animate"
//                     variants={iconVar(2)}
//                     className="p-4"
//                 >
//                     <SiJavascript className="text-6xl md:text-7xl text-yellow-700" />
//                 </motion.div>
//                 <motion.div
//                     initial="initial"
//                     animate="animate"
//                     variants={iconVar(3)}
//                     className="p-4"
//                 >
//                     <SiMongodb className="text-6xl md:text-7xl text-cyan-500" />
//                 </motion.div>
//                 <motion.div
//                     initial="initial"
//                     animate="animate"
//                     variants={iconVar(2.5)}
//                     className="p-4"
//                 >
//                     <FaNode className="text-7xl md:text-8xl text-green-500" />
//                 </motion.div>
//                 <motion.div
//                     initial="initial"
//                     animate="animate"
//                     variants={iconVar(3)}
//                     className="p-4"
//                 >
//                     <SiExpress className="text-6xl md:text-7xl text-sky-500" />
//                 </motion.div>
//                 <motion.div
//                     initial="initial"
//                     animate="animate"
//                     variants={iconVar(2.5)}
//                     className="p-4"
//                 >
//                     <FaJava className="text-6xl md:text-7xl text-white-500" />
//                 </motion.div>
//                 <motion.div
//                     initial="initial"
//                     animate="animate"
//                     variants={iconVar(2)}
//                     className="p-4"
//                 >
//                     <BiBarChartAlt2 className="text-5xl md:text-6xl text-yellow-400" />
//                 </motion.div>
//                 <motion.div
//                     initial="initial"
//                     animate="animate"
//                     variants={iconVar(2.5)}
//                     className="p-4"
//                 >
//                 <RiDatabase2Line className="text-5xl md:text-6xl text-indigo-400" />
//                  </motion.div>
//             </motion.div>
//         </div>
//     );
// };

// export default Tech;
import {
  FaJava,
  FaNode,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { RiReactjsLine, RiDatabase2Line } from "react-icons/ri";
import { SiExpress, SiJavascript, SiMongodb, SiNextdotjs } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { BiBarChartAlt2 } from "react-icons/bi";
import { motion } from "framer-motion";

const techIcons = [
  { icon: <RiReactjsLine className="text-cyan-400" />, duration: 2.5 },
  { icon: <SiNextdotjs />, duration: 3 },
  { icon: <SiJavascript className="text-yellow-400" />, duration: 2 },
  { icon: <SiMongodb className="text-green-400" />, duration: 3 },
  { icon: <FaNode className="text-green-500" />, duration: 2.5 },
  { icon: <SiExpress className="text-sky-500" />, duration: 3 },
  { icon: <FaJava className="text-red-400" />, duration: 2.5 },
  { icon: <BiBarChartAlt2 className="text-yellow-300" />, duration: 2 },
  { icon: <RiDatabase2Line className="text-indigo-400" />, duration: 2.5 },
];

const iconVar = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Tech = () => {
  return (
    <div className="pb-24 px-6 md:px-12">
{/*       <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl font-bold text-white"
      >
        🚀 Technologies I Use
      </motion.h2> */}
       <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="text-center text-4xl font-bold mb-16 bg-gradient-to-r from-cyan-400 to-white text-transparent bg-clip-text drop-shadow-lg"
      >
        🚀 Things I've Built
      </motion.h2>

      
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-6"
      >
        {techIcons.map((tech, index) => (
          <motion.div
            key={index}
            initial="initial"
            animate="animate"
            variants={iconVar(tech.duration)}
            whileHover={{
              scale: 1.1,
              rotateX: 10,
              rotateY: -10,
              transition: { type: "spring", stiffness: 300 },
            }}
            className="p-5 bg-[#1e293b] rounded-xl shadow-lg hover:shadow-cyan-400/50 transition duration-300 ease-in-out"
            style={{ perspective: "800px" }}
          >
            <div className="text-5xl md:text-6xl">{tech.icon}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Tech;


