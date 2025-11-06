"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaOilCan, FaTruckMoving, FaShieldAlt } from "react-icons/fa";
import { FaBoxesStacked, FaDroplet } from "react-icons/fa6";

const HeroSection = () => {
    return (
        <section className="relative w-full  h-screen flex flex-col justify-center  text-white">
            <Image
                src={require("../../public/images/hero-image.jpg")}
                alt="Petroleum Tanks"
                fill
                priority
                className="object-cover brightness-[0.55] -z-10"
            />

            <div className="relative z-10 flex flex-col justify-center px-6 md:px-16 lg:px-24 max-w-7xl">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-white text-sm md:text-base uppercase font-medium mb-2"
                >
                    Energy You Can Rely On
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="text-3xl md:text-5xl font-bold leading-tight max-w-xl"
                >
                    Trusted Petroleum Solutions for a Growing World
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                    className="text-gray-200 mt-4 max-w-md"
                >
                    We&apos;re committed to delivering world-class petroleum products that
                    support growth, development, and progress across industries and
                    communities.
                </motion.p>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="absolute -bottom-20 right-6 md:right-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 
              pointer-events-auto"
            >
                {[
                    { icon: <FaDroplet size={58} />, title: "Quality Assurance" },
                    { icon: <FaTruckMoving size={58} />, title: "Reliable Supply" },
                    { icon: <FaBoxesStacked size={58} />, title: "Safety & Compliance" },
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.97 }}
                        className="flex flex-col items-center justify-center bg-white text-black rounded-2xl border-l-4 
                 border-l-[#2D0084] shadow-2xl px-6 py-5 w-60 relative "
                    >
                        <div className="text-[#2D0084] mb-2">{item.icon}</div>
                        <p className="text-sm md:text-base font-semibold text-center">{item.title}</p>
                    </motion.div>
                ))}
            </motion.div>

        </section>
    );
};

export default HeroSection;
