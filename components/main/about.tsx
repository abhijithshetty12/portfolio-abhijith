"use client";

import { motion, AnimatePresence, useScroll, useTransform, Variants } from "framer-motion";
import { useState, useRef } from "react";
import Link from "next/link";
import { FaGraduationCap, FaMapMarkerAlt, FaChevronDown } from "react-icons/fa";

import { EDUCATION, SOCIAL_LINKS } from "@/constants";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";
import { StarsCanvas } from "./star-background"; // Adjust path dynamically if needed

const ENHANCED_EDUCATION = EDUCATION.map(edu => ({
  ...edu,
  department: edu.school.includes("Thakur") ? "AI & Machine Learning" : edu.school.includes("Polytechnic") ? "Information Technology" : "Secondary School",
  location: edu.school.includes("Thakur") ? "Mumbai" : edu.school.includes("Polytechnic") ? "Bandra, Mumbai" : "Powai, Mumbai",
  percentage: edu.school.includes("Thakur") ? "9.64 CGPA" : edu.school.includes("Polytechnic") ? "91.67%" : "86.40%",
}));

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 60, damping: 15 } 
  },
} as const;

export const AboutContent = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });

  const spaceY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  const toggleDetails = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
<div ref={containerRef} className="relative flex flex-col items-center justify-center min-h-screen w-full px-4 py-24 bg-[#050508] overflow-hidden selection:bg-red-500/30 selection:text-white">
      
      {/* 3D WebGL Canvas Layer Integration */}
      <div className="absolute inset-0 z-0">
        <StarsCanvas />
      </div>


      {/* --- INTRO SECTION --- */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative flex flex-col items-center justify-center w-full max-w-4xl z-10"
      >
        <motion.div variants={slideInFromTop} className="mb-8 px-4 py-1.5 rounded-full bg-white/[0.02] backdrop-blur-md border border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.5)] hover:border-red-500/30 transition-all duration-500 group cursor-default">
          <span className="text-[10px] font-bold text-zinc-400 tracking-[0.3em] uppercase bg-gradient-to-r from-zinc-300 to-zinc-500 bg-clip-text group-hover:from-white group-hover:to-red-400 transition-all duration-300">
            About Me
          </span>
        </motion.div>

        <motion.div variants={itemVariants} className="text-center mb-6">
          <h1 className="text-5xl md:text-8xl font-black text-white mb-4 tracking-tighter leading-none bg-gradient-to-b from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            Abhijith Shetty
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 font-light tracking-[0.15em] uppercase">
            Full Stack <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400 font-medium">Engineer</span>
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="text-base md:text-lg text-zinc-400 text-center max-w-xl mb-12 px-8 py-6 rounded-2xl bg-white/[0.01] backdrop-blur-xl border border-white/[0.05] shadow-[0_24px_60px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.05)] hover:border-white/10 transition-all duration-500 leading-relaxed font-light"
        >
          I&apos;m a Full Stack Software Engineer with a passion for building innovative web and mobile applications. I transform complex problems into elegant, user-friendly solutions.
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-row gap-4 mb-24">
          {SOCIAL_LINKS.map(({ name, icon: Icon, link }) => (
            <Link
              key={name}
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              className="group flex items-center justify-center w-12 h-12 rounded-xl bg-white/[0.02] backdrop-blur-md border border-white/[0.06] hover:border-red-500/30 hover:bg-white/[0.04] hover:scale-105 transition-all duration-300 shadow-[0_8px_20px_rgba(0,0,0,0.4)]"
            >
              <Icon className="h-4 w-4 text-zinc-400 group-hover:text-white transition-colors duration-300" />
            </Link>
          ))}
        </motion.div>
      </motion.div>

      {/* --- EDUCATION SECTION --- */}
      <motion.div
        ref={timelineRef}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-4xl mt-4 z-10"
      >
        <motion.div variants={slideInFromTop} className="text-center mb-20">
          <span className="text-[10px] uppercase tracking-[0.4em] text-red-400/60 font-bold">Chronology</span>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-2 tracking-tight bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
            Academic Orbit
          </h2>
        </motion.div>

        {/* Desktop Zigzag View */}
        <div className="relative hidden md:block">
          {/* Neon Structural Axis Line */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-zinc-800 to-transparent" />
          
          <div className="flex flex-col gap-14">
            {ENHANCED_EDUCATION.map((edu, index) => (
              <motion.div
                key={edu.school}
                variants={index % 2 === 0 ? slideInFromLeft(index * 0.12 + 0.2) : slideInFromRight(index * 0.12 + 0.2)}
                className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                {/* Minimalist Axis Intersect Ring */}
                <div className="absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-[#050508] border border-zinc-700 shadow-[0_0_10px_rgba(0,0,0,0.8)] flex items-center justify-center z-20">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 group-hover:bg-red-400 transition-colors duration-300" />
                </div>

                <div className={`w-full md:w-[45%] ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}>
                  {/* Premium Liquid Glass Card */}
                  <div 
                    onClick={() => toggleDetails(index)}
                    className="relative p-7 rounded-2xl border border-white/[0.04] bg-gradient-to-b from-white/[0.02] to-transparent backdrop-blur-xl shadow-[0_30px_60px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.03)] hover:border-red-500/20 hover:shadow-[0_0_40px_rgba(239,68,68,0.03),inset_0_1px_0_rgba(255,255,255,0.07)] hover:-translate-y-1 transition-all duration-500 group cursor-pointer overflow-hidden"
                  >
                    <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500 mb-2 tracking-tight">{edu.year}</div>
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-red-400 transition-colors duration-300">{edu.school}</h3>
                    <p className="text-sm text-zinc-400 font-light mb-4">{edu.degree} &bull; <span className="text-zinc-500">{edu.department}</span></p>
                    
                    <div className="flex items-center text-zinc-500 text-xs mb-6">
                      <FaMapMarkerAlt className="w-3 h-3 mr-1.5 text-zinc-600 group-hover:text-red-400/70 transition-colors duration-300" />
                      {edu.location}
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-white/[0.03]">
                      <span className="bg-gradient-to-r from-red-400 to-rose-300 bg-clip-text text-transparent font-bold text-xs tracking-wider uppercase">
                        {edu.percentage}
                      </span>
                      <div className="p-1 rounded-full bg-white/[0.02] border border-white/5 group-hover:border-white/10 transition-all duration-300">
                        <FaChevronDown className={`w-3 h-3 text-zinc-500 transition-transform duration-500 ${openIndex === index ? 'rotate-180 text-white' : ''}`} />
                      </div>
                    </div>

                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="mt-4 pt-4 text-xs text-zinc-400 leading-relaxed font-light border-t border-dashed border-white/5">
                            {edu.school.includes("Thakur") ? "Pursuing cutting-edge AI/ML coursework with hands-on projects." :
                             edu.school.includes("Polytechnic") ? "Strong foundation in IT, programming, and software development." :
                             "Completed with excellent academic performance and extracurricular involvement."}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Vertical View */}
        <div className="md:hidden px-1">
          <div className="flex flex-col gap-6 relative">
            <div className="absolute left-4 top-2 bottom-2 w-[1px] bg-gradient-to-b from-zinc-800 via-zinc-900 to-transparent" />
            
            {ENHANCED_EDUCATION.map((edu, index) => (
              <motion.div
                key={edu.school}
                variants={slideInFromLeft(index * 0.12 + 0.15)}
                className="relative pl-10"
              >
                <div className="absolute left-2.5 top-6 w-3 h-3 rounded-full bg-[#050508] border border-zinc-700 flex items-center justify-center z-10">
                  <div className="w-1 h-1 rounded-full bg-zinc-500" />
                </div>
                
                <div 
                  onClick={() => toggleDetails(index)}
                  className="p-5 rounded-xl border border-white/[0.03] bg-gradient-to-b from-white/[0.01] to-transparent backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] active:scale-[0.99] transition-all duration-300 cursor-pointer"
                >
                  <div className="text-lg font-black text-zinc-400 mb-1">{edu.year}</div>
                  <h3 className="text-base font-bold text-white mb-0.5">{edu.school}</h3>
                  <p className="text-xs text-zinc-400 mb-3 font-light">{edu.degree}, {edu.department}</p>
                  
                  <div className="flex items-center text-zinc-500 text-[11px] mb-4">
                    <FaMapMarkerAlt className="w-2.5 h-2.5 mr-1 text-zinc-600" />
                    {edu.location}
                  </div>
                  
                  <div className="flex items-center justify-between pt-3 border-t border-white/[0.03]">
                    <span className="text-red-400/90 font-bold text-xs uppercase tracking-wider">{edu.percentage}</span>
                    <FaChevronDown className={`w-3 h-3 text-zinc-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
                  </div>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-3 pt-3 text-xs text-zinc-400 leading-relaxed font-light border-t border-white/5">
                          {edu.school.includes("Thakur") ? "Pursuing cutting-edge AI/ML coursework with hands-on projects." :
                           edu.school.includes("Polytechnic") ? "Strong foundation in IT, programming, and software development." :
                           "Completed with excellent academic performance and extracurricular involvement."}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};