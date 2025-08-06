"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState, FC } from "react";
import { cn } from "@/lib/utils";
import { 
    Monitor, Bus, Projector, Smartphone, Newspaper, Radio, Tv2, Users,
    Calculator, Palette, QrCode, FileText, Search, Lightbulb, LayoutDashboard,
    BarChart, PieChart, CircleDollarSign, TrendingUp, Eye, AudioWaveform, Bot,
    Crosshair, Box, MessageSquare, MessagesSquare, MousePointerClick, Landmark, ShieldCheck, Component, Ear
} from "lucide-react";

const productData = {
  "Book & Analyze": [
    { name: "Ad8Hoarding", desc: "Hoarding & Fixed Media Advertising Platform", icon: Monitor },
    { name: "Ad8OOH", desc: "Avenue & Movable Media Advertising Platform", icon: Bus },
    { name: "8DigiAd", desc: "Book ads on Digital Screens & LCDs", icon: Projector },
    { name: "Ad8Mobi", desc: "Mobile Advertising Platform", icon: Smartphone },
    { name: "Ad8Paper", desc: "Newspaper Advertising Platform", icon: Newspaper },
    { name: "Ad8Radio", desc: "Radio Advertising Platform", icon: Radio },
    { name: "Ad8TV", desc: "Television Advertising Platform", icon: Tv2 },
    { name: "Ad8Social", desc: "Book Ads for Web Presence & on Social Media", icon: Users },
  ],
  "Search & Explore": [
    { name: "Calci", desc: "Search Engine for Ad spaces", icon: Calculator },
    { name: "8Surface", desc: "Do-It-Yourself tool for creating ad designs", icon: Palette },
    { name: "Ambicode", desc: "Allocating adspaces with universal codes", icon: QrCode },
    { name: "Pages", desc: "Empowers ad sellers with online presence", icon: FileText },
    { name: "Search Seller", desc: "Search engine for ad spaces sellers", icon: Search },
    { name: "InventMyAd", desc: "Create & Design Advertisement Campaign", icon: Lightbulb },
    { name: "Console", desc: "Single dashboard to monitor all campaigns", icon: LayoutDashboard },
  ],
  "Get Analytics": [
    { name: "ARP", desc: "Real time rating & analytics for ad spaces", icon: BarChart },
    { name: "AnalyzeMyAd", desc: "Analyze & Strategize Advertisement Campaign", icon: PieChart },
    { name: "Ambicash", desc: "Blockchain based solution for mobile ad analytics", icon: CircleDollarSign },
    { name: "Boost", desc: "Re-targeting and identifying TV and Radio Analytics", icon: TrendingUp },
    { name: "VIA", desc: "Visibility scoring for Outdoor & OOH ad media", icon: Eye },
    { name: "Social Media Listening", desc: "See whats trending on Social Media", icon: AudioWaveform },
  ],
  "IOT & AI": [
    { name: "Listen", desc: "Identify Radio ad audience with audio QR codes", icon: Ear },
    { name: "Adify", desc: "AI based personal Assistant to plan, book & manage your ads", icon: Bot },
    { name: "Pixel", desc: "Identify and re-target TV ads to viewers on other ad mediums", icon: Crosshair },
    { name: "Box", desc: "Big data solution for retargeting TV and Radio ads to mobile devices", icon: Box },
  ],
  "Grow Your Business": [
      { name: "Zeedback", desc: "Get feedback and generate surveys for your ad viewers", icon: MessageSquare },
      { name: "8Chat", desc: "Professional Networking for Marketing professionals", icon: MessagesSquare },
      { name: "Clicko", desc: "Single platform for social media management", icon: MousePointerClick },
  ],
  "Others": [
      { name: "Ambloan", desc: "Get working capital Loans for your marketing campaigns", icon: Landmark },
      { name: "Ambsure", desc: "Insure your Marketing campaigns against uncertainties", icon: ShieldCheck },
      { name: "AdPlan", desc: "Manage Inventory & Lead Generation for media sellers", icon: Component },
  ]
};

type Category = keyof typeof productData;

const ProductHub = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (isOpen: boolean) => void }) => {
  const [activeCategory, setActiveCategory] = useState<Category>("Book & Analyze");

  const hubVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={hubVariants}
          className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            className="w-full max-w-5xl h-[85vh] bg-black/50 border border-white/10 rounded-2xl flex flex-col shadow-2xl shadow-blue-500/10"
            onClick={(e) => e.stopPropagation()}
          >
            <header className="p-4 border-b border-white/10 flex justify-between items-center flex-shrink-0">
                <h2 className="font-sans text-xl font-bold">ADmyBRAND Product Suite</h2>
                <button onClick={() => setIsOpen(false)} className="text-2xl text-white/50 hover:text-white transition-colors">&times;</button>
            </header>

            <div className="flex-grow flex overflow-hidden">
                <nav className="p-4 border-r border-white/10 w-1/4 flex-shrink-0 overflow-y-auto">
                    <ul className="space-y-2">
                        {(Object.keys(productData) as Category[]).map(category => (
                            <li key={category}>
                                <button 
                                    onClick={() => setActiveCategory(category)}
                                    className={cn(
                                        "w-full text-left px-3 py-2 rounded-md text-sm transition-colors",
                                        activeCategory === category ? "bg-white/10 text-white font-semibold" : "text-white/60 hover:bg-white/5"
                                    )}
                                >
                                    {category}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
                <main className="p-6 flex-grow overflow-y-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.2 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                        >
                            {productData[activeCategory].map(product => {
                                const Icon = product.icon as FC<{className?: string}>;
                                return (
                                    <div key={product.name} className="p-4 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/10 transition-colors flex items-start gap-4">
                                        <Icon className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-bold text-white">{product.name}</h3>
                                            <p className="text-sm text-white/70 mt-1">{product.desc}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </motion.div>
                    </AnimatePresence>
                </main>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductHub;