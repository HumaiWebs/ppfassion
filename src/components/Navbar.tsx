"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-morphism py-3 shadow-2xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link 
          href="/" 
          className="text-2xl md:text-3xl font-serif font-bold tracking-tighter text-primary-gold hover:text-vibrant-gold transition-all duration-300 transform hover:scale-105"
        >
          PAKISTANI PASSION FOR FASHION
        </Link>

        <div className="hidden md:flex items-center space-x-10">
          {[
            { name: "About", href: "/about" },
            { name: "Events", href: "/events" },
            { name: "Designers", href: "/designers" },
            { name: "Membership", href: "/membership" },
            { name: "Blog", href: "/blog" },
            { name: "Contact", href: "/contact" },
          ].map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              className="nav-link-hover text-[11px] font-bold hover:text-primary-gold transition-colors uppercase tracking-[0.2em] text-white/80"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-6">
          <Link 
            href="/login" 
            className="text-[11px] font-bold text-white/80 hover:text-primary-gold transition-all px-4 py-2 border border-white/10 hover:border-primary-gold rounded-sm uppercase tracking-widest"
          >
            Log in
          </Link>
          <Link 
            href="/membership" 
            className="bg-primary-gold hover:bg-primary-gold-dark text-luxury-black font-bold py-3 px-8 rounded-sm transition-all shadow-lg hover:shadow-primary-gold/20 hover:scale-105 active:scale-95 uppercase text-[10px] tracking-[0.2em]"
          >
            Become a Member
          </Link>
        </div>
      </div>
    </nav>
  );
}
