"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PROJECTS } from "@/constants";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";
import { StarsCanvas } from "./star-background";
import { FaGithub } from "react-icons/fa";
import { HiArrowUpRight, HiSparkles } from "react-icons/hi2";

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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      } items-center gap-8 lg:gap-0 relative w-full`}
    >
      <div className="w-full lg:w-[60%] relative group">
        <div className="absolute -inset-px bg-gradient-to-b from-white/[0.08] to-transparent rounded-2xl opacity-40 group-hover:opacity-100 transition-all duration-700 blur-[2px]" />

        <div className="relative overflow-hidden border border-white/[0.05] rounded-2xl bg-zinc-950/40 backdrop-blur-sm shadow-2xl aspect-video">
          <Link
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            className="block w-full h-full overflow-hidden"
          >
            <Image
              src={src}
              alt={title}
              fill
              sizes="(max-w-1024px) 100vw, 50vw"
              className="object-cover w-full h-full filter grayscale-[20%] group-hover:grayscale-0 transition-all preset-slow ease-out group-hover:scale-[1.03] duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030307]/90 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
          </Link>
        </div>
      </div>

      <div
        className={`w-full lg:w-[46%] flex flex-col justify-center p-8 sm:p-10 rounded-3xl border border-white/[0.04] bg-white/[0.01] backdrop-blur-2xl shadow-[0_30px_70px_rgba(0,0,0,0.65),inset_0_1.5px_8px_rgba(255,255,255,0.03)] relative z-20
          ${isEven ? "lg:-ml-16" : "lg:-mr-16"} 
          hover:border-indigo-400/30 hover:bg-white/[0.04] hover:shadow-[0_30px_70px_rgba(99,102,241,0.05),inset_0_1.5px_12px_rgba(255,255,255,0.05)] transition-all duration-500 group/card`}
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="flex -space-x-2">
            <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
            <div className="w-3 h-3 rounded-full bg-indigo-500 blur-[2px]" />
          </div>
          <span className="font-mono text-[10px] tracking-[0.3em] text-cyan-400/70 uppercase">
            Sector 0{index + 1}
          </span>
        </div>

        <h3 className="text-2xl font-bold tracking-tight text-white mb-3 bg-gradient-to-r from-white via-zinc-100 to-zinc-300 bg-clip-text group-hover/card:text-transparent group-hover/card:from-white group-hover/card:to-indigo-200 transition-all duration-300">
          {title}
        </h3>

        <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-light">
          {description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-8">
          {tags.map((tech: string) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-[10px] font-semibold rounded-lg bg-white/[0.02] border border-white/[0.05] text-zinc-400 backdrop-blur-md"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-5">
          <Link
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            className="group/link flex items-center gap-1.5 text-xs font-bold tracking-wider text-zinc-300 hover:text-white uppercase"
          >
            <span className="relative">
              Launch System
              <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-zinc-400 transition-all duration-300 group-hover/link:w-full" />
            </span>
            <HiArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
          </Link>

          <Link
            href={github}
            target="_blank"
            rel="noreferrer noopener"
            className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] text-zinc-400 hover:text-white hover:bg-white/[0.05] hover:border-white/[0.15] transition-all duration-300"
          >
            <FaGithub className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  const rawProjects = PROJECTS as unknown as ProjectItem[];

  const eduFlowProject: ProjectItem = {
    title: "EduFlow",
    description: "EduFlow is a modern education management platform built to help students, administrators, and institutions streamline learning workflows. It provides a clean, role-based experience for managing onboarding, compliance, course registration, payments, documents, notifications, and AI-powered support—backed by Firebase for authentication and data storage.",
    image: "/projects/eduflow.png",
    link: "https://eduflow-nextgen.vercel.app/",
    github: "https://github.com/abhijithshetty12/EduFlow",
    tags: ["React", "Firebase", "Tailwind CSS", "TypeScript"]
  };

  const typedProjects = [...rawProjects];
  typedProjects.splice(2, 0, eduFlowProject);

  const noteworthyProjects = [
    {
      title: "Contact Manager",
      description: "An offline desktop platform engineered using Java Swing with automated CSV persistence routines. Developed as an industry practices mini-project optimizing basic structural file schemas.",
      github: "https://github.com/abhijithshetty12/Contact-Manager",
      tags: ["Java", "Swing", "CSV Parsing"]
    },
    {
      title: "Hardware Shop Management",
      description: "A highly resilient enterprise management solution optimized for hardware distributors. Built on a desktop architecture utilizing C# Windows Forms and high-performance SQL Server schemas.",
      github: "https://github.com/abhijithshetty12/Hardware-Shop-Management",
      tags: ["C#", "WinForms", "SQL Server"]
    },
    {
      title: "BFS Maze Solver",
      description: "A modern JavaFX application that visualizes the Breadth-First Search (BFS) algorithm as it navigates a 2D grid-based maze. This tool provides a clear visual representation of how pathfinding algorithms find the shortest path while avoiding obstacles.",
      github: "https://github.com/abhijithshetty12/MazeSolver",
      tags: ["Java", "Algorithms", "Graph Traversal"]
    }
  ];

  return (
    <section
      id="projects"
      className="relative flex flex-col items-center justify-center min-h-screen py-32 overflow-hidden bg-[#030307] selection:bg-zinc-800 selection:text-zinc-200"
    >
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <StarsCanvas />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl px-6 mb-32 select-none"
      >
        <motion.div
          variants={slideInFromTop}
          className="flex items-center gap-2 px-4 py-1.5 border border-white/[0.08] rounded-full backdrop-blur-2xl bg-white/[0.01] shadow-[0_4px_24px_rgba(0,0,0,0.5),inset_0_1px_2px_rgba(255,255,255,0.05)] mb-8"
        >
          <HiSparkles className="w-3.5 h-3.5 text-zinc-400" />
          <span className="text-[10px] font-bold tracking-[0.25em] text-zinc-400 uppercase">
            Production Deployments
          </span>
        </motion.div>

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

      <div className="relative z-10 flex flex-col gap-28 md:gap-40 w-full max-w-6xl px-6 sm:px-10 mb-44">
        {typedProjects.map((project, index) => {
          const isEven = index % 2 === 0;
          const technicalTags = project.tags || ["TypeScript", "Next.js", "Tailwind"];
          
          const displayDescription = project.title === "SkySense" 
            ? "SkySense is a modern weather dashboard that combines real-time meteorological data with AI-powered predictions. Featuring glassmorphic UI in light and dark modes, it delivers clean forecasts, ensemble ML analytics, and intuitive visualizations for accurate, user-friendly weather insights."
            : project.description;

          return (
            <ProjectCard
              key={project.title}
              src={project.image}
              title={project.title}
              description={displayDescription}
              link={project.link}
              github={project.github}
              tags={technicalTags}
              index={index}
              isEven={isEven}
            />
          );
        })}
      </div>

      <div className="relative z-10 w-full max-w-6xl px-6 sm:px-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full flex flex-col items-center justify-center mb-16 select-none"
        >
          <h3 className="text-2xl font-extrabold tracking-tight text-center text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400 md:text-3xl mb-4">
            Other Noteworthy Artifacts
          </h3>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {noteworthyProjects.map((subProject, i) => (
            <motion.div
              key={subProject.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group/minor flex flex-col justify-between p-6 rounded-2xl border border-white/[0.03] bg-white/[0.01] backdrop-blur-xl shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)] hover:border-white/[0.07] hover:bg-white/[0.02] hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-[9px] tracking-[0.2em] text-zinc-600 group-hover/minor:text-cyan-500/60 transition-colors duration-300 uppercase">
                    Build Module 0{i + 1}
                  </span>
                  <Link
                    href={subProject.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="p-2 rounded-lg bg-white/[0.01] border border-white/[0.03] text-zinc-500 hover:text-white hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-300"
                  >
                    <FaGithub className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <h4 className="text-lg font-bold tracking-tight text-zinc-200 group-hover/minor:text-white transition-colors duration-300 mb-2">
                  {subProject.title}
                </h4>

                <p className="text-zinc-500 group-hover/minor:text-zinc-400 transition-colors duration-300 text-xs leading-relaxed font-light mb-6">
                  {subProject.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1">
                {subProject.tags.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-[9px] font-medium rounded-md bg-white/[0.01] border border-white/[0.03] text-zinc-500"
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