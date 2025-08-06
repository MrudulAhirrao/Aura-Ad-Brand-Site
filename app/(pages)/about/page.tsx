"use client";

import { motion } from "framer-motion";
import { Users, Target, Milestone, Zap, Lightbulb, Eye } from "lucide-react";

const timelineEvents = [
    {
        year: "2017",
        title: "The Genesis of ADmyBRAND",
        description: "Founded to digitize India's fragmented advertising landscape, securing initial funding to build a revolutionary ad exchange.",
        icon: Milestone,
    },
    {
        year: "2019",
        title: "Expansion & Innovation",
        description: "With a growing suite of over 30 products, the company expands its reach globally, serving SMBs and enterprises alike.",
        icon: Target,
    },
    {
        year: "2022",
        title: "The Data Challenge",
        description: "As the platform scaled, a new challenge emerged: clients were overwhelmed by fragmented data across countless channels.",
        icon: Users,
    },
    {
        year: "2025",
        title: "The Birth of Aura",
        description: "Aura is launched—a premium AI strategist designed to bring perfect clarity to the complexity of multi-channel advertising.",
        icon: () => <div className="w-8 h-8 rounded-full border-2 border-blue-500 flex items-center justify-center bg-blue-500/10 shadow-[0_0_10px_theme(colors.blue.500)]"><span className="font-sans text-lg font-bold text-blue-400">A</span></div>,
    },
];

const philosophyPillars = [
    {
        title: "Data-Driven Strategy",
        description: "Every feature and recommendation is built on a foundation of robust, real-time data analytics.",
        icon: Zap
    },
    {
        title: "User-Centric Design",
        description: "We build tools that are not just powerful, but also intuitive, elegant, and a pleasure to use.",
        icon: Eye
    },
    {
        title: "The Pursuit of Clarity",
        description: "Our relentless mission is to cut through the noise and deliver clear, actionable intelligence.",
        icon: Lightbulb
    }
];


const AboutPage = () => {
    return (
        <div className="bg-black text-white">
            {/* 1. Hero Section */}
            <motion.section 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="pt-40 pb-20 text-center"
            >
                <div className="mx-auto max-w-4xl px-6 lg:px-8">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="font-sans text-5xl md:text-7xl font-bold tracking-tight"
                    >
                        Our Mission is to Bring Clarity to Complexity.
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mt-6 text-lg md:text-xl text-white/70"
                    >
                        We believe that in the age of data overload, the greatest advantage is clarity. Aura was born from a decade of advertising experience to provide just that: a single, intelligent signal in a world of noise.
                    </motion.p>
                </div>
            </motion.section>

            {/* 2. Interactive Timeline Section */}
            <section className="py-20 sm:py-32">
                <div className="mx-auto max-w-3xl px-6 lg:px-8">
                    <div className="relative">
                        {/* The vertical line with a gradient */}
                        <div className="absolute left-4 top-0 h-full w-1 bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0"></div>
                        
                        {timelineEvents.map((event, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="relative pl-16 pb-20"
                            >
                                <div className="absolute left-0 top-1">
                                    <div className="w-8 h-8 bg-black border-2 border-blue-500 rounded-full flex items-center justify-center">
                                        <event.icon />
                                    </div>
                                </div>
                                <p className="text-3xl font-bold text-blue-400">{event.year}</p>
                                <h3 className="mt-2 text-2xl font-sans font-bold">{event.title}</h3>
                                <p className="mt-3 text-white/70">{event.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

             {/* 3. Our Philosophy Section */}
            <section className="py-20 sm:py-32 bg-white/5">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="font-sans text-4xl sm:text-5xl font-bold tracking-tight">Our Philosophy</h2>
                        <p className="mt-6 text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
                            Our work is guided by three core principles. They are the foundation of our product, our culture, and our commitment to our clients.
                        </p>
                    </motion.div>
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {philosophyPillars.map((pillar, index) => (
                             <motion.div
                                key={pillar.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                                className="p-8 bg-black border border-white/10 rounded-xl"
                            >
                                <pillar.icon className="w-10 h-10 text-blue-400 mx-auto" />
                                <h3 className="mt-6 text-xl font-bold">{pillar.title}</h3>
                                <p className="mt-2 text-white/70">{pillar.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Team Section */}
            <section className="py-20 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                     <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="font-sans text-4xl sm:text-5xl font-bold tracking-tight">Meet the Visionaries</h2>
                        <p className="mt-4 text-lg sm:text-xl text-white/70">The leaders guiding our mission.</p>
                    </motion.div>
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        <motion.div
                             initial={{ opacity: 0, y: 20 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             viewport={{ once: true, amount: 0.5 }}
                             transition={{ duration: 0.6, delay: 0.2 }}
                             className="group"
                        >
                            <div className="w-32 h-32 rounded-full bg-white/10 mx-auto mb-4 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-blue-500/50">
                                
                            </div>
                            <h3 className="font-bold text-xl">Sudhanshu Goyal</h3>
                            <p className="text-blue-400">Founder & CEO</p>
                        </motion.div>
                         <motion.div
                             initial={{ opacity: 0, y: 20 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             viewport={{ once: true, amount: 0.5 }}
                             transition={{ duration: 0.6, delay: 0.4 }}
                             className="group"
                        >
                            <div className="w-32 h-32 rounded-full bg-white/10 mx-auto mb-4 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-blue-500/50"></div>
                            <h3 className="font-bold text-xl">Jane Doe</h3>
                            <p className="text-blue-400">Head of Product</p>
                        </motion.div>
                         <motion.div
                             initial={{ opacity: 0, y: 20 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             viewport={{ once: true, amount: 0.5 }}
                             transition={{ duration: 0.6, delay: 0.6 }}
                             className="group"
                        >
                            <div className="w-32 h-32 rounded-full bg-white/10 mx-auto mb-4 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-blue-500/50"></div>
                            <h3 className="font-bold text-xl">John Smith</h3>
                            <p className="text-blue-400">Lead AI Engineer</p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;