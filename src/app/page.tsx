import { FluidArrowRight } from "@/components/FluidArrow";
import Image from "next/image";
import Link from "next/link";
import Cloud from '../../public/Server-cuate.svg';
import Coding from '../../public/Hand coding-rafiki.svg';
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
export default function Home() {
	return (
		<main className="min-h-screen bg-zinc-900 overflow-x-hidden font-sans relative">
			{/* Subtle Outer Grid Pattern */}
			<div className="fixed inset-0 pointer-events-none opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(circle, #71717a 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}></div>

			{/* SVG Definitions for the Custom Responsive Clip Paths (2:1 Aspect Ratio) */}
			<svg width="0" height="0" className="absolute pointer-events-none">
				<defs>
					<clipPath id="hero-shape" clipPathUnits="objectBoundingBox">
						<path d="M 0.08,0.38 L 0.08,0.09 Q 0.08,0 0.12,0 L 0.42,0 Q 0.46,0 0.46,0.09 Q 0.46,0.18 0.50,0.18 L 0.96,0.18 Q 1,0.18 1,0.27 L 1,0.79 Q 1,0.88 0.96,0.88 L 0.58,0.88 Q 0.55,0.88 0.55,0.94 Q 0.55,1 0.52,1 L 0.04,1 Q 0,1 0,0.91 L 0,0.56 Q 0,0.47 0.04,0.47 Q 0.08,0.47 0.08,0.38 Z" />
					</clipPath>
					<clipPath id="next-shape" clipPathUnits="objectBoundingBox">
						<path d="M 0.04,0.18 L 0.535,0.18 Q 0.565,0.18 0.565,0.12 Q 0.565,0.06 0.595,0.06 L 0.96,0.06 Q 1,0.06 1,0.15 L 1,0.91 Q 1,1 0.96,1 L 0.40,1 Q 0.38,1 0.38,0.955 Q 0.38,0.91 0.36,0.91 L 0.04,0.91 Q 0,0.91 0,0.82 L 0,0.27 Q 0,0.18 0.04,0.18 Z" />
					</clipPath>
					<clipPath id="third-shape" clipPathUnits="objectBoundingBox">
						<path d="M 0.04,0 L 0.345,0 Q 0.365,0 0.365,0.03 Q 0.365,0.06 0.385,0.06 L 0.96,0.06 Q 1,0.06 1,0.12 L 1,0.94 Q 1,1 0.96,1 L 0.04,1 Q 0,1 0,0.94 L 0,0.06 Q 0,0 0.04,0 Z" />
					</clipPath>
					<clipPath id="fourth-shape" clipPathUnits="objectBoundingBox">
						<path d="M 0.04,0 L 0.96,0 Q 1,0 1,0.06 L 1,0.94 Q 1,1 0.96,1 L 0.04,1 Q 0,1 0,0.94 L 0,0.06 Q 0,0 0.04,0 Z" />
					</clipPath>
					<clipPath id="skills-shape" clipPathUnits="objectBoundingBox">
						<path d="M 0.04,0 L 0.96,0 Q 1,0 1,0.06 L 1,0.94 Q 1,1 0.96,1 L 0.30,1 Q 0.28,1 0.28,0.965 Q 0.28,0.93 0.26,0.93 L 0.04,0.93 Q 0,0.93 0,0.87 L 0,0.06 Q 0,0 0.04,0 Z" />
					</clipPath>
					<clipPath id="projects-shape" clipPathUnits="objectBoundingBox">
						<path d="M 0.05,0 L 0.24,0 Q 0.26,0 0.26,0.035 Q 0.26,0.07 0.28,0.07 L 0.95,0.07 Q 1,0.07 1,0.15 L 1,0.85 Q 1,0.93 0.95,0.93 L 0.80,0.93 Q 0.78,0.93 0.78,0.965 Q 0.78,1 0.76,1 L 0.05,1 Q 0,1 0,0.92 L 0,0.08 Q 0,0 0.05,0 Z" />
					</clipPath>
					<clipPath id="card-shape" clipPathUnits="objectBoundingBox">
						<path d="M 0.08,0 L 0.92,0 Q 1,0 1,0.08 L 1,0.76 Q 1,0.84 0.92,0.84 L 0.56,0.84 Q 0.48,0.84 0.48,0.92 Q 0.48,1 0.40,1 L 0.08,1 Q 0,1 0,0.92 L 0,0.08 Q 0,0 0.08,0 Z" />
					</clipPath>
					<clipPath id="testimonials-shape" clipPathUnits="objectBoundingBox">
						<path d="M 0.06,0.12 L 0.76,0.12 Q 0.79,0.12 0.79,0.06 Q 0.79,0 0.82,0 L 0.94,0 Q 1,0 1,0.12 L 1,0.88 Q 1,1 0.94,1 L 0.06,1 Q 0,1 0,0.88 L 0,0.24 Q 0,0.12 0.06,0.12 Z" />
					</clipPath>
				</defs>
			</svg>

			<div className="w-full flex flex-col items-center pt-[4vh] md:pt-[8vh] px-4 md:px-8 pb-20">
				{/* Hero Section */}
				<section className="relative z-30 w-full max-w-[170vh]">
					{/* Hero Container */}
					<div className="relative w-full aspect-[2.2/0.98]">
						{/* The Clipped Red Shape with Shadow */}
						<div className="absolute inset-0 w-full h-full filter drop-shadow-2xl pointer-events-none">
							<div
								className="w-full h-full bg-zinc-800 relative overflow-hidden pointer-events-auto"
								style={{ clipPath: 'url(#hero-shape)' }}
							>
								{/* Background decorative elements */}
								<div className="absolute top-0 right-0 w-[500px] h-[500px] -translate-y-1/2 translate-x-1/3 pointer-events-none" style={{ background: 'radial-gradient(circle closest-side, rgba(16, 185, 129, 0.2), transparent)' }}></div>
								<div className="absolute bottom-0 left-0 w-[600px] h-[600px] translate-y-1/3 -translate-x-1/4 pointer-events-none" style={{ background: 'radial-gradient(circle closest-side, rgba(5, 150, 105, 0.1), transparent)' }}></div>

								{/* Ambient Background Particles */}
								<div className="absolute top-[20%] left-[10%] text-emerald-500/30 text-2xl font-light animate-pulse pointer-events-none select-none">+</div>
								<div className="absolute bottom-[25%] left-[40%] text-emerald-500/20 text-3xl font-light animate-[pulse_4s_infinite] pointer-events-none select-none" style={{ animationDelay: '1s' }}>+</div>
								<div className="absolute top-[35%] right-[20%] text-lime-500/20 text-xl font-mono animate-[pulse_3s_infinite] pointer-events-none select-none" style={{ animationDelay: '2s' }}>{'</>'}</div>
								<div className="absolute w-1.5 h-1.5 rounded-full bg-emerald-400/30 top-[60%] left-[15%] animate-[ping_4s_infinite] pointer-events-none"></div>
								<div className="absolute w-2 h-2 rounded-full bg-lime-400/20 bottom-[40%] right-[10%] animate-[ping_5s_infinite] pointer-events-none" style={{ animationDelay: '1.5s' }}></div>

								{/* Inner Content - Advanced Layout */}
								<div className="w-full h-full flex flex-col lg:flex-row items-center justify-between relative z-20 px-8 md:px-16 lg:px-24 xl:px-32">

									{/* Left Column: Intro & Experience */}
									<div className="flex flex-col max-w-2xl xl:max-w-3xl w-full relative z-10 pt-12 lg:pt-0">
										<div className="flex flex-wrap items-center gap-4 mb-4 md:mb-6">
											<div className="flex items-center gap-4">
												<div className="h-px w-8 md:w-16 bg-emerald-400"></div>
												<span className="text-zinc-300 font-mono tracking-[0.2em] uppercase text-xs md:text-sm">Welcome to my universe</span>
											</div>
										</div>

										<div className="relative">
											{/* Decorative background text */}
											<h1 className="absolute -top-10 -left-4 text-[5rem] md:text-[8rem] xl:text-[10rem] font-black text-zinc-800/40 select-none pointer-events-none -z-10 tracking-tighter">
												HELLO
											</h1>
											<h2 className="text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-light text-white mb-2 tracking-tight">
												Hello, I am
											</h2>
											<h1 className="text-5xl md:text-7xl lg:text-[6rem] xl:text-[8rem] font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-200 to-emerald-500 tracking-tighter leading-[0.9] -ml-1 md:-ml-2 drop-shadow-lg pb-2">
												Saahil.
											</h1>
										</div>

										<div className="mt-8 md:mt-12 relative w-fit group">
											{/* The "Line Cut" Border Container */}
											<div className="border border-emerald-500/30 rounded-xl px-6 md:px-8 py-4 md:py-6 group-hover:border-emerald-400/60 transition-colors duration-500 flex items-center gap-6 md:gap-10">
												<div className="flex items-center">
													<span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-white tracking-tight uppercase leading-none whitespace-nowrap">
														Full Stack <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-300">Developer</span>
													</span>
												</div>

												<div className="hidden sm:flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-zinc-900/40 border border-emerald-500/30 group-hover:rotate-12 group-hover:border-emerald-400/60 transition-all duration-500 relative z-10 shrink-0">
													<svg className="w-6 h-6 md:w-8 md:h-8 text-lime-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
													</svg>
												</div>
											</div>

											{/* The Label that visually cuts the top border */}
											<div className="absolute top-0 left-6 md:left-8 -translate-y-1/2 bg-zinc-800 px-3 flex items-center gap-3 text-zinc-300/80 font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase transition-colors duration-500">
												<div className="flex gap-1">
													<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: '0ms' }}></span>
													<span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-bounce" style={{ animationDelay: '150ms' }}></span>
													<span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-bounce" style={{ animationDelay: '300ms' }}></span>
												</div>
												ROLE
											</div>
										</div>

										{/* Buttons */}
										<div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-8 mt-8 md:mt-10">
											<button className="group cursor-pointer relative inline-flex items-center h-10 md:h-12 rounded-full focus:outline-none bg-transparent">
												<div className="absolute left-0 top-0 h-full w-10 md:w-12 bg-white rounded-full transition-all duration-500 ease-[cubic-bezier(0.5,0,0,1)] group-hover:!w-full shadow-[0_0_20px_rgba(255,255,255,0.15)] group-hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]"></div>
												<div className="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 z-10 shrink-0">
													<svg className="w-4 h-4 md:w-5 md:h-5 text-zinc-950 transition-transform duration-500 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
													</svg>
												</div>
												<span className="relative z-10 ml-2 md:ml-3 pr-6 md:pr-8 font-bold uppercase tracking-[0.15em] text-[11px] md:text-xs text-white group-hover:text-zinc-950 transition-colors duration-500 whitespace-nowrap">
													Download Resume
												</span>
											</button>
										</div>
									</div>

									{/* Right Column: Photo */}
									<div className="relative w-full lg:w-auto flex justify-center lg:justify-end mt-16 lg:mt-0 shrink-0 transform translate-y-8 lg:translate-x-8 xl:translate-x-12">
										<div className="relative group">
											{/* Decorative Grid */}
											<div className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-10 w-32 h-32 md:w-32 md:h-32 opacity-40 pointer-events-none transition-transform duration-700 lg:group-hover:-translate-x-4 lg:group-hover:translate-y-4" style={{ backgroundImage: 'radial-gradient(circle, #10b981 2px, transparent 2.5px)', backgroundSize: '16px 16px' }}></div>

											{/* Raw Image */}
											<img
												src="/Profile.png"
												alt="Saahil"
												className="w-64 md:w-72 lg:w-80 xl:w-96 h-auto object-contain relative z-10 drop-shadow-2xl hover:-translate-y-2 transition-transform duration-500"
											/>
										</div>
									</div>

								</div>
							</div>
						</div>

						{/* Top-Left Clipped Negative Space: Social Media Icons */}
						<div className="absolute z-10" style={{ top: '22%', left: '4%', transform: 'translate(-50%, -50%)' }}>
							<div className="bg-zinc-800 shadow-[0_8px_30px_rgba(9,9,11,0.5)] border border-zinc-800/50 rounded-[2rem] py-6 px-2 flex flex-col items-center justify-center gap-4 backdrop-blur-sm">
								<a href="#" className="w-10 h-10 rounded-full bg-zinc-900/80 flex items-center justify-center text-zinc-400 hover:bg-emerald-500 hover:text-zinc-950 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
									<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
										<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
									</svg>
								</a>
								<a href="#" className="w-10 h-10 rounded-full bg-zinc-900/80 flex items-center justify-center text-zinc-400 hover:bg-emerald-500 hover:text-zinc-950 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
									<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
										<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
									</svg>
								</a>
								<a href="#" className="w-10 h-10 rounded-full bg-zinc-900/80 flex items-center justify-center text-zinc-400 hover:bg-emerald-500 hover:text-zinc-950 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
									<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
										<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
									</svg>
								</a>
							</div>
						</div>

						{/* Top-Right Clipped Negative Space: Text Navigation */}
						<nav className="absolute z-10 top-6 right-6 md:top-8 md:right-20 bg-zinc-800/80 shadow-[0_8px_30px_rgba(9,9,11,0.5)] border border-zinc-700/50 rounded-full px-6 py-3 md:px-8 md:py-4 flex items-center justify-center gap-6 md:gap-10 backdrop-blur-md whitespace-nowrap max-w-[calc(100vw-2rem)] overflow-x-auto no-scrollbar">
							{["About", "Skills", "Projects", "Testimonials", "Contact"].map((item) => (
								<a key={item} href="#" className="relative group text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors duration-300">
									<span className="relative z-10">{item}</span>
									{/* <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-white rounded-full transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100 shadow-[0_0_8px_rgba(255,255,255,0.5)]"></span> */}
								</a>
							))}
						</nav>
					</div>
				</section>

				{/* Next Section (e.g., Projects/About) */}
				<section className="relative z-20 w-full max-w-[170vh] -mt-[5.5%]">
					<div className="relative w-full aspect-[2.2/0.98]">
						{/* The Clipped Red Shape with Shadow */}
						<div className="absolute inset-0 w-full h-full filter drop-shadow-2xl pointer-events-none">
							<div
								className="w-full h-full bg-zinc-800 relative overflow-hidden flex pointer-events-auto"
								style={{ clipPath: 'url(#next-shape)' }}
							>
								{/* Background glow & textures */}
								<div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(16,185,129,0.15),transparent_60%)]"></div>

								{/* Massive background watermark removed per user request */}

								<div className="flex w-full h-full pt-[25%] md:pt-[12%] pb-[15%] md:pb-[12%] px-8 md:px-24 z-10">
									<div className="flex flex-col w-full h-full items-start justify-start gap-6 md:gap-8">
										<div className="flex items-center gap-4">
											<div className="w-20 h-0.5 md:h-0.25 bg-emerald-500"></div>
											<h2 className="text-zinc-300 font-mono tracking-[0.2em] uppercase text-sm md:text-base">
												About Me
											</h2>
										</div>
										<p className="text-zinc-400 text-lg md:text-2xl font-light leading-relaxed max-w-3xl">
											I am a passionate Full Stack Developer who thrives at the intersection of complex engineering and pristine design. I build robust, scalable, and visually striking applications that bring ambitious ideas to life.
										</p>
										{/* CTA Button */}
										<button className="group mt-6 relative inline-flex items-center gap-2 px-6 py-5.5 rounded-full bg-emerald-500 text-zinc-950 overflow-hidden cursor-pointer focus:outline-none shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] transition-shadow duration-300">
											{/* White Sweep Fill */}
											<div className="absolute inset-0 bg-white origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.5,0,0,1)] rounded-full"></div>

											<span className="relative z-10 text-base font-medium tracking-wide">
												Let's Talk
											</span>

											<div className="relative z-10 transform transition-all duration-500 ease-[cubic-bezier(0.5,0,0,1)]">
												<FluidArrowRight size={20} className="text-zinc-950" />
											</div>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Third Section */}
				<section className="relative z-10 w-full max-w-[170vh] -mt-[2%]">
					<div className="relative w-full aspect-[2.2/2.0] md:aspect-[2.2/1.65]">
						{/* The Clipped Red Shape with Shadow */}
						<div className="absolute inset-0 w-full h-full filter drop-shadow-2xl pointer-events-none">
							<div
								className="w-full h-full bg-gradient-to-br from-zinc-700 via-zinc-800/90 to-zinc-900 relative overflow-hidden flex pointer-events-auto"
								style={{ clipPath: 'url(#third-shape)' }}
							>
								{/* Background Textures & Watermarks */}
								<div className="absolute inset-0 pointer-events-none">
									{/* Amplified emerald glow from top left */}
									<div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(16,185,129,0.2),transparent_60%)]"></div>

									{/* Dotted Grid focused on top left - increased opacity */}
									<div
										className="absolute inset-0 opacity-[0.15]"
										style={{
											backgroundImage: 'radial-gradient(#10b981 1.5px, transparent 1.5px)',
											backgroundSize: '36px 36px',
											maskImage: 'radial-gradient(ellipse at top left, black 30%, transparent 80%)',
											WebkitMaskImage: 'radial-gradient(ellipse at top left, black 30%, transparent 80%)'
										}}
									></div>

									{/* Massive Watermark Text - increased opacity */}
									<div className="absolute -top-12 md:-top-20 -left-12 md:-left-10 opacity-[0.05] text-white font-black text-[8rem] md:text-[14rem] lg:text-[18rem] tracking-tighter leading-none select-none">
										SERVICES
									</div>
								</div>

								<div className="flex flex-col w-full h-full pt-[25%] md:pt-[12%] pb-[15%] md:pb-[12%] px-8 md:px-24 z-10 justify-start gap-8 md:gap-12">
									{/* Right Aligned Heading */}
									<div className="flex w-full items-center justify-end gap-4">
										<h2 className="text-zinc-300 font-mono tracking-[0.2em] uppercase text-sm md:text-base text-right">
											What I Do
										</h2>
										<div className="w-20 h-0.5 md:h-0.25 bg-emerald-500"></div>
									</div>

									{/* Full Width Paragraph */}
									<div className="w-full">
										<p className="text-zinc-400 text-lg md:text-2xl font-light leading-relaxed w-full text-right md:text-left">
											I specialize in building end-to-end solutions that are as robust under the hood as they are stunning on the screen. From architecting scalable backend systems and crafting responsive front-end interfaces to seamless API integrations, I bridge the gap between design and complex logic to deliver high-performance digital experiences tailored to your needs.
										</p>
									</div>

									{/* Bento Grid (Alternating Wide/Small Layout) */}
									<div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[220px] mt-4 z-20">

										{/* Item 1: Wide (2 columns) */}
										<div className="md:col-span-2 bg-zinc-900/60 border border-emerald-500/10 rounded-3xl p-6 md:p-8 hover:border-emerald-500/30 transition-all duration-500 flex flex-col justify-between group overflow-hidden relative shadow-xl backdrop-blur-sm">
											{/* Subtle background glow */}
											<div className="absolute top-0 right-0 w-64 h-64 -mr-20 -mt-20 group-hover:bg-emerald-500/10 transition-colors duration-700" style={{ background: 'radial-gradient(circle closest-side, rgba(16, 185, 129, 0.05), transparent)' }}></div>

											<div className="flex flex-row justify-between h-full">
												<div className="flex flex-col justify-between h-full relative z-10 w-2/3">
													{/* Icon */}
													<div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 mb-4 group-hover:scale-110 transition-transform duration-500">
														<svg className="w-5 h-5 md:w-6 md:h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
															<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
														</svg>
													</div>
													<div>
														<h3 className="text-xl md:text-2xl font-bold text-white mb-2">Frontend Engineering</h3>
														<p className="text-zinc-400 text-sm md:text-base leading-relaxed">Crafting pixel-perfect, highly interactive user interfaces using React, Next.js, and Framer Motion.</p>
													</div>
												</div>
												{/* Decorative area mimicking the illustration in the reference */}
												<div className="w-1/3 flex items-center justify-end relative z-10">
													{/* <div className="w-full h-full bg-zinc-800/50 rounded-2xl border border-zinc-700/30 transform rotate-3 group-hover:rotate-6 group-hover:scale-105 transition-all duration-500 relative overflow-hidden">
														<div className="absolute top-2 left-2 flex gap-1.5">
															<div className="w-2 h-2 rounded-full bg-zinc-600"></div>
															<div className="w-2 h-2 rounded-full bg-zinc-600"></div>
															<div className="w-2 h-2 rounded-full bg-zinc-600"></div>
														</div>
														<div className="absolute inset-x-2 top-6 bottom-2 bg-zinc-900 rounded-lg"></div>
													</div> */}
													<img src={Coding.src} alt="Cloud Illustration" className="transition-transform duration-500 w-full h-auto" />
												</div>
											</div>
										</div>

										{/* Item 2: Small (1 column) */}
										<div className="md:col-span-1 bg-gradient-to-br from-emerald-900/40 to-zinc-900/80 border border-emerald-500/20 rounded-3xl p-6 md:p-8 hover:border-emerald-500/40 transition-all duration-500 flex flex-col justify-between group relative overflow-hidden shadow-xl backdrop-blur-sm">
											<div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 mb-4 group-hover:scale-110 transition-transform duration-500">
												<svg className="w-5 h-5 md:w-6 md:h-6 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
												</svg>
											</div>
											<div className="relative z-10">
												<h3 className="text-xl md:text-2xl font-bold text-white mb-2">Backend Systems</h3>
												<p className="text-sm md:text-base text-zinc-300/80">Scalable Node.js architectures and robust databases.</p>
											</div>
										</div>

										{/* Item 3: Small (1 column) */}
										<div className="md:col-span-1 bg-gradient-to-br from-zinc-900/80 to-emerald-900/40 border border-emerald-500/20 rounded-3xl p-6 md:p-8 hover:border-emerald-500/40 transition-all duration-500 flex flex-col justify-between group relative overflow-hidden shadow-xl backdrop-blur-sm">
											<div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 mb-4 group-hover:scale-110 transition-transform duration-500">
												<svg className="w-5 h-5 md:w-6 md:h-6 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
												</svg>
											</div>
											<div className="relative z-10">
												<h3 className="text-xl md:text-2xl font-bold text-white mb-2">UI/UX Design</h3>
												<p className="text-sm md:text-base text-zinc-300/80">Designing intuitive experiences and design systems in Figma.</p>
											</div>
										</div>

										{/* Item 4: Wide (2 columns) */}
										<div className="md:col-span-2 bg-zinc-900/60 border border-emerald-500/10 rounded-3xl p-6 md:p-8 hover:border-emerald-500/30 transition-all duration-500 flex flex-col justify-between group overflow-hidden relative shadow-xl backdrop-blur-sm">
											{/* Subtle background glow */}
											<div className="absolute bottom-0 right-0 w-64 h-64 -mr-20 -mb-20 group-hover:bg-emerald-500/10 transition-colors duration-700" style={{ background: 'radial-gradient(circle closest-side, rgba(16, 185, 129, 0.05), transparent)' }}></div>

											<div className="flex flex-row justify-between h-full">
												<div className="flex flex-col justify-between h-full relative z-10 w-2/3">
													{/* Icon */}
													<div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 mb-4 group-hover:scale-110 transition-transform duration-500">
														<svg className="w-5 h-5 md:w-6 md:h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
															<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
														</svg>
													</div>
													<div>
														<h3 className="text-xl md:text-2xl font-bold text-white mb-2">Cloud & DevOps</h3>
														<p className="text-zinc-400 text-sm md:text-base leading-relaxed">Deploying and maintaining CI/CD pipelines on modern scalable cloud infrastructure.</p>
													</div>
												</div>
												{/* Decorative area */}
												<div className="w-1/3 flex items-center justify-end relative z-10">
													{/* <div className="w-full h-full bg-zinc-800/50 rounded-2xl border border-zinc-700/30 transform -rotate-3 group-hover:-rotate-6 group-hover:scale-105 transition-all duration-500 relative overflow-hidden flex flex-col justify-between p-3">
														<div className="w-full h-2 bg-zinc-700/50 rounded-full mb-2"></div>
														<div className="w-2/3 h-2 bg-zinc-700/50 rounded-full mb-4"></div>
														<div className="w-full h-12 bg-emerald-500/20 rounded-lg border border-emerald-500/30"></div>
													</div> */}
													<img src={Cloud.src} alt="Cloud Illustration" className="transition-transform duration-500 w-full h-auto" />
												</div>
											</div>
										</div>

									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Fourth Section - Education */}
				<section className="relative z-0 w-full max-w-[170vh] mt-4 md:mt-8">
					<div className="relative w-full aspect-[2.2/2.4] md:aspect-[2.2/1.0]">
						{/* Container with Shadow */}
						<div className="absolute inset-0 w-full h-full filter drop-shadow-2xl pointer-events-none">
							<div
								className="w-full h-full bg-zinc-900 relative overflow-hidden flex pointer-events-auto rounded-[2.5rem] md:rounded-[3.5rem] border border-zinc-800/50"
							>
								{/* Premium Deep Background Layer */}
								<div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black pointer-events-none"></div>

								{/* Subtle Dotted Grid */}
								<div
									className="absolute inset-0 opacity-[0.2] pointer-events-none"
									style={{
										backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)',
										backgroundSize: '40px 40px',
										maskImage: 'radial-gradient(ellipse at center, black 10%, transparent 80%)',
										WebkitMaskImage: 'radial-gradient(ellipse at center, black 10%, transparent 80%)'
									}}
								></div>

								{/* Abstract Ambient Glows */}
								<div className="absolute top-[-10%] left-[-10%] w-[50%] h-[60%] pointer-events-none mix-blend-screen" style={{ background: 'radial-gradient(circle closest-side, rgba(16, 185, 129, 0.1), transparent)' }}></div>
								<div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[60%] pointer-events-none mix-blend-screen" style={{ background: 'radial-gradient(circle closest-side, rgba(5, 150, 105, 0.1), transparent)' }}></div>

								{/* Center Faint Watermark */}
								<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] text-white font-black text-[6rem] md:text-[14rem] tracking-tighter leading-none select-none pointer-events-none whitespace-nowrap">
									ACADEMICS
								</div>

								<div className="flex flex-col w-full h-full pt-[8%] md:pt-[5%] pb-[12%] md:pb-[8%] px-8 md:px-24 z-10 justify-start gap-8 md:gap-8">
									{/* Left Aligned Heading & Subheading */}
									<div className="flex flex-col gap-3">
										<div className="flex w-full items-center justify-start gap-4">
											<div className="w-16 md:w-20 h-0.5 md:h-0.25 bg-emerald-500"></div>
											<h2 className="text-zinc-300 font-mono tracking-[0.2em] uppercase text-sm md:text-base">
												Education
											</h2>
										</div>
										<p className="text-zinc-400 text-sm md:text-base max-w-2xl leading-relaxed">
											My academic journey and foundational learning experiences that shaped my technical expertise.
										</p>
									</div>

									{/* Premium Education Timeline */}
									<div className="relative w-full max-w-6xl mx-auto mt-6 md:mt-12">
										{/* The Continuous Track (Desktop) */}
										<div className="hidden md:block absolute top-[23px] left-[16.6%] right-[16.6%] h-[2px] bg-zinc-800/80 rounded-full"></div>
										{/* The Progress Glow (Desktop) - Center Weighted */}
										<div className="hidden md:block absolute top-[23px] left-[16.6%] right-[16.6%] h-[2px] bg-gradient-to-r from-emerald-500/0 via-emerald-500 to-emerald-500/0 shadow-[0_0_15px_rgba(16,185,129,0.8)] rounded-full"></div>

										{/* The Continuous Track (Mobile) */}
										<div className="block md:hidden absolute left-[23px] top-[24px] bottom-0 w-[2px] bg-zinc-800/80 rounded-full"></div>
										{/* The Progress Glow (Mobile) - Center Weighted */}
										<div className="block md:hidden absolute left-[23px] top-[24px] bottom-0 w-[2px] bg-gradient-to-b from-emerald-500/0 via-emerald-500 to-emerald-500/0 shadow-[0_0_15px_rgba(16,185,129,0.8)] rounded-full"></div>

										<div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-6 relative z-10">

											{/* Step 1: Primary School */}
											<div className="flex flex-row md:flex-col items-start group relative">
												{/* Thick Ring Node */}
												<div className="w-12 h-12 rounded-full bg-zinc-950 border-[4px] border-zinc-800/80 flex items-center justify-center shrink-0 md:mb-8 relative z-10 mx-auto transition-all duration-500 group-hover:border-emerald-500/50 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]">
													<div className="w-3 h-3 rounded-full bg-zinc-700 transition-colors duration-500 group-hover:bg-emerald-400"></div>
												</div>

												{/* Content Area - Subtly Faded Card */}
												<div className="ml-8 md:ml-0 w-full relative flex flex-col items-start md:items-center text-left md:text-center p-6 md:p-8 rounded-3xl bg-gradient-to-b from-zinc-800/20 to-transparent border-t border-zinc-700/50 transition-all duration-500 hover:bg-zinc-800/40 hover:-translate-y-1">
													<div className="mb-4 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 shadow-sm">
														<span className="text-zinc-500 text-[10px] uppercase tracking-widest">2006 — 2016</span>
													</div>
													<h3 className="text-xl font-bold text-zinc-100 mb-1 tracking-tight transition-colors group-hover:text-white">Primary School</h3>
													<h4 className="text-zinc-500 text-sm font-medium mb-5">Delhi Public School</h4>

													<p className="text-zinc-400/80 text-sm leading-relaxed max-w-[280px]">
														Built a strong foundation in core subjects. Developed an early interest in science, mathematics, and logical reasoning.
													</p>
												</div>
											</div>

											{/* Step 2: Secondary School (Active / Glowing) */}
											<div className="flex flex-row md:flex-col items-start group relative">
												{/* Active Thick Ring Node */}
												<div className="w-12 h-12 rounded-full bg-zinc-950 border-[4px] border-emerald-500 flex items-center justify-center shrink-0 md:mb-8 relative z-10 mx-auto shadow-[0_0_20px_rgba(16,185,129,0.4)]">
													<div className="w-3 h-3 rounded-full bg-emerald-500 animate-[pulse_2s_infinite] shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
												</div>

												{/* Content Area - Illuminated Card */}
												<div className="ml-8 md:ml-0 w-full relative flex flex-col items-start md:items-center text-left md:text-center p-6 md:p-8 rounded-3xl bg-gradient-to-b from-emerald-500/10 to-transparent border-t border-emerald-500/40 transition-all duration-500 hover:bg-emerald-500/15 hover:-translate-y-1">
													<div className="hidden md:block absolute -top-8 left-1/2 w-[1px] h-8 bg-gradient-to-b from-emerald-500/40 to-transparent -translate-x-1/2"></div>
													<div className="mb-4 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
														<span className="text-emerald-400 text-[10px] uppercase tracking-widest">2016 — 2020</span>
													</div>
													<h3 className="text-xl font-bold text-white mb-1 tracking-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">Secondary School</h3>
													<h4 className="text-emerald-400 text-sm font-medium mb-5">Delhi Public School</h4>

													<p className="text-zinc-300 text-sm leading-relaxed max-w-[280px]">
														Focused on Physics, Chemistry, and Mathematics. Discovered programming and led the computer science club.
													</p>
												</div>
											</div>

											{/* Step 3: College */}
											<div className="flex flex-row md:flex-col items-start group relative">
												{/* Thick Ring Node */}
												<div className="w-12 h-12 rounded-full bg-zinc-950 border-[4px] border-zinc-800/80 flex items-center justify-center shrink-0 md:mb-8 relative z-10 mx-auto transition-all duration-500 group-hover:border-emerald-500/50 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]">
													<div className="w-3 h-3 rounded-full bg-zinc-700 transition-colors duration-500 group-hover:bg-emerald-400"></div>
												</div>

												{/* Content Area - Subtly Faded Card */}
												<div className="ml-8 md:ml-0 w-full relative flex flex-col items-start md:items-center text-left md:text-center p-6 md:p-8 rounded-3xl bg-gradient-to-b from-zinc-800/20 to-transparent border-t border-zinc-700/50 transition-all duration-500 hover:bg-zinc-800/40 hover:-translate-y-1">
													<div className="mb-4 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 shadow-sm">
														<span className="text-zinc-500 text-[10px] uppercase tracking-widest">2020 — 2024</span>
													</div>
													<h3 className="text-xl font-bold text-zinc-100 mb-1 tracking-tight transition-colors group-hover:text-white">B.Tech in CS</h3>
													<h4 className="text-zinc-500 text-sm font-medium mb-5">Indian Institute of Tech</h4>

													<p className="text-zinc-400/80 text-sm leading-relaxed max-w-[280px]">
														Specialized in core Computer Science. Built scalable systems, participated in hackathons, and published research.
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Fifth Section - Expertise */}
				<section className="relative z-0 w-full max-w-[170vh] mt-4 md:mt-8 mb-10 md:mb-2">
					<div className="relative w-full aspect-auto">
						{/* Container with Shadow */}
						<div className="relative w-full filter drop-shadow-2xl pointer-events-none">
							<div
								className="w-full bg-zinc-900 relative overflow-hidden flex flex-col pointer-events-auto shadow-[0_0_50px_rgba(16,185,129,0.05)]"
								style={{ clipPath: 'url(#skills-shape)' }}
							>
								{/* Premium Deep Background Layer */}
								<div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-emerald-950/40 pointer-events-none"></div>

								{/* Ambient Glowing Orbs */}
								<div className="absolute -top-40 -right-40 w-96 h-96 pointer-events-none" style={{ background: 'radial-gradient(circle closest-side, rgba(16, 185, 129, 0.2), transparent)' }}></div>
								<div className="absolute -bottom-40 -left-40 w-96 h-96 pointer-events-none" style={{ background: 'radial-gradient(circle closest-side, rgba(16, 185, 129, 0.1), transparent)' }}></div>

								{/* Tech Grid Pattern */}
								<div
									className="absolute inset-0 opacity-[0.15] pointer-events-none"
									style={{
										backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.4) 1px, transparent 1px)',
										backgroundSize: '40px 40px',
										backgroundPosition: 'center center',
										maskImage: 'radial-gradient(circle at center, black 10%, transparent 80%)',
										WebkitMaskImage: 'radial-gradient(circle at center, black 10%, transparent 80%)'
									}}
								></div>

								{/* Massive Faded Watermark */}
								<div className="absolute -top-10 left-0 opacity-[0.03] text-white font-black text-[6rem] md:text-[14rem] tracking-tighter leading-none select-none pointer-events-none">
									SKILLSET
								</div>

								<div className="flex flex-col w-full pt-12 md:pt-16 pb-16 md:pb-20 px-8 md:px-12 lg:px-24 z-10 justify-start gap-8 md:gap-12">
									{/* Right Aligned Heading & Subheading */}
									<div className="flex flex-col gap-3 items-end w-full">
										<div className="flex w-full items-center justify-end gap-4">
											<h2 className="text-zinc-300 font-mono tracking-[0.2em] uppercase text-sm md:text-base text-right">
												My Expertise
											</h2>
											<div className="w-16 md:w-20 h-0.5 md:h-0.25 bg-emerald-500"></div>
										</div>
										<p className="text-zinc-400 text-sm md:text-base max-w-2xl leading-relaxed text-right">
											A comprehensive overview of my technical arsenal, organized by domain and proficiency.
										</p>
									</div>

									{/* Expertise Pillars Grid */}
									<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-4 w-full flex-1">

										{/* Pillar 1: Frontend */}
										<div className="group relative h-full bg-gradient-to-br from-zinc-900/80 to-zinc-900/30 backdrop-blur-md border border-zinc-700/50 hover:border-emerald-500/60 hover:bg-zinc-800/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-700 overflow-hidden flex flex-col p-6 md:p-8"
											style={{ clipPath: 'polygon(30px 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0 30px)' }}>
											{/* Hover Glow */}
											<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-emerald-500/0 via-emerald-500/5 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
											{/* Corner Accent */}
											<div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-emerald-500/0 group-hover:border-emerald-500/50 transition-colors duration-500"></div>
											<div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-emerald-500/0 group-hover:border-emerald-500/50 transition-colors duration-500"></div>

											{/* Header */}
											<div className="flex items-center gap-4 mb-8 relative z-10">
												<div className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center group-hover:bg-emerald-950 group-hover:border-emerald-500/50 transition-colors duration-500 shadow-lg">
													<svg className="w-5 h-5 text-zinc-400 group-hover:text-emerald-400 transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
													</svg>
												</div>
												<h3 className="text-lg font-bold text-white tracking-tight group-hover:text-emerald-50 transition-colors">Frontend</h3>
											</div>

											{/* Skills List */}
											<div className="flex flex-col gap-3 relative z-10">
												<TechChip name="React" iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" level={5} />
												<TechChip name="Next.js" iconUrl="https://cdn.simpleicons.org/nextdotjs/white" level={5} />
												<TechChip name="TypeScript" iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" level={4} />
												<TechChip name="Tailwind CSS" iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" level={5} />
												<TechChip name="Framer Motion" iconUrl="https://cdn.simpleicons.org/framer/white" level={4} />
												<TechChip name="Figma" iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" level={4} />
											</div>
										</div>

										{/* Pillar 2: Backend */}
										<div className="group relative h-full bg-gradient-to-br from-zinc-900/80 to-zinc-900/30 backdrop-blur-md border border-zinc-700/50 hover:border-emerald-500/60 hover:bg-zinc-800/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-700 overflow-hidden flex flex-col p-6 md:p-8"
											style={{ clipPath: 'polygon(30px 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0 30px)' }}>
											<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-emerald-500/0 via-emerald-500/5 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
											<div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-emerald-500/0 group-hover:border-emerald-500/50 transition-colors duration-500"></div>
											<div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-emerald-500/0 group-hover:border-emerald-500/50 transition-colors duration-500"></div>

											<div className="flex items-center gap-4 mb-8 relative z-10">
												<div className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center group-hover:bg-emerald-950 group-hover:border-emerald-500/50 transition-colors duration-500 shadow-lg">
													<svg className="w-5 h-5 text-zinc-400 group-hover:text-emerald-400 transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
													</svg>
												</div>
												<h3 className="text-lg font-bold text-white tracking-tight group-hover:text-emerald-50 transition-colors">Backend</h3>
											</div>

											<div className="flex flex-col gap-3 relative z-10">
												<TechChip name="Node.js" iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" level={5} />
												<TechChip name="Python" iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" level={4} />
												<TechChip name="Django" iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" invertIcon={true} level={3} />
												<TechChip name="FastAPI" iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" level={4} />
												<TechChip name="Express.js" iconUrl="https://cdn.simpleicons.org/express/white" level={4} />
												<TechChip name="Redis" iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" level={3} />
											</div>
										</div>

										{/* Pillar 3: Architecture */}
										<div className="group relative h-full bg-gradient-to-br from-zinc-900/80 to-zinc-900/30 backdrop-blur-md border border-zinc-700/50 hover:border-emerald-500/60 hover:bg-zinc-800/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-700 overflow-hidden flex flex-col p-6 md:p-8"
											style={{ clipPath: 'polygon(30px 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0 30px)' }}>
											<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-emerald-500/0 via-emerald-500/5 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
											<div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-emerald-500/0 group-hover:border-emerald-500/50 transition-colors duration-500"></div>
											<div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-emerald-500/0 group-hover:border-emerald-500/50 transition-colors duration-500"></div>

											<div className="flex items-center gap-4 mb-8 relative z-10">
												<div className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center group-hover:bg-emerald-950 group-hover:border-emerald-500/50 transition-colors duration-500 shadow-lg">
													<svg className="w-5 h-5 text-zinc-400 group-hover:text-emerald-400 transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
													</svg>
												</div>
												<h3 className="text-lg font-bold text-white tracking-tight group-hover:text-emerald-50 transition-colors">Data & Cloud</h3>
											</div>

											<div className="flex flex-col gap-3 relative z-10">
												<TechChip name="PostgreSQL" iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" level={4} />
												<TechChip name="MySQL" iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" level={4} />
												<TechChip name="MongoDB" iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" level={3} />
												<TechChip name="Firebase" iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg" level={4} />
												<TechChip name="AWS" iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" invertIcon={true} level={4} />
												<TechChip name="Google Cloud" iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" level={3} />
											</div>
										</div>

										{/* Pillar 4: Design & Tools */}
										<div className="group relative h-full bg-gradient-to-br from-zinc-900/80 to-zinc-900/30 backdrop-blur-md border border-zinc-700/50 hover:border-emerald-500/60 hover:bg-zinc-800/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-700 overflow-hidden flex flex-col p-6 md:p-8"
											style={{ clipPath: 'polygon(30px 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0 30px)' }}>
											<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-emerald-500/0 via-emerald-500/5 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
											<div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-emerald-500/0 group-hover:border-emerald-500/50 transition-colors duration-500"></div>
											<div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-emerald-500/0 group-hover:border-emerald-500/50 transition-colors duration-500"></div>

											<div className="flex items-center gap-4 mb-8 relative z-10">
												<div className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center group-hover:bg-emerald-950 group-hover:border-emerald-500/50 transition-colors duration-500 shadow-lg">
													<svg className="w-5 h-5 text-zinc-400 group-hover:text-emerald-400 transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
													</svg>
												</div>
												<h3 className="text-lg font-bold text-white tracking-tight group-hover:text-emerald-50 transition-colors">DevOps & Tools</h3>
											</div>

											<div className="flex flex-col gap-3 relative z-10">
												<TechChip name="Docker" iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" level={4} />
												<TechChip name="Kubernetes" iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg" level={3} />
												<TechChip name="GitHub Actions" iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" invertIcon={true} level={4} />
												<TechChip name="Linux" iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" level={4} />
												<TechChip name="Git" iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" level={5} />
												{/* <TechChip name="Vite" iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" level={4} />
												<TechChip name="Jest" iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg" level={3} /> */}
												<TechChip name="VS Code" iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" level={5} />
											</div>
										</div>

									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Sixth Section - Projects */}
				<section className="relative z-0 w-full max-w-[170vh] -mt-10">
					<div className="relative w-full aspect-auto">
						<div className="relative w-full filter drop-shadow-2xl pointer-events-none">
							<div
								className="w-full bg-zinc-900 relative overflow-hidden flex flex-col pointer-events-auto shadow-[0_0_50px_rgba(16,185,129,0.05)]"
								style={{ clipPath: 'url(#projects-shape)' }}
							>
								{/* Premium Deep Background Layer */}
								<div className="absolute inset-0 bg-gradient-to-br from-zinc-800/50 via-zinc-900 to-emerald-900/40 pointer-events-none"></div>

								{/* Watermark */}
								<h1 className="absolute top-10 right-0 lg:-right-10 text-[6rem] md:text-[10rem] xl:text-[14rem] font-black text-zinc-700/30 select-none pointer-events-none z-0 tracking-tighter leading-none">
									WORK
								</h1>

								{/* Ambient Glowing Orbs */}
								<div className="absolute -top-40 -left-40 w-[500px] h-[500px] pointer-events-none" style={{ background: 'radial-gradient(circle closest-side, rgba(16, 185, 129, 0.15), transparent)' }}></div>
								<div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] pointer-events-none" style={{ background: 'radial-gradient(circle closest-side, rgba(16, 185, 129, 0.1), transparent)' }}></div>
								<div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] pointer-events-none" style={{ background: 'radial-gradient(circle closest-side, rgba(16, 185, 129, 0.25), transparent)' }}></div>

								{/* Content */}
								<div className="flex flex-col w-full pt-16 md:pt-24 pb-16 md:pb-20 px-8 md:px-12 lg:px-24 z-10 justify-start gap-8 md:gap-12">
									{/* Left Aligned Heading */}
									<div className="flex flex-col gap-3 items-start w-full relative z-10">
										<div className="flex w-full items-center justify-start gap-4">
											<div className="w-16 md:w-20 h-0.5 md:h-0.25 bg-emerald-500"></div>
											<h2 className="text-zinc-300 font-mono tracking-[0.2em] uppercase text-sm md:text-base text-left">
												Featured Projects
											</h2>
										</div>
										<p className="text-zinc-400 text-sm md:text-base max-w-2xl leading-relaxed text-left">
											A selection of my recent work, highlighting end-to-end architecture and stunning UI design.
										</p>
									</div>

									{/* Projects Accordion */}
									<ProjectAccordion />

									{/* View All Projects Button */}
									<div className="mt-12 md:mt-4 w-full flex justify-start md:justify-center relative z-20">
										<Link href="/projects" className="group relative flex items-center cursor-pointer p-1 rounded-full">
											<div className="absolute left-0 top-0 bottom-0 w-12 md:w-14 bg-white rounded-full transition-[width] duration-500 ease-[cubic-bezier(0.5,0,0,1)] group-hover:w-full shadow-[0_0_20px_rgba(255,255,255,0.1)]"></div>

											<div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shrink-0 z-10">
												<svg className="w-5 h-5 text-zinc-950 ml-0.5 md:ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
													<path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
												</svg>
											</div>
											<span className="relative z-10 text-white font-black tracking-[0.2em] uppercase text-sm md:text-base transition-colors duration-500 group-hover:text-zinc-950 pl-3 md:pl-4 pr-6 md:pr-8">
												View All Projects
											</span>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Seventh Section - Testimonials */}
				<section className="relative z-0 w-full max-w-[170vh] -mt-10">
					<div className="relative w-full aspect-auto">
						<div className="relative w-full filter drop-shadow-2xl pointer-events-none">
							<div
								className="w-full bg-zinc-800 relative overflow-hidden flex flex-col pointer-events-auto shadow-[0_0_50px_rgba(16,185,129,0.05)]"
								style={{ clipPath: 'url(#testimonials-shape)' }}
							>
								{/* Premium Deep Background Layer */}
								<div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-zinc-800 to-zinc-700/60 pointer-events-none"></div>

								{/* Watermark */}
								<h1 className="absolute -bottom-10 left-0 lg:-left-10 text-[6rem] md:text-[10rem] xl:text-[14rem] font-black text-zinc-700/30 select-none pointer-events-none z-0 tracking-tighter leading-none">
									CLIENTS
								</h1>

								{/* Ambient Glowing Orbs */}
								<div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none" style={{ background: 'radial-gradient(circle closest-side, rgba(16, 185, 129, 0.15), transparent)' }}></div>

								{/* Content */}
								<div className="flex flex-col w-full pt-20 md:pt-24 pb-16 md:pb-20 px-8 md:px-12 lg:px-24 z-10 justify-start gap-8 md:gap-12">
									<TestimonialsCarousel />
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</main>
	);
}

