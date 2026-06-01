import { FluidArrowRight } from "@/components/FluidArrow";

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
								<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
								<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

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
											<div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px] -mr-20 -mt-20 group-hover:bg-emerald-500/10 transition-colors duration-700"></div>

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
													<div className="w-full h-full bg-zinc-800/50 rounded-2xl border border-zinc-700/30 transform rotate-3 group-hover:rotate-6 group-hover:scale-105 transition-all duration-500 relative overflow-hidden">
														<div className="absolute top-2 left-2 flex gap-1.5">
															<div className="w-2 h-2 rounded-full bg-zinc-600"></div>
															<div className="w-2 h-2 rounded-full bg-zinc-600"></div>
															<div className="w-2 h-2 rounded-full bg-zinc-600"></div>
														</div>
														<div className="absolute inset-x-2 top-6 bottom-2 bg-zinc-900 rounded-lg"></div>
													</div>
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
											<div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px] -mr-20 -mb-20 group-hover:bg-emerald-500/10 transition-colors duration-700"></div>

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
													<div className="w-full h-full bg-zinc-800/50 rounded-2xl border border-zinc-700/30 transform -rotate-3 group-hover:-rotate-6 group-hover:scale-105 transition-all duration-500 relative overflow-hidden flex flex-col justify-between p-3">
														<div className="w-full h-2 bg-zinc-700/50 rounded-full mb-2"></div>
														<div className="w-2/3 h-2 bg-zinc-700/50 rounded-full mb-4"></div>
														<div className="w-full h-12 bg-emerald-500/20 rounded-lg border border-emerald-500/30"></div>
													</div>
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
								<div className="absolute top-[-10%] left-[-10%] w-[50%] h-[60%] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
								<div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[60%] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>

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
			</div>
		</main>
	);
}