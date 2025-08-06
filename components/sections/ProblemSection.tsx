"use client";

import { motion } from "framer-motion";
import React from "react";

const admybrandProducts = [
  "Ad8Hoarding", "Ad8OOH", "8Digiad", "Ad8Mobi", "Ad8Paper", "Ad8Radio", "Ad8TV", "Ad8Social"
];

const AuraIcon = () => (
    <div className="w-24 h-24 rounded-full border-2 border-purple-500 flex items-center justify-center bg-purple-500/10 shadow-[0_0_20px_theme(colors.purple.500)]">
        <span className="font-serif text-3xl font-bold text-purple-400">A</span>
    </div>
);

const ProblemSection = () => {
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
            Your advertising is powerful.
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-white/70 max-w-3xl mx-auto">
            But juggling dozens of platforms means you&apos;re rich in data but poor in insight. It&apos;s impossible to see the full picture when your information is fragmented across every channel.
          </p>
        </motion.div>

        <div className="mt-16 sm:mt-24 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {admybrandProducts.map((product) => (
              <motion.div
                key={product}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 }
                }}
                className="p-4 bg-white/5 border border-white/10 rounded-lg text-center text-sm"
              >
                {product}
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="hidden lg:block"
          >
             <svg width="100" height="24" viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 12H90" stroke="url(#paint0_linear_101_2)" strokeWidth="2"/>
                <path d="M85 7L95 12L85 17" stroke="url(#paint1_linear_101_2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                <linearGradient id="paint0_linear_101_2" x1="0" y1="12" x2="90" y2="12" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A5568"/>
                <stop offset="1" stopColor="#A0AEC0"/>
                </linearGradient>
                <linearGradient id="paint1_linear_101_2" x1="85" y1="12" x2="95" y2="12" gradientUnits="userSpaceOnUse">
                <stop stopColor="#A0AEC0"/>
                <stop offset="1" stopColor="white"/>
                </linearGradient>
                </defs>
            </svg>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex flex-col items-center gap-4 text-center"
          >
            <AuraIcon />
            <p className="font-semibold text-lg">One Unified Signal</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;