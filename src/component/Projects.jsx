// import { PROJECTS } from "../constaints";
// import { motion } from "framer-motion";
// import { IoLink } from "react-icons/io5";

// const Projects = () => {
//     return (
//         <div className="pb-4">
//             <motion.h2
//                 whileInView={{ opacity: 1, y: 0 }}
//                 initial={{ opacity: 0, y: -100 }}
//                 transition={{ duration: 0.5 }}
//                 className="my-20 text-center text-4xl">
//                 Projects Experience
//             </motion.h2>
//             <div>
//                 {PROJECTS.map((project, index) => (
//                     <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
//                         <motion.div
//                             whileInView={{ opacity: 1, x: 0 }}
//                             initial={{ opacity: 0, x: -100 }}
//                             transition={{ duration: 1 }}
//                             className="w-full lg:w-1/4 flex justify-center">
//                             <img
//                                 src={project.image}
//                                 alt={project.title}
//                                 className="mb-6 rounded w-3/4 h-auto max-w-xs md:max-w-sm lg:max-w-full"
//                             />
//                         </motion.div>
//                         <motion.div
//                             whileInView={{ opacity: 1, x: 0 }}
//                             initial={{ opacity: 0, x: -100 }}
//                             transition={{ duration: 1 }}
//                             className="w-full max-w-xl lg:w-3/4 flex flex-col justify-center">
//                             <h3 className="mb-2 font-semibold text-xl md:text-2xl">
//                                 {project.title}
//                                 <a href={project.link} className="ml-2 text-stone-600 hover:text-stone-800">
//                                     <IoLink />
//                                 </a>
//                             </h3>
//                             <p className="mb-4 text-stone-400 text-sm md:text-base">
//                                 {project.description}
//                             </p>
//                             <div className="flex flex-wrap">
//                                 {project.technologies.map((tech, index) => (
//                                     <span
//                                         className="mr-2 mb-2 rounded bg-stone-900 p-2 text-xs font-medium text-stone-300"
//                                         key={index}>
//                                         {tech}
//                                     </span>
//                                 ))}
//                             </div>
//                         </motion.div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Projects;
import { PROJECTS } from "../constaints";
import { motion } from "framer-motion";
import { IoLink } from "react-icons/io5";

const Projects = () => {
    return (
        <div className="pb-24 px-6">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.8 }}
                className="text-center text-4xl font-bold mb-16 bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text">
                Things I've Built
            </motion.h2>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2">
                {PROJECTS.map((project, index) => (
                    <motion.div
                        whileInView={{ opacity: 1, scale: 1 }}
                        initial={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.7, delay: index * 0.2 }}
                        key={index}
                        className="relative bg-stone-900/50 border border-stone-700 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out backdrop-blur-sm group">

                        <img
                            src={project.image}
                            alt={project.title}
                            className="rounded-lg w-full h-48 object-cover mb-4 group-hover:scale-105 transition-transform duration-300"
                        />

                        <h3 className="text-xl font-semibold text-white mb-2 flex items-center">
                            {project.title}
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-2 text-cyan-400 hover:text-cyan-300">
                                <IoLink size={18} />
                            </a>
                        </h3>

                        <p className="text-stone-300 text-sm mb-4">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, i) => (
                                <span
                                    key={i}
                                    className="text-xs bg-stone-800 text-stone-300 px-3 py-1 rounded-full shadow-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
