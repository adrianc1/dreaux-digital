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
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:ital,wght@0,300;0,400;0,700;1,300&display=swap');
        .font-bebas  { font-family: 'Bebas Neue', sans-serif; }
        .font-barlow { font-family: 'Barlow', sans-serif; }
      `}</style>

			<footer className="relative bg-black border-t border-white/5 font-barlow overflow-hidden">
				{/* Top accent line */}
				<div className="h-[2px] bg-gradient-to-r from-transparent via-[#FFD600]/40 to-transparent" />

				<div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-12">
					<div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
						{/* Brand */}
						<div>
							<p className="font-bebas text-[#FFD600] tracking-widest text-2xl leading-none mb-2">
								DREAUX DIGITAL
							</p>
							<p className="font-barlow font-light text-[11px] tracking-[0.25em] uppercase text-white/25">
								Web Development &amp; Digital Agency
							</p>
						</div>

						{/* Nav links */}
						<nav className="flex flex-wrap gap-x-8 gap-y-2">
							{links.map((link) => (
								<Link
									key={link.to}
									to={link.to}
									className="font-barlow font-light text-[11px] tracking-[0.25em] uppercase text-white/30 hover:text-[#FFD600] transition-colors duration-200"
								>
									{link.label}
								</Link>
							))}
						</nav>
					</div>

					{/* Bottom row */}
					<div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
						<p className="font-barlow font-light text-[11px] tracking-[0.1em] text-white/20">
							© {new Date().getFullYear()} Dreaux Digital. All rights reserved.
						</p>
						<p className="font-barlow font-light text-[11px] tracking-[0.1em] text-white/15">
							Built by Dreaux Digital
						</p>
					</div>
				</div>
			</footer>
		</>
	);
}

export default Footer;
