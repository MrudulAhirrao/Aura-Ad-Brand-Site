"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import LivingArtwork from "../visuals/LivingArtwork";
import { cn } from "@/lib/utils";

export type Theme = "outdoor" | "broadcast" | "digital"| "megaphone" | "billboard"|"signage"|"video"|"news"|"business";


const themes = [
  { id: "outdoor", label: "Outdoor" },
  { id: "broadcast", label: "Broadcast" },
  { id: "digital", label: "Digital" },
] as const;

const HeroSection = () => {
  const [activeTheme, setActiveTheme] = useState<Theme>("digital");

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-black">
        <LivingArtwork theme={activeTheme} />
      </div>

      <div className="relative z-10 flex flex-col items-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="font-sans text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
        >
          Advertising in Perfect Clarity.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="mt-6 max-w-2xl text-lg md:text-xl text-white/80"
        >
          Aura is the unified AI strategist for the ADmyBRAND suite, turning
          complex multi-channel data into clear, profitable decisions.
        </motion.p>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
            <button className="px-6 py-3 font-semibold bg-white text-black rounded-full hover:bg-gray-200 transition-colors">
                Request a Demo
            </button>
            <button className="px-6 py-3 font-semibold text-white border border-white/30 rounded-full hover:bg-white/10 transition-colors">
                See it in Action
            </button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
        className="absolute bottom-10 z-20 flex items-center gap-2 p-2 bg-black/30 border border-white/20 rounded-full backdrop-blur-sm"
      >
        {themes.map((theme) => (
          <button
            key={theme.id}
            onClick={() => setActiveTheme(theme.id)}
            className={cn(
              "px-4 py-1.5 text-sm rounded-full transition-colors",
              activeTheme === theme.id ? "bg-white text-black font-semibold" : "text-white hover:bg-white/10"
            )}
          >
            {theme.label}
          </button>
        ))}
      </motion.div>
    </section>
  );
};

export default HeroSection;