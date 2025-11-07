"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const WhyUsSection = () => {
    const textVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
    };

    return (
        <section className="relative w-full flex flex-col md:flex-row justify-between items-start md:items-center px-6 md:px-16 py-12 overflow-hidden">
            <motion.div
                className="md:w-1/2 space-y-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={textVariants}
            >
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#0A014F]">
                    Why You Should Choose <span className="text-[#0A014F]">Us</span>
                </h2>
                <p className="text-gray-700 font-medium">
                    At Audeo energy ltd, we help to provide End-to-end energy supply
                    solutions, including:
                </p>
                <ul className="space-y-3 text-gray-800">
                    <li>● Experienced Professional Team</li>
                    <li>● Client Centric Approach</li>
                    <li>● Competitive pricing and guaranteed supply</li>
                    <li>● Robust Global Supplier Network</li>
                    <li>● On-time delivery across Key markets</li>
                    <li>● Custom-built supply solution</li>
                </ul>
            </motion.div>

            <motion.div
                className="hidden md:grid relative md:w-1/2 grid-cols-2 gap-4 mt-8 md:mt-0 md:ml-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={imageVariants}
            >
                <div className="hidden md:block absolute top-10 left-12 md:left-24 z-0">
                    <svg
                        className="w-10 h-10 md:w-14 md:h-14"
                        viewBox="0 0 100 100"
                    >
                        <motion.circle
                            cx="50"
                            cy="50"
                            r="40"
                            fill="#FF7F01"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </svg>
                </div>
                <motion.div
                    className="relative w-full h-40 bg-gray-200 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <Image
                        src={require("../../public/images/why-us1.png")}
                        alt="Placeholder"
                        fill
                        className="object-cover"
                    />
                </motion.div>
                <motion.div
                    
                    className="relative w-full h-40 bg-gray-200 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <Image
                        src={require("../../public/images/why-us2.jpg")}
                        alt="Placeholder"
                        fill
                        className="object-cover"
                    />
                </motion.div>
                <motion.div
                    
                    className="relative w-full h-40 bg-gray-200 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <Image
                        src={require("../../public/images/why-us3.jpg")}
                        alt="Placeholder"
                        fill
                        className="object-cover"
                    />
                </motion.div>
                <motion.div

                    className="relative w-full h-40 bg-gray-200 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <Image
                        src={require("../../public/images/why-us4.jpg")}
                        alt="Placeholder"
                        fill
                        className="object-cover"
                    />
                </motion.div>

                <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <div className="relative w-32 h-32 md:w-36 md:h-36 bg-gray-300 rounded-xl overflow-hidden shadow-lg">
                        <Image
                            src={require("../../public/images/why-us5.jpg")}
                            alt="Center Image"
                            fill
                            className="object-cover"
                        />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default WhyUsSection;
