'use client';
import Image from "next/image";
import { HiBriefcase, HiCalendar, HiMapPin, HiArrowTopRightOnSquare } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa6";
import { StarsCanvas } from "./star-background";

export default function Experience() {
  const experiences = [
    {
      role: "Front-End Web Developer Intern",
      company: "NullClass Edtech Private Limited",
      duration: "Jan 2025 - Jun 2025",
      location: "Remote",
      logo: "/nullclass-logo.png", 
      description:
        "I worked remotely as a Front-End Web Developer Intern at NullClass, where I designed and built MovieDB Fusion, a responsive movie database application using HTML, CSS, JavaScript, and Tailwind CSS. I integrated Firebase Authentication and managed user data with Cloud Firestore, while fetching and displaying movies, actors, crews, and trailers through the TMDB API. This internship gave me hands-on experience in modern web development, API integration, and cloud-based data management, helping me build scalable and user-friendly applications.",
      skills: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Firebase", "Cloud Firestore", "TMDB API"],
      links: {
        repo: "https://github.com/abhijithshetty12/MovieDB",
        demo: "https://moviedb-fusion.vercel.app/"
      }
    }
  ];

  return (
    <section id="experience" className="w-full min-h-screen py-24 px-6 md:px-8 bg-[#030014] text-white flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* ── BACKGROUND LAYER ── */}
      <div className="absolute inset-0 z-[0] pointer-events-none">
        <StarsCanvas />
      </div>

      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-teal-600/10 rounded-full blur-3xl pointer-events-none z-[1]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-sky-600/10 rounded-full blur-3xl pointer-events-none z-[1]" />

      {/* ── CONTENT LAYER ── */}
      <div className="max-w-4xl w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-teal-400 bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20">
            History
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mt-3 tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
            Work Experience<span className="text-red-600">.</span>
          </h2>
        </div>

        {/* Timeline Shell */}
        <div className="relative border-l border-zinc-800/80 ml-4 md:ml-6 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8 md:pl-12 group">
              
              {/* Timeline Node Point Indicator */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#030014] border-2 border-zinc-700 flex items-center justify-center group-hover:border-teal-500 transition-colors duration-300 shadow-[0_0_15px_rgba(0,0,0,0.8)] z-20">
                <HiBriefcase className="text-xs text-zinc-400 group-hover:text-teal-400 transition-colors" />
              </div>

              {/* Main Card Element */}
              <div className="rounded-3xl bg-zinc-900/30 backdrop-blur-xl border border-white/[0.05] hover:border-white/[0.09] p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.03)] hover:shadow-[0_20px_50px_rgba(56,189,248,0.03)] transition-all duration-300 relative z-10">
                
                {/* Header Container */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5 pb-5 border-b border-zinc-800/60">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 relative rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-2 shrink-0 overflow-hidden shadow-inner">
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} Logo`}
                        width={45}
                        height={45}
                        className="object-contain filter brightness-110 group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold tracking-wide text-white group-hover:text-teal-400 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-zinc-400 text-sm font-medium mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  {/* Metadata Chips */}
                  <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-2 text-xs text-zinc-500 font-medium">
                    <div className="flex items-center gap-1.5 bg-white/[0.02] px-3 py-1 rounded-full border border-white/[0.04]">
                      <HiCalendar className="text-sm text-teal-400/80" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-white/[0.02] px-3 py-1 rounded-full border border-white/[0.04] sm:self-end">
                      <HiMapPin className="text-sm text-sky-400/80" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Narrative Details Block */}
                <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-light tracking-wide mb-6">
                  {exp.description}
                </p>

                {/* Badges & Action Links Row */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-t border-zinc-800/40 pt-5">
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIdx) => (
                      <span 
                        key={skillIdx}
                        className="text-[11px] font-medium tracking-wide text-zinc-400 bg-white/[0.03] border border-white/[0.06] hover:border-teal-500/30 hover:text-white px-3 py-1 rounded-xl transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Project Proof Links */}
                  <div className="flex items-center gap-3 shrink-0">
                    <a 
                      href={exp.links.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-white bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.05] px-3 py-2 rounded-xl transition-all duration-200"
                    >
                      <FaGithub className="text-sm" />
                      <span>Repository</span>
                    </a>
                    
                    <a 
                      href={exp.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-teal-400 bg-teal-500/5 border border-teal-500/10 hover:border-teal-500/30 hover:bg-teal-500/10 px-3 py-2 rounded-xl transition-all duration-200 shadow-[0_0_15px_rgba(20,184,166,0.02)]"
                    >
                      <span>Live Demo</span>
                      <HiArrowTopRightOnSquare className="text-sm" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}