"use client";

import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center px-10 py-6 bg-white/5 backdrop-blur-xl border-b border-white/10"
        >
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                    <span className="text-white font-black text-xs">S</span>
                </div>
                <span className="text-black font-bold tracking-tighter text-xl">SAMM'S.</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
                <NavLink href="#hero">Overview</NavLink>
                <NavLink href="#features">Features</NavLink>
                <NavLink href="#specs">Specs</NavLink>
                <NavLink href="#gallery">Gallery</NavLink>
                <NavLink href="#reviews">Reviews</NavLink>
                <NavLink href="#experience">Experience</NavLink>
            </div>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-black text-white rounded-full font-bold text-sm tracking-tight hover:bg-black/90 transition-all shadow-lg shadow-black/20"
            >
                Order Now
            </motion.button>
        </motion.nav>
    );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a
        href={href}
        className="text-black/60 hover:text-black font-medium text-sm tracking-tight transition-colors"
    >
        {children}
    </a>
);

export default Navbar;
