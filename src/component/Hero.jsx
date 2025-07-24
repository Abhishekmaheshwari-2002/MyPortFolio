// import { HERO_CONTENT } from "../constaints/index";
// import profilePic from "../assets/img.jpg";
// import { motion } from "framer-motion";

// const containerVar = {
//     hidden: { opacity: 0, x: -100 },
//     visible: {
//         opacity: 1,
//         x: 0,
//         transition: {
//             duration: 0.5,
//             staggerChildren: 0.5,
//         }
//     }
// };

// const childVar = {
//     hidden: {
//         opacity: 0,
//         x: -100
//     },
//     visible: {
//         opacity: 1,
//         x: 0,
//         transition: {
//             duration: 0.5
//         }
//     }
// }

// const Hero = () => {
//     return (
//         <div className="lg:mb-36">
//             <div className="flex flex-wrap lg:flex-row-reverse">
//                 <div className="w-full lg:w-1/2 flex justify-center items-center">
//                     <motion.img
//                         src={profilePic}
//                         alt="Abhishek Maheshwari"
//                         className="border border-stone-900 rounded-3xl w-full h-auto lg:max-w-lg object-cover mr-56"
//                         initial={{ x: 100, opacity: 0 }}
//                         animate={{ x: 100, opacity: 1 }}
//                         transition={{ duration: 1, delay: 1.5 }}
//                     />
//                 </div>


//                 <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
//                     <motion.div
//                         initial="hidden"
//                         animate="visible"
//                         variants={containerVar}
//                         className="flex flex-col items-center lg:items-start mt-10 px-4">
//                         <motion.h2
//                             variants={childVar}
//                             className="pb-2 text-5xl md:text-6xl lg:text-8xl tracking-tighter text-center lg:text-left">
//                             Abhishek Maheshwari
//                         </motion.h2>
//                         <motion.span
//                             variants={childVar}
//                             className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-2xl md:text-3xl tracking-tight text-transparent text-center lg:text-left">
//                            Software Developer
//                         </motion.span>
//                         <motion.p
//                             variants={childVar}
//                             className="my-2 max-w-lg py-6 text-lg md:text-xl leading-relaxed tracking-tighter text-center lg:text-left">
//                             {HERO_CONTENT}
//                         </motion.p>
//                         <motion.a
//                             variants={childVar}
//                             href="https://drive.google.com/file/d/1YZON7v8T-z2KVq6hC-SJ9r0m7eGlMl3o/view?usp=drive_link"
//                             target="blank"
//                             rel="noopener noreferrer"
//                             download
//                             className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10"
//                         >
//                             Get My Resume
//                         </motion.a>
//                     </motion.div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Hero;

// import { HERO_CONTENT } from "../constaints/index";
// import profilePic from "../assets/img.jpg";
// import { motion } from "framer-motion";
// import { FaGithub, FaLinkedin } from "react-icons/fa";

// const containerVar = {
//   hidden: { opacity: 0, x: -50 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       duration: 0.6,
//       staggerChildren: 0.3,
//     },
//   },
// };

// const childVar = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.4 },
//   },
// };

// const Hero = () => {
//   return (
//     <section className="lg:mb-36 px-6 md:px-12">
//       <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
//         {/* Text Content */}
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={containerVar}
//           className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2"
//         >
//           <motion.h1
//             variants={childVar}
//             className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
//           >
//             Abhishek Maheshwari
//           </motion.h1>

//           <motion.h2
//             variants={childVar}
//             className="mt-2 text-xl md:text-2xl text-cyan-500 font-medium"
//           >
//             Software Developer
//           </motion.h2>

//           <motion.p
//             variants={childVar}
//             className="mt-6 text-lg text-gray-300 max-w-xl leading-relaxed"
//           >
//             {HERO_CONTENT}
//           </motion.p>

//           {/* Resume Button */}
//           <motion.a
//             variants={childVar}
//             href="https://drive.google.com/file/d/1YZON7v8T-z2KVq6hC-SJ9r0m7eGlMl3o/view?usp=drive_link"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="mt-6 bg-cyan-400 text-black px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-cyan-500 transition"
//           >
//             📄 Get My Resume
//           </motion.a>

//           {/* Social Icons */}
//           <motion.div
//             variants={childVar}
//             className="mt-4 flex gap-5 text-2xl text-white"
//           >
//             <a href="https://github.com/yourusername" target="_blank">
//               <FaGithub className="hover:text-cyan-400 transition" />
//             </a>
//             <a href="https://linkedin.com/in/yourusername" target="_blank">
//               <FaLinkedin className="hover:text-cyan-400 transition" />
//             </a>
//           </motion.div>
//         </motion.div>

//         {/* Profile Image */}
//         <motion.img
//           src={profilePic}
//           alt="Abhishek Maheshwari"
//           className="rounded-3xl w-full max-w-xs md:max-w-md lg:max-w-lg object-cover shadow-xl"
//           initial={{ opacity: 0, x: 100 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//         />
//       </div>
//     </section>
//   );
// };

// export default Hero;
import { HERO_CONTENT } from "../constaints/index";
import profilePic from "../assets/img.jpg";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useRef } from "react";

const Hero = () => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [0, 1], [10, -10]);
  const rotateY = useTransform(x, [0, 1], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    x.set(px);
    y.set(py);
  };

  return (
    <section className="lg:mb-36 px-6 md:px-12">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Text Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.6, staggerChildren: 0.3 },
            },
          }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2"
        >
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
          >
            Abhishek Maheshwari
          </motion.h1>

          <motion.h2
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-2 text-xl md:text-2xl text-cyan-500 font-medium"
          >
            Software Developer
          </motion.h2>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-6 text-lg text-gray-300 max-w-xl leading-relaxed"
          >
            {HERO_CONTENT}
          </motion.p>

          <motion.a
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            href="https://drive.google.com/file/d/1YZON7v8T-z2KVq6hC-SJ9r0m7eGlMl3o/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 bg-cyan-400 text-black px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-cyan-500 transition"
          >
            📄 Get My Resume
          </motion.a>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-4 flex gap-5 text-2xl text-white"
          >
            <a href="https://github.com/yourusername" target="_blank">
              <FaGithub className="hover:text-cyan-400 transition" />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank">
              <FaLinkedin className="hover:text-cyan-400 transition" />
            </a>
          </motion.div>
        </motion.div>

        {/* 3D Tilt Image */}
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
            perspective: 1000,
          }}
          className="w-full max-w-xs md:max-w-md lg:max-w-lg"
        >
          <motion.img
            src={profilePic}
            alt="Abhishek Maheshwari"
            className="rounded-3xl w-full object-cover shadow-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

