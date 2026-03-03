"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
    { src: "/assets/sequence/0001.jpg", alt: "Keyboard Overview", span: "row-span-2 col-span-2" },
    { src: "/assets/sequence/0020.jpg", alt: "Mechanical Detail", span: "col-span-1" },
    { src: "/assets/sequence/0040.jpg", alt: "Keycap Precision", span: "col-span-1" },
    { src: "/assets/sequence/0060.jpg", alt: "Under the Hood", span: "col-span-2" },
    { src: "/assets/sequence/0080.jpg", alt: "Full Assembly", span: "col-span-1" },
    { src: "/assets/sequence/0088.jpg", alt: "Ready to Use", span: "col-span-1" },
];

const GallerySection = () => {
    return (
        <section id="gallery" className="py-32 bg-[#F5F5F7] px-10">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <span className="text-xs uppercase tracking-[0.5em] font-bold text-black/40 mb-4 block">Visual Diary</span>
                    <h2 className="text-6xl font-black tracking-tighter text-black">A Masterpiece in Every Frame.</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">
                    {galleryImages.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative overflow-hidden rounded-[32px] shadow-xl hover:shadow-2xl transition-all group ${img.span}`}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                                <span className="text-white font-bold text-xl tracking-tight">{img.alt}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
