"use client";

import React from "react";
import { motion } from "framer-motion";

const features = [
    {
        title: "Tactile Excellence",
        description: "Equipped with custom-tuned 65g switches for the perfect balance of resistance and feedback.",
        icon: "⌨️",
    },
    {
        title: "Zero Latency",
        description: "Industry-leading 8000Hz polling rate ensures your inputs are registered instantly.",
        icon: "⚡",
    },
    {
        title: "Acoustic Tuning",
        description: "Four layers of premium dampening foam eliminate ping and enhance the 'thock'.",
        icon: "🎵",
    },
    {
        title: "Carbon Plate",
        description: "The aerospace-grade carbon fiber plate provides a consistent, stiff typing experience.",
        icon: "💎",
    },
];

const FeaturesSection = () => {
    return (
        <section id="features" className="py-32 bg-[#F5F5F7] px-10">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-5xl font-black tracking-tighter text-black mb-4">Engineered to Perfection.</h2>
                    <p className="text-xl text-black/60 max-w-2xl tracking-tight">
                        We've obsessed over every millimeter to create a keyboard that doesn't just work, but inspires.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 bg-white rounded-[32px] shadow-xl shadow-black/5 hover:shadow-2xl hover:scale-[1.02] transition-all group"
                        >
                            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{feature.icon}</div>
                            <h3 className="text-2xl font-bold tracking-tight text-black mb-3">{feature.title}</h3>
                            <p className="text-black/60 leading-relaxed font-medium">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
