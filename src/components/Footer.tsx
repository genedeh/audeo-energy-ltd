"use client";
import { motion } from "framer-motion";

const Footer = () => {


    const containerVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    return (
        <motion.footer
            className="bg-[#0A014F] text-white px-6 md:px-16 py-12 w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
        >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 items-start">
                <div className="space-y-4">
                    <h2 className="text-2xl font-extrabold text-white">Audeo <span className="font-semibold">Energy Ltd.</span></h2>
                    <p className="font-semibold text-sm text-gray-300">Energy You Can Rely On</p>

                    <div>
                        <h3 className="font-bold text-white mb-1">About us</h3>
                        <p className="text-sm text-gray-300 leading-relaxed">
                            Audeo Energy Limited is a forward-thinking energy trading organization
                            specializing in the supply and distribution of refined petroleum products.
                        </p>
                    </div>
                </div>

                <div className="space-y-3">
                    <h3 className="font-bold text-white mb-2">Service</h3>
                    {["Trading & Supply", "Distribution & Logistics", "Marine & Offshore Fueling", "Storage & Terminal Access"].map((item, i) => (
                        <motion.a

                            href="/#ourservices"
                            key={i}
                            whileHover={{ x: 5, color: "#FF7F01" }}
                            transition={{ duration: 0.2 }}
                            className="block text-gray-300 hover:text-[#FF7F01] text-sm font-medium"
                        >
                            {item}
                        </motion.a>
                    ))}
                </div>

                <div className="space-y-3">
                    <h3 className="font-bold text-white mb-2">Company</h3>
                    <motion.a
                        href="/#aboutus"
                        whileHover={{ x: 5, color: "#FF7F01" }}
                        transition={{ duration: 0.2 }}
                        className="block text-gray-300 hover:text-[#FF7F01] text-sm font-medium"
                    >
                        Who we are
                    </motion.a>
                    <motion.a
                        href="/#ourservices"
                        whileHover={{ x: 5, color: "#FF7F01" }}
                        transition={{ duration: 0.2 }}
                        className="block text-gray-300 hover:text-[#FF7F01] text-sm font-medium"
                    >
                        Our service
                    </motion.a>
                    <motion.a
                        href="/#contactus"
                        whileHover={{ x: 5, color: "#FF7F01" }}
                        transition={{ duration: 0.2 }}
                        className="block text-gray-300 hover:text-[#FF7F01] text-sm font-medium"
                    >
                        Contact us
                    </motion.a>
                    <motion.a
                        href="/#mission"
                        whileHover={{ x: 5, color: "#FF7F01" }}
                        transition={{ duration: 0.2 }}
                        className="block text-gray-300 hover:text-[#FF7F01] text-sm font-medium"
                    >
                        Our Mission
                    </motion.a>
                </div>

                <div className="space-y-4">
                    <h3 className="font-bold text-white mb-2">Contact us</h3>
                    <p>
                        <span className="font-semibold text-white">Call:</span>{" "}
                        <a
                            href="tel:+2347079393874"
                            className="text-gray-300 hover:text-[#FF7F01] transition-colors duration-300"
                        >
                            +2347079393874
                        </a>
                    </p>
                    <p>
                        <span className="font-semibold text-white">Email:</span>{" "}
                        <a
                            href="mailto:info@audeoenergy.com"
                            className="text-gray-300 hover:text-[#FF7F01] transition-colors duration-300"
                        >
                            info@audeoenergy.com
                        </a>
                    </p>


                </div>
            </div>

            <motion.div
                className="mt-10 text-center text-gray-400 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
            >
                © {new Date().getFullYear()} Audeo Energy Ltd. All rights reserved.
            </motion.div>
        </motion.footer>
    );
};

export default Footer;
