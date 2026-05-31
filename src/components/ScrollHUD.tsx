"use client";

import { useState } from "react";
import { motion, useScroll, useSpring, useMotionValueEvent } from "framer-motion";

export default function ScrollHUD() {
  const { scrollYProgress, scrollY } = useScroll();
  
  // Smooth out the scroll progress for a buttery feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isVisible, setIsVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Show after scrolling down 100px
    if (latest > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  return (
    <div 
      className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] transition-all duration-500 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="relative flex items-center justify-center group cursor-pointer focus:outline-none"
        aria-label="Scroll to top"
      >
        {/* Background blur/glass pill */}
        {/* <div className="absolute inset-0 bg-zinc-900/60 backdrop-blur-md rounded-full border border-white/10 shadow-xl shadow-black/50 transition-transform duration-300"></div> */}
        
        {/* SVG Ring */}
        <svg className="w-14 h-14 md:w-16 md:h-16 transform -rotate-90 relative z-10 transition-transform duration-300" viewBox="0 0 100 100">
          {/* Track */}
          {/* <circle
            cx="50"
            cy="50"
            r="42"
            className="stroke-zinc-800"
            strokeWidth="2"
            fill="none"
          /> */}
          {/* Progress */}
          <motion.circle
            cx="50"
            cy="50"
            r="42"
            className="stroke-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            style={{ pathLength: smoothProgress }}
          />
        </svg>

        {/* Chevron Up Icon */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <svg className="w-5 h-5 md:w-6 md:h-6 text-zinc-300 group-hover:text-emerald-400 group-hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.8)] transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 15l7-7 7 7" />
          </svg>
        </div>
      </button>
    </div>
  );
}
