import { useParams, Link } from 'react-router-dom';
import { blogData } from './blogData';

function BlogPost() {
	const { slug } = useParams();
	const post = blogData.find((p) => p.slug === slug);
	const postIndex = blogData.findIndex((p) => p.slug === slug);
	const prevPost = postIndex > 0 ? blogData[postIndex - 1] : null;
	const nextPost =
		postIndex < blogData.length - 1 ? blogData[postIndex + 1] : null;

	if (!post) {
		return (
			<div className="min-h-screen bg-black flex items-center justify-center">
				<div className="text-center">
					<p className="font-bebas text-white/20 text-8xl">404</p>
					<p className="font-barlow font-light text-white/40 text-sm tracking-widest uppercase mt-2">
						Post not found
					</p>
					<Link
						to="/blog"
						className="inline-block mt-8 font-barlow font-bold text-[11px] tracking-[0.2em] uppercase text-[#FFD600] border-b border-[#FFD600]/40 pb-0.5"
					>
						← Back to Blog
					</Link>
				</div>
			</div>
		);
	}

	return (
		<>
			<style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:ital,wght@0,300;0,400;0,600;0,700;1,300&display=swap');
        .font-bebas  { font-family: 'Bebas Neue', sans-serif; }
        .font-barlow { font-family: 'Barlow', sans-serif; }
        .clip-cta { clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px)); }
        @keyframes expandX { from{transform:scaleX(0);opacity:0} to{transform:scaleX(1);opacity:1} }
        .divider-anim { transform-origin:left; animation: expandX 0.6s ease both 0.3s; }
        @keyframes fadeSlideUp {
          from { opacity:0; transform:translateY(30px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .anim-1 { animation: fadeSlideUp 0.6s ease both 0.1s; }
        .anim-2 { animation: fadeSlideUp 0.6s ease both 0.25s; }
        .anim-3 { animation: fadeSlideUp 0.6s ease both 0.4s; }
        .anim-4 { animation: fadeSlideUp 0.6s ease both 0.55s; }

        /* Blog content typography */
        .post-content { color: rgba(255,255,255,0.6); font-family: 'Barlow', sans-serif; font-weight: 300; line-height: 1.85; }
        .post-content h1, .post-content h2, .post-content h3 {
          font-family: 'Bebas Neue', sans-serif;
          color: white;
          letter-spacing: 0.05em;
          margin-top: 2.5rem;
          margin-bottom: 0.75rem;
        }
        .post-content h1 { font-size: clamp(32px, 4vw, 52px); }
        .post-content h2 { font-size: clamp(26px, 3vw, 40px); }
        .post-content h3 { font-size: clamp(20px, 2.5vw, 30px); }
        .post-content p { margin-bottom: 1.25rem; }
        .post-content strong { color: rgba(255,255,255,0.85); font-weight: 600; }
        .post-content a { color: #FFD600; text-decoration: none; border-bottom: 1px solid rgba(255,214,0,0.3); transition: border-color 0.2s; }
        .post-content a:hover { border-color: #FFD600; }
        .post-content ul, .post-content ol { padding-left: 1.5rem; margin-bottom: 1.25rem; }
        .post-content li { margin-bottom: 0.5rem; }
        .post-content blockquote {
          border-left: 2px solid #FFD600;
          padding-left: 1.25rem;
          margin: 2rem 0;
          color: rgba(255,255,255,0.4);
          font-style: italic;
        }
        .post-content code {
          background: rgba(255,255,255,0.06);
          padding: 2px 6px;
          font-size: 0.85em;
          color: #FFD600;
        }
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

				<div className="relative z-10 max-w-[860px] mx-auto px-6 md:px-10 pt-32 pb-24">
					{/* Back link */}
					<div className="anim-1 mb-12">
						<Link
							to="/blog"
							className="font-barlow font-light text-[11px] tracking-[0.25em] uppercase text-white/30 hover:text-[#FFD600] transition-colors duration-200 inline-flex items-center gap-2"
						>
							<span>←</span> All Posts
						</Link>
					</div>

					{/* Post header */}
					<header className="mb-12">
						<div className="anim-1 flex items-center gap-3 mb-6">
							<span className="w-2 h-2 rounded-full bg-[#FFD600] shrink-0" />
							<span className="font-barlow font-light text-[11px] tracking-[0.3em] uppercase text-white/40">
								{post.date}
							</span>
							{post.author && (
								<>
									<span className="text-white/15 text-xs">·</span>
									<span className="font-barlow font-light text-[11px] tracking-[0.2em] uppercase text-white/30">
										{post.author}
									</span>
								</>
							)}
						</div>

						<div className="anim-2 overflow-hidden mb-2">
							<h1
								className="font-bebas text-white leading-tight tracking-wide"
								style={{ fontSize: 'clamp(40px, 6vw, 80px)' }}
							>
								{post.title}
							</h1>
						</div>

						{post.tagline && (
							<p
								className="anim-3 font-barlow font-light text-white/45 leading-relaxed mt-3"
								style={{ fontSize: 'clamp(15px, 1.4vw, 18px)' }}
							>
								{post.tagline}
							</p>
						)}

						<div className="anim-3 divider-anim w-12 h-[2px] bg-[#FFD600] mt-7" />
					</header>

					{/* Post body */}
					<article
						className="anim-4 post-content"
						style={{ fontSize: 'clamp(14px, 1.2vw, 16px)' }}
					>
						{post.content}
					</article>

					{/* CTA strip */}
					<div className="mt-20 p-8 md:p-10 border border-[#FFD600]/20 bg-[#FFD600]/[0.03]">
						<p
							className="font-bebas text-white tracking-wide mb-2"
							style={{ fontSize: 'clamp(22px, 3vw, 36px)' }}
						>
							Ready to fix what's holding your website back?
						</p>
						<p
							className="font-barlow font-light text-white/40 leading-relaxed mb-7"
							style={{ fontSize: 'clamp(13px, 1.1vw, 15px)' }}
						>
							Whether your site needs a full redesign or just a few strategic
							improvements, I'm here to help. Dreaux Digital builds fast, modern
							websites that convert visitors into customers.
						</p>
						<Link
							to="/#contact"
							className="clip-cta inline-block font-barlow font-bold text-[12px] tracking-[0.2em] uppercase bg-[#FFD600] text-black px-8 py-3 transition-all duration-200 hover:bg-white hover:shadow-[0_0_30px_rgba(255,214,0,0.25)]"
						>
							Let's Talk About Your Site
						</Link>
					</div>

					{/* Prev / Next nav */}
					{(prevPost || nextPost) && (
						<div className="mt-12 grid grid-cols-2 gap-4 border-t border-white/10 pt-10">
							<div>
								{prevPost && (
									<Link to={`/blog/${prevPost.slug}`} className="group block">
										<span className="font-barlow font-light text-[10px] tracking-[0.25em] uppercase text-white/25 block mb-2">
											← Previous
										</span>
										<span
											className="font-bebas text-white/60 group-hover:text-[#FFD600] transition-colors duration-200 leading-tight block"
											style={{ fontSize: 'clamp(16px, 1.5vw, 20px)' }}
										>
											{prevPost.title}
										</span>
									</Link>
								)}
							</div>
							<div className="text-right">
								{nextPost && (
									<Link to={`/blog/${nextPost.slug}`} className="group block">
										<span className="font-barlow font-light text-[10px] tracking-[0.25em] uppercase text-white/25 block mb-2">
											Next →
										</span>
										<span
											className="font-bebas text-white/60 group-hover:text-[#FFD600] transition-colors duration-200 leading-tight block"
											style={{ fontSize: 'clamp(16px, 1.5vw, 20px)' }}
										>
											{nextPost.title}
										</span>
									</Link>
								)}
							</div>
						</div>
					)}
				</div>

				<div className="h-px bg-gradient-to-r from-transparent via-[#FFD600]/20 to-transparent" />
			</div>
		</>
	);
}

export default BlogPost;
