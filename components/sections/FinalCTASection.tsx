"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Sparkles } from "lucide-react";

const FinalCTASection = () => {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            console.log("Subscribed with:", email);
            setSubscribed(true);
        }
    };

    return (
        <section className="py-20 sm:py-32 bg-black border-t border-white/10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side: Newsletter and Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight">
                            Stay Ahead of the Curve
                        </h2>
                        <p className="mt-4 text-lg sm:text-xl text-white/70">
                            Aura is at the forefront of AI-driven advertising intelligence. Get exclusive insights, product updates, and industry analysis delivered directly to your inbox.
                        </p>
                        {!subscribed ? (
                            <form onSubmit={handleSubmit} className="mt-10 flex flex-col sm:flex-row items-center gap-2">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    required
                                    className="w-full px-5 py-3 bg-white/10 border border-white/20 rounded-full focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all"
                                />
                                <button
                                    type="submit"
                                    className="w-full sm:w-auto px-6 py-3 font-semibold bg-white text-black rounded-full hover:bg-gray-200 transition-colors flex-shrink-0"
                                >
                                    Subscribe
                                </button>
                            </form>
                        ) : (
                            <p className="mt-10 text-xl text-green-400 font-semibold">Thank you for subscribing!</p>
                        )}
                    </motion.div>

                    {/* Right Side: Attractive Demo Request */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full"
                    >
                        <Link href="/contact" className="block group">
                            <div 
                                className="relative w-full h-96 rounded-2xl p-8 flex flex-col justify-between items-start bg-black/50 border border-white/10 overflow-hidden transition-all duration-500 ease-in-out group-hover:border-white/30 group-hover:shadow-2xl group-hover:shadow-purple-500/20"
                            >
                                {/* Subtle background glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                                
                                {/* Static, centered icon that subtly reacts on hover */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Sparkles className="w-24 h-24 text-white/10 transition-all duration-500 group-hover:text-white/20 group-hover:scale-110" />
                                </div>

                                {/* The main text content */}
                                <div className="relative z-10">
                                    <h3 className="font-serif text-3xl font-bold">Request a Demo</h3>
                                    <p className="mt-2 text-white/80">See how Aura can transform your advertising strategy.</p>
                                </div>

                                {/* The arrow that animates on hover */}
                                <div className="relative z-10 self-end text-white/50 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="7" y1="17" x2="17" y2="7"></line>
                                        <polyline points="7 7 17 7 17 17"></polyline>
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FinalCTASection;
