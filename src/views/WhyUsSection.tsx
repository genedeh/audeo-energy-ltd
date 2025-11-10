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
                className="md:w-1/2 space-y-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={textVariants}
            >
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#0A014F]">
                    Why Audeo Energy Limited
                </h2>

                <div className="space-y-5">
                    <div>
                        <h4 className="text-[#FF7F01] font-semibold text-lg">
                            Commitment
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                            We deliver certainty in a dynamic energy world.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-[#FF7F01] font-semibold text-lg">
                            Advantage
                        </h4>

                        <ul className="space-y-4 text-gray-800 mt-2">
                            <li>
                                <span className="font-semibold text-[#0A014F]">
                                    Robust Global Supplier Network
                                </span>
                                <br />
                                <span className="text-gray-700">
                                    Competitive pricing and guaranteed supply.
                                </span>
                            </li>

                            <li>
                                <span className="font-semibold text-[#0A014F]">
                                    Pan-African Distribution Capabilities
                                </span>
                                <br />
                                <span className="text-gray-700">
                                    On-time delivery across key markets.
                                </span>
                            </li>

                            <li>
                                <span className="font-semibold text-[#0A014F]">
                                    Regulatory Compliance & Quality Standards
                                </span>
                                <br />
                                <span className="text-gray-700">
                                    Adherence to international benchmarks.
                                </span>
                            </li>

                            <li>
                                <span className="font-semibold text-[#0A014F]">
                                    Experienced Professional Team
                                </span>
                                <br />
                                <span className="text-gray-700">
                                    Deep sector knowledge & operational rigor.
                                </span>
                            </li>

                            <li>
                                <span className="font-semibold text-[#0A014F]">
                                    Client-Centric Approach
                                </span>
                                <br />
                                <span className="text-gray-700">
                                    Custom-built supply solutions.
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[#FF7F01] font-semibold text-lg">
                            Sustainability
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                            Audeo Energy Limited is committed to ethical trade practices,
                            responsible resource utilisation, and supporting the transition toward
                            cleaner and more efficient energy solutions across the continent. We
                            operate with integrity, environmental consideration, and a long-term
                            perspective.
                        </p>
                    </div>
                </div>
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
