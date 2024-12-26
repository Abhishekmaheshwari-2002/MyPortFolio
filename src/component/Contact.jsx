import { CONTACT } from "../constaints";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <div className="border-t border-stone-900 pg-20">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-10 text-center text-4xl"
            >
                Feet Free to Reach Out
            </motion.h2>
            <div className="text-center tracking-tighter">
                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className="my-4"
                >
                    {CONTACT.phoneNo}
                </motion.p>
                <motion.a
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    href="#" className="border-b my-4">
                    {CONTACT.email}
                </motion.a>
                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="my-4"
                >
                    {CONTACT.address}
                </motion.p>
            </div>
        </div>
    );
};

export default Contact;
