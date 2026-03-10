import { useEffect, useRef } from 'react';

const services = [
	{
		num: '01',
		title: 'Custom Web Design & Development',
		desc: 'Build a fast, responsive website or web app tailored to your goals — designed to engage users, reflect your brand, and support your growth online.',
		tags: ['React', 'UI/UX', 'Responsive'],
	},
	{
		num: '02',
		title: 'Support & Optimization',
		desc: 'Stay focused on your business while I keep your site or app updated, optimized, and running smoothly — with flexible support as you grow.',
		tags: ['Maintenance', 'Updates', 'Monitoring'],
	},
	{
		num: '03',
		title: 'Analytics & Performance',
		desc: 'Turn more visitors into customers by speeding up your site, optimizing user experience, and using data to boost conversions and grow revenue.',
		tags: ['SEO', 'Speed', 'Conversion'],
	},
];

function Services() {
	const cardRefs = useRef([]);

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
		cardRefs.current.forEach((el) => el && observer.observe(el));
		return () => cardRefs.current.forEach((el) => el && observer.unobserve(el));
	}, []);

	return (
		<>
			<style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:ital,wght@0,300;0,400;0,600;0,700;1,300&display=swap');
        .font-bebas  { font-family: 'Bebas Neue', sans-serif; }
        .font-barlow { font-family: 'Barlow', sans-serif; }
        .svc-card { transition: border-color 0.3s ease, background 0.3s ease; }
        .svc-card:hover { border-color: rgba(255,214,0,0.5) !important; background: rgba(255,214,0,0.04) !important; }
        .svc-card:hover .svc-num { color: rgba(255,214,0,0.3); }
        .svc-num { transition: color 0.3s ease; }
        @keyframes expandX { from{transform:scaleX(0);opacity:0} to{transform:scaleX(1);opacity:1} }
        .divider-anim { transform-origin:left; animation: expandX 0.6s ease both 0.2s; }
      `}</style>

			<section
				id="services"
				className="relative bg-black overflow-hidden py-24 px-6 font-barlow"
			>
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

				{/* Diagonal slash accent */}
				<div
					className="absolute top-0 bottom-0 hidden lg:block"
					style={{ right: '10%', transform: 'skewX(-8deg)' }}
				>
					<div className="w-[2px] h-full bg-[#FFD600] opacity-20" />
				</div>

				<div className="relative z-10 max-w-[1400px] mx-auto">
					{/* Header */}
					<div className="mb-16">
						<div className="flex items-center gap-3 mb-6">
							<span className="w-2 h-2 rounded-full bg-[#FFD600] shrink-0" />
							<span className="font-barlow font-light text-[11px] tracking-[0.3em] uppercase text-white/50">
								What We Offer
							</span>
						</div>
						<div className="overflow-hidden">
							<h2
								className="font-bebas text-white leading-none tracking-wide"
								style={{ fontSize: 'clamp(52px, 8vw, 110px)' }}
							>
								SERVICES
							</h2>
						</div>
						<div className="divider-anim w-12 h-[2px] bg-[#FFD600] mt-5" />
					</div>

					{/* Service rows */}
					<div className="flex flex-col gap-0">
						{services.map((s, i) => (
							<div
								key={s.num}
								ref={(el) => (cardRefs.current[i] = el)}
								className="svc-card border-t border-white/10 py-8 px-2 md:px-6 grid md:grid-cols-[80px_1fr_auto] gap-4 md:gap-10 items-start"
								style={{
									opacity: 0,
									transform: 'translateY(24px)',
									transition: `opacity 0.6s ease ${i * 0.12}s, transform 0.6s ease ${i * 0.12}s, border-color 0.3s ease, background 0.3s ease`,
								}}
							>
								{/* Number */}
								<span className="svc-num font-bebas text-5xl text-white/40 leading-none pt-1">
									{s.num}
								</span>

								{/* Content */}
								<div>
									<h3
										className="font-bebas text-[#FFD600] tracking-wide mb-3"
										style={{ fontSize: 'clamp(22px, 2.5vw, 32px)' }}
									>
										{s.title}
									</h3>
									<p
										className="font-barlow font-light text-white/70 leading-relaxed max-w-xl"
										style={{ fontSize: 'clamp(13px, 1.1vw, 15px)' }}
									>
										{s.desc}
									</p>
								</div>

								{/* Tags */}
								<div className="flex flex-wrap gap-2 md:flex-col md:items-end md:gap-2 pt-1">
									{s.tags.map((tag) => (
										<span
											key={tag}
											className="font-barlow font-light text-[10px] tracking-[0.2em] uppercase text-white/70 border border-white/10 px-2.5 py-1 whitespace-nowrap"
										>
											{tag}
										</span>
									))}
								</div>
							</div>
						))}
						{/* Final border */}
						<div className="border-t border-white/10" />
					</div>

					{/* CTA strip */}
					<div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-8 border border-[#FFD600]/20 bg-[#FFD600]/[0.03]">
						<div>
							<p className="font-bebas text-white tracking-wide text-2xl mb-1">
								Ready to get started?
							</p>
							<p className="font-barlow font-light text-white/40 text-sm">
								Let's build something worth seeing.
							</p>
						</div>
						<a
							href="#contact"
							className="font-barlow font-bold text-[12px] tracking-[0.2em] uppercase bg-[#FFD600] text-black px-8 py-3 shrink-0 transition-all duration-200 hover:bg-white hover:shadow-[0_0_30px_rgba(255,214,0,0.3)] hover:-translate-y-0.5"
							style={{
								clipPath:
									'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
							}}
						>
							Get In Touch
						</a>
					</div>
				</div>

				<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFD600]/20 to-transparent" />
			</section>
		</>
	);
}

export default Services;
