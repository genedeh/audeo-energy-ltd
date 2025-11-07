"use client";
import { motion } from "framer-motion";

const ContactUsSection = () => {
    const textVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const mapVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
    };

    return (
        <section className="w-full flex flex-col md:flex-row justify-between items-start md:items-center px-6 md:px-16 py-12 bg-white overflow-hidden">
            <motion.div
                className="md:w-1/2 space-y-5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={textVariants}
            >
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#0A014F]">
                    Contact us
                </h2>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                    Partner With A Trusted Energy Supplier
                </h3>

                <p className="text-gray-700">
                    <span className="font-semibold">Email:</span>{" "}
                    <a
                        href="mailto:info@audeoenergy.com"
                        className="text-black font-semibold hover:text-[#FF7F01] transition-colors duration-300"
                    >
                        info@audeoenergy.com
                    </a>
                </p>

                <p className="text-gray-700">
                    <span className="font-semibold">Call:</span>{" "}
                    <a
                        href="tel:+23400000000"
                        className="text-black font-semibold hover:text-[#FF7F01] transition-colors duration-300"
                    >
                        +234xxxxxxx
                    </a>
                </p>

                <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold">Headquarters:</span> 9B Harriman
                    Street, Lekki Phase 1, Lagos State, Nigeria.
                </p>
            </motion.div>

            <motion.div
                className="relative md:w-1/2 w-full mt-8 md:mt-0 md:ml-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={mapVariants}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
            >
                <iframe
                    title="Audeo Energy Map"
                    width="100%"
                    height="350"
                    className="rounded-2xl shadow-lg border-0"
                    loading="lazy"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=3.448%2C6.431%2C3.461%2C6.442&layer=mapnik&marker=6.435%2C3.455"
                ></iframe>
            </motion.div>
        </section>
    );
};

export default ContactUsSection;
