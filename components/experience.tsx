'use client';
import Image from "next/image";
import { HiBriefcase, HiCalendar, HiMapPin, HiArrowTopRightOnSquare, HiTv } from "react-icons/hi2";
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
        "Gained hands-on experience architectural fundamentals as a Front-End Intern at NullClass. Engineered scalable movie database platforms utilizing modern JavaScript interfaces and Tailwind CSS, while integrating advanced TMDB data streams and secure Firebase architectures.",
      project: {
        title: "MovieDB",
        description: "An interactive, fully responsive IMDb-inspired movie database interface. Features dynamic real-time rendering of trending libraries via TMDB API data pipelines, stateful user-guided client search matrices, and seamless authentication layers optimized for fluid navigation.",
        screenshot: "/projects/moviedb.jpg",
        skills: ["React", "Tailwind CSS", "Firebase", "Cloud Firestore", "TMDB API"],
        links: {
          repo: "https://github.com/abhijithshetty12/MovieDB",
          demo: "https://moviedb-fusion.vercel.app/"
        }
      }
    }
  ];

  return (
    <section id="experience" className="w-full min-h-screen py-24 px-6 md:px-8 bg-[#030014] text-white flex flex-col items-center justify-center relative overflow-hidden">

      <div className="absolute inset-0 z-[0] pointer-events-none">
        <StarsCanvas />
      </div>

      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-teal-600/10 rounded-full blur-3xl pointer-events-none z-[1]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-sky-600/10 rounded-full blur-3xl pointer-events-none z-[1]" />

      <div className="max-w-4xl w-full relative z-10">

        <div className="text-center mb-16">
          <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-teal-400 bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20">
            History
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mt-3 tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
            Work Experience<span className="text-red-600">.</span>
          </h2>
        </div>

        <div className="relative border-l border-zinc-800/80 ml-4 md:ml-6 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8 md:pl-12 group">

              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#030014] border-2 border-zinc-700 flex items-center justify-center group-hover:border-teal-500 transition-colors duration-300 shadow-[0_0_15px_rgba(0,0,0,0.8)] z-20">
                <HiBriefcase className="text-xs text-zinc-400 group-hover:text-teal-400 transition-colors" />
              </div>

              <div className="rounded-3xl bg-zinc-900/30 backdrop-blur-xl border border-white/[0.05] hover:border-white/[0.09] p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.03)] hover:shadow-[0_20px_50px_rgba(56,189,248,0.03)] transition-all duration-300 relative z-10">

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

                <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-light tracking-wide mb-6">
                  {exp.description}
                </p>

                {exp.project && (
                  <div className="bg-zinc-950/50 border border-white/[0.03] rounded-2xl p-5 mb-2 shadow-inner">
                    <div className="flex items-center gap-2 mb-4 text-xs font-bold tracking-wider uppercase text-teal-400/90">
                      <HiTv className="text-base" />
                      <span>Project Developed</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
                      <a
                        href={exp.project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="md:col-span-2 group/screenshot relative block rounded-xl overflow-hidden border border-white/10 hover:border-amber-500/50 bg-zinc-950 aspect-video w-full shadow-lg hover:shadow-[0_0_20px_rgba(245,158,11,0.15)] md:-mt-1 cursor-pointer transition-all duration-300 ease-out"
                      >
                        <Image
                          src={exp.project.screenshot}
                          alt={`${exp.project.title} Preview`}
                          fill
                          priority
                          className="object-contain group-hover/screenshot:scale-102 transition-transform duration-500 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-40 pointer-events-none" />
                      </a>

                      <div className="md:col-span-3 flex flex-col justify-between h-full space-y-4">
                        <div>
                          <h4 className="text-base md:text-lg font-bold text-white tracking-wide">
                            {exp.project.title}
                          </h4>
                          <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed mt-2">
                            {exp.project.description}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {exp.project.skills.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-white/[0.02] border border-white/[0.05] text-zinc-400"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-3 pt-2">
                          <a
                            href={exp.project.links.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-white bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.05] px-3 py-2 rounded-xl transition-all duration-200"
                          >
                            <FaGithub className="text-sm" />
                            <span>Repository</span>
                          </a>

                          <a
                            href={exp.project.links.demo}
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
                )}

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}