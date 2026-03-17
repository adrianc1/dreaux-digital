import concretess from './assets/concretess.png';
import resume from './assets/ezresume.png';
import tracerootImg from './assets/traceroot_home.png';

const projects = [
	{
		img: tracerootImg,
		title: 'TraceRoot',
		tag: 'Web App',
		desc: 'Multi-tenant inventory management platform with role-based access control, designed for regulated cannabis operations.',
		url: 'https://traceroot.io/',
		num: '01',
	},
	{
		img: concretess,
		title: 'Sports PWA',
		tag: 'Progressive Web App',
		desc: 'High school sports hub for parents, teachers & students — team info, schedules, and more in one place.',
		url: 'https://concretesports.app/',
		num: '02',
	},
	{
		img: resume,
		title: 'Resume Builder',
		tag: 'Web App',
		desc: 'Easy resume builder with instant PDF download. Clean UX built for speed.',
		url: 'https://ezresume.pro/',
		num: '03',
	},
];

function Projects() {
	return (
		<>
			<style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:ital,wght@0,300;0,400;0,600;0,700;1,300&display=swap');
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
							<span className="font-barlow font-light text-[11px] tracking-[0.3em] uppercase text-white/50">
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
								className="project-card card-border group block border border-white/10 bg-white/[0.02] overflow-hidden"
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
										<span className="font-bebas text-white/40 text-4xl leading-none ml-4 shrink-0">
											{p.num}
										</span>
									</div>

									<p className="font-barlow font-light text-sm text-white/40 leading-relaxed mb-5">
										{p.desc}
									</p>

									<div className="flex items-center gap-2 font-barlow font-semibold text-[11px] tracking-[0.2em] uppercase text-[#FFD600]">
										<span>View Project</span>
										<span className="project-arrow text-base">↗</span>
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
