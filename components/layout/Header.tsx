"use client";

import { useState } from "react";
import CommandMenu from "./CommandMenu";
import { motion } from "framer-motion";
import ProductHub from "./ProductHub";
import { AppWindow, LayoutGrid } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductHubOpen, setIsProductHubOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 p-4 sm:p-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="font-serif text-2xl font-bold">Aura</div>
          <div className="flex items-center gap-2">
            <motion.button
              onClick={() => setIsProductHubOpen(true)}
              className="px-3 py-2 text-sm font-medium border border-white/20 rounded-full hover:bg-white/10 transition-colors flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <LayoutGrid className="w-4 h-4" />
              Products
            </motion.button>
            <motion.button
              onClick={() => setIsMenuOpen(true)}
              className="px-3 py-2 text-sm font-medium border border-white/20 rounded-full hover:bg-white/10 transition-colors flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
               <AppWindow className="w-4 h-4" />
              Menu
            </motion.button>
          </div>
        </div>
      </header>
      <CommandMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      <ProductHub isOpen={isProductHubOpen} setIsOpen={setIsProductHubOpen} />
    </>
  );
};

export default Header;