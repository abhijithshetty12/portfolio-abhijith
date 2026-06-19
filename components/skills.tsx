"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { HiOutlineEye, HiOutlineArrowDownTray } from "react-icons/hi2";
import { StarsCanvas } from "./star-background";

import { slideInFromLeft, slideInFromRight } from "@/lib/motion";
import { SKILLS_DATA, LANGUAGES, FRAMEWORKS, DATABASES, CLOUD, TOOLS } from "@/constants";

const CATEGORIES = ["All", "Languages", "Frameworks", "Databases", "Cloud", "Tools"] as const;
type CategoryType = (typeof CATEGORIES)[number];

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("All");
  const containerRef = useRef<HTMLDivElement>(null);
  const RESUME_URL = "/resume.pdf";

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotateValue = useTransform(scrollYProgress, [0, 1], [0, 360]);

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
      className="w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden py-24 px-4"
    >
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-screen">
        <StarsCanvas />
      </div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-5xl mx-auto">

        {/* Torus Element */}
        <motion.div
          style={{ rotate: rotateValue }}
          className="w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 relative flex items-center justify-center select-none cursor-grab active:cursor-grabbing drop-shadow-[0_20px_50px_rgba(217,119,6,0.25)]"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 180, damping: 15 }}
        >
          <div className="absolute w-48 h-48 bg-amber-500/15 rounded-full blur-[80px] pointer-events-none mix-blend-screen" />
          <img
            src="/torus.png"
            alt="Metallic Glass Torus Element"
            draggable={false}
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* Header Texts */}
        <div className="w-full h-auto flex flex-col items-center justify-center text-center mt-6 mb-12">
          <motion.h2
            variants={slideInFromLeft(0.5)}
            initial={false}
            animate="visible"
            className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold tracking-tight text-white mb-4"
          >
            The Secret{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7a3ef8] via-[#e59800] to-[#fcd34d] italic font-cursive pl-2 pr-4 inline-block normal-case drop-shadow-[0_2px_20px_rgba(229,152,0,0.15)]">
              Sauce
            </span>
          </motion.h2>

          <motion.p
            variants={slideInFromRight(0.5)}
            initial={false}
            animate="visible"
            className="text-zinc-400 font-light text-sm sm:text-lg max-w-lg mt-2"
          >
            The precise blend of modern frameworks, robust architectures, and intuitive design patterns.
          </motion.p>
          <div className="w-14 h-[2px] bg-gradient-to-r from-amber-500/50 to-purple-500/50 rounded-full mt-6" />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 px-2 py-1.5 rounded-full bg-white/[0.01] border border-purple-500/[0.08] backdrop-blur-2xl max-w-full overflow-x-auto mb-14">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 relative ${activeCategory === category ? "text-slate-950 font-bold" : "text-zinc-400 hover:text-amber-200"
                }`}
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="activeSkillTab"
                  className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 rounded-full shadow-[0_4px_20px_rgba(245,158,11,0.3)]"
                  transition={{ type: "spring", stiffness: 380, damping: 28 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </div>

        <div className="w-full max-w-4xl px-2 min-h-[300px]">
          <motion.div
            layout
            className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-8 gap-3 justify-items-center items-center"
          >
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill, index) => (
                <motion.div
                  layout
                  key={skill.skill_name}
                  initial={{ opacity: 0, scale: 0.3, y: 15, rotate: -5 }}
                  animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.5, y: 10, transition: { duration: 0.15 } }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: index * 0.015,
                  }}
                  whileHover={{ y: -6, scale: 1.05 }}
                  style={{ "--brand-color": skill.color } as React.CSSProperties}
                  className="flex flex-col items-center justify-between p-2.5 w-[80px] h-[85px] sm:w-[95px] sm:h-[100px] rounded-xl bg-[#090514]/40 border border-purple-500/[0.06] hover:border-[var(--brand-color)]/50 hover:bg-zinc-900/40 backdrop-blur-xl shadow-[0_6px_20px_rgba(0,0,0,0.5)] transition-colors duration-300 group relative overflow-hidden z-20"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-[var(--brand-color)]/0 to-transparent group-hover:from-[var(--brand-color)]/[0.06] blur-xl transition-all duration-300 pointer-events-none" />
                  <div className="w-8 h-8 relative flex items-center justify-center my-auto z-30">
                    <img
                      src={
                        skill.iconSlug === "django"
                          ? `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg`
                          : skill.iconSlug === "amazonwebservices"
                            ? `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg`
                            : `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.iconSlug}/${skill.iconSlug}-original.svg`
                      }
                      alt={skill.skill_name}
                      style={{ width: '40px', height: '40px' }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (!target.src.includes('-plain.svg')) {
                          target.src = `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.iconSlug}/${skill.iconSlug}-plain.svg`;
                        }
                      }}
                    />
                  </div>

                  <span className="text-[9px] sm:text-[10px] text-zinc-400 font-medium tracking-wide text-center group-hover:text-white transition-colors line-clamp-1 w-full select-none mt-1 z-30">
                    {skill.skill_name}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        <div className="mt-24 flex flex-col items-center gap-6 text-center px-4">
          <div className="flex flex-col gap-1">
            <h3 className="text-zinc-200 text-base font-medium tracking-wide">Interested in working together?</h3>
            <p className="text-zinc-500 text-xs max-w-sm font-light">Check out my complete technical milestones and academic background.</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-6 py-2.5 rounded-full text-xs font-medium tracking-wider text-zinc-400 border border-purple-500/[0.15] bg-white/[0.01] hover:bg-purple-950/20 hover:text-amber-300 hover:border-amber-500/30 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-md active:scale-95 shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
              <HiOutlineEye className="text-sm opacity-60" />
              <span>View CV</span>
            </a>
            <a href={RESUME_URL} download="resume.pdf" className="w-full sm:w-auto px-6 py-2.5 rounded-full text-xs font-medium tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 font-bold shadow-[0_4px_20px_rgba(245,158,11,0.2)] hover:shadow-[0_4px_30px_rgba(245,158,11,0.45)] transition-all duration-300 flex items-center justify-center gap-2 active:scale-95">
              <HiOutlineArrowDownTray className="text-sm" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};