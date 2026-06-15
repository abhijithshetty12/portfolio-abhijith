"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import type { Variants } from "framer-motion";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

const TECH_STACK = [
  { name: "React", icon: "/skills/react.png" },
  { name: "Next.js", icon: "/skills/next.png" },
  { name: "Node.js", icon: "/skills/node.png" },
  { name: "TypeScript", icon: "/skills/ts.png" },
] as const;

const chipVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: 0.95 + i * 0.1, duration: 0.35, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col-reverse md:flex-row items-center justify-center px-4 sm:px-10 md:px-16 lg:px-20 mt-20 sm:mt-28 md:mt-36 lg:mt-40 w-full z-[20] gap-8 md:gap-6 overflow-x-hidden"
    >
      {/* ── Left: Text Content ── */}
      <div className="flex flex-col gap-4 sm:gap-5 justify-center text-center md:text-start w-full md:w-[58%]">

        {/* Space-Cyan Glassmorphic Badge */}
        <motion.div
          variants={slideInFromTop}
          className="mx-auto md:mx-0 bg-cyan-950/10 border border-cyan-500/15 backdrop-blur-xl px-4 py-1.5 rounded-full flex items-center w-fit shadow-[0_4px_12px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(34,211,238,0.05)]"
        >
          <SparklesIcon className="text-cyan-400 mr-2 h-3.5 w-3.5 flex-shrink-0 animate-pulse" />
          <span className="text-cyan-200/90 text-[11px] font-medium tracking-wider uppercase">
            Fullstack Developer
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-2 sm:gap-3 mt-1"
        >
          <span className="text-xs sm:text-sm text-zinc-500 font-light tracking-[0.25em] uppercase">
            Hi, I&apos;m
          </span>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
            Abhijith{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-[length:200%_auto] animate-text-shimmer">
              Shetty
            </span>
          </h1>

          {/* Role Row with Cyber Cosmic Gradient */}
          <div className="flex items-center mt-1 justify-center md:justify-start">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 uppercase">
              Engineering Digital Universes
            </span>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-zinc-400 text-xs sm:text-base leading-relaxed max-w-[520px] mx-auto md:mx-0 px-2 sm:px-0 font-light"
        >
          Building modern, scalable web applications with a focus on
          performance and clean code. Passionate about crafting seamless
          full&#8209;stack experiences from concept to deployment.
        </motion.p>

        {/* Tech Chips - Glassmorphic Cyan Variants */}
        <motion.div
          variants={slideInFromLeft(0.9)}
          className="flex flex-wrap gap-2 justify-center md:justify-start max-w-md mx-auto md:mx-0"
        >
          {TECH_STACK.map((tech, i) => (
            <motion.div
              key={tech.name}
              custom={i}
              variants={chipVariants}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.01] border border-white/[0.05] backdrop-blur-md shadow-[0_2px_8px_rgba(0,0,0,0.2)] hover:bg-cyan-950/20 hover:border-cyan-500/30 transition-all duration-300 group"
            >
              <Image
                src={tech.icon}
                alt={tech.name}
                width={14}
                height={14}
                className="object-contain flex-shrink-0 filter drop-shadow-[0_0_4px_rgba(34,211,238,0.3)]"
              />
              <span className="text-[11px] text-zinc-400 font-medium group-hover:text-cyan-200 transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTAs - Cyan Cosmic & Clear Glass Buttons */}
        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-col sm:flex-row gap-3.5 justify-center md:justify-start mt-3 px-4 sm:px-0"
        >
          {/* Primary Cyan-Teal Stellar Button */}
          <Link 
            href="/projects" 
            className="text-center py-3 sm:py-2.5 px-6 rounded-full text-xs font-medium tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 bg-[length:200%_auto] hover:bg-right shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_35px_rgba(34,211,238,0.45)] font-semibold transition-all duration-500 active:scale-95"
          >
            View Projects
          </Link>

          {/* Secondary Pure Glassmorphic Button */}
          <a
            href="mailto:abhijithshetty2006@gmail.com"
            className="text-center py-3 sm:py-2.5 px-6 rounded-full text-xs font-medium tracking-wider text-zinc-300 border border-white/[0.08] bg-white/[0.02] hover:bg-cyan-950/20 hover:text-cyan-300 hover:border-cyan-500/30 backdrop-blur-xl shadow-[0_4px_12px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.03)] transition-all duration-300 active:scale-95"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* ── Right: Visual ── */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="relative w-full md:w-[42%] flex justify-center items-center max-w-sm sm:max-w-md md:max-w-none"
      >
        {/* Ambient Cyan Hyper-Drive Nebula Glow */}
        <div className="absolute w-56 h-56 sm:w-80 sm:h-80 bg-gradient-to-tr from-cyan-500/10 via-blue-500/5 to-transparent rounded-full blur-[95px] pointer-events-none animate-pulse duration-4000" />
        
        <Image
          src="/hero-bg.svg"
          alt="Abhijith Shetty – Fullstack Developer"
          height={500}
          width={500}
          draggable={false}
          priority
          className="select-none relative z-10 w-[200px] sm:w-[320px] md:w-[440px] lg:w-[520px] h-auto opacity-75 sm:opacity-90 filter drop-shadow-[0_0_50px_rgba(6,182,212,0.12)]"
        />
      </motion.div>
    </motion.div>
  );
};