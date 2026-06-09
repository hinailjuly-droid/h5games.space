"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, X, Gamepad2, LayoutGrid, Heart, Flame, ShieldCheck } from "lucide-react";
import Button from "../ui/Button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Categories", href: "/games" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary/80 backdrop-blur-xl border-b border-white/5 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center shadow-lg shadow-accent/20 group-hover:rotate-12 transition-transform">
            <Gamepad2 className="text-white" size={24} />
          </div>
          <span className="text-xl font-black tracking-tight text-white uppercase italic">
            h5games<span className="text-accent underline decoration-white/10"> space</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold transition-colors ${
                pathname === link.href ? "text-accent" : "text-gray-400 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <a 
            href="https://discord.gg/2pQKYUha" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 text-[#5865F2] hover:text-white transition-colors flex items-center justify-center"
            title="Join our Discord"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 127.14 96.36">
              <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.71,32.65-1.82,56.6.39,80.21a105.73,105.73,0,0,0,32.17,16.15,77.7,77.7,0,0,0,6.89-11.11,64.62,64.62,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a64.59,64.59,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1,105.25,105.25,0,0,0,32.19-16.14c2.64-27.38-4.52-51.06-19.1-72.13ZM42.45,65.69C36.18,65.69,31,60,31,53s5.07-12.73,11.44-12.73S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5.07-12.73,11.44-12.73S96.28,46,96.17,53,91.12,65.69,84.69,65.69Z"/>
            </svg>
          </a>
          <Link href="/search" className="p-2 text-gray-400 hover:text-white transition-colors">
            <Search size={22} />
          </Link>
          <div className="hidden sm:block">
            <Link href="/games">
              <Button size="sm">Play Now</Button>
            </Link>
          </div>
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary-light border-b border-white/5 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center p-3 rounded-lg text-lg font-bold ${
                    pathname === link.href ? "bg-accent/10 text-accent" : "text-gray-400"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link href="/games" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full mt-4">Browse All Games</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
