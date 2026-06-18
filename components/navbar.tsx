"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiHome, HiUser, HiCommandLine, HiBriefcase, HiEnvelope, HiAcademicCap } from "react-icons/hi2";
import { NAV_LINKS } from "@/constants";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  "Home": HiHome,
  "About": HiUser,
  "Skills": HiCommandLine,
  "Experience": HiBriefcase, 
  "Projects": HiAcademicCap,  
  "Contact": HiEnvelope,
};

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      if (window.scrollY > 0) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, link: string) => {
    // Force mobile menu closed on any link interaction
    setIsMobileMenuOpen(false);

    if (link.startsWith("/#") && window.location.pathname === "/") {
      e.preventDefault();
      const id = link.replace("/#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `/#${id}`);
      }
    }
  };

  return (
    <div className="w-full fixed top-0 z-50 px-6 md:px-8">
      <div className="max-w-6xl mx-auto flex items-center justify-between h-[70px] relative">
        
        {/* Logo */}
        <Link
          href="/"
          onClick={(e) => handleScrollClick(e, "/")}
          className={`flex items-center transition-opacity duration-300 ${
            isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={45}
            height={45}
            draggable={false}
            className="cursor-pointer"
          />
          <div className="hidden md:flex font-bold ml-3 text-white text-lg tracking-wide">
            Abhijith<span className="text-red-600">.</span>
          </div>
        </Link>

        {/* Desktop Links Container */}
        <div 
          className={`hidden md:flex items-center absolute left-1/2 -translate-x-1/2 transition-all duration-300 ease-in-out ${
            isScrolled 
              ? "opacity-0 -translate-y-4 pointer-events-none" 
              : "opacity-100 translate-y-0"
          }`}
        >
          <div className="flex items-center gap-1 px-2 py-1.5 rounded-full bg-[#030014]/40 backdrop-blur-xl border border-white/[0.06] shadow-[0_12px_40px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.05)]">
            {NAV_LINKS.map((link) => {
              const IconComponent = ICON_MAP[link.title];
              return (
                <Link
                  key={link.title}
                  href={link.link}
                  onClick={(e) => handleScrollClick(e, link.link)}
                  className="px-4 py-2 rounded-full text-zinc-400 text-xs font-medium tracking-wide hover:text-white hover:bg-white/[0.04] active:scale-95 transition-all duration-300 relative group flex items-center gap-1.5"
                >
                  {IconComponent && <IconComponent className="text-sm opacity-70 group-hover:opacity-100 transition-opacity" />}
                  <span className="relative z-10">{link.title}</span>
                  <span className="absolute inset-0 rounded-full border border-white/0 group-hover:border-white/[0.03] transition-all duration-300" />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          aria-label="Toggle Navigation Module"
          className={`md:hidden relative z-50 flex flex-col justify-center items-center w-10 h-10 rounded-full bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-xl border border-white/[0.08] shadow-[0_4px_12px_rgba(0,0,0,0.2)] ml-auto transition-all duration-300 active:scale-95 ${
            isScrolled 
              ? "opacity-0 -translate-y-4 pointer-events-none" 
              : "opacity-100 translate-y-0"
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-5 h-3.5 flex flex-col justify-between relative">
            <span className={`w-full h-[1.5px] bg-zinc-200 rounded-full transition-all duration-300 origin-left ${isMobileMenuOpen ? 'rotate-45 translate-x-[3px] translate-y-[1px]' : ''}`} />
            <span className={`w-full h-[1.5px] bg-zinc-200 rounded-full transition-all duration-200 ${isMobileMenuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`w-full h-[1.5px] bg-zinc-200 rounded-full transition-all duration-300 origin-left ${isMobileMenuOpen ? '-rotate-45 translate-x-[3px] translate-y-[-1px]' : ''}`} />
          </div>
        </button>
      </div>

      {/* Liquid Glass Mobile Menu Overlay */}
      <div 
        className={`fixed inset-x-0 top-[76px] mx-6 rounded-3xl bg-gradient-to-b from-[#0a0524]/80 via-[#040212]/90 to-[#02010a]/95 backdrop-blur-3xl border border-white/[0.07] ring-1 ring-white/[0.08] p-6 flex flex-col items-center gap-2 md:hidden shadow-[0_30px_70px_rgba(0,0,0,0.85),inset_0_1px_2px_rgba(255,255,255,0.07)] transition-all duration-500 ease-out origin-top ${
          isMobileMenuOpen ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        }`}
      >
        {/* Subtle Fluid Inner Gradient Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 via-transparent to-pink-500/5 rounded-3xl pointer-events-none blur-xl" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-24 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
        
        <span className="text-[9px] uppercase font-bold tracking-[0.3em] text-zinc-500 mb-3 select-none relative z-10">
          Navigation Map
        </span>

        {NAV_LINKS.map((link, idx) => {
          const IconComponent = ICON_MAP[link.title];
          return (
            <Link
              key={link.title}
              href={link.link}
              onClick={(e) => handleScrollClick(e, link.link)}
              className="w-full py-3 rounded-2xl flex items-center justify-center gap-3 text-zinc-400 text-sm font-medium tracking-wide border border-white/[0.03] bg-white/[0.02] hover:text-white hover:bg-white/[0.05] hover:border-white/[0.08] active:scale-[0.98] transition-all duration-300 relative z-10"
              style={{ 
                transitionDelay: isMobileMenuOpen ? `${idx * 30}ms` : "0ms",
                transform: isMobileMenuOpen ? "none" : "translateY(-8px)"
              }}
            >
              {IconComponent && <IconComponent className="text-base opacity-70" />}
              <span>{link.title}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};