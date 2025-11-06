import { motion } from "framer-motion";
import Image from "next/image";

const services = [
    "Refined Petroleum Product Trading",
    "Bulk Supply & Distribution",
    "Storage & Terminal Access",
    "Marine & Offshore Fueling",
    "Energy Procurement Advisory",
];


const EnergySection = () => {
    return (
        <section className="w-full flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20 px-6 md:px-20 pb-20 bg-transparent overflow-hidden">
            <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative w-full md:w-1/2 flex justify-center"
            >
                <div className="relative w-[320px] md:w-[520px] h-[300px] md:h-[420px] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                        src={require("../../public/images/about-us.jpg")}
                        alt="Petroleum Storage"
                        fill
                        className="object-cover"
                    />
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="md:w-1/2 w-full space-y-6"
            >
                <h2 className="text-[#2D0084] text-3xl md:text-4xl font-bold leading-snug">
                    Sustainable Petroleum <br /> Solutions You Can Trust
                </h2>

                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    We provide end-to-end energy supply solutions, including:
                </p>

                <ul className="space-y-4">
                    {services.map((text, i) => (
                        <motion.li
                            key={i}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="relative font-medium text-gray-900 text-lg pl-4 border-l-4 border-transparent hover:border-[#FF7F01] transition-all duration-300"
                        >
                            {text}
                        </motion.li>
                    ))}
                </ul>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="italic text-gray-800 font-bold border-l-4 border-[#2D0084] pl-4 mt-6"
                >
                    “Our platform streamlines petroleum sourcing, distribution, and operational coordination, ensuring efficient workflows and transparent collaboration among suppliers, partners, and clients.”
                </motion.p>
            </motion.div>
        </section>
    );
}

export default EnergySection;