"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
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

        <div className="flex flex-wrap justify-center items-center gap-1.5 p-1.5 rounded-full bg-zinc-900/60 border border-white/[0.05] backdrop-blur-xl max-w-full overflow-x-auto mb-16 shadow-inner">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-xs font-medium tracking-wide transition-colors duration-300 relative ${activeCategory === category ? "text-zinc-950 font-semibold" : "text-zinc-400 hover:text-zinc-200"
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

        <div className="w-full max-w-4xl px-2 min-h-[320px]">
          <motion.div
            layout
            className={
              activeCategory === "All"
                ? "grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-4 justify-items-center items-center"
                : "flex flex-wrap justify-center items-center gap-4"
            }
          >
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill, index) => (
                <motion.div
                  layout
                  key={skill.skill_name}
                  initial={{ opacity: 0, scale: 0.8, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.85, y: 8, transition: { duration: 0.12 } }}
                  transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 22,
                    delay: index * 0.012,
                  }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  style={{ "--brand-color": skill.color } as React.CSSProperties}
                  className="flex flex-col items-center justify-center p-3 w-[85px] h-[90px] sm:w-[95px] sm:h-[100px] rounded-2xl bg-zinc-900/30 border border-white/[0.04] hover:border-[var(--brand-color)]/40 hover:bg-zinc-900/80 backdrop-blur-md shadow-lg transition-colors duration-300 group relative overflow-hidden z-20"
                >
                  {/* Subtle brand color inner glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[var(--brand-color)]/0 to-transparent group-hover:from-[var(--brand-color)]/[0.04] blur-md transition-all duration-300 pointer-events-none" />

                  <div className="w-9 h-9 relative flex items-center justify-center z-30 transition-transform duration-300 group-hover:scale-105">
                    <img
                      src={
                        skill.iconSlug === "django"
                          ? `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg`
                          : skill.iconSlug === "amazonwebservices"
                            ? `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg`
                            : `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.iconSlug}/${skill.iconSlug}-original.svg`
                      }
                      alt={skill.skill_name}
                      style={{ width: '36px', height: '36px' }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (!target.src.includes('-plain.svg')) {
                          target.src = `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.iconSlug}/${skill.iconSlug}-plain.svg`;
                        }
                      }}
                    />
                  </div>

                  <span className="text-[10px] text-zinc-500 font-medium tracking-wide text-center group-hover:text-zinc-200 transition-colors line-clamp-1 w-full select-none mt-2.5 z-30">
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