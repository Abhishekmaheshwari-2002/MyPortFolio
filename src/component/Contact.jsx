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
                Don’t Be Shy — Let’s Chat!
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


// import { CONTACT } from "../constaints";
// import { motion } from "framer-motion";
// import { MailIcon, PhoneCall, MapPin } from "lucide-react";

// const Contact = () => {
//   return (
//     <div className="py-20 px-6 bg-transparent">
//       <motion.h2
//         whileInView={{ opacity: 1, y: 0 }}
//         initial={{ opacity: 0, y: -50 }}
//         transition={{ duration: 0.6 }}
//         className="text-center text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-white text-transparent bg-clip-text drop-shadow-lg"
//       >
//         Don’t Be Shy — Let’s Chat!
//       </motion.h2>

//       <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto text-center">
//         {/* Phone */}
//         <motion.div
//           whileInView={{ opacity: 1, y: 0 }}
//           initial={{ opacity: 0, y: 40 }}
//           transition={{ duration: 0.7 }}
//           className="p-6 bg-white/10 rounded-2xl shadow-lg backdrop-blur-md border border-gray-200/30"
//         >
//           <PhoneCall className="mx-auto text-cyan-500 mb-4" size={32} />
//           <p className="text-sm text-gray-500">Phone</p>
//           <p className="text-lg font-semibold text-cyan-600 mt-1">
//             {CONTACT.phoneNo}
//           </p>
//         </motion.div>

//         {/* Email */}
//         <motion.div
//           whileInView={{ opacity: 1, y: 0 }}
//           initial={{ opacity: 0, y: 40 }}
//           transition={{ duration: 0.8 }}
//           className="p-6 bg-white/10 rounded-2xl shadow-lg backdrop-blur-md border border-gray-200/30"
//         >
//           <MailIcon className="mx-auto text-cyan-500 mb-4" size={32} />
//           <p className="text-sm text-gray-500">Email</p>
//           <a
//             href={`mailto:${CONTACT.email}`}
//             className="text-lg font-semibold text-cyan-600 mt-1 inline-block"
//           >
//             {CONTACT.email}
//           </a>
//         </motion.div>

//         {/* Address */}
//         <motion.div
//           whileInView={{ opacity: 1, y: 0 }}
//           initial={{ opacity: 0, y: 40 }}
//           transition={{ duration: 0.9 }}
//           className="p-6 bg-white/10 rounded-2xl shadow-lg backdrop-blur-md border border-gray-200/30"
//         >
//           <MapPin className="mx-auto text-cyan-500 mb-4" size={32} />
//           <p className="text-sm text-gray-500">Location</p>
//           <p className="text-lg font-semibold text-cyan-600 mt-1">
//             {CONTACT.address}
//           </p>
//         </motion.div>
//       </div>
//     </div>
//   );
// };
 
// export default Contact;

