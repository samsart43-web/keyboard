"use client";

import React from "react";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-20 px-10 border-t border-white/10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
                <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center gap-2 mb-8">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                            <span className="text-black font-black text-lg">S</span>
                        </div>
                        <span className="text-white font-black tracking-tighter text-3xl">SAMM'S.</span>
                    </div>
                    <p className="text-white/40 max-w-sm text-lg leading-relaxed">
                        Crafting the future of tactile interfaces. Engineered with obsession, built for creators.
                    </p>
                </div>

                <div>
                    <h4 className="font-bold text-lg mb-6 tracking-tight">Navigation</h4>
                    <ul className="space-y-4 text-white/60">
                        <li><a href="#hero" className="hover:text-white transition-colors">Overview</a></li>
                        <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                        <li><a href="#specs" className="hover:text-white transition-colors">Technical Specs</a></li>
                        <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-lg mb-6 tracking-tight">Support</h4>
                    <ul className="space-y-4 text-white/60">
                        <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-white/20 text-sm font-medium uppercase tracking-[0.2em]">
                    © 2026 Samm's Keyboard. All rights reserved.
                </p>
                <div className="flex gap-8 text-white/20 text-sm uppercase tracking-[0.2em] font-bold">
                    <a href="#" className="hover:text-white/60 transition-colors">Privacy</a>
                    <a href="#" className="hover:text-white/60 transition-colors">Terms</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
