import { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoCloseSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const navLinks = [
	{ to: '/#about', label: 'About' },
	{ to: '/#services', label: 'Services' },
	{ to: '/#projects', label: 'Projects' },
	{ to: '/#contact', label: 'Contact' },
	{ to: '/blog', label: 'Blog' },
];

function Nav({ showNav, onClick, showTitle, isBlogPage }) {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<>
			<style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:ital,wght@0,300;0,400;0,700;1,300&display=swap');
        .font-bebas  { font-family: 'Bebas Neue', sans-serif; }
        .font-barlow { font-family: 'Barlow', sans-serif; }
        .nav-link-line::after {
          content: '';
          display: block;
          height: 1px;
          background: #FFD600;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.25s ease;
        }
        .nav-link-line:hover::after { transform: scaleX(1); }
        @keyframes mobileSlide {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .mobile-link-anim { animation: mobileSlide 0.3s ease both; }
      `}</style>

			{/* ── Desktop / Persistent Nav Bar ── */}
			<header
				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-barlow
          ${scrolled ? 'bg-black/95 backdrop-blur-sm border-b border-white/5' : 'bg-transparent'}`}
			>
				<div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 h-14 flex items-center justify-between">
					{/* Logo / Wordmark */}
					<Link
						to="/#home"
						className={`font-bebas text-[#FFD600] tracking-widest text-xl transition-opacity duration-300
              ${isBlogPage || showTitle || scrolled ? 'opacity-100' : 'opacity-0'} lg:opacity-100`}
					>
						DREAUX DIGITAL
					</Link>

					{/* Desktop links */}
					<nav className="hidden lg:flex items-center gap-10">
						{navLinks.map((link) => (
							<Link
								key={link.to}
								to={link.to}
								className="nav-link-line font-barlow font-light text-[11px] tracking-[0.25em] uppercase text-white/50 hover:text-white transition-colors duration-200"
							>
								{link.label}
							</Link>
						))}
					</nav>

					{/* Desktop CTA */}
					<a
						href="#contact"
						className="hidden lg:inline-block font-barlow font-bold text-[10px] tracking-[0.2em] uppercase bg-[#FFD600] text-black px-5 py-2 transition-all duration-200 hover:bg-white hover:shadow-[0_0_20px_rgba(255,214,0,0.3)]"
						style={{
							clipPath:
								'polygon(0 0, calc(100% - 7px) 0, 100% 7px, 100% 100%, 7px 100%, 0 calc(100% - 7px))',
						}}
					>
						Let's Talk
					</a>

					{/* Mobile hamburger */}
					<button
						className="lg:hidden text-white text-2xl p-1 focus:outline-none"
						onClick={onClick}
						aria-label="Toggle menu"
					>
						{showNav ? <IoCloseSharp /> : <GiHamburgerMenu />}
					</button>
				</div>
			</header>

			{/* ── Mobile Dropdown ── */}
			<div
				className={`lg:hidden fixed left-0 right-0 z-40 bg-black border-b border-white/10 transition-all duration-300 overflow-hidden font-barlow
          ${showNav ? 'top-14 opacity-100' : '-top-full opacity-0 pointer-events-none'}`}
			>
				{/* Thin yellow accent top */}
				<div className="h-[2px] bg-[#FFD600] opacity-40" />

				<ul className="flex flex-col py-6 px-8 gap-0" onClick={onClick}>
					{navLinks.map((link, i) => (
						<li
							key={link.to}
							className="mobile-link-anim border-b border-white/5 last:border-0"
							style={{ animationDelay: `${i * 0.05}s` }}
						>
							<Link
								to={link.to}
								className="block py-4 font-barlow font-light text-[12px] tracking-[0.3em] uppercase text-white/50 hover:text-[#FFD600] transition-colors duration-200"
							>
								{link.label}
							</Link>
						</li>
					))}

					<li className="pt-6 pb-2">
						<a
							href="#contact"
							className="inline-block font-barlow font-bold text-[11px] tracking-[0.2em] uppercase bg-[#FFD600] text-black px-7 py-3 transition-all duration-200 hover:bg-white"
							style={{
								clipPath:
									'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
							}}
						>
							Let's Talk
						</a>
					</li>
				</ul>
			</div>
		</>
	);
}

export default Nav;
