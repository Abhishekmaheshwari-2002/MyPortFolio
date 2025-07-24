// import { EXPERIENCES } from "../constaints";
// import { motion } from "framer-motion";

// const Experience = () => {
//     return (
//         <div className="pb-4">
//             <motion.h2
//                 whileInView={{ opacity: 1, y: 0 }}
//                 initial={{ opacity: 0, y: -100 }}
//                 transition={{ duration: 0.5 }}
//                 className="my-20 text-center text-4xl">
//                 Education
//             </motion.h2>
//             <div>
//                 {EXPERIENCES.map((experience, index) => (
//                     <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
//                         <motion.div
//                             whileInView={{ opacity: 1, x: 0 }}
//                             initial={{ opacity: 0, x: -100 }}
//                             transition={{ duration: 1 }}
//                             className="w-full lg:w-1/4 flex justify-center">
//                             <p className="mb-2 text-sm text-stone-400">{experience.year}</p>
//                         </motion.div>
//                         <motion.div
//                             whileInView={{ opacity: 1, x: 0 }}
//                             initial={{ opacity: 0, x: -100 }}
//                             transition={{ duration: 1 }}
//                             className="w-full max-w-xl lg:w-3/4 flex flex-col justify-center">
//                             <h3 className="mb-2 font-semibold text-lg md:text-xl">
//                                 {experience.role} {" "}
//                                 <span className="text-sm text-stone-500">
//                                     {experience.company}
//                                 </span>
//                             </h3>
//                             <p className="mb-4 text-stone-400 text-sm md:text-base">
//                                 {experience.description}
//                             </p>
//                         </motion.div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Experience;
import { EXPERIENCES } from "../constaints";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="pb-24 px-6">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl font-bold mb-16 bg-gradient-to-r from-cyan-400 to-white text-transparent bg-clip-text drop-shadow-lg"
      >
        🎓 Education & Training
      </motion.h2>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            className="relative bg-white/5 border border-stone-300/30 rounded-2xl p-6 shadow-md hover:shadow-cyan-400/20 transition-transform duration-500 hover:scale-105 backdrop-blur-lg"
          >
            <p className="text-sm text-cyan-700 mb-2 font-medium">{experience.year}</p>

            <h3 className="text-lg font-semibold text-cyan-600">
              {experience.role}
              <span className="block text-sm font-normal text-gray-500 mt-1">
                {experience.company}
              </span>
            </h3>

            <p className="mt-3 text-sm text-stone-600 leading-relaxed">
              {experience.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
 
export default Experience;

