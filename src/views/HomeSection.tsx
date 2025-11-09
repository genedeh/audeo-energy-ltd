"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const HomeSection = () => {
    return (
        <section className="relative w-full bg-transparent text-black py-20 px-6 md:px-16 lg:px-18 flex justify-start mt-20">
            <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex justify-start"
                >
                    <div className="relative w-[522px] h-[348px] overflow-hidden rounded-2xl flex items-center justify-center">
                        <Image
                            src={require("../../public/images/home-img.png")} 
                            alt="Audeo Energy Image"
                            width={522}
                            height={348}
                            className="object-cover"
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl md:text-4xl font-bold mb-10">
                        Welcome to{" "}
                        <span className="inline-flex items-center">
                            <Image
                                src={require("../../public/images/logo.png")}
                                alt="Audeo Energy Logo"
                                width={120}
                                height={40}
                                className="inline-block ml-2"
                            />
                        </span>
                    </h2>

                    <p className="text-gray-700 text-3xl leading-relaxed mb-4">
                        Our mandate is to ensure secure access to premium petroleum products,
                        delivered with precision, integrity, and world-class standards.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default HomeSection;
