"use client";

import React from "react";
import { motion } from "framer-motion";

const reviews = [
    {
        name: "Alex Thompson",
        role: "Software Architect",
        content: "The aesthetic is unmatched. It feels like a piece of art on my desk, but the typing experience is where it truly shines.",
        rating: 5,
    },
    {
        name: "Sarah Chen",
        role: "Product Designer",
        content: "Absolute precision. The custom-tuned switches provide a tactile feedback that I haven't found in any other board.",
        rating: 5,
    },
    {
        name: "Marcus Wright",
        role: "Pro Gamer",
        content: "Input lag is non-existent. The 8000Hz polling rate actually makes a difference in high-intensity matches.",
        rating: 5,
    },
];

const ReviewsSection = () => {
    return (
        <section id="reviews" className="py-32 bg-white px-10 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-5xl font-black tracking-tighter text-black mb-4">Trusted by Experts.</h2>
                    <p className="text-xl text-black/60 max-w-2xl mx-auto tracking-tight">
                        See why professionals around the world are making Samm's Keyboard their daily driver.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-10 rounded-[40px] bg-[#F5F5F7] border border-black/5 hover:border-black/10 transition-all group"
                        >
                            <div className="flex gap-1 mb-6">
                                {[...Array(review.rating)].map((_, i) => (
                                    <span key={i} className="text-yellow-500 text-xl">★</span>
                                ))}
                            </div>
                            <p className="text-xl text-black/80 font-medium leading-relaxed mb-8 italic">
                                "{review.content}"
                            </p>
                            <div>
                                <h4 className="font-bold text-black text-lg tracking-tight">{review.name}</h4>
                                <p className="text-black/40 text-sm uppercase tracking-widest font-bold">{review.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ReviewsSection;
