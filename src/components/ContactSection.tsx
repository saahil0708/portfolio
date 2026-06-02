'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FluidArrowRight } from "@/components/FluidArrow";

export default function ContactSection() {
  return (
    <div className="w-full flex flex-col relative z-20 overflow-hidden">
      {/* Massive background text */}
      <div className="absolute top-10 left-0 lg:-left-20 pointer-events-none opacity-[0.02] text-[10rem] md:text-[16rem] lg:text-[20rem] leading-none font-black text-white select-none whitespace-nowrap">
        CONTACT
      </div>

      <div className="flex flex-col lg:flex-row lg:items-stretch gap-16 lg:gap-24 relative z-10 w-full pt-16 md:pt-24 pb-10 md:pb-12 px-6 md:px-8 lg:px-16 xl:px-20">

        {/* Left Column: Info & Socials */}
        <div className="flex-1 flex flex-col justify-between gap-12">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-emerald-500"></div>
              <h2 className="text-emerald-500 font-mono tracking-[0.2em] uppercase text-sm font-semibold">
                Get in touch
              </h2>
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-light text-zinc-100 tracking-tighter leading-[1.1] mb-8">
              <span className="whitespace-nowrap">Let's build something</span> <br className="hidden md:block" />
              <span className="font-serif italic text-emerald-400">amazing</span> together.
            </h3>
            <p className="text-zinc-400 text-base md:text-lg font-light max-w-lg leading-relaxed">
              Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>

          {/* Premium Glassmorphic Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md">
            {/* Direct Email - Large Full-width Card */}
            <a 
              href="mailto:hello@example.com" 
              className="col-span-1 md:col-span-2 group flex items-center gap-4 p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:bg-zinc-800/50 hover:border-emerald-500/30 transition-all duration-500 relative overflow-hidden backdrop-blur-sm"
            >
              {/* Envelope Icon Container */}
              <div className="w-10 h-10 rounded-lg bg-zinc-950 border border-zinc-800/80 flex items-center justify-center group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 transition-all duration-500 shrink-0">
                <svg className="w-4.5 h-4.5 text-zinc-400 group-hover:text-emerald-400 transition-colors duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </div>
              
              <div className="flex flex-col">
                <span className="text-zinc-500 text-[9px] uppercase tracking-wider mb-0.5">Direct Email</span>
                <span className="text-zinc-200 text-sm md:text-base font-light group-hover:text-emerald-400 transition-colors duration-500">hello@example.com</span>
              </div>
              
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-500">
                <svg className="w-4.5 h-4.5 text-emerald-400 transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </a>
 
            {/* GitHub Card - Column 1 */}
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-3.5 md:p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:bg-zinc-800/50 hover:border-emerald-500/30 transition-all duration-500 backdrop-blur-sm"
            >
              <div className="w-9 h-9 rounded-lg bg-zinc-950 border border-zinc-800/80 flex items-center justify-center group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 transition-all duration-500 shrink-0">
                <svg className="w-4 h-4 text-zinc-400 group-hover:text-emerald-400 transition-colors duration-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.197 22 16.44 22 12.017 22 6.484 17.522 2 12 2z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-zinc-500 text-[9px] uppercase tracking-wider mb-0.5">Code</span>
                <span className="text-zinc-200 font-light text-sm group-hover:text-white transition-colors">GitHub</span>
              </div>
              <svg className="ml-auto w-3.5 h-3.5 text-zinc-600 group-hover:text-emerald-400 transform -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
 
            {/* LinkedIn Card - Column 2 */}
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-3.5 md:p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:bg-zinc-800/50 hover:border-emerald-500/30 transition-all duration-500 backdrop-blur-sm"
            >
              <div className="w-9 h-9 rounded-lg bg-zinc-950 border border-zinc-800/80 flex items-center justify-center group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 transition-all duration-500 shrink-0">
                <svg className="w-4 h-4 text-zinc-400 group-hover:text-emerald-400 transition-colors duration-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-zinc-500 text-[9px] uppercase tracking-wider mb-0.5">Network</span>
                <span className="text-zinc-200 font-light text-sm group-hover:text-white transition-colors">LinkedIn</span>
              </div>
              <svg className="ml-auto w-3.5 h-3.5 text-zinc-600 group-hover:text-emerald-400 transform -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Column: Premium Glassmorphic Form */}
        <div className="flex-1 w-full max-w-xl lg:max-w-none lg:pl-20 xl:pl-28 flex flex-col justify-between">
          <form className="flex flex-col gap-6 relative overflow-hidden w-full">

            <div className="flex flex-col md:flex-row gap-6 relative z-10">
              <div className="flex flex-col gap-2 flex-1 relative">
                <label htmlFor="name" className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 ml-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  suppressHydrationWarning
                  placeholder="Enter your name"
                  className="w-full bg-zinc-950/40 border border-zinc-800/80 hover:border-zinc-700/50 focus:border-emerald-500/50 focus:bg-zinc-900/20 rounded-2xl px-5 py-3.5 text-zinc-100 placeholder:text-zinc-600 focus:outline-none transition-all duration-300 backdrop-blur-sm"
                />
              </div>
              <div className="flex flex-col gap-2 flex-1 relative">
                <label htmlFor="email" className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 ml-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  suppressHydrationWarning
                  placeholder="Enter your email"
                  className="w-full bg-zinc-950/40 border border-zinc-800/80 hover:border-zinc-700/50 focus:border-emerald-500/50 focus:bg-zinc-900/20 rounded-2xl px-5 py-3.5 text-zinc-100 placeholder:text-zinc-600 focus:outline-none transition-all duration-300 backdrop-blur-sm"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 relative z-10">
              <label htmlFor="subject" className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 ml-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                suppressHydrationWarning
                placeholder="What is this regarding?"
                className="w-full bg-zinc-950/40 border border-zinc-800/80 hover:border-zinc-700/50 focus:border-emerald-500/50 focus:bg-zinc-900/20 rounded-2xl px-5 py-3.5 text-zinc-100 placeholder:text-zinc-600 focus:outline-none transition-all duration-300 backdrop-blur-sm"
              />
            </div>

            <div className="flex flex-col gap-2 relative z-10">
              <label htmlFor="message" className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 ml-1">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                suppressHydrationWarning
                placeholder="Write your message here..."
                className="w-full bg-zinc-950/40 border border-zinc-800/80 hover:border-zinc-700/50 focus:border-emerald-500/50 focus:bg-zinc-900/20 rounded-2xl px-5 py-3.5 text-zinc-100 placeholder:text-zinc-600 focus:outline-none transition-all duration-300 resize-none backdrop-blur-sm"
              />
            </div>

            <button
              type="button"
              suppressHydrationWarning
              className="group mt-4 w-fit px-8 py-3 rounded-full bg-zinc-950 border border-zinc-800 hover:border-zinc-700 overflow-hidden cursor-pointer focus:outline-none shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-300 relative z-10 flex items-center justify-between gap-4 self-start"
            >
              {/* White Sweep Fill */}
              <div className="absolute inset-0 bg-white origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.5,0,0,1)] rounded-full"></div>

              <span className="relative z-10 font-bold uppercase tracking-[0.15em] text-xs text-white group-hover:text-zinc-950 transition-colors duration-500 whitespace-nowrap">
                Send Message
              </span>
              <div className="relative z-10 w-7 h-7 rounded-full bg-zinc-900 group-hover:bg-zinc-950 flex items-center justify-center transform group-hover:translate-x-1 transition-all duration-500 ease-out shrink-0">
                <FluidArrowRight size={14} className="text-white" />
              </div>
            </button>
          </form>
        </div>
 
      </div>
 
      {/* Footer */}
      <footer className="w-full py-8 border-t border-zinc-100/5 flex items-center justify-center relative z-10">
        <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-zinc-500 flex items-center gap-1.5 select-none">
          Built with <span className="text-emerald-500 animate-pulse text-xs">❤️</span> by <span className="text-zinc-300 font-semibold tracking-[0.25em]">SAAHIL</span>
        </p>
      </footer>
    </div>
  );
}
