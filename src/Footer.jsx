import { Link } from 'react-router-dom';

const links = [
	{ to: '/#about', label: 'About' },
	{ to: '/#services', label: 'Services' },
	{ to: '/#projects', label: 'Projects' },
	{ to: '/#contact', label: 'Contact' },
	{ to: '/blog', label: 'Blog' },
];

function Footer() {
	return (
		<>
			<style>{`
        .font-bebas  { font-family: 'Bebas Neue', sans-serif; }
        .font-barlow { font-family: 'Barlow', sans-serif; }
      `}</style>

			<footer className="relative bg-black border-t border-white/15 font-barlow overflow-hidden">
				{/* Top accent line */}
				<div className="h-[2px] bg-gradient-to-r from-transparent via-[#FFD600]/40 to-transparent" />

				<div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-12">
					<div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
						{/* Brand */}
						<div>
							<p className="font-bebas text-[#FFD600] tracking-widest text-2xl leading-none mb-2">
								DREAUX DIGITAL
							</p>
							<p className="font-barlow font-light text-[11px] tracking-[0.25em] uppercase text-white/70">
								Web Development &amp; Support
							</p>
						</div>

						{/* Nav links */}
						<nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-2">
							{links.map((link) => (
								<Link
									key={link.to}
									to={link.to}
									className="font-barlow font-light text-[11px] tracking-[0.25em] uppercase text-white/70 hover:text-[#FFD600] transition-colors duration-200"
								>
									{link.label}
								</Link>
							))}
						</nav>
					</div>

					{/* Bottom row */}
					<div className="mt-10 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
						<p className="font-barlow font-light text-[11px] tracking-[0.1em] text-meta">
							© {new Date().getFullYear()} Dreaux Digital. All rights reserved.
						</p>
						<p className="font-barlow font-light text-[11px] tracking-[0.1em] text-meta">
							Designed &amp; built by{' '}
							<a
								href="https://www.linkedin.com/in/adrian-crosby/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-white hover:text-[#FFD600] transition-colors duration-200 underline underline-offset-2 decoration-white/30 hover:decoration-[#FFD600]"
							>
								Adrian Crosby
								<span className="sr-only"> (opens in a new tab)</span>
							</a>
						</p>
					</div>
				</div>
			</footer>
		</>
	);
}

export default Footer;
