import { PROJECTS } from "../constaints";
import { motion } from "framer-motion";
import { IoLink } from "react-icons/io5";

const Projects = () => {
    return (
        <div className="pb-4">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl">
                Projects Experience
            </motion.h2>
            <div>
                {PROJECTS.map((project, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4 flex justify-center">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="mb-6 rounded w-3/4 h-auto max-w-xs md:max-w-sm lg:max-w-full"
                            />
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl lg:w-3/4 flex flex-col justify-center">
                            <h3 className="mb-2 font-semibold text-xl md:text-2xl">
                                {project.title}
                                <a href={project.link} className="ml-2 text-stone-600 hover:text-stone-800">
                                    <IoLink />
                                </a>
                            </h3>
                            <p className="mb-4 text-stone-400 text-sm md:text-base">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap">
                                {project.technologies.map((tech, index) => (
                                    <span
                                        className="mr-2 mb-2 rounded bg-stone-900 p-2 text-xs font-medium text-stone-300"
                                        key={index}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;