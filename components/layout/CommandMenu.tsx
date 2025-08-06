"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import Link from "next/link";

interface CommandMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/demo", label: "Insights" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

const CommandMenu = ({ isOpen, setIsOpen }: CommandMenuProps) => {
  const menuVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const linkContainerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const linkItemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-lg flex items-center justify-center"
        >
          {/* Close Button */}
          <motion.button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-2xl text-white/50 hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            &times;
          </motion.button>

          <motion.nav
            variants={linkContainerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center"
          >
            {navLinks.map((link) => (
              <motion.div key={link.href} variants={linkItemVariants}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block font-serif text-4xl sm:text-6xl text-white/80 hover:text-white py-3 transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
             <motion.div variants={linkItemVariants} className="mt-12">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="px-8 py-4 text-lg font-medium bg-white text-black rounded-full hover:bg-gray-200 transition-colors"
                >
                  Request a Demo
                </Link>
            </motion.div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CommandMenu;