"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const SolutionSection = () => {
    return (
        <section className="py-20 sm:py-32 bg-black">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight">
                        Aura finds the signal.
                    </h2>
                    <p className="mt-4 text-lg sm:text-xl text-white/70 max-w-3xl mx-auto">
                        We translate millions of data points into a single, powerful recommendation. Here's a real-world example of an insight you could receive.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                    className="relative mt-16 sm:mt-24 max-w-3xl mx-auto"
                >
                    <div className="absolute -inset-2 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 opacity-20 blur-2xl"></div>

                    <div className="relative p-8 bg-black border border-white/10 rounded-xl">
                        <p className="text-xl sm:text-2xl leading-relaxed text-white/90">
                            Your <code className="px-2 py-1 text-base sm:text-lg bg-white/10 rounded-md font-mono">Ad8Hoarding</code> campaign in Bengaluru is creating a 22% spike in brand searches.
                        </p>
                        <hr className="my-6 border-white/10" />
                        <p className="text-xl sm:text-2xl leading-relaxed">
                            <strong className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                                Aura Recommends:
                            </strong> Amplify this with a targeted <code className="px-2 py-1 text-base sm:text-lg bg-white/10 rounded-md font-mono">Ad8Mobi</code> push in the same area to maximize impact.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <Link
                        href="/insights"
                        className="inline-block px-8 py-4 text-lg font-semibold bg-white text-black rounded-full hover:bg-gray-200 transition-colors"
                    >
                        Explore More Strategic Insights
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default SolutionSection;