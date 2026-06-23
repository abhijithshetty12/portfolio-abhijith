"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import { FiArrowRight, FiActivity } from "react-icons/fi";
import { slideInFromTop, slideInFromLeft } from "@/lib/motion";
import { StarsCanvas } from "./star-background";
import { SOCIAL_LINKS, INFO_CARDS } from "@/constants";

const MotionLink = motion(Link);
export const ContactContent = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "8e96e42f-2a2b-4e1b-87f0-1603b5e39e9f",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 6000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="relative flex flex-col items-center min-h-screen w-full px-4 py-32 bg-[#030303] overflow-hidden selection:bg-amber-500/20 selection:text-amber-200">

      <div className="absolute inset-0 z-0 pointer-events-none">
        <StarsCanvas />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-amber-500/[0.07] rounded-full blur-[140px] animate-pulse [animation-duration:7s]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/[0.06] rounded-full blur-[150px] animate-pulse [animation-duration:10s]" />
      </div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-5xl">

        <motion.div
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center mb-16"
        >
          <motion.div
            variants={slideInFromTop}
            className="mb-4 px-4 py-1 rounded-full bg-zinc-900/60 border border-zinc-800 shadow-[0_0_15px_rgba(245,158,11,0.02)] cursor-default"
          >
            <span className="text-[10px] font-bold text-amber-400 tracking-[0.25em] uppercase">
              Get In Touch
            </span>
          </motion.div>

          <motion.h1
            variants={slideInFromLeft(0.3)}
            className="text-4xl md:text-6xl font-sans font-bold text-white mb-4 tracking-tight"
          >
            Let&apos;s build something <span className="bg-gradient-to-r from-amber-400 via-yellow-200 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_2px_20px_rgba(245,158,11,0.1)]">exceptional</span>.
          </motion.h1>

          <motion.p
            variants={slideInFromLeft(0.5)}
            className="text-zinc-400 text-sm md:text-base max-w-lg leading-relaxed font-normal"
          >
            Have a project in mind, looking to collaborate, or want to discuss engineering parameters? Drop a message below.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-6">
          {INFO_CARDS.map(({ Icon, label, sub, display, href }, i) => {
            const cardProps = {
              key: label,
              initial: { opacity: 0, y: 15 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.1 * i + 0.2, duration: 0.4 },
              className: `group relative flex flex-row items-center gap-4 p-4 rounded-xl border border-zinc-900 
        bg-gradient-to-b from-zinc-900/20 to-transparent backdrop-blur-md 
        hover:border-amber-500/30 hover:bg-zinc-900/40 transition-all duration-300 
        ${href ? 'cursor-pointer select-none' : ''}`
            };

            // Card Content Inner JSX
            const CardContent = (
              <>
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-zinc-950 border border-zinc-850 text-zinc-400 group-hover:text-amber-400 group-hover:border-amber-500/20 group-hover:shadow-[0_0_12px_rgba(245,158,11,0.1)] transition-all duration-300 flex-shrink-0">
                  <Icon className="w-4 h-4" />
                </div>

                <div className="flex flex-col min-w-0">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-amber-500/80 mb-0.5">
                    {label}
                  </span>
                  <span className="text-zinc-200 text-xs font-semibold truncate group-hover:text-white transition-colors duration-200">
                    {display}
                  </span>
                  <span className="text-[10px] text-zinc-500 mt-0.5 font-light truncate">
                    {sub}
                  </span>
                </div>
              </>
            );

            // If href exists, wrap the entire interactive motion container as a Link
            if (href) {
              return (
                <MotionLink href={href} {...cardProps}>
                  {CardContent}
                </MotionLink>
              );
            }

            // Fallback standard card if no href is provided
            return (
              <motion.div {...cardProps}>
                {CardContent}
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">

          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="p-6 rounded-xl border border-zinc-900 bg-zinc-950/20 backdrop-blur-md shadow-2xl min-h-[420px] flex flex-col justify-between"
          >
            <div className="w-full">
              <h2 className="text-sm font-semibold text-zinc-200 mb-5 tracking-wide flex items-center gap-2">
                <FiActivity className="text-blue-400" /> Message Pipeline
              </h2>

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center py-16 px-4 rounded-lg bg-zinc-950/40 border border-zinc-900"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    >
                      <FaCheckCircle className="w-10 h-10 text-amber-400 mb-3" />
                    </motion.div>
                    <h3 className="text-sm font-semibold text-zinc-200 mb-1">Message Sent Successfully</h3>
                    <p className="text-zinc-500 text-xs font-light max-w-xs leading-relaxed">
                      Thank you for reaching out. I will review your request and get back to you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={status === "submitting"}
                        placeholder="John Doe"
                        className="w-full px-3 py-2.5 text-xs rounded-lg bg-zinc-950/60 border border-zinc-900 focus:border-amber-500/30 focus:bg-zinc-950 text-zinc-200 placeholder-zinc-700 outline-none transition-all duration-200 disabled:opacity-50"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={status === "submitting"}
                        placeholder="john@example.com"
                        className="w-full px-3 py-2.5 text-xs rounded-lg bg-zinc-950/60 border border-zinc-900 focus:border-amber-500/30 focus:bg-zinc-950 text-zinc-200 placeholder-zinc-700 outline-none transition-all duration-200 disabled:opacity-50"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        disabled={status === "submitting"}
                        placeholder="Project requirements, timelines, details..."
                        rows={4}
                        className="w-full px-3 py-2.5 text-xs rounded-lg bg-zinc-950/60 border border-zinc-900 focus:border-amber-500/30 focus:bg-zinc-950 text-zinc-200 placeholder-zinc-700 outline-none transition-all duration-200 resize-none leading-relaxed disabled:opacity-50"
                      />
                    </div>

                    {status === "error" && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-[11px] text-red-400 font-medium"
                      >
                        Failed to deliver. Please try again or email directly.
                      </motion.span>
                    )}

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="group flex flex-row items-center justify-center gap-2 mt-1 w-full py-2.5 rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-zinc-950 disabled:bg-zinc-900 disabled:text-zinc-600 text-xs font-bold transition-all duration-200 active:scale-[0.99] shadow-[0_4px_20px_rgba(245,158,11,0.15)]"
                    >
                      <AnimatePresence mode="wait">
                        {status === "submitting" ? (
                          <motion.span
                            key="loader"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex items-center gap-2"
                          >
                            <svg className="animate-spin h-3.5 w-3.5 text-zinc-950" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Sending...
                          </motion.span>
                        ) : (
                          <motion.span
                            key="static-text"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center gap-1.5"
                          >
                            Send Message
                            <FiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.45, duration: 0.4 }}
            className="p-6 rounded-xl border border-zinc-900 bg-zinc-950/20 backdrop-blur-md shadow-2xl flex flex-col justify-between"
          >
            <div>
              <h2 className="text-sm font-semibold text-zinc-200 mb-1 tracking-wide">
                Network Channels
              </h2>
              <p className="text-zinc-500 text-xs mb-5 font-normal leading-relaxed">
                Connect across professional ecosystems and social networks.
              </p>

              <div className="flex flex-col gap-2">
                {SOCIAL_LINKS.map((social, i) => (
                  <motion.div
                    key={social.name}
                    initial={{ opacity: 0, x: 5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.04, duration: 0.25 }}
                  >
                    <Link
                      href={social.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group flex flex-row items-center gap-3 p-3 rounded-lg border border-zinc-950/40 bg-zinc-950/10 hover:bg-zinc-900/30 hover:border-blue-500/20 transition-all duration-200"
                      aria-label={`Visit my ${social.name}`}
                    >
                      <div className="flex items-center justify-center w-7 h-7 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:text-blue-400 group-hover:border-blue-500/20 transition-all duration-200">
                        <social.icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-zinc-300 text-xs font-medium group-hover:text-amber-100 transition-colors duration-200">
                        {social.name}
                      </span>
                      <svg
                        className="ml-auto w-3 h-3 text-zinc-700 group-hover:text-blue-400 transition-colors duration-200"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex flex-row items-center gap-3.5 mt-6 p-4 rounded-lg bg-zinc-950/40 border border-zinc-900">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
              <div className="flex flex-col">
                <span className="text-amber-200 text-xs font-medium">
                  Availability: Open for Opportunities
                </span>
                <span className="text-zinc-500 text-[11px] mt-0.5 font-light">
                  Currently accepting software architecture, contracts, and engineering roles.
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};