const TechChip = ({ name, iconUrl, invertIcon, level = 3 }: { name: string, iconUrl: string, invertIcon?: boolean, level?: number }) => {
	return (
		<div className="flex items-center gap-4 p-3 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/50 hover:bg-zinc-800/80 transition-all duration-300 group/chip cursor-default shadow-sm hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] overflow-hidden relative">
			<div className="w-8 h-8 rounded-lg bg-zinc-950 flex items-center justify-center border border-zinc-800 group-hover/chip:border-emerald-500/50 transition-colors duration-300 shadow-inner shrink-0 z-10">
				<img src={iconUrl} alt={name} className={`w-5 h-5 object-contain group-hover/chip:scale-110 group-hover/chip:rotate-3 transition-transform duration-300 filter drop-shadow-md ${invertIcon ? 'invert brightness-0' : ''}`} />
			</div>
			<div className="flex justify-between items-center w-full z-10 pr-2">
				<span className="text-sm font-medium text-zinc-400 group-hover/chip:text-emerald-100 transition-colors duration-300">{name}</span>
				<span className="text-[10px] text-zinc-600 group-hover/chip:text-emerald-500/80 transition-colors duration-300">{level * 20}%</span>
			</div>

			{/* Progress Bar Stuck to Bottom Edge */}
			<div className="absolute bottom-0 left-0 w-full h-[3px] bg-zinc-800/30">
				<div
					className="h-full bg-emerald-500/50 group-hover/chip:bg-emerald-400 transition-all duration-1000 ease-out group-hover/chip:shadow-[0_0_10px_rgba(16,185,129,0.8)]"
					style={{ width: `${level * 20}%` }}
				></div>
			</div>
		</div>
	);
}

