"use client";

import { motion } from "framer-motion";

const Watermark = () => {
    return (
        <motion.div
            className="fixed bottom-8 right-8 z-50 pointer-events-none"
            animate={{
                y: [0, -10, 0],
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        >
            <div className="bg-black/5 backdrop-blur-md px-4 py-2 rounded-full border border-black/10">
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-black/40">
                    Website Created By: <span className="text-black/60">Samm.</span>
                </p>
            </div>
        </motion.div>
    );
};

export default Watermark;
