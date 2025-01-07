import { CONTACT } from "../constaints";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <div className="border-t border-stone-900 py-20">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-10 text-center text-4xl md:text-5xl"
            >
                Feel Free to Reach Out
            </motion.h2>
            <div className="text-center tracking-tighter">
                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className="my-4 text-lg md:text-xl"
                >
                    {CONTACT.phoneNo}
                </motion.p>
                <motion.a
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    href={`mailto:${CONTACT.email}`} // Updated to make it a functional email link
                    className="border-b my-4 text-lg md:text-xl"
                >
                    {CONTACT.email}
                </motion.a>
                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="my-4 text-lg md:text-xl"
                >
                    {CONTACT.address}
                </motion.p>
            </div>
        </div>
    );
};

export default Contact;