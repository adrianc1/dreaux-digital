import { Link } from 'react-router-dom';
import { blogData } from './blogData';

export default function Blog() {
	const posts = blogData;

	return (
		<>
			<style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:ital,wght@0,300;0,400;0,600;0,700;1,300&display=swap');
        .font-bebas  { font-family: 'Bebas Neue', sans-serif; }
        .font-barlow { font-family: 'Barlow', sans-serif; }
        .blog-row { transition: background 0.25s ease, border-color 0.25s ease; }
        .blog-row:hover { background: rgba(255,214,0,0.03); border-color: rgba(255,214,0,0.3) !important; }
        .blog-row:hover .blog-arrow { transform: translate(3px,-3px); opacity:1; }
        .blog-arrow { transition: transform 0.25s ease, opacity 0.25s ease; opacity: 0.35; }
        @keyframes expandX { from{transform:scaleX(0);opacity:0} to{transform:scaleX(1);opacity:1} }
        .divider-anim { transform-origin:left; animation: expandX 0.6s ease both 0.2s; }
        @keyframes fadeSlideUp {
          from { opacity:0; transform:translateY(20px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .row-anim { opacity:0; animation: fadeSlideUp 0.5s ease both; }
      `}</style>

			<div className="min-h-screen bg-black font-barlow">
				{/* Grid lines */}
				<div className="fixed inset-0 pointer-events-none z-0">
					{[25, 50, 75].map((p) => (
						<div
							key={p}
							className="absolute top-0 bottom-0 w-px bg-white opacity-[0.025]"
							style={{ left: `${p}%` }}
						/>
					))}
				</div>

				<div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-32 pb-24">
					{/* Header */}
					<div className="mb-16">
						<div className="flex items-center gap-3 mb-6">
							<span className="w-2 h-2 rounded-full bg-[#FFD600] shrink-0" />
							<span className="font-barlow font-light text-[11px] tracking-[0.3em] uppercase text-white/40">
								Insights &amp; Articles
							</span>
						</div>
						<div className="overflow-hidden">
							<h1
								className="font-bebas text-white leading-none tracking-wide"
								style={{ fontSize: 'clamp(64px, 10vw, 140px)' }}
							>
								THE BLOG
							</h1>
						</div>
						<div className="divider-anim w-12 h-[2px] bg-[#FFD600] mt-5" />
					</div>

					{/* Post list */}
					<div className="flex flex-col">
						{posts.map((post, i) => (
							<Link
								key={post.slug}
								to={`/blog/${post.slug}`}
								className="blog-row row-anim border-t border-white/10 py-7 px-2 md:px-4 grid grid-cols-[1fr_auto] md:grid-cols-[80px_1fr_auto] gap-4 md:gap-10 items-center group"
								style={{ animationDelay: `${i * 0.08}s` }}
							>
								{/* Index number — hidden on mobile */}
								<span className="hidden md:block font-bebas text-white/40 text-3xl leading-none">
									{String(i + 1).padStart(2, '0')}
								</span>

								{/* Title + date */}
								<div>
									<h2
										className="font-bebas text-white tracking-wide group-hover:text-[#FFD600] transition-colors duration-200 leading-tight mb-1"
										style={{ fontSize: 'clamp(18px, 2vw, 26px)' }}
									>
										{post.title}
									</h2>
									{post.tagline && (
										<p className="font-barlow font-light text-white/35 text-sm leading-snug max-w-xl">
											{post.tagline}
										</p>
									)}
									<p className="font-barlow font-light text-[10px] tracking-[0.2em] uppercase text-white/25 mt-2">
										{post.date}
									</p>
								</div>

								{/* Arrow */}
								<span className="blog-arrow font-bebas text-[#FFD600] text-2xl leading-none self-center">
									↗
								</span>
							</Link>
						))}
						<div className="border-t border-white/10" />
					</div>
				</div>

				{/* Bottom accent */}
				<div className="h-px bg-gradient-to-r from-transparent via-[#FFD600]/20 to-transparent" />
			</div>
		</>
	);
}
