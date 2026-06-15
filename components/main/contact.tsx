"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaPaperPlane, FaMapMarkerAlt, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoCallOutline, IoMailOutline } from "react-icons/io5";

import { slideInFromTop, slideInFromLeft } from "@/lib/motion";
import { StarsCanvas } from "./star-background";

/* ─── structured data ───────────────────────────────────────────────────── */

const INFO_CARDS = [
  {
    Icon: IoMailOutline,
    label: "Email",
    sub: "Drop me an email anytime",
    display: "abhijithshetty2006@gmail.com",
    href: "mailto:abhijithshetty2006@gmail.com",
  },
  {
    Icon: IoCallOutline,
    label: "Phone",
    sub: "Mon – Fri, 9 am – 6 pm",
    display: "+91 9082907975",
    href: "tel:+919082907975",
  },
  {
    Icon: FaMapMarkerAlt,
    label: "Location",
    sub: "Based in India",
    display: "Mumbai, Maharashtra",
    href: null,
  },
] as const;

const REFINED_SOCIALS = [
  {
    name: "GitHub",
    icon: FaGithub,
    link: "https://github.com/abhijithshetty12",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    link: "https://www.linkedin.com/in/abhijithshetty12/",
  },
] as const;

/* ─── component ─────────────────────────────────────────────────────────── */