const ProjectAccordion = () => {
	const projects = [
		{
			title: "The Uniques",
			num: "01",
			description: "A real estate portal built with Next.js and Framer Motion, featuring dynamic data visualization and a seamless user experience.",
			techs: ["Next.js", "Tailwind", "Framer Motion", "Supabase", "TypeScript"],
			iframeUrl: "https://theuniques.in",
			imageUrl: "/projects/theuniques.png"
		},
		{
			title: "Chintan News",
			num: "02",
			description: "A real-time news platform built with Next.js and Supabase, featuring dynamic data visualization and a seamless user experience.",
			techs: ["Next.js", "Tailwind", "Framer Motion", "Supabase", "TypeScript"],
			iframeUrl: "https://chintannews.in",
			imageUrl: "/projects/chintannews.png"
		},
		{
			title: "Career Guide Global",
			num: "03",
			description: "A educational website built with Next.js and Supabase, featuring dynamic data visualization and a seamless user experience.",
			techs: ["Next.js", "Tailwind", "Framer Motion", "Supabase", "TypeScript"],
			iframeUrl: "https://career-guide-nine-sable.vercel.app",
			imageUrl: "/projects/careerguide.png"
		},
	];

	return (
		<div className="flex flex-col lg:flex-row w-full lg:h-[450px] gap-4 md:gap-6 mt-8">
			{projects.map((proj, idx) => (
				<div key={idx} className="relative flex-none lg:flex-1 h-[450px] rounded-[2rem] border border-transparent">
					{/* Drop Shadow Wrapper because clipPath removes CSS shadows */}
					<div className="absolute inset-0 filter drop-shadow-[0_10px_20px_rgba(16,185,129,0.1)]">
						<div className="w-full h-full bg-zinc-950 relative overflow-hidden" style={{ clipPath: 'url(#card-shape)' }}>

							{/* Static High-Res Screenshot Background for 0 Lag */}
							<div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40 bg-zinc-900">
								<img src={proj.imageUrl} alt={proj.title} className="absolute inset-0 w-full h-full object-cover object-top" />
								<div className="absolute inset-0 opacity-[0.2]" style={{ backgroundImage: 'radial-gradient(circle, #10b981 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
							</div>

							{/* Dark Overlay Gradient to make text readable */}
							<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent opacity-90 pointer-events-none"></div>

							{/* Active State Content (Permanently Visible) */}
							<div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end pointer-events-none pb-[90px] md:pb-[100px]">
								<div className="flex items-center justify-between mb-4">
									<span className="text-emerald-500 text-lg">{proj.num}</span>
									<div className="h-[1px] w-24 md:w-48 bg-emerald-500/30"></div>
								</div>
								<h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight drop-shadow-lg whitespace-nowrap truncate w-full">{proj.title}</h3>
							</div>
						</div>
					</div>

					{/* The Explore Button sitting perfectly inside the SVG Cutout! */}
					<div className="absolute bottom-2 right-2 lg:bottom-4 lg:right-1 z-50">
						<a href={proj.iframeUrl} target="_blank" rel="noreferrer" className="group relative overflow-hidden pointer-events-auto px-5 py-2.5 md:px-6 md:py-3 bg-white text-zinc-950 text-xs md:text-sm font-bold rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-colors duration-300">
							<div className="absolute inset-y-0 left-0 bg-emerald-400 w-0 group-hover:w-full transition-all duration-500 ease-out z-0"></div>
							<span className="relative z-10 flex items-center gap-2">
								Explore Project
								<FluidArrowRight size={16} className="text-zinc-950" />
							</span>
						</a>
					</div>
				</div>
			))}
		</div>
	);
}