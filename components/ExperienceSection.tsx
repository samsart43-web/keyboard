"use client";

import React from "react";
import { motion } from "framer-motion";

const ExperienceSection = () => {
    return (
        <section id="experience" className="bg-[#ECECEC] py-40 px-10 text-center relative overflow-hidden">
            {/* Visual background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/40 rounded-full blur-[120px] -z-1" />

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="space-y-10"
                >
                    <h2 className="text-8xl md:text-9xl font-black tracking-tighter text-black/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none whitespace-nowrap">
                        UNRIVALED.
                    </h2>

                    <div className="space-y-6">
                        <h3 className="text-6xl font-black tracking-tighter text-black">Live the Experience.</h3>
                        <p className="text-2xl text-black/60 tracking-tight font-light max-w-2xl mx-auto">
                            Join the thousands who have already upgraded their workspace with the ultimate tactile tool.
                        </p>
                    </div>

                    <motion.div
                        className="flex flex-col md:flex-row items-center justify-center gap-6 mt-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-12 py-5 bg-black text-white rounded-full text-xl font-bold tracking-tight shadow-2xl hover:shadow-black/20 transition-all"
                        >
                            Order Samm Keyboard
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-12 py-5 bg-transparent border-2 border-black/10 text-black rounded-full text-xl font-bold tracking-tight hover:bg-black/5 transition-all"
                        >
                            Learn More
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default ExperienceSection;
