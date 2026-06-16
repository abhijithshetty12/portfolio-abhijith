"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaScroll, FaGripLinesVertical, FaMapMarkerAlt } from "react-icons/fa";
import { GiMonkey, GiFlame } from "react-icons/gi"; 
import { IoMailOutline } from "react-icons/io5";

import { slideInFromTop, slideInFromLeft } from "@/lib/motion";
import { StarsCanvas } from "./star-background";

/* ─── STRUCTURED DATA ───────────────────────────────────────────────────── */

const INFO_CARDS = [
  {
    Icon: IoMailOutline,
    label: "Email",
    sub: "Drop me an email anytime",
    display: "abhijithshetty2006@gmail.com",
    href: "mailto:abhijithshetty2006@gmail.com",
  },
  {
    Icon: FaGripLinesVertical,
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

/* ─── COMPONENT ─────────────────────────────────────────────────────────── */

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
    <div className="relative flex flex-col items-center min-h-screen w-full px-4 py-28 bg-[#070605] overflow-hidden selection:bg-amber-600/40 selection:text-amber-100">
      
      {/* ── BACKGROUND LAYER ───────────────────────── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <StarsCanvas />
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-gradient-to-tr from-amber-600/10 to-red-800/5 rounded-full blur-[140px] animate-pulse [animation-duration:6s]" />
        <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-yellow-700/5 to-amber-900/10 rounded-full blur-[160px] animate-pulse [animation-duration:10s]" />
      </div>

      {/* ── FOREGROUND LAYER ───────────────────── */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-5xl">

        {/* ── HEADER SECTION ───────────────────────────────── */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center mb-20"
        >
          <motion.div 
            variants={slideInFromTop} 
            className="mb-6 px-4 py-1.5 rounded-md bg-amber-950/[0.15] backdrop-blur-2xl border border-amber-500/[0.15] shadow-[0_4px_30px_rgba(0,0,0,0.6),inset_0_1px_4px_rgba(245,158,11,0.05)] hover:border-amber-400/40 transition-all duration-500 group cursor-default"
          >
            <span className="text-[10px] font-bold text-amber-500/70 tracking-[0.4em] uppercase bg-gradient-to-r from-amber-500 via-yellow-200 to-amber-600 bg-clip-text group-hover:from-yellow-100 group-hover:to-amber-300 transition-all duration-300">
              Signal Processing
            </span>
          </motion.div>

          <motion.h1
            variants={slideInFromLeft(0.3)}
            className="text-5xl md:text-7xl font-serif text-white mb-5 tracking-tight leading-none bg-gradient-to-b from-stone-100 via-amber-100 to-amber-500/60 bg-clip-text text-transparent"
          >
            Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 font-bold drop-shadow-[0_2px_20px_rgba(245,158,11,0.2)]">Connect</span>
          </motion.h1>

          <motion.p
            variants={slideInFromLeft(0.5)}
            className="text-stone-400 text-base md:text-lg max-w-xl leading-relaxed font-light"
          >
            Have an architecture layout, product pipeline, or deep development project in mind? Let&apos;s map the parameters together.
          </motion.p>

          {/* Clean Linear Divider Matching Style */}
          <motion.div
            variants={slideInFromTop}
            className="mt-10 relative h-[3px] w-64 bg-gradient-to-r from-transparent via-stone-800 to-transparent flex justify-center items-center"
          >
            <div className="absolute w-12 h-[3px] bg-amber-500 left-12 shadow-[0_0_8px_#f59e0b]" />
            <div className="absolute w-12 h-[3px] bg-amber-500 right-12 shadow-[0_0_8px_#f59e0b]" />
            <GiMonkey className="text-amber-500 absolute bg-[#070605] px-1 text-2xl z-10" />
          </motion.div>
        </motion.div>

        {/* ── INFO CARDS ───────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full mb-8">
          {INFO_CARDS.map(({ Icon, label, sub, display, href }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.2, duration: 0.5, type: "spring", stiffness: 80 }}
              className="group relative flex flex-row items-center gap-4 p-5 rounded-xl border border-stone-800/60 bg-gradient-to-b from-amber-950/[0.04] to-transparent backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:border-amber-500/30 hover:bg-amber-950/[0.08] hover:shadow-[0_20px_50px_rgba(245,158,11,0.02),inset_0_1px_8px_rgba(245,158,11,0.05)] transition-all duration-500 ease-out"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-stone-900/80 border border-stone-800 text-stone-400 group-hover:text-amber-400 group-hover:border-amber-500/30 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.1)] transition-all duration-500 flex-shrink-0">
                <Icon className="w-5 h-5" />
              </div>

              <div className="flex flex-col min-w-0">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-amber-600/80 mb-0.5">
                  {label}
                </span>
                <span className="text-stone-500 text-xs font-light mb-0.5 truncate">
                  {sub}
                </span>
                {href ? (
                  <Link href={href} className="text-stone-200 text-xs font-semibold hover:text-amber-300 transition-colors duration-200 truncate">
                    {display}
                  </Link>
                ) : (
                  <span className="text-stone-200 text-xs font-semibold truncate">{display}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── MAIN PANELS ──────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">

          {/* — Form Area — */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="p-8 rounded-2xl border border-stone-800/60 bg-gradient-to-b from-stone-950/40 via-stone-950/10 to-transparent backdrop-blur-3xl shadow-[0_32px_64px_rgba(0,0,0,0.8)]"
          >
            <h2 className="text-lg font-serif text-amber-100 mb-6 tracking-wide flex items-center gap-2">
              <GiFlame className="text-amber-500 animate-pulse" /> Transmit Parameters
            </h2>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-amber-950/[0.1] border border-amber-500/20 shadow-[inset_0_2px_8px_rgba(245,158,11,0.02)]"
              >
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
                <span className="text-xs text-amber-200/90 font-light">
                  Transmission compiled successfully! Synchronizing shortly.
                </span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-[10px] uppercase tracking-wider text-amber-600/70 font-bold">
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
                    className="w-full px-4 py-3 text-xs rounded-lg bg-stone-950/80 border border-stone-800 focus:border-amber-500/30 text-stone-100 placeholder-stone-700 outline-none transition-all duration-300 shadow-[inset_0_1px_4px_rgba(0,0,0,0.8)] focus:shadow-[0_0_15px_rgba(245,158,11,0.02)]"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-[10px] uppercase tracking-wider text-amber-600/70 font-bold">
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
                    className="w-full px-4 py-3 text-xs rounded-lg bg-stone-950/80 border border-stone-800 focus:border-amber-500/30 text-stone-100 placeholder-stone-700 outline-none transition-all duration-300 shadow-[inset_0_1px_4px_rgba(0,0,0,0.8)] focus:shadow-[0_0_15px_rgba(245,158,11,0.02)]"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-[10px] uppercase tracking-wider text-amber-600/70 font-bold">
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
                    className="w-full px-4 py-3 text-xs rounded-lg bg-stone-950/80 border border-stone-800 focus:border-amber-500/30 text-stone-100 placeholder-stone-700 outline-none transition-all duration-300 resize-none shadow-[inset_0_1px_4px_rgba(0,0,0,0.8)] focus:shadow-[0_0_15px_rgba(245,158,11,0.02)] leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex flex-row items-center justify-center gap-2 mt-2 w-full py-3 rounded-lg bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-stone-950 disabled:opacity-40 disabled:cursor-not-allowed text-xs font-bold transition-all duration-300 shadow-[0_4px_25px_rgba(245,158,11,0.15)] active:scale-[0.99]"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-3.5 w-3.5 text-stone-950"
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
                      <GiFlame className="w-3.5 h-3.5 text-stone-950 group-hover:scale-125 transition-transform duration-300" aria-hidden="true" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* — Network Ecosystem Links — */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="p-8 rounded-2xl border border-stone-800/60 bg-gradient-to-b from-stone-950/40 via-stone-950/10 to-transparent backdrop-blur-3xl shadow-[0_32px_64px_rgba(0,0,0,0.8)] flex flex-col"
          >
            <h2 className="text-lg font-serif text-amber-100 mb-2 tracking-wide">
              Network Clusters
            </h2>
            <p className="text-stone-500 text-xs mb-6 font-light leading-relaxed">
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
                    className="group flex flex-row items-center gap-3 p-3.5 rounded-lg border border-stone-900 bg-stone-950/30 hover:bg-stone-900/60 hover:border-amber-500/20 hover:shadow-[0_8px_20px_rgba(0,0,0,0.5)] transition-all duration-400"
                    aria-label={`Inspect my ${social.name}`}
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-md bg-stone-900 border border-stone-800 text-stone-500 group-hover:text-amber-400 group-hover:border-amber-500/20 transition-all duration-400">
                      <social.icon className="w-4 h-4" />
                    </div>
                    <span className="text-stone-300 text-xs font-semibold group-hover:text-amber-100 transition-colors duration-200">
                      {social.name}
                    </span>
                    <svg
                      className="ml-auto w-3 h-3 text-stone-600 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all duration-400"
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

            {/* System Status Pill */}
            <div className="flex flex-row items-center gap-4 mt-6 p-4 rounded-lg bg-stone-950/60 border border-stone-900 shadow-[inset_0_1px_4px_rgba(0,0,0,0.6)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
              </span>
              <div className="flex flex-col">
                <span className="text-amber-100 text-xs font-medium font-serif">
                  Ecosystem Status: Open
                </span>
                <span className="text-stone-500 text-[10px] mt-0.5 font-light">
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