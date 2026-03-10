import { useEffect, useRef } from 'react';

const steps = [
	{
		num: '01',
		title: 'Discovery & Strategy',
		desc: 'Understanding your goals, audience, and challenges to create a tailored plan before a single line of code is written.',
	},
	{
		num: '02',
		title: 'Design & Development',
		desc: 'Crafting clean, functional designs and building them with modern technologies that actually perform.',
	},
	{
		num: '03',
		title: 'Testing & Launch',
		desc: 'Rigorous testing to ensure performance and accessibility before going live — no surprises on launch day.',
	},
	{
		num: '04',
		title: 'Support & Iteration',
		desc: 'Ongoing maintenance and updates to keep your digital products running at their best as you grow.',
	},
];

function Process() {
	const rowRefs = useRef([]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.style.opacity = '1';
						entry.target.style.transform = 'translateY(0)';
					}
				});
			},
			{ threshold: 0.15 },
		);
		rowRefs.current.forEach((el) => el && observer.observe(el));
		return () => rowRefs.current.forEach((el) => el && observer.unobserve(el));
	}, []);

	return (
		<>
			<style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:ital,wght@0,300;0,400;0,600;0,700;1,300&display=swap');
        .font-bebas  { font-family: 'Bebas Neue', sans-serif; }
        .font-barlow { font-family: 'Barlow', sans-serif; }
        @keyframes expandX { from{transform:scaleX(0);opacity:0} to{transform:scaleX(1);opacity:1} }
        .divider-anim { transform-origin:left; animation: expandX 0.6s ease both 0.2s; }
        .step-connector { background: linear-gradient(to bottom, rgba(255,214,0,0.4), rgba(255,214,0,0.05)); }
      `}</style>

			<section className="relative bg-black overflow-hidden py-24 px-6 font-barlow">
				{/* Grid lines */}
				<div className="absolute inset-0 pointer-events-none">
					{[25, 50, 75].map((p) => (
						<div
							key={p}
							className="absolute top-0 bottom-0 w-px bg-white opacity-[0.03]"
							style={{ left: `${p}%` }}
						/>
					))}
				</div>

				<div className="relative z-10 max-w-[1400px] mx-auto">
					{/* Header */}
					<div className="mb-16">
						<div className="flex items-center gap-3 mb-6">
							<span className="w-2 h-2 rounded-full bg-[#FFD600] shrink-0" />
							<span className="font-barlow font-light text-[11px] tracking-[0.3em] uppercase text-white/40">
								How It Works
							</span>
						</div>
						<div className="overflow-hidden">
							<h2
								className="font-bebas text-white leading-none tracking-wide"
								style={{ fontSize: 'clamp(52px, 8vw, 110px)' }}
							>
								THE PROCESS
							</h2>
						</div>
						<div className="divider-anim w-12 h-[2px] bg-[#FFD600] mt-5" />
					</div>

					{/* Steps — two-column on desktop */}
					<div className="grid md:grid-cols-2 gap-px bg-white/5">
						{steps.map((step, i) => (
							<div
								key={step.num}
								ref={(el) => (rowRefs.current[i] = el)}
								className="bg-black p-8 md:p-10 flex gap-6 group hover:bg-white/[0.02] transition-colors duration-300"
								style={{
									opacity: 0,
									transform: 'translateY(24px)',
									transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s, background 0.3s ease`,
								}}
							>
								{/* Left: number + connector */}
								<div className="flex flex-col items-center gap-2 shrink-0 pt-1">
									<span className="font-bebas text-[#FFD600] text-4xl leading-none group-hover:text-[#FFD600] transition-colors">
										{step.num}
									</span>
									<div className="w-px flex-1 step-connector min-h-[40px]" />
								</div>

								{/* Right: content */}
								<div className="pt-1">
									<h3
										className="font-bebas text-white tracking-wide mb-3"
										style={{ fontSize: 'clamp(20px, 2vw, 28px)' }}
									>
										{step.title}
									</h3>
									<p
										className="font-barlow font-light text-white/45 leading-relaxed"
										style={{ fontSize: 'clamp(13px, 1.1vw, 15px)' }}
									>
										{step.desc}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFD600]/20 to-transparent" />
			</section>
		</>
	);
}

export default Process;
