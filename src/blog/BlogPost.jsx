import { useParams } from 'react-router-dom';

function BlogPost() {
	const { slug } = useParams();

	// You can later fetch actual blog data with the slug
	return (
		<section className="p-6 flex-1 mt-16 flex flex-col gap-6">
			<h1 className="text-3xl font-bold">
				Top 5 Reasons Small Business Websites Fail (and Fixes)
			</h1>
			<h2 className="text-md ">
				Struggling to get leads from your site? These 5 common website mistakes
				could be costing your business money — and how to fix them.
			</h2>

			<h3 className="text-sm border-b-1 pb-4">Written by: Adrian Crosby</h3>

			<p>
				First impressions matter — especially online. Your website is often the
				first interaction potential clients or customers have with your brand.
				What do you want them to think? Do you come across as trustworthy,
				professional, and easy to contact? These impressions shape whether
				visitors become customers or bounce away. A website isn’t just a digital
				placeholder; it’s a powerful tool for building credibility and driving
				business. Unfortunately, many small business websites fall short and
				lose opportunities (and revenue) because of common mistakes. Here are
				the top 5 reasons small business websites fail — and how you can fix
				them.
			</p>

			<section className="reason">
				<h4 className="text-2xl pb-6">1. No Clear Call to Action (CTA)</h4>
				<p>
					Too often, visitors arrive at a site and are left confused — like John
					Travolta in that famous meme, looking around wondering what to do
					next. Without clear CTAs, users don’t know whether to call, book, buy,
					or sign up, and often just leave. Common problems include missing
					buttons, buttons that all look the same, or CTAs buried in
					hard-to-find spots. A great site guides visitors clearly and
					repeatedly — above the fold, mid-page, and in the footer. Fix: Use
					bold, distinct CTAs aligned with your goals, placed strategically
					throughout your site to guide users effortlessly.
				</p>
			</section>

			<section className="reason">
				<h4 className="text-2xl pb-6">2. Poor Mobile Experience</h4>
				<p>
					Have you ever tried to read a restaurant’s menu on your phone, only to
					struggle with tiny fonts, broken layouts, or jumpy pages? You’re not
					alone — over 60% of web traffic is mobile. A poor mobile experience
					frustrates users and leads to lost leads and sales. Plus, Google
					penalizes sites that aren’t mobile-friendly, which hurts your SEO and
					visibility. Fix: Prioritize responsive design and rigorously test your
					site across devices — exactly what we specialize in at Dreaux Digital.
				</p>
			</section>

			<section className="reason">
				<h4 className="text-2xl pb-6">3. Outdated or Unprofessional Design</h4>
				<p>
					Users form judgments about your business in seconds. Clunky layouts,
					cheesy stock photos, and overused AI-generated images with spelling
					errors kill credibility fast. Some sites look stuck in 2006 — and
					that’s not a good look. Fix: Refresh your design with modern visuals,
					authentic imagery, and user-friendly layouts following UX best
					practices.
				</p>
			</section>

			<section className="reason">
				<h4 className="text-2xl pb-6">4. No Real Content Strategy</h4>
				<p>
					Many sites rely on generic filler text, buzzwords, or copied content
					that offers no real value. Missing blogs, unclear messaging, and
					ignoring customer pain points make it hard to engage visitors or rank
					well in search engines. Fix: Develop original, targeted content that
					addresses your audience’s needs, answers FAQs, and supports your SEO
					strategy.
				</p>
			</section>

			<section className="reason">
				<h4 className="text-2xl pb-6">5. Slow Load Times</h4>
				<p>
					In today’s fast-paced world, every second counts. Even a one-second
					delay can drastically reduce conversions. Large images, unoptimized
					scripts, and unreliable hosting all contribute to sluggish sites.
					Google also ranks slower sites lower, which hurts your SEO and organic
					traffic. Fix: Compress images, implement lazy loading, and choose a
					reliable web host to keep your site fast and smooth.
				</p>
			</section>
		</section>
	);
}

export default BlogPost;
