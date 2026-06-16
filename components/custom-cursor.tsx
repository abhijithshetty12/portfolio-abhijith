"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Exact 1:1 mouse tracking coordinates
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Snappy but smooth physics configuration for Wukong's weapon
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("cursor-pointer")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
      style={{
        x: smoothX,
        y: smoothY,
        width: "100px",  // Sets the bounds of the cursor track width
        height: "100px", // Sets the bounds of the cursor track height
      }}
      animate={{
        // Grown state simulation via scaling on link hover
        scale: isHovered ? 1.35 : 1,
        // Applies a dynamic glowing aura directly onto the PNG alpha channel layers
        filter: isHovered 
          ? "drop-shadow(0 0 12px rgba(220, 38, 38, 0.95)) drop-shadow(0 0 4px rgba(245, 158, 11, 0.6))"
          : "drop-shadow(0 0 6px rgba(220, 38, 38, 0.45))",
      }}
      transition={{
        type: "spring",
        stiffness: 280,
        damping: 22,
      }}
    >
      <img
        src="/ruyi-jingu.png" // Assumes the file is saved directly in your /public directory
        alt="Ruyi Jingu Bang"
        className="w-full h-full object-contain"
        draggable={false}
      />
    </motion.div>
  );
};