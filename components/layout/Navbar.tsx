"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import React from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/admissions", label: "Admissions" },
  { href: "/lms", label: "Our LMS" },
  { href: "/careers", label: "Career" },
  { href: "/contact", label: "Contact" },
];

const programs = [
  { href: "/programmes", label: "All Programs" },
  { href: "/programmes#ai", label: "AI Engineering" },
  { href: "/programmes#chatbot", label: "ChatBot Development" },
  { href: "/programmes#data", label: "Data Science" },
];

function NavLink({ href, label, pathname, isMobile = false }: { href: string; label: string; pathname: string; isMobile?: boolean }) {
  const active = pathname === href;
  const base = "px-4 py-2 rounded-full transition-colors text-sm md:text-base whitespace-nowrap";
  const desktopActiveCls = "bg-[#00c896] text-white font-semibold";
  const mobileActiveCls = "text-gray-700 font-semibold";
  const activeCls = isMobile ? mobileActiveCls : desktopActiveCls;
  const inactiveCls = "text-gray-700 hover:text-black";
  return (
    <Link href={href} className={`${base} ${active ? activeCls : inactiveCls}`}>
      <span className={active ? "" : "underline-animate"}>{label}</span>
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname() || "";
  const [menuOpen, setMenuOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-white/20 shadow-sm"
          : "bg-white/40 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between relative overflow-visible">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/assets/logo.png"
            alt="Dicta Hub Logo"
            width={110}
            height={44}
            priority
            className="h-auto w-auto max-h-12"
          />
        </Link>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center gap-0 text-sm font-medium ml-12">
           {links.map((l) => (
             <NavLink key={l.href} href={l.href} label={l.label} pathname={pathname} />
           ))}

           {/* Programs Dropdown */}
           <div className="relative group inline-flex items-center flex-nowrap -ml-1">
             <button className="px-3 py-2 rounded-full transition-colors text-sm md:text-base whitespace-nowrap text-gray-700 hover:text-black flex items-center justify-center gap-0.5 leading-none h-10">
              Programs<ChevronDown size={16} className="flex-shrink-0 transition-transform group-hover:rotate-180 duration-300" />
            </button>
            <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              {programs.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#f0f9f6] hover:text-black transition-colors first:rounded-t-lg last:rounded-b-lg border-b last:border-b-0 border-gray-100"
                >
                  {p.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors ml-auto"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden border-t border-gray-200 bg-white/40 backdrop-blur-md"
        >
          <nav className="flex flex-col gap-1 p-4">
            {links.map((l) => (
              <NavLink key={l.href} href={l.href} label={l.label} pathname={pathname} isMobile />
            ))}

            {/* Mobile Programs Dropdown */}
            <div>
              <button
                onClick={() => setProgramsOpen(!programsOpen)}
                className="w-full text-left px-4 py-2 rounded-full transition-colors text-sm text-gray-700 hover:text-black flex items-center justify-between"
              >
                Programs
                <ChevronDown size={16} className={`transition-transform ${programsOpen ? 'rotate-180' : ''}`} />
              </button>
              {programsOpen && (
                <div className="mt-1 ml-4 space-y-1 border-l-2 border-gray-200 pl-4">
                  {programs.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      className="block px-3 py-2 text-xs sm:text-sm text-gray-700 hover:text-black hover:bg-[#f0f9f6] rounded transition-colors"
                      onClick={() => {
                        setMenuOpen(false);
                        setProgramsOpen(false);
                      }}
                    >
                      {p.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
