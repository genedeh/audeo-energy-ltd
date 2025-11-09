"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { FiTarget, FiEye, FiHeart } from "react-icons/fi";

const AboutUsSection = () => {
    return (
        <section className="relative flex flex-col md:flex-row items-center justify-between w-full px-8 md:px-20 overflow-hidden bg-transparent">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="md:w-1/2 w-full space-y-6 z-10"
            >
                <h2 className="text-[#12005e] text-6xl font-extrabold md:text-3xl">
                    About us
                </h2>

                <p className="text-gray-600 leading-relaxed">
                    Audeo Energy Limited is a forward-thinking energy trading organization specializing in the sourcing, supply,
                    and distribution of refined petroleum products. Established in 2006, our business is built on trust, transparency,
                    and a performance-driven culture, delivering consistent value to clients and partners across the continent.
                </p>

                <section className="space-y-10 p-6 bg-transparent">
                    <motion.div
                        className="space-y-3"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3">
                            <FiTarget className="text-[#FF7F01] text-2xl" />
                            <h4 className="text-xl font-bold text-[#FF7F01]">Our Mission</h4>
                        </div>
                        <p className="text-gray-700 leading-relaxed pl-9">
                            To provide dependable, competitive, and innovative energy supply
                            solutions that support sustainable growth and industrial development
                            in Africa.
                        </p>
                    </motion.div>

                    <motion.div
                        className="space-y-3"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3">
                            <FiEye className="text-[#FF7F01] text-2xl" />
                            <h4 className="text-xl font-bold text-[#FF7F01]">Our Vision</h4>
                        </div>
                        <p className="text-gray-700 leading-relaxed pl-9">
                            To become Africa&apos;s most trusted and efficient petroleum trading
                            partner, recognized for operational excellence, reliability, and
                            ethical practice.
                        </p>
                    </motion.div>

                    <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3">
                            <FiHeart className="text-[#FF7F01] text-2xl" />
                            <h4 className="text-xl font-bold text-[#FF7F01]">Our Values</h4>
                        </div>
                        <ul className="text-black space-y-4 leading-relaxed pl-10">
                            {[
                                {
                                    title: "Integrity",
                                    desc: "We operate with transparency and accountability.",
                                },
                                {
                                    title: "Reliability",
                                    desc: "We deliver on our commitments, without compromise.",
                                },
                                {
                                    title: "Excellence",
                                    desc: "We uphold world-class supply chain and trading standards.",
                                },
                                {
                                    title: "Innovation",
                                    desc: "We pursue smarter, technology-driven trading solutions.",
                                },
                                {
                                    title: "Sustainability",
                                    desc: "We support responsible energy practices and sector advancement.",
                                },
                            ].map((value, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                    className="flex flex-col"
                                >
                                    <span className="font-semibold text-lg text-[#12005e]">
                                        ● {value.title}
                                    </span>
                                    <span className="text-gray-700">{value.desc}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </section>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="italic text-gray-800 font-bold border-l-4 border-[#2D0084] pl-4 mt-6"
                >
                    "Audeo Energy Limited is committed to being a long-term stakeholder in Africa&apos;s energy future"
                </motion.p>
            </motion.div>

            <motion.div
                initial={{ x: 50 }}
                className="relative md:w-1/2 w-full flex justify-center items-center mt-10 md:mt-0"
            >
                <motion.div
                    className="relative w-[360px] md:w-[560px] h-[540px] overflow-hidden droplet-shape bg-transparent"
                >
                    <Image
                        src={require("../../public/images/droplet-img.png")}
                        alt="Large Droplet"
                        fill
                        className="object-cover"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default AboutUsSection;
