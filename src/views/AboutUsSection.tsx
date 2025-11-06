"use client"
import { motion } from "framer-motion";
import Image from "next/image";
const AboutUsSection = () => {
    return (
        <section className="relative flex flex-col md:flex-row items-center justify-between w-full px-8 md:px-20 py-16 overflow-hidden bg-white">
            {/* Left Content */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="md:w-1/2 w-full space-y-6 z-10"
            >
                <h2 className="text-[#12005e] text-5xl md:text-3xl font-bold">
                    About us
                </h2>

                <h3 className="text-3xl md:text-4xl font-extrabold leading-snug text-black">
                    Powering a Smarter Way to Learn, Teach, and Grow.
                </h3>

                <p className="text-gray-600 leading-relaxed">
                    Audeo Energy Limited is a forward-thinking energy trading
                    organization specializing in the sourcing, supply, and
                    distribution of refined petroleum products. Established in
                    2006, our business is built on trust, transparency, and a
                    performance-driven culture, delivering consistent value to
                    clients and partners across the continent.
                </p>

                <div>
                    <h4 className="text-lg font-bold text-black mb-2">
                        Our Mission
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                        To provide dependable, competitive, and innovative
                        energy supply solutions that support sustainable growth
                        and industrial development in Africa.
                    </p>
                </div>
            </motion.div>

            <motion.div
                initial={{ x: 50 }}
                animate={{
                    x: 0,
                    scale: [1, 1.05, 0.95, 1.03, 1], 
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="relative md:w-1/2 w-full flex justify-center items-center mt-10 md:mt-0"
            >
                <motion.div
                    className="relative w-[360px] md:w-[460px] h-[640px] overflow-hidden droplet-shape bg-transparent"
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
