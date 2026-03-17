import aboutimg from '../src/assets/aboutimg2.jpg';

function AboutUs() {
	return (
		<>
			<style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:ital,wght@0,300;0,400;0,600;0,700;1,300&display=swap');
        .font-bebas  { font-family: 'Bebas Neue', sans-serif; }
        .font-barlow { font-family: 'Barlow', sans-serif; }
        .slash-skew { transform: skewX(-8deg); }
        @keyframes fadeSlideUp {
          from { opacity:0; transform:translateY(30px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes expandX {
          from { transform:scaleX(0); opacity:0; }
          to   { transform:scaleX(1); opacity:1; }
        }
        .about-anim-1 { animation: fadeSlideUp 0.7s ease both; }
        .about-anim-2 { animation: fadeSlideUp 0.7s ease both 0.15s; }
        .about-anim-3 { animation: expandX   0.6s ease both 0.25s; transform-origin: left; }
        .about-anim-4 { animation: fadeSlideUp 0.7s ease both 0.35s; }
        .about-anim-5 { animation: fadeSlideUp 0.7s ease both 0.5s; }
        .about-anim-6 { animation: fadeSlideUp 0.7s ease both 0.65s; }
      `}</style>

			<section
				id="about"
				className="relative w-full bg-black overflow-hidden font-barlow"
			>
				<div className="flex flex-col lg:flex-row min-h-screen">
					<div className="relative w-full lg:w-1/2 h-[55vw] lg:h-auto overflow-hidden">
						<img
							src={aboutimg}
							alt="Dreaux Digital"
							className="absolute inset-0 w-full h-full object-cover grayscale opacity-70"
						/>
						{/* Dark gradient overlay on right edge for bleed into text col */}
						<div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black" />
						{/* Bottom gradient on mobile */}
						<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black lg:hidden" />

						<div className="absolute bottom-8 left-6 lg:left-10 flex items-center gap-3">
							<div className="w-px h-10 bg-[#FFD600] opacity-60" />
							<span className="font-barlow font-light text-[10px] tracking-[0.3em] uppercase text-white/40">
								Est. 2024
							</span>
						</div>
					</div>

					<div className="relative w-full lg:w-1/2 flex items-center px-6 py-16 md:px-12 lg:px-16 xl:px-20 bg-black">
						{/* Diagonal slash accent */}
						<div className="slash-skew absolute top-0 bottom-0 left-0 hidden lg:block">
							<div className="w-[2px] h-full bg-[#FFD600] opacity-30" />
						</div>

						<div className="max-w-lg w-full">
							{/* Section label */}
							<div className="about-anim-1 flex items-center gap-3 mb-8">
								<span className="w-2 h-2 rounded-full bg-[#FFD600] shrink-0" />
								<span className="font-barlow font-light text-[11px] tracking-[0.3em] uppercase text-white/50">
									Who We Are
								</span>
							</div>

							{/* Heading */}
							<div className="about-anim-2 overflow-hidden mb-1">
								<h2
									className="font-bebas text-white leading-none tracking-wide"
									style={{ fontSize: 'clamp(52px, 7vw, 96px)' }}
								>
									ABOUT
								</h2>
							</div>
							<div className="about-anim-2 overflow-hidden">
								<h2
									className="font-bebas text-[#FFD600] leading-none tracking-wide"
									style={{ fontSize: 'clamp(52px, 7vw, 96px)' }}
								>
									DREAUX DIGITAL
								</h2>
							</div>

							{/* Divider */}
							<div className="about-anim-3 w-12 h-[2px] bg-[#FFD600] my-7" />

							{/* Pull quote */}
							<p className="about-anim-4 font-barlow font-semibold text-white/90 text-xl mb-6 tracking-wide">
								Stress less. Go with Dreaux.
							</p>

							{/* Body */}
							<div
								className="about-anim-5 font-barlow font-light text-white/50 leading-relaxed space-y-4"
								style={{ fontSize: 'clamp(14px, 1.2vw, 16px)' }}
							>
								<p>
									Dreaux Digital is a dedicated web development studio
									specializing in crafting modern, responsive, and highly
									functional front-end solutions. Leveraging expertise in web
									development and ongoing digital presence management, we ensure
									your online assets are optimized and up-to-date —
									<span className="text-white/80 font-normal">
										{' '}
										allowing you to focus on your core business.
									</span>
								</p>
								<p>
									We partner with businesses and individuals to bring their
									digital visions to life. Clear communication, meticulous
									attention to detail, and a commitment to project success are
									principles we never compromise on.
								</p>
							</div>

							<div className="about-anim-6 mt-10">
								<a
									href="#services"
									className="font-barlow font-bold text-[12px] tracking-[0.2em] uppercase text-[#FFD600] border border-[#FFD600]/40 px-8 py-3 inline-block transition-all duration-200 hover:bg-[#FFD600] hover:text-black hover:border-[#FFD600]"
								>
									See Services
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom border accent */}
				<div className="w-full h-px bg-gradient-to-r from-transparent via-[#FFD600]/30 to-transparent" />
			</section>
		</>
	);
}

export default AboutUs;
