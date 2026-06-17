"use client";

import { motion, AnimatePresence, useScroll, useTransform, Variants } from "framer-motion";
import { useState, useRef } from "react";
import Link from "next/link";
import { FaMapMarkerAlt, FaChevronDown } from "react-icons/fa";

import { EDUCATION, SOCIAL_LINKS } from "@/constants";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";
import { StarsCanvas } from "./star-background";

const ENHANCED_EDUCATION = EDUCATION.map(edu => ({
  ...edu,
  chapter: edu.school.includes("Thakur") ? "CHAPTER III" : edu.school.includes("Polytechnic") ? "CHAPTER II" : "CHAPTER I",
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

// ── BLACK MYTH WUKONG: CELESTIAL AMBER CONSTELLATION NODE ──
const TimelineNode = ({ progress, threshold }: { progress: any, threshold: number }) => {
  const activeGlow = useTransform(progress, [threshold - 0.08, threshold], [0, 1]);
  const nodeScale = useTransform(progress, [threshold - 0.08, threshold, threshold + 0.08], [0.85, 1.25, 1]);
  const rotation = useTransform(progress, [threshold - 0.1, threshold + 0.1], [0, 180]);
  
  const borderFlash = useTransform(
    progress,
    [threshold - 0.08, threshold],
    ["rgba(39, 39, 42, 0.4)", "rgba(245, 158, 11, 0.9)"]
  );

  return (
    <motion.div 
      style={{ scale: nodeScale, borderColor: borderFlash }}
      className="absolute left-1/2 top-12 -translate-x-1/2 w-6 h-6 rounded-full bg-[#030305] border shadow-[0_0_20px_rgba(0,0,0,0.95)] flex items-center justify-center z-20"
    >
      <motion.div 
        style={{ opacity: activeGlow }}
        className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500 via-orange-600 to-red-600 blur-[6px]"
      />
      <motion.div 
        style={{ rotate: rotation, opacity: activeGlow }}
        className="absolute w-4 h-4 rounded-full border border-dashed border-amber-400/40"
      />
      <motion.div 
        style={{ opacity: activeGlow }}
        className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 shadow-[0_0_10px_#f59e0b]"
      />
    </motion.div>
  );
};

export const AboutContent = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  const staffExtend = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const toggleDetails = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div ref={containerRef} className="relative flex flex-col items-center justify-center min-h-screen w-full px-4 py-24 bg-[#030305] overflow-hidden selection:bg-amber-500/20 selection:text-amber-200">
      
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
        <motion.div variants={slideInFromTop} className="mb-8 px-4 py-1.5 rounded-full bg-white/[0.02] backdrop-blur-md border border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.5)] hover:border-amber-500/30 transition-all duration-500 group cursor-default">
          <span className="text-[10px] font-bold text-zinc-400 tracking-[0.3em] uppercase bg-gradient-to-r from-zinc-300 to-zinc-500 bg-clip-text group-hover:from-white group-hover:to-amber-400 transition-all duration-300">
            About Me
          </span>
        </motion.div>

        <motion.div variants={itemVariants} className="text-center mb-6">
          <h1 className="text-5xl md:text-8xl font-black text-white mb-4 tracking-tighter leading-none bg-gradient-to-b from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            Abhijith Shetty
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 font-light tracking-[0.15em] uppercase">
            Full Stack <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 font-medium">Engineer</span>
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
              className="group flex items-center justify-center w-12 h-12 rounded-xl bg-white/[0.02] backdrop-blur-md border border-white/[0.06] hover:border-amber-500/30 hover:bg-white/[0.04] hover:scale-105 transition-all duration-300 shadow-[0_8px_20px_rgba(0,0,0,0.4)]"
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
        <motion.div variants={slideInFromTop} className="text-center mb-24">
          <span className="text-[10px] uppercase tracking-[0.4em] text-amber-500/60 font-bold font-mono">The Destined One</span>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-2 tracking-tight bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
            Academic Chronicles
          </h2>
        </motion.div>

        {/* Desktop Zigzag View */}
        <div className="relative hidden md:block pb-12">
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[3px] bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 opacity-40" />
          
          <motion.div 
            style={{ height: staffExtend }}
            className="absolute left-1/2 top-0 -translate-x-1/2 w-[3px] bg-gradient-to-b from-yellow-500 via-amber-600 to-red-700 origin-top shadow-[0_0_15px_#d97706] z-10"
          >
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-6 bg-white rounded-full blur-[2px]" />
          </motion.div>
          
          <div className="flex flex-col gap-20">
            {ENHANCED_EDUCATION.map((edu, index) => {
              const threshold = index / (ENHANCED_EDUCATION.length - 1 || 1);
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={edu.school}
                  variants={isEven ? slideInFromLeft(index * 0.12 + 0.2) : slideInFromRight(index * 0.12 + 0.2)}
                  className={`relative flex ${isEven ? 'justify-start' : 'justify-end'}`}
                >
                  <TimelineNode progress={scrollYProgress} threshold={threshold} />

                  <div className="w-full md:w-[46%]">
                    {/* ── REDESIGNED MYTHICAL SCHOLAR SLAB CARD ── */}
                    <div 
                      onClick={() => toggleDetails(index)}
                      className={`relative p-8 rounded-xl border border-white/[0.03] bg-gradient-to-br from-[#0c0c12] to-[#06060a] shadow-[0_30px_70px_rgba(0,0,0,0.8)] hover:border-amber-500/30 transition-all duration-500 group cursor-pointer overflow-hidden ${
                        isEven ? 'border-r-amber-500/30' : 'border-l-amber-500/30'
                      }`}
                    >
                      {/* Vertical Gold foil trim running on the inner edge */}
                      <div className={`absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-amber-500/50 to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500 ${
                        isEven ? 'right-0' : 'left-0'
                      }`} />

                      {/* Mythical Background Chapter Watermark Script */}
                      <div className="absolute right-4 top-2 text-[5rem] font-black text-white/[0.01] tracking-tighter pointer-events-none select-none font-mono group-hover:text-amber-500/[0.02] transition-colors duration-500">
                        {edu.chapter.split(" ")[1]}
                      </div>

                      {/* Card Header Structure */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase px-2 py-0.5 rounded bg-white/[0.02] border border-white/5">
                          {edu.chapter}
                        </span>
                        <div className="text-xl font-black tracking-tight text-amber-500/80 font-mono group-hover:text-amber-400 transition-colors duration-300">
                          {edu.year}
                        </div>
                      </div>

                      <h3 className="text-xl font-extrabold text-white mb-2 tracking-tight leading-snug group-hover:text-amber-100 transition-colors duration-300">
                        {edu.school}
                      </h3>
                      
                      <p className="text-sm text-zinc-400 font-light mb-4 flex flex-wrap items-center gap-2">
                        <span className="text-zinc-300 font-normal">{edu.degree}</span> 
                        <span className="text-zinc-600">&bull;</span> 
                        <span className="text-zinc-500 italic">{edu.department}</span>
                      </p>
                      
                      <div className="flex items-center text-zinc-500 text-xs mb-6 font-light">
                        <FaMapMarkerAlt className="w-3 h-3 mr-1.5 text-zinc-600 group-hover:text-amber-500/60 transition-colors duration-300" />
                        {edu.location}
                      </div>
                      
                      {/* Card Footer Grid */}
                      <div className="flex items-center justify-between pt-4 border-t border-white/[0.04]">
                        <div className="flex flex-col">
                          <span className="text-[9px] uppercase tracking-wider text-zinc-600 font-mono">Attainment Score</span>
                          <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200 bg-clip-text text-transparent font-black text-sm tracking-wide mt-0.5">
                            {edu.percentage}
                          </span>
                        </div>
                        <div className="w-7 h-7 rounded-lg bg-white/[0.01] border border-white/5 flex items-center justify-center group-hover:border-amber-500/20 group-hover:bg-amber-500/[0.02] transition-all duration-300">
                          <FaChevronDown className={`w-3 h-3 text-zinc-500 transition-transform duration-500 ${openIndex === index ? 'rotate-180 text-amber-400' : ''}`} />
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
              );
            })}
          </div>
        </div>

        {/* Mobile Vertical View */}
        <div className="md:hidden px-1">
          <div className="flex flex-col gap-8 relative">
            <div className="absolute left-4 top-2 bottom-2 w-[2px] bg-white/[0.02]" />
            
            <motion.div 
              style={{ height: staffExtend }}
              className="absolute left-4 top-2 w-[2px] bg-gradient-to-b from-yellow-500 to-amber-600 origin-top shadow-[0_0_8px_rgba(245,158,11,0.5)]"
            />
            
            {ENHANCED_EDUCATION.map((edu, index) => (
              <motion.div
                key={edu.school}
                variants={slideInFromLeft(index * 0.12 + 0.15)}
                className="relative pl-10"
              >
                <div className="absolute left-2.5 top-6 w-3 h-3 rounded-full bg-[#050508] border border-amber-600/50 flex items-center justify-center z-10">
                  <div className="w-1 h-1 rounded-full bg-amber-500 shadow-[0_0_4px_#f59e0b]" />
                </div>
                
                <div 
                  onClick={() => toggleDetails(index)}
                  className="relative p-6 rounded-xl border border-white/[0.03] border-l-amber-500/30 bg-gradient-to-br from-[#0c0c12] to-[#06060a] shadow-[0_20px_40px_rgba(0,0,0,0.5)] active:scale-[0.99] transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[8px] font-mono tracking-widest text-zinc-500 uppercase">{edu.chapter}</span>
                    <div className="text-base font-black text-amber-500/80 font-mono">{edu.year}</div>
                  </div>

                  <h3 className="text-base font-bold text-white mb-1 leading-snug">{edu.school}</h3>
                  <p className="text-xs text-zinc-400 mb-3 font-light">{edu.degree}, {edu.department}</p>
                  
                  <div className="flex items-center text-zinc-500 text-[11px] mb-4 font-light">
                    <FaMapMarkerAlt className="w-2.5 h-2.5 mr-1 text-zinc-600" />
                    {edu.location}
                  </div>
                  
                  <div className="flex items-center justify-between pt-3 border-t border-white/[0.04]">
                    <span className="text-amber-400/95 font-black text-xs tracking-wide">{edu.percentage}</span>
                    <FaChevronDown className={`w-3 h-3 text-zinc-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-amber-400' : ''}`} />
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