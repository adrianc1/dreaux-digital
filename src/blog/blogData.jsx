// import imgg from '../assets/pulp-fiction-john-travolta.gif';
import mobile from '../assets/mobile-phone.jpg';
import mac from '../assets/mac.jpg';
import whiteBoard from '../assets/whiteboard.jpg';

export const blogData = [
	{
		slug: 'common-website-mistakes-small-business',
		title: 'Top 5 Reasons Small Business Websites Fail (and Fixes)',
		author: 'Adrian Crosby',
		date: `June 2, 2025`,
		tagline:
			'Struggling to get leads from your site? These 5 common website mistakes could be costing your business money — and how to fix them.',
		content: (
			<>
				<section className="flex-1 mt-8 flex flex-col gap-6">
					<p>
						First impressions matter — especially online. Your website is often
						the first interaction potential clients or customers have with your
						brand. What do you want them to think? Do you come across as
						trustworthy, professional, and easy to contact? Think about how this
						site made you feel — did it reflect who I am, what I do, and why it
						matters? These are reflections you should have with your current
						site.
						<br />
						<br />
						These impressions determine whether visitors become customers or
						stay stangers. A website isn’t just a digital placeholder; it's a
						look <span className="italic">into your business</span>. And more
						importantly it’s a powerful tool for building credibility and{' '}
						<strong>driving business</strong>.
						<br />
						<br />
						Unfortunately, many business and brand websites fall short and lose
						opportunities (and revenue) because of common mistakes. Here are the
						top 5 reasons small business websites fail — and how you can avoid
						them like the ...
					</p>

					<section className="reason">
						<h4 className="text-2xl pb-6">1. No Clear Call to Action (CTA)</h4>
						<img
							// src={imgg}
							alt="John Travolta looking around confused"
							className="pb-6 mx-auto"
						/>
						<p>
							Way too often, visitors arrive at a site and are left confused —
							like John Travolta in that famous Pulp Fiction meme, looking
							around wondering what to do next. Without clear CTAs, users don’t
							know whether to call, book, or buy and often just leave because
							there is not a clear direction. That is a lost client that may
							never come back because of this particular experience.
							<br />
							<br />
							Common CTA problems include missing buttons, buttons that all look
							the same, or CTAs buried in hard-to-find spots. A great site
							guides visitors clearly, repeatedly, and strategically — above the
							fold, mid-page, and in the footer. <br />
							<br />
							🛠️<strong>Fix:</strong> Use bold, distinct CTAs aligned with your
							goals, placed strategically throughout your site to guide users
							effortlessly.
						</p>
					</section>

					<section className="reason">
						<h4 className="text-2xl pb-6">2. Poor Mobile Experience</h4>
						<img
							src={mobile}
							alt="Young man holding a Galaxy smartphone"
							className="pb-6"
						/>
						<p>
							Have you ever tried to read your local restaurant’s menu on your
							phone, only to struggle with tiny fonts, broken layouts, blurry
							images, or jumpy pages?
							<strong> Over 60% of web traffic is mobile</strong>. A poor mobile
							experience frustrates a majority of users and leads to lost leads,
							sales, and revenue. Plus, Google penalizes sites that aren’t
							mobile-friendly, which hurts your SEO and visibility. Which in
							turn feeds this negative feedback loop. <br />
							<br />
							🛠️<strong>Fix: </strong>Prioritize responsive design and
							rigorously test your site across devices.
						</p>
					</section>

					<section className="reason">
						<h4 className="text-2xl pb-6">
							3. Outdated or Unprofessional Design
						</h4>
						<img
							src={mac}
							alt="Photo of a retro Mac and keyboard"
							className="pb-6"
						/>
						<p>
							At the risk of sounding like a broken record:{' '}
							<strong>First impressions matter — a lot</strong>
							. If your site looks clunky, uses low-quality stock photos, or
							features sloppy AI-generated images with typos, visitors will
							bounce fast. An outdated design signals neglect and damages
							credibility. That said, some retro styles can work — when they’re
							intentional and well-executed.
							<br />
							<br />
							🛠️<strong>Fix: </strong> Refresh your design with modern visuals,
							authentic imagery, and user-friendly layouts following UX best
							practices.
						</p>
					</section>

					<section className="reason">
						<h4 className="text-2xl pb-6">4. No Real Content Strategy</h4>
						<img
							src={whiteBoard}
							alt="Chalkboard with formulas and random numbers"
							className="pb-6"
						/>
						<p>
							Buzzwords and filler content don’t build trust. Authencity and
							value do. When a site lacks clear messaging, helpful content, or
							relevant blog posts, it not only confuses visitors — it also hurts
							your search rankings. Many businesses rely on templated text or
							AI-generated blurbs that say a lot without really saying anything
							(and trust me - people <span className="italic">do</span> know).
							That kind of content doesn't connect, convert, or communicate your
							value.
							<br />
							<br />
							🛠️ <strong>Fix:</strong> Create original, strategic content that
							speaks directly to your audience’s needs, answers real questions,
							and supports long-term SEO growth.
						</p>
					</section>

					<section className="reason">
						<h4 className="text-2xl pb-6">5. Slow Load Times</h4>
						<p className="loader mx-auto mb-6"></p>
						<p>
							In today’s fast-paced world, every second counts — and online,
							speed can make or break your business. Studies show that even a
							one-second delay in page load time can lead to a significant drop
							in conversions, bounce rates, and customer trust. Beyond user
							frustration, Google penalizes slow-loading sites in search
							rankings, which means fewer people even find your site in the
							first place.
							<br />
							<br />
							Sluggish performance is often caused by oversized images, bloated
							scripts, or cheap hosting that can’t keep up. And as more people
							browse on mobile or limited connections, performance matters more
							than ever.
							<br />
							<br />
							🛠️ <strong>Fix:</strong> Optimize performance by compressing
							images, enabling lazy loading, and using fast, secure hosting. I
							help ensure your site runs efficiently across all devices —
							improving user experience and boosting your visibility.
						</p>
					</section>
				</section>
			</>
		),
	},
];
