import { useEffect, useRef } from 'react';

function Proof() {
	const ref = useRef(null);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.style.opacity = '1';
						entry.target.style.transform = 'translateY(0)';
					}
				});
			},
			{ threshold: 0.2 },
		);
		observer.observe(el);
		return () => observer.disconnect();
	}, []);

	return (
		<>
			<style>{`
        .font-bebas  { font-family: 'Bebas Neue', sans-serif; }
        .font-barlow { font-family: 'Barlow', sans-serif; }
      `}</style>

			<section
				id="proof"
				aria-label="Client outcome"
				className="relative bg-black border-y border-white/15 py-14 px-6 font-barlow overflow-hidden"
			>
				{/* Diagonal accent, matching the other sections */}
				<div
					className="absolute top-0 bottom-0 hidden lg:block pointer-events-none"
					style={{ right: '12%', transform: 'skewX(-8deg)' }}
				>
					<div className="w-[2px] h-full bg-[#FFD600] opacity-20" />
				</div>

				<div
					ref={ref}
					className="relative z-10 max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-center gap-8 md:gap-14"
					style={{
						opacity: 0,
						transform: 'translateY(24px)',
						transition: 'opacity 0.6s ease, transform 0.6s ease',
					}}
				>
					{/* The number — "SAVED" carries the same weight as the figure so it
					    reads as an outcome, not a price. */}
					<div className="shrink-0">
						<p
							className="font-bebas text-[#FFD600] leading-none tracking-wide"
							style={{ fontSize: 'clamp(56px, 8vw, 104px)' }}
						>
							$57,600
						</p>
						<p
							className="font-bebas text-white leading-none tracking-[0.08em] mt-1"
							style={{ fontSize: 'clamp(22px, 2.6vw, 36px)' }}
						>
							Saved per year
						</p>
						<p className="font-barlow font-light text-[11px] tracking-[0.3em] uppercase text-meta mt-3">
							Across three locations
						</p>
					</div>

					<div className="hidden md:block w-px self-stretch bg-white/15" />

					{/* The story */}
					<div className="max-w-xl">
						<p
							className="font-barlow font-light text-body leading-relaxed"
							style={{ fontSize: 'clamp(15px, 1.3vw, 18px)' }}
						>
							Three retail brands were each paying an agency $1,600 a month to
							hold onto their websites. I rebuilt and migrated all three — the
							businesses own them outright now, with nothing owed to an agency.
						</p>
						<a
							href="#projects"
							className="inline-block font-barlow font-bold text-[11px] tracking-[0.2em] uppercase text-[#FFD600] border-b border-[#FFD600]/40 pb-0.5 mt-6 transition-colors duration-200 hover:border-[#FFD600]"
						>
							See the work
						</a>
					</div>
				</div>
			</section>
		</>
	);
}

export default Proof;
