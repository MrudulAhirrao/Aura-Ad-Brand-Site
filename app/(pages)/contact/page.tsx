"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Mail, TrendingUp, Newspaper } from "lucide-react";


const trends = [
    {
        title: "The Rise of Programmatic OOH",
        description: "Discover how data-driven decisions are transforming outdoor advertising, enabling dynamic campaigns that adapt to real-world conditions.",
        icon: TrendingUp,
    },
    {
        title: "AI in Creative Optimization",
        description: "Learn how artificial intelligence is moving beyond analytics to provide actionable feedback on ad creative, boosting engagement and conversion rates.",
        icon: Newspaper,
    }
];


const ContactPage = () => {
    const [formState, setFormState] = useState({ name: "", email: "", company: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formState);
        setSubmitted(true);
    };

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
                        Let's Start a Conversation.
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mt-6 text-lg md:text-xl text-white/70"
                    >
                        Whether you're ready for a personalized demo or have a question about our platform, our team is here to help you unlock the full potential of your advertising strategy.
                    </motion.p>
                </div>
            </motion.section>

            {/* 2. Contact Form Section */}
            <section className="pb-20 sm:pb-32">
                <div className="mx-auto max-w-2xl px-6 lg:px-8">
                    {submitted ? (
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="p-8 text-center bg-white/5 border border-green-500/50 rounded-lg"
                        >
                            <h3 className="text-2xl font-bold text-green-400">Thank You!</h3>
                            <p className="mt-2 text-white/80">Your request has been received. Our team will be in touch shortly.</p>
                        </motion.div>
                    ) : (
                        <motion.form
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            onSubmit={handleSubmit} 
                            className="space-y-6"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
                                <input type="email" name="email" placeholder="Work Email" required onChange={handleChange} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
                            </div>
                            <input type="text" name="company" placeholder="Company Name" required onChange={handleChange} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
                            <textarea name="message" placeholder="How can we help?" rows={4} onChange={handleChange} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"></textarea>
                            <button type="submit" className="w-full px-8 py-4 font-semibold bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                                Request a Demo
                            </button>
                        </motion.form>
                    )}
                </div>
            </section>

            {/* 3. Latest Trends & Newsletter Section */}
            <section className="py-20 sm:py-32 bg-white/5">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="font-sans text-4xl sm:text-5xl font-bold tracking-tight">Latest Trends & Insights</h2>
                            <p className="mt-4 text-lg text-white/70">
                                Stay informed with our latest analysis of the advertising landscape.
                            </p>
                            <div className="mt-8 space-y-6">
                                {trends.map(trend => (
                                    <div key={trend.title} className="flex items-start gap-4">
                                        <div className="p-3 bg-black rounded-lg border border-white/10">
                                            <trend.icon className="w-6 h-6 text-blue-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-xl">{trend.title}</h3>
                                            <p className="mt-1 text-white/70">{trend.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div className="p-8 bg-black border border-white/10 rounded-2xl">
                                <Mail className="w-10 h-10 text-blue-400" />
                                <h3 className="mt-6 text-2xl font-bold">Subscribe to Our Newsletter</h3>
                                <p className="mt-2 text-white/70">Get AI-driven advertising insights and product updates from Aura, delivered directly to your inbox.</p>
                                <form className="mt-6 flex flex-col sm:flex-row items-center gap-2">
                                    <input type="email" placeholder="Enter your email" required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                                    <button type="submit" className="w-full sm:w-auto px-6 py-3 font-semibold bg-white text-black rounded-md flex-shrink-0">
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;