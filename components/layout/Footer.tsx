"use client";

import Link from "next/link";
import React from "react";

const footerLinks = {
    product: [
        { href: "/insights", label: "Insights" },
        { href: "/pricing", label: "Pricing" },
        { href: "#", label: "Features" },
        { href: "#", label: "Integrations" },
    ],
    company: [
        { href: "/about", label: "About Us" },
        { href: "#", label: "Careers" },
        { href: "#", label: "Blog" },
        { href: "/contact", label: "Contact Us" },
    ],
    resources: [
        { href: "#", label: "Case Studies" },
        { href: "#", label: "Documentation" },
        { href: "#", label: "API Status" },
    ],
};

const SocialIcon = ({ href, children }: { href: string, children: React.ReactNode }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
        {children}
    </a>
);

const Footer = () => {
    return (
        <footer className="bg-black border-t border-white/10">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    <div className="col-span-2 lg:col-span-1">
                        <h3 className="font-serif text-2xl font-bold">Aura</h3>
                        <p className="mt-4 text-sm text-white/60">The future of advertising, clarified.</p>
                    </div>
                    
                    <div>
                        <h4 className="font-semibold tracking-wider uppercase text-sm text-white/80">Product</h4>
                        <ul className="mt-4 space-y-2">
                            {footerLinks.product.map(link => (
                                <li key={link.label}><Link href={link.href} className="text-white/60 hover:text-white transition-colors">{link.label}</Link></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold tracking-wider uppercase text-sm text-white/80">Company</h4>
                        <ul className="mt-4 space-y-2">
                            {footerLinks.company.map(link => (
                                <li key={link.label}><Link href={link.href} className="text-white/60 hover:text-white transition-colors">{link.label}</Link></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold tracking-wider uppercase text-sm text-white/80">Resources</h4>
                        <ul className="mt-4 space-y-2">
                            {footerLinks.resources.map(link => (
                                <li key={link.label}><Link href={link.href} className="text-white/60 hover:text-white transition-colors">{link.label}</Link></li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-sm text-white/50">&copy; {new Date().getFullYear()} Aura Intelligence. A project for ADmyBRAND.</p>
                    <div className="flex items-center gap-6 mt-4 sm:mt-0">
                        <SocialIcon href="#"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.22-1.95-.55v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.5 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path></svg></SocialIcon>
                        <SocialIcon href="#"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd"></path></svg></SocialIcon>
                        <SocialIcon href="#"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069s-3.584-.012-4.85-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85C2.289 3.882 3.744 2.34 6.994 2.233 8.259 2.175 8.638 2.163 12 2.163zm0 1.626c-3.213 0-3.593.012-4.856.07-2.646.12-3.628 1.105-3.746 3.746-.058 1.263-.07 1.644-.07 4.856s.012 3.593.07 4.856c.118 2.642 1.1 3.628 3.746 3.746 1.263.058 1.643.07 4.856.07s3.593-.012 4.856-.07c2.646-.118 3.628-1.1 3.746-3.746.058-1.263.07-1.644.07-4.856s-.012-3.593-.07-4.856c-.118-2.642-1.1-3.628-3.746-3.746-1.263-.058-1.643-.07-4.856-.07zM12 6.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.648a3.513 3.513 0 110-7.026 3.513 3.513 0 010 7.026zM17.636 7.82a1.238 1.238 0 11-2.475.001 1.238 1.238 0 012.475 0z"></path></svg></SocialIcon>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;