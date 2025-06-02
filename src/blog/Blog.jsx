import { Link } from 'react-router-dom';

export default function Blog() {
	const posts = [
		{
			slug: 'common-website-mistakes-small-business',
			title: 'Top 5 Reasons Small Business Websites Fail (and Fixes)',
		},
	];

	return (
		<section className="p-6 mt-16 flex-1">
			<h1 className="text-3xl font-bold mb-4">Blog</h1>
			<ul>
				{posts.map((post) => (
					<li key={post.slug} className="border-b-1 border-b-black">
						<Link to={`/blog/${post.slug}`} className="text-blue-600 underline">
							{post.title}
						</Link>
					</li>
				))}
			</ul>
		</section>
	);
}
