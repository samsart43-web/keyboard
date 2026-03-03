"use client";

import React from "react";
import { motion } from "framer-motion";

const specs = [
    { label: "Material", value: "6063 Aluminum Chassis" },
    { label: "Plate", value: "3mm Carbon Fiber" },
    { label: "Polling Rate", value: "8000Hz Ultra-Low Latency" },
    { label: "Switches", value: "Samm Custom Gold (Lube-infused)" },
    { label: "Stabilizers", value: "Screw-in, Hand-balanced" },
    { label: "Dampening", value: "PORON / Silicone Multi-layer" },
    { label: "Weight", value: "2.4kg (Assembled)" },
    { label: "Connectivity", value: "USB-C (Detachable Braided)" },
];

const SpecsSection = () => {
    return (
        <section id="specs" className="py-32 bg-black text-white px-10 relative overflow-hidden">
            {/* Moving Background Watermark */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none overflow-hidden flex flex-col justify-around">
                {[1, 2, 3].map((i) => (
                    <motion.div
                        key={i}
                        initial={{ x: i % 2 === 0 ? "-100%" : "100%" }}
                        animate={{ x: i % 2 === 0 ? "100%" : "-100%" }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="text-[12rem] font-black whitespace-nowrap tracking-tighter"
                    >
                        SAMM. SAMM. SAMM. SAMM. SAMM. SAMM. SAMM. SAMM. SAMM. SAMM.
                    </motion.div>
                ))}
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-xs uppercase tracking-[0.5em] font-bold text-white/40 mb-4 block">Hardware Breakdown</span>
                    <h2 className="text-5xl font-black tracking-tighter">Technical Specs.</h2>
                </motion.div>

                <div className="grid grid-cols-1 gap-4">
                    {specs.map((spec, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="flex justify-between items-center py-6 border-b border-white/10 hover:bg-white/5 px-4 rounded-xl transition-colors"
                        >
                            <span className="text-white/60 font-medium tracking-tight">{spec.label}</span>
                            <span className="text-white font-bold tracking-tight text-lg">{spec.value}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SpecsSection;
