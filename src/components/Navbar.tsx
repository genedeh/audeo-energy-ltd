"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiHome, FiTool, FiInfo, FiUser, FiPhoneCall } from "react-icons/fi";
import Image from "next/image";

const navItems = [
    { name: "Home", icon: <FiHome />, link: "#home" },
    { name: "About Us", icon: <FiInfo />, link: "#about" },
    { name: "Our Services", icon: <FiTool />, link: "#ourservices" },
    { name: "Our People", icon: <FiUser />, link: "#ourpeople" },
    { name: "Contact us", icon: <FiPhoneCall />, link: "#contact us" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hovered, setHovered] = useState<number | null>(null);
    const [hash, setHash] = useState<string>("#home");

    useEffect(() => {
        if (typeof window === "undefined") return;

        const handleHashChange = () => {
            setHash(window.location.hash || "#home");
        };

        handleHashChange();

        window.addEventListener("hashchange", handleHashChange);

        return () => {
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, []);



    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 12 }}
            className="fixed top-2 left-0 w-full z-50 scroll-smooth"
        >
            <div className=" mx-auto px-6 sm:px-8 flex justify-between items-center h-16 bg-transparent">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="cursor-pointer flex items-center gap-2"
                >
                    <Image
                        src={require("../../public/images/logo.png")}
                        alt="Logo"
                        width={100} 
                        height={100}
                        className="object-contain"
                    />
                </motion.div>

                <ul className="hidden md:flex space-x-10 text-white relative">
                    {navItems.map((item, index) => (
                        <motion.li
                            key={item.name}
                            onHoverStart={() => setHovered(index)}
                            onHoverEnd={() => setHovered(null)}
                            whileHover={{ scale: 1.08, y: -2 }}
                            transition={{ type: "spring", stiffness: 250, damping: 10 }}
                            className={`relative cursor-pointer ${item.link === hash ? "text-[#000051] font-semibold" : ""
                                }`}
                        >
                            <a href={item.link} className="transition-all duration-200">
                                {item.name}
                            </a>
                            {hovered === index && (
                                <motion.span
                                    layoutId="underline"
                                    className="absolute left-0 right-0 -bottom-1 h-0.5 bg-[#000051] rounded-full"
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                />
                            )}
                        </motion.li>
                    ))}
                </ul>

                {!isOpen && (
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        className="md:hidden p-2 text-black"
                        onClick={() => setIsOpen(true)}
                    >
                        <FiMenu size={26} />
                    </motion.button>
                )}
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", stiffness: 70, damping: 12 }}
                        className="fixed top-0 right-0 h-full w-64 bg-[#0000B333]/30 backdrop-blur-2xl shadow-2xl border-l border-white/20 md:hidden flex flex-col"
                    >
                        <div className="flex justify-end p-4">
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setIsOpen(false)}
                            >
                                <FiX size={26} className="text-black" />
                            </motion.button>
                        </div>

                        <ul className="flex flex-col items-start space-y-6 mt-8 pl-8 text-lg font-medium text-black">
                            {navItems.map((item, i) => (
                                <motion.li
                                    key={item.name}
                                    whileHover={{ scale: 1.05, x: 6 }}
                                    transition={{ type: "spring", stiffness: 250, damping: 15 }}
                                    className={`cursor-pointer flex items-center gap-4 ${item.link === hash ? "text-[#000051] font-semibold" : ""
                                        }`}
                                >
                                    <a
                                        href={item.link}
                                        className="flex items-center gap-3 transition-all duration-200"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <motion.span
                                            initial={{ opacity: 0, x: -8 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            className="text-[#000051] text-xl"
                                        >
                                            {item.icon}
                                        </motion.span>
                                        {item.name}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
