import { useEffect, useRef } from 'react';

const services = [
	{
		num: '01',
		title: 'Web Development',
		desc: 'New business websites, redesigns, landing pages, CMS builds, and custom web applications, built to be fast, maintainable, and yours.',
		tags: ['React', 'Full-Stack', 'CMS'],
	},
	{
		num: '02',
		title: 'Website Management & Support',
		desc: 'The work that piles up when nobody owns it: content changes, new pages, seasonal promotions, forms, and the small fixes you keep meaning to get to.',
		tags: ['Retainer', 'Updates', 'Monitoring'],
	},
	{
		num: '03',
		title: 'Technical Support & Troubleshooting',
		desc: 'Already have a site? I can take it from here. Broken pages, failing forms, JavaScript errors, DNS and domain problems, integrations that stopped working.',
		tags: ['Takeover', 'Debugging', 'DNS'],
	},
	{
		num: '04',
		title: 'Migrations & Launches',
		desc: 'Moving platforms or hosts without losing traffic. CMS migrations, redirect mapping, DNS cutovers, Search Console setup, and a clean production launch.',
		tags: ['CMS', 'Redirects', 'Search Console'],
	},
	{
		num: '05',
		title: 'Analytics, SEO & Performance',
		desc: 'Analytics and Search Console configured properly, technical SEO cleaned up, and pages tuned to load quickly, so you can see what your site is actually doing.',
		tags: ['GA4', 'Technical SEO', 'Speed'],
	},
];

const managementTiers = [
	{
		name: 'Essential',
		for: 'Brochure sites',
		includes: [
			'Content and image updates',
			'Plugin, package and security updates',
			'Uptime monitoring',
			'Response within two business days',
		],
	},
	{
		name: 'Ongoing',
		for: 'Most businesses',
		includes: [
			'Everything in Essential',
			'New pages, forms and promotions',
			'Minor design and layout changes',
			'Analytics and Search Console upkeep',
			'Next business day response',
		],
	},
	{
		name: 'Priority',
		for: 'Multi-site & revenue-critical',
		includes: [
			'Everything in Ongoing',
			'Multiple sites under one arrangement',
			'Feature work and integrations',
			'Same business day response',
			'Direct line for urgent issues',
		],
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
							<span className="font-barlow font-light text-[11px] tracking-[0.3em] uppercase text-label">
								Build &middot; Manage &middot; Fix
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
								className="svc-card border-t border-white/20 py-8 px-2 md:px-6 grid md:grid-cols-[80px_1fr_auto] gap-4 md:gap-10 items-start"
								style={{
									opacity: 0,
									transform: 'translateY(24px)',
									transition: `opacity 0.6s ease ${i * 0.12}s, transform 0.6s ease ${i * 0.12}s, border-color 0.3s ease, background 0.3s ease`,
								}}
							>
								{/* Number */}
								<span className="svc-num font-bebas text-5xl text-white/55 leading-none pt-1">
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
											className="font-barlow font-light text-[10px] tracking-[0.2em] uppercase text-white/70 border border-white/20 px-2.5 py-1 whitespace-nowrap"
										>
											{tag}
										</span>
									))}
								</div>
							</div>
						))}
						{/* Final border */}
						<div className="border-t border-white/20" />
					</div>

					{/* Management scope — described by what's included, not by price */}
					<div className="mt-20">
						<div className="flex items-center gap-3 mb-6">
							<span className="w-2 h-2 rounded-full bg-[#FFD600] shrink-0" />
							<span className="font-barlow font-light text-[11px] tracking-[0.3em] uppercase text-label">
								Ongoing Management
							</span>
						</div>
						<h3
							className="font-bebas text-white leading-none tracking-wide mb-4"
							style={{ fontSize: 'clamp(28px, 3.5vw, 44px)' }}
						>
							Keep your site current without managing it yourself
						</h3>
						<p className="font-barlow font-light text-body max-w-2xl leading-relaxed mb-10 text-sm">
							For most businesses the website quietly becomes the owner's job,
							on top of the job they actually have. Management means it stops
							being something you have to remember. Scoped per site and quoted
							once we've talked through what you've got.
						</p>

						<div className="grid md:grid-cols-3 gap-px bg-white/15">
							{managementTiers.map((tier) => (
								<div key={tier.name} className="bg-black p-7">
									<p className="font-bebas text-[#FFD600] tracking-wide text-xl mb-1">
										{tier.name}
									</p>
									<p className="font-barlow font-light text-meta text-[11px] tracking-[0.2em] uppercase mb-5">
										{tier.for}
									</p>
									<ul className="space-y-2.5">
										{tier.includes.map((item) => (
											<li
												key={item}
												className="font-barlow font-light text-body text-sm leading-relaxed flex gap-3"
											>
												<span aria-hidden="true" className="text-[#FFD600] shrink-0">
													&#47;
												</span>
												{item}
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
						<p className="font-barlow font-light text-meta text-[11px] tracking-[0.2em] uppercase mt-6">
							All tiers quoted per site &middot; No long-term contract
						</p>
					</div>

					{/* CTA strip */}
					<div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-8 border border-[#FFD600]/20 bg-[#FFD600]/[0.03]">
						<div>
							<p className="font-bebas text-white tracking-wide text-2xl mb-1">
								Building something, or fixing something?
							</p>
							<p className="font-barlow font-light text-body text-sm">
								Either way, you'll be talking to the person who does the work.
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
