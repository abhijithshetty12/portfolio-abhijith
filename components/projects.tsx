"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PROJECTS, noteworthyProjects } from "@/constants";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";
import { StarsCanvas } from "./star-background";
import { FaGithub } from "react-icons/fa";
import { HiArrowTopRightOnSquare, HiSparkles } from "react-icons/hi2";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
  github: string;
  tags: string[];
  index: number;
  isEven: boolean;
};

interface ProjectItem {
  title: string;
  description: string;
  image: string;
  link: string;
  github: string;
  tags?: string[];
}

export const ProjectCard = ({
  src,
  title,
  description,
  link,
  github,
  tags,
  index,
  isEven,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      } items-center gap-6 lg:gap-0 relative w-full group/container`}
    >
      {/* Image Block */}
      <div className="w-full lg:w-[62%] relative group">
        <div className="absolute -inset-px bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm" />
        
        <div className="relative overflow-hidden border border-white/[0.06] rounded-2xl bg-zinc-950/40 backdrop-blur-md shadow-2xl aspect-video ring-1 ring-white/[0.02]">
          <Link
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            className="block w-full h-full overflow-hidden relative"
          >
            <Image
              src={src}
              alt={title}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover w-full h-full filter grayscale-[30%] contrast-[1.05] group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700 ease-out"
              priority={index < 2}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030307]/90 via-[#030307]/20 to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
          </Link>
        </div>
      </div>

      {/* Content Block */}
      <div
        className={`w-full lg:w-[44%] flex flex-col justify-center p-8 sm:p-10 rounded-2xl border border-white/[0.05] bg-zinc-900/20 backdrop-blur-xl shadow-[0_30px_70px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.03)] relative z-20
          ${isEven ? "lg:-ml-20" : "lg:-mr-20"} 
          hover:border-indigo-500/30 hover:bg-zinc-900/40 hover:shadow-[0_30px_70px_rgba(99,102,241,0.08),inset_0_1px_1px_rgba(255,255,255,0.05)] transition-all duration-500 group/card`}
      >
        <div className="flex items-center gap-4 mb-5">
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
            </span>
          </div>
          <span className="font-mono text-[10px] font-medium tracking-[0.3em] text-cyan-400/80 uppercase">
            Sector 0{index + 1}
          </span>
        </div>

        <h3 className="text-2xl font-bold tracking-tight text-white mb-3 bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text group-hover/card:from-white group-hover/card:to-indigo-300 transition-all duration-300">
          {title}
        </h3>

        <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-light">
          {description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-8">
          {tags.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-[10px] font-mono rounded-md bg-white/[0.03] border border-white/[0.06] text-zinc-400 backdrop-blur-md"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <Link
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            className="group/link flex items-center gap-2 text-[11px] font-bold tracking-widest text-zinc-300 hover:text-white uppercase transition-colors duration-300"
          >
            <span className="relative">
              Launch System
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-indigo-400 transition-all duration-300 group-hover/link:w-full" />
            </span>
            <HiArrowTopRightOnSquare className="w-4 h-4 text-zinc-400 group-hover/link:text-white group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
          </Link>

          <Link
            href={github}
            target="_blank"
            rel="noreferrer noopener"
            className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] text-zinc-400 hover:text-white hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-300 shadow-sm"
          >
            <FaGithub className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  const typedProjects = PROJECTS as unknown as ProjectItem[];
  const typedNoteworthyProjects = noteworthyProjects as unknown as ProjectItem[];

  return (
    <section
      id="projects"
      className="relative flex flex-col items-center justify-center min-h-screen py-32 overflow-hidden bg-[#030307] selection:bg-indigo-500/30 selection:text-white"
    >
      <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-40">
        <StarsCanvas />
      </div>

      {/* Header Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl px-6 mb-32 select-none"
      >
        <motion.div
          variants={slideInFromTop}
          className="flex items-center gap-2 px-3 py-1 border border-white/[0.08] rounded-full backdrop-blur-2xl bg-white/[0.02] shadow-[0_4px_24px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.05)] mb-6"
        >
          <HiSparkles className="w-3.5 h-3.5 text-zinc-400" />
          <span className="text-[9px] font-bold tracking-[0.3em] text-zinc-400 uppercase">
            Production Deployments
          </span>
        </motion.div>

        <motion.h2
          variants={slideInFromLeft(0.4)}
          className="text-4xl font-black tracking-tight text-center text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-500 sm:text-6xl md:text-7xl mb-6"
        >
          Featured{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-indigo-200 to-zinc-400 font-black">
            Engineering
          </span>
        </motion.h2>

        <motion.p
          variants={slideInFromRight(0.6)}
          className="max-w-xl text-sm sm:text-base leading-relaxed text-center text-zinc-400/80 font-light"
        >
          A balanced fusion of clean engineering architectures, strict parameter structures, and fluid micro-interactions wrapped in an ultra-dark environment.
        </motion.p>
      </motion.div>

      {/* Featured Projects Grid */}
      <div className="relative z-10 flex flex-col gap-32 md:gap-44 w-full max-w-6xl px-6 sm:px-10 mb-48">
        {typedProjects.map((project, index) => {
          const isEven = index % 2 === 0;
          const technicalTags = project.tags || ["TypeScript", "Next.js", "Tailwind"];

          return (
            <ProjectCard
              key={project.title}
              src={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
              github={project.github}
              tags={technicalTags}
              index={index}
              isEven={isEven}
            />
          );
        })}
      </div>

      {/* Minor Archive Section */}
      <div className="relative z-10 w-full max-w-6xl px-6 sm:px-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full flex flex-col items-center justify-center mb-16 select-none"
        >
          <h3 className="text-xl font-bold tracking-tight text-center text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400 md:text-2xl mb-4">
            Other Noteworthy Artifacts
          </h3>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
          {typedNoteworthyProjects.map((subProject, i) => (
            <motion.div
              key={subProject.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group/minor flex flex-col justify-between p-6 rounded-xl border border-white/[0.04] bg-zinc-900/10 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)] hover:border-white/[0.09] hover:bg-zinc-900/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-[9px] font-medium tracking-[0.2em] text-zinc-500 group-hover/minor:text-cyan-400/80 transition-colors duration-300 uppercase">
                    Build Module 0{i + 1}
                  </span>
                  <div className="flex items-center gap-2">
                    {subProject.link && (
                      <Link
                        href={subProject.link}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="p-2 rounded-lg bg-white/[0.01] border border-white/[0.03] text-zinc-500 hover:text-white hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-300 group/arrow"
                      >
                        <HiArrowTopRightOnSquare className="w-3.5 h-3.5 transition-transform duration-300 group-hover/arrow:translate-x-0.5 group-hover/arrow:-translate-y-0.5" />
                      </Link>
                    )}
                    <Link
                      href={subProject.github}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="p-2 rounded-lg bg-white/[0.01] border border-white/[0.03] text-zinc-500 hover:text-white hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-300"
                    >
                      <FaGithub className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                <h4 className="text-base font-bold tracking-tight text-zinc-200 group-hover/minor:text-white transition-colors duration-300 mb-2">
                  {subProject.title}
                </h4>

                <p className="text-zinc-400/80 group-hover/minor:text-zinc-400 transition-colors duration-300 text-xs leading-relaxed font-light mb-6">
                  {subProject.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1">
                {(subProject.tags ?? []).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-[9px] font-mono rounded bg-white/[0.02] border border-white/[0.04] text-zinc-500 group-hover/minor:text-zinc-400 group-hover/minor:border-white/[0.07] transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};