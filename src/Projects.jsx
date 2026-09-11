import concretess from './assets/concretess.png';
import hpcImg from './assets/hpc-hero.jpg';
import tracerootImg from './assets/traceroot_home.png';
import truckfixImg from './assets/truckfixheronew.jpg';

const projects = [
	{
		img: hpcImg,
		title: 'Halfpipe · Cannable · HPC',
		tag: 'Multi-Brand Retail',
		desc: 'Three retail brands, three site builds, three migrations off a single agency. Each one now runs on a site the business owns outright, with no agency retainer.',
		// The card shows HPC, so the link names it rather than implying all three.
		url: 'https://hpcoxnard.com/',
		linkLabel: 'Visit HPC Oxnard',
		num: '01',
	},
	{
		img: concretess,
		title: 'Concrete Sports',
		tag: 'Progressive Web App',
		desc: 'High school sports hub for parents, teachers and students: schedules, scores and team info in one installable app. Now in its second year on a renewed agreement.',
		url: 'https://concretesports.app/',
		num: '02',
	},
	{
		img: truckfixImg,
		title: 'TruckFix',
		tag: 'Full-Stack App',
		desc: 'Finds a truck driver the nearest repair shop when they break down. Live location, real inventory of nearby shops, built to answer in seconds on a bad connection.',
		url: 'https://trytruckfix.com/',
		num: '03',
	},
	{
		img: tracerootImg,
		title: 'TraceRoot',
		tag: 'SaaS Platform',
		desc: 'Inventory platform serving multiple businesses at once, each seeing only their own data. Staff permissions, a full audit trail, subscription billing, and plain-English search across inventory.',
		url: 'https://traceroot.io/',
		num: '04',
	},
];

function Projects() {
	return (
		<>
			<style>{`
        .font-bebas  { font-family: 'Bebas Neue', sans-serif; }
        .font-barlow { font-family: 'Barlow', sans-serif; }
        .project-card { transition: all 0.3s ease; }
        .project-card:hover .project-img { transform: scale(1.04); filter: grayscale(0%) brightness(1); }
        .project-img { transition: transform 0.5s ease, filter 0.4s ease; filter: grayscale(30%) brightness(0.85); }
        .project-card:hover .project-arrow { transform: translate(3px, -3px); opacity: 1; }
        .project-arrow { transition: transform 0.25s ease, opacity 0.25s ease; opacity: 0.5; }
        .project-card:hover .card-border { border-color: rgba(255,214,0,0.6); }
        .card-border { transition: border-color 0.3s ease; }
        @keyframes expandX { from{transform:scaleX(0);opacity:0} to{transform:scaleX(1);opacity:1} }
        .divider-anim { transform-origin:left; animation: expandX 0.6s ease both 0.2s; }
      `}</style>

			<section
				id="projects"
				className="relative bg-black overflow-hidden py-24 px-6 font-barlow"
			>
				{/* Subtle grid lines */}
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
					{/* Section header */}
					<div className="mb-16">
						<div className="flex items-center gap-3 mb-6">
							<span className="w-2 h-2 rounded-full bg-[#FFD600] shrink-0" />
							<span className="font-barlow font-light text-[11px] tracking-[0.3em] uppercase text-label">
								Selected Work
							</span>
						</div>
						<div className="overflow-hidden">
							<h2
								className="font-bebas text-white leading-none tracking-wide"
								style={{ fontSize: 'clamp(52px, 8vw, 110px)' }}
							>
								PROJECTS
							</h2>
						</div>
						<div className="divider-anim w-12 h-[2px] bg-[#FFD600] mt-5" />
					</div>

					{/* Cards grid */}
					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{projects.map((p) => (
							<a
								key={p.num}
								href={p.url}
								target="_blank"
								rel="noopener noreferrer"
								className="project-card card-border group block border border-white/20 bg-white/[0.02] overflow-hidden"
							>
								{/* Image */}
								<div className="overflow-hidden h-52 bg-black">
									<img
										src={p.img}
										alt={p.title}
										className="project-img w-full h-full object-cover object-top"
									/>
								</div>

								{/* Card body */}
								<div className="p-6">
									<div className="flex items-start justify-between mb-4">
										<div>
											<span className="font-barlow font-light text-[10px] tracking-[0.3em] uppercase text-[#FFD600]/70 block mb-1">
												{p.tag}
											</span>
											<h3 className="font-bebas text-white tracking-wide text-2xl leading-none">
												{p.title}
											</h3>
										</div>
										<span className="font-bebas text-white/55 text-4xl leading-none ml-4 shrink-0">
											{p.num}
										</span>
									</div>

									<p className="font-barlow font-light text-sm text-body leading-relaxed mb-5">
										{p.desc}
									</p>

									<div className="flex items-center gap-2 font-barlow font-semibold text-[11px] tracking-[0.2em] uppercase text-[#FFD600]">
										<span>
											{p.linkLabel || 'View Project'}
											<span className="sr-only"> (opens in a new tab)</span>
										</span>
										<span aria-hidden="true" className="project-arrow text-base">
											↗
										</span>
									</div>
								</div>
							</a>
						))}
					</div>
				</div>

				{/* Bottom border */}
				<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFD600]/20 to-transparent" />
			</section>
		</>
	);
}

export default Projects;
