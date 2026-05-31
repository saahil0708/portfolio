"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-background px-6 relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      
      <motion.div 
        className="max-w-5xl mx-auto w-full z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="text-red-800 font-semibold tracking-wider uppercase text-sm mb-4 block">
            Digital Architecture & Design
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight tracking-tight">
            Crafting <span className="text-red-900">Digital</span><br />
            Experiences.
          </h1>
        </motion.div>
        
        <motion.div variants={itemVariants} className="max-w-2xl mt-8">
          <p className="text-lg md:text-xl text-neutral-600 leading-relaxed font-light">
            I build elegant, high-performance web applications using modern technologies. 
            Merging deep technical expertise with refined design aesthetics.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12 flex flex-col sm:flex-row gap-4">
          <a href="#work" className="inline-flex items-center justify-center px-8 py-4 bg-red-900 text-white rounded-md font-medium hover:bg-red-800 transition-colors shadow-sm">
            View My Work
          </a>
          <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-red-900 border border-red-200 rounded-md font-medium hover:bg-red-50 transition-colors shadow-sm">
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
