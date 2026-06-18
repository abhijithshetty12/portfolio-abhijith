"use client";

import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiHome, HiUser, HiCommandLine, HiBriefcase, HiEnvelope } from "react-icons/hi2";
import {SOCIAL_LINKS} from "@/constants"

const GENERAL_LINKS = [
  { name: "Home", link: "/", icon: HiHome },
  { name: "About", link: "/about", icon: HiUser },
  { name: "Skills", link: "/skills", icon: HiCommandLine },
  { name: "Experience", link: "/experience", icon: HiBriefcase },
  { name: "Projects", link: "/projects", icon: HiBriefcase },
  { name: "Contact", link: "/contact", icon: HiEnvelope },
];

export const Footer = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, link: string) => {
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
    <footer className="w-full relative overflow-hidden border-t border-white/[0.03] bg-[#030307]">
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none mix-blend-screen select-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/black-hole-footer.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#030307] via-transparent to-transparent pointer-events-none z-10" />

      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent z-20" />

      <div className="relative w-full pt-20 pb-10 px-6 sm:px-10 z-20">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
            
            <div className="md:col-span-2 flex flex-col items-start space-y-4">
              <div className="flex items-center gap-3 select-none">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={32}
                  height={32}
                  className="opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
                <span className="text-xl font-bold tracking-tight text-white">
                  Abhijith<span className="text-red-600">.</span>
                </span>
              </div>
              <p className="text-zinc-500 text-sm max-w-xs font-light leading-relaxed">
                Building innovative web experiences with structural clarity, clean types, and responsive glass mechanics.
              </p>
            </div>

            <div className="md:col-span-3 grid grid-cols-2 gap-8 md:justify-items-end">
              
              <div className="flex flex-col space-y-4 min-w-[140px]">
                <h3 className="text-[10px] font-bold text-white uppercase tracking-[0.25em] select-none">
                  General
                </h3>
                <ul className="flex flex-col space-y-3">
                  {GENERAL_LINKS.map(({ name, link, icon: Icon }) => (
                    <li key={`general-${name}`}>
                      <Link
                        href={link}
                        onClick={(e) => handleScroll(e, link)}
                        className="group relative inline-flex items-center gap-2.5 text-sm text-zinc-400 hover:text-white transition-colors duration-300 py-0.5"
                      >
                        <Icon className="h-3.5 w-3.5 text-zinc-500 group-hover:text-zinc-300 transition-colors duration-300" />
                        <span className="font-light">{name}</span>
                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 opacity-20" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col space-y-4 min-w-[140px]">
                <h3 className="text-[10px] font-bold text-white uppercase tracking-[0.25em] select-none">
                  Social Media
                </h3>
                <ul className="flex flex-col space-y-3">
                  {SOCIAL_LINKS.map(({ name, link, icon: Icon }) => (
                    <li key={`social-${name}`}>
                      <Link
                        href={link}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="group relative inline-flex items-center gap-2.5 text-sm text-zinc-400 hover:text-white transition-colors duration-300 py-0.5"
                      >
                        <Icon className="h-3.5 w-3.5 text-zinc-500 group-hover:text-zinc-300 transition-colors duration-300" />
                        <span className="font-light">{name}</span>
                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 opacity-20" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent mb-8" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 select-none">
            <div className="text-center sm:text-left">
              <p className="text-zinc-500 text-xs font-light">
                &copy; {new Date().getFullYear()} Abhijith Shetty. Codebase architecture is open source.
              </p>
            </div>
            <div className="text-center sm:text-right">
              <p className="text-[9px] text-zinc-500 uppercase tracking-widest font-mono">
                Engineered with Next.js
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};