'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    text: "Saahil delivered exceptional work on our real estate platform. His attention to detail and ability to execute complex animations flawlessly made a huge difference. He has been a great resource to our team and always delivers top-notch results on time.",
    name: "Jane Doe",
    role: "CEO, The Uniques",
    initials: "J"
  },
  {
    text: "An absolute pleasure to work with. Saahil brings both technical excellence and a great design sense to every project. Highly recommended! His work on our real-time news platform was instrumental in launching it successfully.",
    name: "Mark Smith",
    role: "Founder, Chintan News",
    initials: "M"
  }
];

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 40 : -40,
      opacity: 0,
      filter: 'blur(4px)'
    }),
    center: {
      x: 0,
      opacity: 1,
      filter: 'blur(0px)'
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 40 : -40,
      opacity: 0,
      filter: 'blur(4px)'
    })
  };

  return (
    <div className="flex flex-col relative z-20 -mt-20 md:-mt-24 -mb-16 md:-mb-20 self-stretch">
      {/* Massive background quote */}
      <div className="absolute top-0 right-0 pointer-events-none opacity-[0.03] text-[20rem] leading-none font-serif text-white translate-x-10 -translate-y-10 select-none">
        &rdquo;
      </div>

      {/* Content Row */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 relative">
        {/* Outline Quote Icon */}
        <div className="shrink-0 hidden md:block pt-32 md:pt-40">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 0L4 48H12L24 0H16ZM34 0L22 48H30L42 0H34Z" fill="transparent" stroke="currentColor" strokeWidth="1" className="text-zinc-500/50" />
          </svg>
        </div>

        {/* Testimonial Text & Info */}
        <div className="flex rounded-l-[120px] flex-col min-h-[450px] relative bg-zinc-900 pt-32 md:pt-40 pb-24 md:pb-32 px-8 md:px-12 lg:pl-16 pr-[440px] md:pr-[430px] lg:pr-[416px] border-l border-zinc-800 shadow-2xl -ml-8 md:-ml-12 lg:-ml-24 -mr-[500px]">
          {/* Fading Top and Bottom Borders */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-zinc-800 via-zinc-800 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-zinc-800 via-zinc-800 to-transparent"></div>

          {/* Dotted Background for the Card */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(circle, #71717a 1.5px, transparent 1.5px)', backgroundSize: '32px 32px', backgroundAttachment: 'fixed' }}></div>

          {/* Right Aligned Heading */}
          <div className="flex flex-col gap-3 items-end w-full relative z-20 mb-16">
            <div className="flex w-full items-center justify-end gap-4">
              <h2 className="text-zinc-300 font-mono tracking-[0.2em] uppercase text-sm md:text-base text-right">
                Testimonials
              </h2>
              <div className="w-16 md:w-20 h-0.5 bg-emerald-500"></div>
            </div>
            <p className="text-zinc-400 text-sm md:text-base max-w-3xl leading-relaxed text-right">
              What people say about my work, dedication, and the value I bring to the table.
            </p>
          </div>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="flex flex-col h-full relative z-10"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Text */}
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed mb-10 max-w-5xl flex-1 italic">
                "{testimonials[current].text}"
              </p>

              {/* Bottom Row: User Info */}
              <div className="flex items-center gap-4 mt-auto mb-20 sm:mb-0">
                <div className="w-14 h-14 rounded-full bg-zinc-800 flex items-center justify-center text-emerald-400 text-xl font-bold border border-zinc-700 shrink-0">
                  {testimonials[current].initials}
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-lg font-bold">{testimonials[current].name}</span>
                  <span className="text-zinc-500 text-sm mt-0.5">{testimonials[current].role}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute bottom-24 md:bottom-28 lg:bottom-32 right-[-16px] md:right-[-40px] lg:right-[-76px] flex gap-4 z-30">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full border border-zinc-600 flex items-center justify-center text-zinc-400 hover:text-emerald-400 hover:border-emerald-400 hover:bg-emerald-500/10 transition-all duration-300 group bg-zinc-800 shadow-xl"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="w-12 h-12 rounded-full border border-zinc-600 flex items-center justify-center text-zinc-400 hover:text-emerald-400 hover:border-emerald-400 hover:bg-emerald-500/10 transition-all duration-300 group bg-zinc-800 shadow-xl"
          >
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
