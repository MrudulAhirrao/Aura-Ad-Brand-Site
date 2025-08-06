"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { CheckCircle2, Code, Users, Building, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// --- Data for the page ---

const individualPlans = [
    {
        name: "Silver",
        price: "₹4,999",
        desc: "For individuals and small teams getting started.",
        features: [
            "Up to 3 users",
            "Core Analytics Suite",
            "5 Active Campaigns",
            "Email Support",
        ],
        highlight: false,
    },
    {
        name: "Gold",
        price: "₹9,999",
        desc: "For growing teams that need more power.",
        features: [
            "Up to 10 users",
            "Advanced Analytics Suite",
            "20 Active Campaigns",
            "Priority Email Support",
            "Basic API Access",
        ],
        highlight: true,
    },
    {
        name: "Platinum",
        price: "₹19,999",
        desc: "For large teams requiring full capabilities.",
        features: [
            "Unlimited users",
            "Full Analytics Suite",
            "Unlimited Campaigns",
            "Dedicated Phone Support",
            "Full API Access",
        ],
        highlight: false,
    },
];

const businessPlans = [
     {
        name: "Growth",
        price: "₹49,999",
        desc: "For established businesses scaling their operations.",
        features: [
            "Everything in Platinum",
            "AI-Powered Budget Allocation",
            "Predictive Trend Analysis",
            "Dedicated Account Manager",
        ],
        highlight: false,
    },
    {
        name: "Enterprise",
        price: "Custom",
        desc: "For large-scale organizations with unique needs.",
        features: [
            "Everything in Growth",
            "Custom AI Model Training",
            "White-Glove Onboarding",
            "Enterprise-grade Security & SLAs",
        ],
        highlight: true,
    },
];

