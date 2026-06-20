"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { HiOutlineEye, HiOutlineArrowDownTray } from "react-icons/hi2";
import { StarsCanvas } from "./star-background";

import { slideInFromLeft, slideInFromRight } from "@/lib/motion";
import { SKILLS_DATA, LANGUAGES, FRAMEWORKS, DATABASES, CLOUD, TOOLS } from "@/constants";

const CATEGORIES = ["All", "Languages", "Frameworks", "Databases", "Cloud", "Tools"] as const;
type CategoryType = (typeof CATEGORIES)[number];

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("All");
  const [isMounted, setIsMounted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const RESUME_URL = "/resume.pdf";

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothScrollProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 25,
    restDelta: 0.001,
  });

  const rotateValue = useTransform(smoothScrollProgress, [0, 1], [0, 240]);

  const getCategorizedSkills = () => {
    switch (activeCategory) {
      case "Languages": return LANGUAGES;
      case "Frameworks": return FRAMEWORKS;
      case "Databases": return DATABASES;
      case "Cloud": return CLOUD;
      case "Tools": return TOOLS;
      default: return SKILLS_DATA;
    }
  };

  const filteredSkills = getCategorizedSkills();

  return (
    <section
      id="skills"
      ref={containerRef}
      className="w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden py-28 px-4 bg-zinc-950 text-white selection:bg-amber-500/30"
    >
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-screen">
        <StarsCanvas />
      </div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-amber-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center w-full max-w-5xl mx-auto">

        <motion.div
          style={{ rotate: rotateValue }}
          className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 relative flex items-center justify-center select-none cursor-grab active:cursor-grabbing group drop-shadow-[0_0_50px_rgba(245,158,11,0.15)]"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <div className="absolute inset-0 bg-amber-500/10 rounded-full blur-[60px] opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <img
            src="/torus.png"
            alt="Metallic Glass Torus"
            draggable={false}
            className="w-full h-full object-contain pointer-events-none filter drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          />
        </motion.div>

        <div className="w-full flex flex-col items-center text-center mt-8 mb-14">
          <motion.h2
            variants={slideInFromLeft(0.4)}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl md:text-6xl font-sans font-bold tracking-tight text-zinc-100 mb-4"
          >
            The Secret{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-amber-400 to-yellow-200 italic font-serif px-2 inline-block drop-shadow-[0_2px_15px_rgba(245,158,11,0.2)]">
              Sauce
            </span>
          </motion.h2>

          <motion.p
            variants={slideInFromRight(0.4)}
            initial="hidden"
            animate="visible"
            className="text-zinc-400 font-normal text-sm sm:text-base max-w-md mt-1 leading-relaxed"
          >
            A precise blend of production-ready frameworks, solid architecture choices, and intuitive UX design.
          </motion.p>
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent mt-8" />
        </div>

        <div className="relative z-50 mb-12 w-full max-w-xs sm:max-w-xl mx-auto px-2">
          <div className="sm:hidden w-full relative">
            <motion.button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full flex items-center justify-between px-5 py-3 rounded-2xl bg-zinc-900/80 border border-white/[0.08] backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.4)] text-zinc-200 text-xs font-medium tracking-wide"
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 animate-pulse" />
                Category: <strong className="text-amber-400 font-semibold">{activeCategory}</strong>
              </span>
              <motion.svg 
                animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-4 h-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </motion.svg>
            </motion.button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 5, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 350, damping: 26 }}
                  className="absolute top-full left-0 right-0 rounded-2xl bg-zinc-950/95 border border-white/[0.08] backdrop-blur-2xl p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col gap-1 z-50"
                >
                  {CATEGORIES.map((category, idx) => (
                    <motion.button
                      key={category}
                      type="button"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.03 }}
                      onClick={() => {
                        setActiveCategory(category);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-medium transition-all duration-200 ${
                        activeCategory === category 
                          ? "bg-gradient-to-r from-amber-500/20 to-amber-400/5 text-amber-300 border-l-2 border-amber-400" 
                          : "text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.02]"
                      }`}
                    >
                      {category}
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="hidden sm:flex items-center justify-center gap-1.5 p-1 rounded-full bg-zinc-900/60 border border-white/[0.05] backdrop-blur-xl mx-auto px-2">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-xs font-medium tracking-wide transition-colors duration-300 relative ${
                  activeCategory === category ? "text-zinc-950 font-semibold" : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-300 rounded-full shadow-[0_2px_12px_rgba(245,158,11,0.25)]"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="w-full max-w-4xl px-1 min-h-[320px]">
          <motion.div
            layout
            className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3 sm:gap-4 justify-items-center items-center"
          >
            <AnimatePresence mode="popLayout">
              {isMounted && filteredSkills.map((skill, index) => (
                <motion.div
                  layout
                  key={skill.skill_name}
                  initial={{ opacity: 0, scale: 0.8, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.85, y: 8, transition: { duration: 0.12 } }}
                  transition={{
                    type: "spring",
                    stiffness: 140,
                    damping: 24,
                    delay: Math.min(index * 0.008, 0.15),
                  }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ "--brand-color": skill.color } as React.CSSProperties}
                  className="flex flex-col items-center justify-center p-2 sm:p-3 w-full aspect-square max-w-[85px] sm:max-w-[95px] rounded-xl sm:rounded-2xl bg-zinc-900/30 border border-white/[0.04] hover:border-[var(--brand-color)]/40 hover:bg-zinc-900/80 backdrop-blur-md shadow-lg transition-colors duration-300 group relative overflow-hidden z-20"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-[var(--brand-color)]/0 to-transparent group-hover:from-[var(--brand-color)]/[0.04] blur-md transition-all duration-300 pointer-events-none" />

                  <div className="w-8 h-8 sm:w-9 sm:h-9 relative flex items-center justify-center z-30 transition-transform duration-300 group-hover:scale-105">
                    <img
                      src={
                        skill.iconSlug === "django"
                          ? `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg`
                          : skill.iconSlug === "amazonwebservices"
                            ? `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg`
                            : `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.iconSlug}/${skill.iconSlug}-original.svg`
                      }
                      alt={skill.skill_name}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (!target.src.includes('-plain.svg')) {
                          target.src = `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.iconSlug}/${skill.iconSlug}-plain.svg`;
                        }
                      }}
                    />
                  </div>

                  <span className="text-[9px] sm:text-[10px] text-zinc-500 font-medium tracking-wide text-center group-hover:text-zinc-200 transition-colors line-clamp-1 w-full select-none mt-2 z-30 px-0.5">
                    {skill.skill_name}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        <div className="mt-28 flex flex-col items-center gap-6 text-center px-4 w-full">
          <div className="flex flex-col gap-1.5">
            <h3 className="text-zinc-200 text-base font-medium tracking-wide">Interested in working together?</h3>
            <p className="text-zinc-500 text-xs max-w-xs font-light leading-relaxed">Check out my complete technical milestones and professional timeline.</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto mt-2">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-2.5 rounded-full text-xs font-medium tracking-wider text-zinc-400 border border-white/[0.06] bg-zinc-900/20 hover:bg-zinc-900/80 hover:text-zinc-100 hover:border-zinc-700 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-md active:scale-[0.98]"
            >
              <HiOutlineEye className="text-sm opacity-70" />
              <span>View CV</span>
            </a>
            <a
              href={RESUME_URL}
              download="resume.pdf"
              className="w-full sm:w-auto px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider text-zinc-950 bg-gradient-to-r from-amber-400 to-yellow-300 hover:brightness-105 active:brightness-95 shadow-[0_4px_20px_rgba(245,158,11,0.15)] hover:shadow-[0_4px_25px_rgba(245,158,11,0.3)] transition-all duration-300 flex items-center justify-center gap-2 active:scale-[0.98]"
            >
              <HiOutlineArrowDownTray className="text-sm" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};