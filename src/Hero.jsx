import heroBg from './assets/hero-bg.jpg';

function Hero() {
	return (
		<>
			<style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:ital,wght@0,300;0,400;0,700;1,300&display=swap');
        .font-bebas  { font-family: 'Bebas Neue', sans-serif; }
        .font-barlow { font-family: 'Barlow', sans-serif; }
        .title-outline { -webkit-text-stroke: 2px rgba(255,255,255,0.15); color: transparent; }
        .clip-cta { clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px)); }
        .slash-skew { transform: skewX(-8deg); }
        @keyframes fadeSlideUp {
          from { opacity:0; transform:translateY(40px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity:0; } to { opacity:1; }
        }
        @keyframes expandX {
          from { transform:scaleX(0); opacity:0; }
          to   { transform:scaleX(1); opacity:1; }
        }
        @keyframes scrollBob {
          0%,100% { opacity:0.4; }
          50%      { opacity:1; transform:translateY(4px); }
        }
        @keyframes dotPulse {
          0%,100% { box-shadow:0 0 0 0 rgba(255,214,0,0.6); }
          50%      { box-shadow:0 0 0 6px rgba(255,214,0,0); }
        }
        .anim-label   { animation: fadeSlideUp 0.6s ease both 0.2s; }
        .anim-dreaux  { animation: fadeSlideUp 0.8s cubic-bezier(0.16,1,0.3,1) both 0.4s; }
        .anim-digital { animation: fadeSlideUp 0.8s cubic-bezier(0.16,1,0.3,1) both 0.55s; }
        .anim-divider { transform-origin:left; animation: expandX 0.6s ease both 0.85s; }
        .anim-tagline { animation: fadeSlideUp 0.6s ease both 1.0s; }
        .anim-cta     { animation: fadeSlideUp 0.6s ease both 1.15s; }
        .anim-scroll  { animation: fadeIn 0.8s ease both 1.5s; }
        .dot-pulse    { animation: dotPulse 2s ease-in-out infinite; }
        .scroll-bob   { animation: scrollBob 2s ease-in-out infinite; }
      `}</style>

			<div className="relative w-full h-screen bg-black overflow-hidden flex items-center">
				{/* Background photo */}
				<div
					className="absolute inset-0 bg-cover bg-center grayscale opacity-20"
					style={{ backgroundImage: `url(${heroBg})` }}
				/>

				{/* Grid lines */}
				<div className="absolute inset-0 pointer-events-none">
					{[20, 40, 60, 80].map((p) => (
						<div
							key={p}
							className="absolute top-0 bottom-0 w-px bg-white opacity-[0.03]"
							style={{ left: `${p}%` }}
						/>
					))}
				</div>

				{/* Diagonal yellow slash */}
				<div
					className="slash-skew absolute top-0 bottom-0 hidden md:block"
					style={{ right: '14%' }}
				>
					<div className="w-[3px] h-full bg-[#FFD600] opacity-50" />
				</div>
				<div
					className="slash-skew absolute top-0 bottom-0 hidden md:block"
					style={{ right: 'calc(14% + 14px)' }}
				>
					<div className="w-px h-full bg-[#FFD600] opacity-20" />
				</div>

				{/* Content */}
				<div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
					{/* Label */}
					<div className="anim-label flex items-center gap-3 mb-6">
						<span className="dot-pulse w-2 h-2 rounded-full bg-[#FFD600] shrink-0" />
						<span className="font-barlow font-light text-[11px] tracking-[0.3em] uppercase text-white/40">
							Web Development &amp; Digital Agency
						</span>
					</div>

					{/* DREAUX */}
					<div className="overflow-hidden leading-none mb-1">
						<h1
							className="anim-dreaux font-bebas text-[#FFD600] leading-none tracking-wide"
							style={{ fontSize: 'clamp(80px, 15vw, 200px)' }}
						>
							DREAUX
						</h1>
					</div>

					{/* DIGITAL */}
					<div className="overflow-hidden leading-none">
						<h2
							className="anim-digital font-bebas title-outline leading-none tracking-wide"
							style={{ fontSize: 'clamp(80px, 15vw, 200px)' }}
						>
							DIGITAL
						</h2>
					</div>

					{/* Divider */}
					<div className="anim-divider w-16 h-[2px] bg-[#FFD600] my-7 md:my-9" />

					{/* Tagline */}
					<p
						className="anim-tagline font-barlow font-light text-white/50 max-w-sm leading-relaxed"
						style={{ fontSize: 'clamp(14px, 1.4vw, 19px)' }}
					>
						Web development and management, so you can focus on growing your
						business.
					</p>

					{/* CTA */}
					<div className="anim-cta flex items-center gap-8 mt-10">
						<a
							href="#services"
							className="clip-cta font-barlow font-bold text-[12px] tracking-[0.2em] uppercase bg-[#FFD600] text-black px-9 py-4 transition-all duration-200 hover:bg-white hover:shadow-[0_0_40px_rgba(255,214,0,0.35)] hover:-translate-y-0.5"
						>
							View Services
						</a>
						<a
							href="#about"
							className="font-barlow font-light text-[12px] tracking-[0.18em] uppercase text-white/35 border-b border-white/15 pb-0.5 transition-all duration-200 hover:text-white/75 hover:border-white/40"
						>
							Our Work
						</a>
					</div>
				</div>

				{/* Scroll indicator */}
				<a
					href="#about"
					className="anim-scroll absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
				>
					<div className="scroll-bob w-px h-12 bg-gradient-to-b from-transparent to-white/30" />
					<span className="font-barlow font-light text-[9px] tracking-[0.4em] uppercase text-white/25">
						Scroll
					</span>
				</a>
			</div>
		</>
	);
}

export default Hero;