// --- Documentation Popup Component ---
const DocumentationPopup = ({ setIsOpen }: { setIsOpen: (isOpen: boolean) => void }) => {
    const randomPages = [
        { href: "/", label: "Homepage" },
        { href: "/about", label: "About Us" },
        { href: "/demo", label: "Interactive Demo" },
    ].sort(() => 0.5 - Math.random()).slice(0, 2);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
        >
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                className="w-full max-w-lg m-4 p-8 bg-black border border-white/10 rounded-xl shadow-2xl shadow-blue-500/20"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-start">
                    <h3 className="font-bold text-2xl font-sans">Aura API Documentation</h3>
                    <button onClick={() => setIsOpen(false)} className="text-2xl text-white/50 hover:text-white transition-colors"><X size={24} /></button>
                </div>
                <p className="mt-4 text-white/80">
                    Welcome to the Aura API. Our platform provides robust endpoints for integrating our powerful advertising intelligence directly into your applications. This allows for seamless automation and data synchronization.
                </p>
                <div className="mt-6">
                    <h4 className="font-semibold text-white">Quick Links:</h4>
                    <ul className="mt-2 space-y-2">
                        {randomPages.map(page => (
                            <li key={page.href}>
                                <Link href={page.href} className="text-blue-400 hover:text-blue-300 transition-colors">
                                    &rarr; Visit our {page.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>
        </motion.div>
    );
};


const PricingPage = () => {
    const [planType, setPlanType] = useState<'individual' | 'business'>('individual');
    const [devMode, setDevMode] = useState(false);
    const [isDocPopupOpen, setIsDocPopupOpen] = useState(false);

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
                        Clear Pricing for a Clearer Strategy.
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mt-6 text-lg md:text-xl text-white/70"
                    >
                        Choose the plan that fits your needs. Powerful, flexible, and transparent pricing designed to help you grow.
                    </motion.p>
                </div>
            </motion.section>

            {/* 2. Plan Type Toggle */}
            <div className="flex justify-center mb-16">
                <div className="p-1 bg-white/5 border border-white/10 rounded-full flex items-center gap-2">
                    <button onClick={() => setPlanType('individual')} className={cn("px-6 py-2 rounded-full text-sm font-semibold transition-colors", planType === 'individual' ? 'bg-white text-black' : 'text-white/70')}>
                        <Users className="inline w-4 h-4 mr-2" />
                        Individual & Group
                    </button>
                    <button onClick={() => setPlanType('business')} className={cn("px-6 py-2 rounded-full text-sm font-semibold transition-colors", planType === 'business' ? 'bg-white text-black' : 'text-white/70')}>
                         <Building className="inline w-4 h-4 mr-2" />
                        Business & Enterprise
                    </button>
                </div>
            </div>

            {/* 3. Pricing Cards Section */}
            <section className="pb-20 sm:pb-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                        {(planType === 'individual' ? individualPlans : businessPlans).map((plan, index) => (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={cn(
                                    "relative p-8 bg-black/50 border rounded-2xl h-full flex flex-col",
                                    plan.highlight ? "border-blue-500" : "border-white/10"
                                )}
                            >
                                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-600/30 to-sky-600/30 blur-lg -z-10 opacity-0 transition-opacity duration-500" style={{opacity: plan.highlight ? 1 : 0}}></div>
                                
                                {plan.highlight && <div className="absolute top-0 right-8 -translate-y-1/2 px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full">MOST POPULAR</div>}

                                <h3 className="text-2xl font-bold">{plan.name}</h3>
                                <p className="mt-2 text-white/70">{plan.desc}</p>
                                <div className="mt-6">
                                    <span className="text-5xl font-bold">{plan.price}</span>
                                    {plan.price !== "Custom" && <span className="text-white/70"> / month</span>}
                                </div>
                                <ul className="mt-8 space-y-4 flex-grow">
                                    {plan.features.map(feature => (
                                        <li key={feature} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-blue-400" />
                                            <span className="text-white/90">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/contact" className={cn("mt-10 w-full block text-center px-6 py-3 font-semibold rounded-lg transition-colors", plan.highlight ? "bg-blue-500 text-white" : "bg-white/10 text-white")}>
                                    {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Developer API Section */}
            <section className="py-20 sm:py-32 bg-white/5">
                <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Code className="w-12 h-12 text-blue-400 mx-auto" />
                        <h2 className="mt-6 font-sans text-4xl sm:text-5xl font-bold tracking-tight">For Developers</h2>
                        <p className="mt-4 text-lg md:text-xl text-white/70">
                            Integrate the power of Aura's intelligence into your own applications.
                        </p>
                        <div className="mt-8 flex items-center justify-center gap-4">
                            <span className={cn("transition-colors", devMode ? "text-white" : "text-white/50")}>Developer Mode</span>
                            <button 
                                onClick={() => setDevMode(!devMode)} 
                                className={cn(
                                    "relative w-14 h-8 rounded-full transition-colors flex items-center",
                                    devMode ? "bg-blue-500 justify-end" : "bg-white/10 justify-start"
                                )}
                            >
                                <motion.span layout className="w-6 h-6 bg-white rounded-full m-1" />
                            </button>
                        </div>
                    </motion.div>
                    <AnimatePresence>
                    {devMode && (
                        <motion.div
                            initial={{ opacity: 0, y: 20, height: 0 }}
                            animate={{ opacity: 1, y: 0, height: 'auto' }}
                            exit={{ opacity: 0, y: 20, height: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="mt-8"
                        >
                            <div className="p-8 bg-black border border-white/10 rounded-xl text-left">
                                <h3 className="text-xl font-bold">Free API Access</h3>
                                <p className="mt-2 text-white/70">All paid plans include access to our developer API. Get started with 1,000 free API calls per month to build and test your integrations.</p>
                                <button onClick={() => setIsDocPopupOpen(true)} className="mt-4 inline-block text-blue-400 font-semibold">
                                    Read the Documentation &rarr;
                                </button>
                            </div>
                        </motion.div>
                    )}
                    </AnimatePresence>
                </div>
            </section>

            <AnimatePresence>
                {isDocPopupOpen && <DocumentationPopup setIsOpen={setIsDocPopupOpen} />}
            </AnimatePresence>
        </div>
    );
};

export default PricingPage;
