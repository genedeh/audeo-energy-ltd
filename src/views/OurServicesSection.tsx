"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const OurServicesSection = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const services = [
        {
            title: "Trading & Supply",
            description:
                "Reliable sourcing and supply of high-quality refined petroleum products (PMS, Diesel).",
        },
        {
            title: "Distribution & Logistics",
            description:
                "Seamless logistics from international markets to client facilities.",
        },
        {
            title: "Marine & Offshore Fueling",
            description:
                "Fleet and offshore supply solutions for maritime operators and energy companies.",
        },
        {
            title: "Storage & Terminal Access",
            description:
                "Access to strategic storage facilities enabling consistent supply and optimal delivery planning.",
        },
    ];

    return (
        <section className="relative w-full flex flex-col items-center justify-center py-20 px-6 md:px-16 bg-white overflow-visible">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="absolute top-6 left-6 md:left-20 text-[#2D0084] z-20 text-2xl md:text-3xl font-bold"
            >
                Our Service
            </motion.h2>

            <div className="hidden md:block">
                <svg
                    className="absolute top-10 left-48 w-10 h-10 md:w-14 md:h-14"
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

                <svg
                    className="absolute bottom-12 right-20 w-10 h-10 md:w-16 md:h-16"
                    viewBox="0 0 100 100"
                >
                    <motion.circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="#FF7F01"
                        animate={{ scale: [1, 1.15, 1] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                </svg>

                <svg
                    className="absolute top-[600px] left-48 w-10 h-10 md:w-24 md:h-24"
                    viewBox="0 0 100 100"
                >
                    <motion.circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="#FF7F01"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                    />
                </svg>
            </div>

            <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center">
                {isMobile ? (
                    <div className="flex flex-col items-center justify-center gap-6 w-full">
                        {services.map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="w-full max-w-[360px] bg-[#0000B333] backdrop-blur-sm p-5 shadow-md rounded-lg cursor-pointer hover:scale-[1.03] transition-transform"
                            >
                                <h3 className="text-[#000051] font-semibold text-lg">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-white mt-2">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="relative flex justify-center items-center w-full md:w-2/3 lg:w-3/5">
                        <div className="relative w-[260px] h-[260px] md:w-[360px] md:h-[360px] lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden flex items-center justify-center">
                            <Image
                                src={require("../../public/images/our-services.png")}
                                alt="Large Droplet"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: -30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="absolute -left-8 md:-left-44 lg:-left-56 top-6 md:top-8 w-[320px] md:w-[380px] lg:w-[420px]"
                        >
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 220 }}
                                className="bg-[#0000B333] backdrop-blur-sm p-5 shadow-lg cursor-pointer"
                            >
                                <h3 className="text-[#000051] font-semibold text-lg md:text-xl">
                                    Trading & Supply
                                </h3>
                                <p className="text-sm md:text-base text-white mt-2">
                                    Reliable sourcing and supply of high-quality refined petroleum
                                    products (PMS, Diesel).
                                </p>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: -30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="absolute -right-8 md:-right-44 lg:-right-60 top-6 md:top-8 w-[320px] md:w-[380px] lg:w-[420px]"
                        >
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 220 }}
                                className="bg-[#0000B333] backdrop-blur-sm p-5 shadow-lg cursor-pointer"
                            >
                                <h3 className="text-[#000051] font-semibold text-lg md:text-xl">
                                    Distribution & Logistics
                                </h3>
                                <p className="text-sm md:text-base text-white mt-2">
                                    Seamless logistics from international markets to client
                                    facilities.
                                </p>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="absolute -left-8 md:-left-44 lg:-left-56 bottom-6 md:bottom-8 w-[320px] md:w-[380px] lg:w-[420px]"
                        >
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 220 }}
                                className="bg-[#0000B333] backdrop-blur-sm p-5 shadow-lg cursor-pointer"
                            >
                                <h3 className="text-[#000051] font-semibold text-lg md:text-xl">
                                    Marine & Offshore Fueling
                                </h3>
                                <p className="text-sm md:text-base text-white mt-2">
                                    Fleet and offshore supply solutions for maritime operators and
                                    energy companies.
                                </p>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="absolute -right-8 md:-right-44 lg:-right-60 bottom-6 md:bottom-8 w-[320px] md:w-[380px] lg:w-[420px]"
                        >
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 220 }}
                                className="bg-[#0000B333] backdrop-blur-sm p-5 shadow-lg cursor-pointer"
                            >
                                <h3 className="text-[#000051] font-semibold text-lg md:text-xl">
                                    Storage & Terminal Access
                                </h3>
                                <p className="text-sm md:text-base text-white mt-2">
                                    Access to strategic storage facilities enabling consistent
                                    supply and optimal delivery planning.
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default OurServicesSection;