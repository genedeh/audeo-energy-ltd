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
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative md:w-1/2 w-full flex justify-center items-center mt-10 md:mt-0"
            >
                <div className="relative w-[280px] md:w-[360px] h-[420px] bg-gray-200 overflow-hidden droplet-shape shadow-xl">
                    <Image
                        src={require("../../public/images/droplet-img.jpg")}
                        alt="Large Droplet"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="absolute top-6 right-8 w-[120px] md:w-40 h-[180px] bg-gray-100 overflow-hidden droplet-shape shadow-lg">
                    <Image
                        src={require("../../public/images/droplet-img.jpg")}
                        alt="Small Droplet"
                        fill
                        className="object-cover"
                    />
                </div>
            </motion.div>

            <style jsx>{`
                .droplet-shape {
                    clip-path: path(
                        "M 50% 0 C 70% 10%, 90% 40%, 100% 65% C 100% 85%, 80% 100%, 50% 100% C 20% 100%, 0 85%, 0 65% C 10% 40%, 30% 10%, 50% 0 Z"
                    );
                }
            `}</style>
        </section>
    );
};

export default AboutUsSection;
