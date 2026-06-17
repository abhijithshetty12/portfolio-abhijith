"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaGripLinesVertical, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";
import { GiMonkey, GiFlame } from "react-icons/gi"; 
import { IoMailOutline } from "react-icons/io5";

import { slideInFromTop, slideInFromLeft } from "@/lib/motion";
import { StarsCanvas } from "./star-background";


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
    <div className="relative flex flex-col items-center min-h-screen w-full px-4 py-28 bg-[#070605] overflow-hidden selection:bg-amber-600/40 selection:text-amber-100">
      
      <div className="absolute inset-0 z-0 pointer-events-none">
        <StarsCanvas />
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-gradient-to-tr from-amber-600/10 to-red-800/5 rounded-full blur-[140px] animate-pulse [animation-duration:6s]" />
        <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-yellow-700/5 to-amber-900/10 rounded-full blur-[160px] animate-pulse [animation-duration:10s]" />
      </div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-5xl">

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

          <motion.div
            variants={slideInFromTop}
            className="mt-10 relative h-[3px] w-64 bg-gradient-to-r from-transparent via-stone-800 to-transparent flex justify-center items-center"
          >
            <div className="absolute w-12 h-[3px] bg-amber-500 left-12 shadow-[0_0_8px_#f59e0b]" />
            <div className="absolute w-12 h-[3px] bg-amber-500 right-12 shadow-[0_0_8px_#f59e0b]" />
            <GiMonkey className="text-amber-500 absolute bg-[#070605] px-1 text-2xl z-10" />
          </motion.div>
        </motion.div>

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="p-8 rounded-2xl border border-stone-800/60 bg-gradient-to-b from-stone-950/40 via-stone-950/10 to-transparent backdrop-blur-3xl shadow-[0_32px_64px_rgba(0,0,0,0.8)] min-h-[440px] flex flex-col justify-between"
          >
            <div className="w-full">
              <h2 className="text-lg font-serif text-amber-100 mb-6 tracking-wide flex items-center gap-2">
                <GiFlame className="text-amber-500 animate-pulse" /> Transmit Parameters
              </h2>

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    className="flex flex-col items-center justify-center text-center py-12 px-4 rounded-xl bg-amber-950/[0.05] border border-amber-500/25 shadow-[inset_0_2px_12px_rgba(245,158,11,0.03)]"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -45 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    >
                      <FaCheckCircle className="w-12 h-12 text-amber-500 mb-4 drop-shadow-[0_0_10px_rgba(245,158,11,0.3)]" />
                    </motion.div>
                    <h3 className="text-base font-serif text-amber-200 mb-1">Transmission Received</h3>
                    <p className="text-stone-400 text-xs font-light max-w-xs leading-relaxed">
                      Your structural data parameter compiled successfully. Synchronizing connection pipeline shortly.
                    </p>
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
                        disabled={status === "submitting"}
                        placeholder="Your structural name"
                        className="w-full px-4 py-3 text-xs rounded-lg bg-stone-950/80 border border-stone-800 focus:border-amber-500/30 text-stone-100 placeholder-stone-700 outline-none transition-all duration-300 shadow-[inset_0_1px_4px_rgba(0,0,0,0.8)] focus:shadow-[0_0_15px_rgba(245,158,11,0.02)] disabled:opacity-50"
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
                        disabled={status === "submitting"}
                        placeholder="your.node@domain.com"
                        className="w-full px-4 py-3 text-xs rounded-lg bg-stone-950/80 border border-stone-800 focus:border-amber-500/30 text-stone-100 placeholder-stone-700 outline-none transition-all duration-300 shadow-[inset_0_1px_4px_rgba(0,0,0,0.8)] focus:shadow-[0_0_15px_rgba(245,158,11,0.02)] disabled:opacity-50"
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
                        disabled={status === "submitting"}
                        placeholder="Describe programmatic parameters or collaboration terms..."
                        rows={4}
                        className="w-full px-4 py-3 text-xs rounded-lg bg-stone-950/80 border border-stone-800 focus:border-amber-500/30 text-stone-100 placeholder-stone-700 outline-none transition-all duration-300 resize-none shadow-[inset_0_1px_4px_rgba(0,0,0,0.8)] focus:shadow-[0_0_15px_rgba(245,158,11,0.02)] leading-relaxed disabled:opacity-50"
                      />
                    </div>

                    {status === "error" && (
                      <motion.span 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        className="text-[11px] text-red-500 font-medium"
                      >
                        Transmission pipeline failed. Please retry.
                      </motion.span>
                    )}

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="group relative flex flex-row items-center justify-center gap-2 mt-2 w-full py-3 rounded-lg bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-stone-950 disabled:opacity-80 disabled:cursor-not-allowed text-xs font-bold transition-all duration-300 shadow-[0_4px_25px_rgba(245,158,11,0.15)] active:scale-[0.99] overflow-hidden"
                    >
                      <AnimatePresence mode="wait">
                        {status === "submitting" ? (
                          <motion.span
                            key="loader"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            className="flex items-center gap-2"
                          >
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
                          </motion.span>
                        ) : (
                          <motion.span
                            key="static-text"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center gap-2"
                          >
                            Transmit
                            <GiFlame className="w-3.5 h-3.5 text-stone-950 group-hover:scale-125 transition-transform duration-300" aria-hidden="true" />
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
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="p-8 rounded-2xl border border-stone-800/60 bg-gradient-to-b from-stone-950/40 via-stone-950/10 to-transparent backdrop-blur-3xl shadow-[0_32px_64px_rgba(0,0,0,0.8)] flex flex-col justify-between"
          >
            <div>
              <h2 className="text-lg font-serif text-amber-100 mb-2 tracking-wide">
                Network Clusters
              </h2>
              <p className="text-stone-500 text-xs mb-6 font-light leading-relaxed">
                Find my computational footprint across core tracking nodes.
              </p>

              <div className="flex flex-col gap-2.5">
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
            </div>

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