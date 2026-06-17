"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SparklesIcon, ArrowUpRightIcon } from "@heroicons/react/24/solid";
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

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="rotate-180 absolute top-[-300px] left-0 w-full h-full object-cover -z-20"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>

      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-col-reverse md:flex-row items-center justify-center px-4 sm:px-10 md:px-16 lg:px-20 mt-20 sm:mt-28 md:mt-36 lg:mt-40 w-full z-[20] gap-8 md:gap-6 overflow-x-hidden"
      >
        <div className="flex flex-col gap-6 justify-center text-center md:text-start w-full md:w-[58%] z-30">

          <motion.div
            variants={slideInFromTop}
            className="mx-auto md:mx-0 bg-purple-950/20 border border-purple-500/30 backdrop-blur-md px-4 py-1.5 rounded-full flex items-center w-fit shadow-[0_4px_24px_rgba(168,85,247,0.15),inset_0_1px_1px_rgba(168,85,247,0.2)] hover:border-purple-400/50 transition-colors duration-300 group cursor-default"
          >
            <SparklesIcon className="text-purple-400 mr-2 h-4 w-4 flex-shrink-0 animate-pulse group-hover:text-purple-300" />
            <span className="text-purple-200 text-[11px] font-bold tracking-widest uppercase">
              Fullstack Developer
            </span>
          </motion.div>

          <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-3"
          >
            <span className="text-xs sm:text-sm text-zinc-400 font-medium tracking-[0.25em] uppercase">
              Hi, I&apos;m
            </span>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight">
              Abhijith{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-violet-500 bg-[length:200%_auto] font-extrabold filter drop-shadow-[0_0_30px_rgba(139,92,246,0.3)]">
                Shetty
              </span>
            </h1>

            <div className="flex items-center mt-1.5 justify-center md:justify-start">
              <span className="text-xs sm:text-sm font-bold tracking-[0.22em] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 uppercase">
                Engineering Digital Universes
              </span>
            </div>
          </motion.div>

          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-zinc-300/80 text-sm sm:text-base leading-relaxed max-w-[530px] mx-auto md:mx-0 px-2 sm:px-0 font-light tracking-wide"
          >
            Building modern, scalable web applications with a focus on
            performance and clean code. Passionate about crafting seamless
            full-stack experiences from concept to deployment.
          </motion.p>

          <motion.div
            variants={slideInFromLeft(0.9)}
            className="flex flex-wrap gap-2.5 justify-center md:justify-start max-w-md mx-auto md:mx-0"
          >
            {TECH_STACK.map((tech, i) => (
              <motion.div
                key={tech.name}
                custom={i}
                variants={chipVariants}
                className="flex items-center gap-2.5 px-4 py-1.5 rounded-xl bg-white/[0.01] border border-white/[0.06] backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:bg-purple-950/20 hover:border-purple-500/30 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-all duration-300 group cursor-default"
              >
                <div className="relative w-3.5 h-3.5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={14}
                    height={14}
                    className="object-contain filter opacity-70 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-[0_0_6px_rgba(168,85,247,0.2)]"
                  />
                </div>
                <span className="text-[12px] text-zinc-400 font-medium group-hover:text-purple-200 transition-colors duration-300">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={slideInFromLeft(1)}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-4"
          >
            <Link
              href="/projects"
              className="group flex items-center justify-center gap-2 text-center py-3 px-8 rounded-xl text-xs font-bold tracking-wider text-white bg-gradient-to-r from-purple-600 via-violet-500 to-indigo-600 bg-[length:200%_auto] hover:bg-right shadow-[0_4px_20px_rgba(139,92,246,0.25)] hover:shadow-[0_0_30px_rgba(139,92,246,0.45)] transition-all duration-500 active:scale-[0.97]"
            >
              View Projects
              <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              href="/contact"
              className="text-center py-3 px-8 rounded-xl text-xs font-semibold tracking-wider text-zinc-200 border border-white/10 bg-white/[0.02] hover:bg-purple-950/20 hover:text-purple-300 hover:border-purple-500/30 backdrop-blur-xl shadow-[0_4px_12px_rgba(0,0,0,0.3)] transition-all duration-300 active:scale-[0.97]"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>

        <motion.div
          variants={slideInFromRight(0.8)}
          className="relative w-full md:w-[42%] flex justify-center items-center max-w-sm sm:max-w-md md:max-w-none"
        >
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
    </div>
  );
};