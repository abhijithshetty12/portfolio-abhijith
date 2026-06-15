"use client";

import Image from "next/image";
import { StarsCanvas } from "./star-background";
import Link from "next/link";
import { motion } from "framer-motion";
import { PROJECTS } from "@/constants";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";
import { FaGithub } from "react-icons/fa";
import { HiArrowUpRight, HiSparkles } from "react-icons/hi2";

interface ProjectItem {
  title: string;
  description: string;
  image: string;
  link: string;
  github: string;
  tags?: string[];
}

export const Projects = () => {
  const typedProjects = PROJECTS as unknown as ProjectItem[];

  return (
    <section
      id="projects"
      className="relative flex flex-col items-center justify-center min-h-screen py-32 overflow-hidden bg-[#030307] selection:bg-zinc-800 selection:text-zinc-200"
    >
      {/* ── Background Layer: Deep Starfield ── */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <StarsCanvas />
      </div>

      {/* ── Header Area ── */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl px-6 mb-32 select-none"
      >
        {/* Refractive Status Badge */}
        <motion.div
          variants={slideInFromTop}
          className="flex items-center gap-2 px-4 py-1.5 border border-white/[0.08] rounded-full backdrop-blur-2xl bg-white/[0.01] shadow-[0_4px_24px_rgba(0,0,0,0.5),inset_0_1px_2px_rgba(255,255,255,0.05)] mb-8"
        >
          <HiSparkles className="w-3.5 h-3.5 text-zinc-400" />
          <span className="text-[10px] font-bold tracking-[0.25em] text-zinc-400 uppercase">
            Production Deployments
          </span>
        </motion.div>

        {/* High-Contrast Metallic Header */}
        <motion.h2
          variants={slideInFromLeft(0.4)}
          className="text-4xl font-black tracking-tight text-center text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-500 sm:text-6xl md:text-7xl mb-6"
        >
          Featured{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-500 font-black">
            Engineering
          </span>
        </motion.h2>

        <motion.p
          variants={slideInFromRight(0.6)}
          className="max-w-xl text-sm sm:text-base leading-relaxed text-center text-zinc-500 font-light"
        >
          A balanced fusion of clean engineering architectures, strict parameter structures, and fluid micro-interactions wrapped in an ultra-dark environment.
        </motion.p>
      </motion.div>

      {/* ── Projects Structural Alternating Stack ── */}
      <div className="relative z-10 flex flex-col gap-28 md:gap-40 w-full max-w-6xl px-6 sm:px-10">
        {typedProjects.map((project, index) => {
          const isEven = index % 2 === 0;
          const technicalTags = project.tags || ["TypeScript", "Next.js", "Tailwind"];

          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-8 lg:gap-0 relative w-full`}
            >
              {/* Media Container (Image Layer) */}
              <div className="w-full lg:w-[60%] relative group">
                <div className="absolute -inset-px bg-gradient-to-b from-white/[0.08] to-transparent rounded-2xl opacity-40 group-hover:opacity-100 transition-all duration-700 blur-[2px]" />

                <div className="relative overflow-hidden border border-white/[0.05] rounded-2xl bg-zinc-950/40 backdrop-blur-sm shadow-2xl aspect-video">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="block w-full h-full overflow-hidden"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-w-1024px) 100vw, 50vw"
                      className="object-cover w-full h-full filter grayscale-[20%] group-hover:grayscale-0 transition-all preset-slow ease-out group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030307]/90 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
                  </Link>
                </div>
              </div>

              {/* Refractive Glass Text Card */}
              <div
                className={`w-full lg:w-[46%] flex flex-col justify-center p-8 sm:p-10 rounded-3xl border border-white/[0.04] bg-white/[0.01] backdrop-blur-2xl shadow-[0_30px_70px_rgba(0,0,0,0.65),inset_0_1.5px_8px_rgba(255,255,255,0.03)] relative z-20
                  ${isEven ? "lg:-ml-16" : "lg:-mr-16"} 
                  hover:border-white/[0.08] hover:bg-white/[0.02] hover:shadow-[0_30px_70px_rgba(0,0,0,0.8),inset_0_1.5px_12px_rgba(255,255,255,0.05)] transition-all duration-500 group/card`}
              >
                {/* Orbital Index */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex -space-x-2">
                    <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
                    <div className="w-3 h-3 rounded-full bg-indigo-500 blur-[2px]" />
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.3em] text-cyan-400/70 uppercase">
                    Sector 0{index + 1}
                  </span>
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-white mb-3 group-hover/card:text-zinc-200 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-light">
                  {project.description}
                </p>

                {/* Dark Technical Chips */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {technicalTags.map((tech: string) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[10px] font-semibold rounded-lg bg-white/[0.02] border border-white/[0.05] text-zinc-400 backdrop-blur-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center gap-5">
                  <Link
                    href={project.link}
                    target="_blank"
                    className="group/link flex items-center gap-1.5 text-xs font-bold tracking-wider text-zinc-300 hover:text-white uppercase"
                  >
                    <span className="relative">
                      Launch System
                      <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-zinc-400 transition-all duration-300 group-hover/link:w-full" />
                    </span>
                    <HiArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
                  </Link>

                  <Link
                    href={project.github}
                    target="_blank"
                    className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] text-zinc-400 hover:text-white hover:bg-white/[0.05] hover:border-white/[0.15] transition-all duration-300"
                  >
                    <FaGithub className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};