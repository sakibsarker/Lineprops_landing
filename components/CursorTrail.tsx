"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CursorTrail = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        className="fixed z-50 w-10 h-10 bg-gradient-to-r from-[#161b29]  to-red-500 rounded-full pointer-events-none"
        style={{
          left: mousePos.x - 16, // Adjust to center cursor
          top: mousePos.y - 16,
        }}
        animate={{
          scale: hovering ? 2 : 1, // Grow cursor on hover
          opacity: hovering ? 0.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 15,
        }}
      />

      {/* Trail Effect */}
      <motion.div
        className="fixed z-40 w-3 h-3 bg-gradient-to-r from-[#161b29]  to-red-500 rounded-full pointer-events-none"
        style={{
          left: mousePos.x - 1,
          top: mousePos.y - 1,
        }}
        animate={{
          scale: hovering ? 1.5 : 0.8, // Small trail effect
          opacity: 0.6,
        }}
        transition={{
          duration: 0.3,
        }}
      />

      {/* Detect hoverable elements */}
      <div
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        className="absolute top-0 left-0 w-screen h-screen pointer-events-none"
      />
    </>
  );
};

export default CursorTrail;