export const ContactContent = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 2000));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="relative flex flex-col items-center min-h-screen w-full px-4 py-28 bg-[#020205] overflow-hidden selection:bg-indigo-500/40 selection:text-white">
      
      {/* ── BACKGROUND LAYER ───────────────────────── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <StarsCanvas />
        {/* Dynamic Fluid Plasma Flares */}
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-600/10 to-purple-600/5 rounded-full blur-[140px] animate-pulse [animation-duration:8s]" />
        <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-600/5 to-pink-600/5 rounded-full blur-[160px] animate-pulse [animation-duration:12s]" />
      </div>

      {/* ── FOREGROUND LAYER ───────────────────── */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-5xl">

        {/* ── HEADER SECTION ───────────────────────────────── */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center mb-20"
        >
          {/* Liquid Gloss Badge */}
          <motion.div 
            variants={slideInFromTop} 
            className="mb-6 px-4 py-1.5 rounded-full bg-white/[0.02] backdrop-blur-2xl border border-white/[0.12] shadow-[0_4px_30px_rgba(0,0,0,0.4),inset_0_2px_8px_rgba(255,255,255,0.05)] hover:border-indigo-400/40 transition-all duration-500 group cursor-default"
          >
            <span className="text-[10px] font-bold text-zinc-400 tracking-[0.4em] uppercase bg-gradient-to-r from-zinc-400 via-zinc-200 to-zinc-400 bg-clip-text group-hover:from-white group-hover:to-indigo-200 transition-all duration-300">
              Signal Processing
            </span>
          </motion.div>

          <motion.h1
            variants={slideInFromLeft(0.3)}
            className="text-5xl md:text-7xl font-black text-white mb-5 tracking-tighter leading-none bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent"
          >
            Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 font-extrabold drop-shadow-[0_2px_20px_rgba(168,85,247,0.15)]">Connect</span>
          </motion.h1>

          <motion.p
            variants={slideInFromLeft(0.5)}
            className="text-zinc-400 text-base md:text-lg max-w-xl leading-relaxed font-light"
          >
            Have an architecture layout, product pipeline, or deep development project in mind? Let&apos;s map the parameters together.
          </motion.p>

          <motion.div
            variants={slideInFromTop}
            className="mt-10 h-[1px] w-48 bg-gradient-to-r from-transparent via-zinc-800 to-transparent"
          />
        </motion.div>

        {/* ── INFO CARDS (LIQUID COMPOSITES) ───────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full mb-8">
          {INFO_CARDS.map(({ Icon, label, sub, display, href }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.2, duration: 0.5, type: "spring", stiffness: 80 }}
              className="group relative flex flex-row items-center gap-4 p-5 rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.03] to-white/[0.01] backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.6),inset_0_2px_12px_rgba(255,255,255,0.05)] hover:border-indigo-400/30 hover:bg-white/[0.04] hover:shadow-[0_20px_50px_rgba(99,102,241,0.05),inset_0_2px_16px_rgba(255,255,255,0.1)] transition-all duration-500 ease-out"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] text-zinc-400 group-hover:text-indigo-300 group-hover:border-indigo-400/30 group-hover:shadow-[0_0_15px_rgba(129,140,248,0.2)] transition-all duration-500 flex-shrink-0">
                <Icon className="w-4 h-4" />
              </div>

              <div className="flex flex-col min-w-0">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-0.5">
                  {label}
                </span>
                <span className="text-zinc-400 text-xs font-light mb-0.5 truncate">
                  {sub}
                </span>
                {href ? (
                  <Link href={href} className="text-white text-xs font-semibold hover:text-indigo-300 transition-colors duration-200 truncate">
                    {display}
                  </Link>
                ) : (
                  <span className="text-white text-xs font-semibold truncate">{display}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── MAIN LIQUID PANELS ──────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">

          {/* — Liquid Glass Form Area — */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="p-8 rounded-3xl border border-white/[0.06] bg-gradient-to-b from-white/[0.03] via-white/[0.01] to-transparent backdrop-blur-3xl shadow-[0_32px_64px_rgba(0,0,0,0.7),inset_0_2px_16px_rgba(255,255,255,0.04)]"
          >
            <h2 className="text-lg font-bold text-white mb-6 tracking-tight">
              Transmit Parameters
            </h2>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-indigo-500/[0.04] border border-indigo-500/20 shadow-[inset_0_2px_8px_rgba(99,102,241,0.05)]"
              >
                <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                <span className="text-xs text-indigo-200 font-light">
                  Transmission compiled successfully! Synchronizing shortly.
                </span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold">
                    Identity
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your structural name"
                    className="w-full px-4 py-3 text-xs rounded-xl bg-white/[0.02] border border-white/[0.06] focus:border-indigo-400/40 focus:bg-white/[0.04] text-white placeholder-zinc-600 outline-none transition-all duration-300 shadow-[inset_0_1px_4px_rgba(0,0,0,0.6)] focus:shadow-[inset_0_1px_4px_rgba(0,0,0,0.6),0_0_15px_rgba(99,102,241,0.05)]"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold">
                    Routing Node (Email)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.node@domain.com"
                    className="w-full px-4 py-3 text-xs rounded-xl bg-white/[0.02] border border-white/[0.06] focus:border-indigo-400/40 focus:bg-white/[0.04] text-white placeholder-zinc-600 outline-none transition-all duration-300 shadow-[inset_0_1px_4px_rgba(0,0,0,0.6)] focus:shadow-[inset_0_1px_4px_rgba(0,0,0,0.6),0_0_15px_rgba(99,102,241,0.05)]"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold">
                    Payload (Message)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Describe programmatic parameters or collaboration terms..."
                    rows={4}
                    className="w-full px-4 py-3 text-xs rounded-xl bg-white/[0.02] border border-white/[0.06] focus:border-indigo-400/40 focus:bg-white/[0.04] text-white placeholder-zinc-600 outline-none transition-all duration-300 resize-none shadow-[inset_0_1px_4px_rgba(0,0,0,0.6)] focus:shadow-[inset_0_1px_4px_rgba(0,0,0,0.6),0_0_15px_rgba(99,102,241,0.05)] leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex flex-row items-center justify-center gap-2 mt-2 w-full py-3 rounded-xl bg-gradient-to-b from-white to-zinc-200 hover:to-white text-[#030307] disabled:opacity-40 disabled:cursor-not-allowed text-xs font-bold transition-all duration-300 shadow-[0_4px_25px_rgba(255,255,255,0.08)] hover:shadow-[0_4px_30px_rgba(129,140,248,0.2)] active:scale-[0.99]"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-3.5 w-3.5 text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Broadcasting...
                    </>
                  ) : (
                    <>
                      Transmit
                      <FaPaperPlane className="w-2.5 h-2.5 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" aria-hidden="true" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* — Liquid Glass Ecosystem Links — */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="p-8 rounded-3xl border border-white/[0.06] bg-gradient-to-b from-white/[0.03] via-white/[0.01] to-transparent backdrop-blur-3xl shadow-[0_32px_64px_rgba(0,0,0,0.7),inset_0_2px_16px_rgba(255,255,255,0.04)] flex flex-col"
          >
            <h2 className="text-lg font-bold text-white mb-2 tracking-tight">
              Network Clusters
            </h2>
            <p className="text-zinc-500 text-xs mb-6 font-light leading-relaxed">
              Find my computational footprint across core tracking nodes.
            </p>

            <div className="flex flex-col gap-2.5 flex-1">
              {REFINED_SOCIALS.map((social, i) => (
                <motion.div
                  key={social.name}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={social.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group flex flex-row items-center gap-3 p-3.5 rounded-xl border border-white/[0.04] bg-white/[0.01] hover:bg-white/[0.03] hover:border-indigo-400/30 hover:shadow-[0_8px_20px_rgba(0,0,0,0.4),inset_0_2px_8px_rgba(255,255,255,0.05)] transition-all duration-400"
                    aria-label={`Inspect my ${social.name} configuration`}
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/[0.02] border border-white/[0.08] text-zinc-500 group-hover:text-indigo-300 group-hover:border-indigo-400/30 transition-all duration-400">
                      <social.icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-zinc-300 text-xs font-semibold group-hover:text-zinc-100 transition-colors duration-200">
                      {social.name}
                    </span>
                    <svg
                      className="ml-auto w-3 h-3 text-zinc-600 group-hover:text-indigo-300 group-hover:translate-x-0.5 transition-all duration-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Liquid System Status Pill */}
            <div className="flex flex-row items-center gap-4 mt-6 p-4 rounded-xl bg-white/[0.01] border border-white/[0.04] shadow-[inset_0_1px_4px_rgba(0,0,0,0.4)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <div className="flex flex-col">
                <span className="text-zinc-200 text-xs font-semibold">
                  Ecosystem Status: Open
                </span>
                <span className="text-zinc-500 text-[10px] mt-0.5 font-light">
                  Accepting core engineering requests and strategic telemetry lines.
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};