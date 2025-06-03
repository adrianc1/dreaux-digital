import { useParams } from 'react-router-dom';
import { blogData } from './blogData';
import { Link } from 'react-router-dom';

function BlogPost() {
	const { slug } = useParams();
	const post = blogData.find((p) => p.slug === slug);
	if (!post) return <div className="">Cannot Find Entry</div>;

	// You can later fetch actual blog data with the slug
	return (
		<section className="p-6 flex-1 mt-16 flex flex-col ">
			<h1 className="text-4xl">{post.title}</h1>
			<h2 className="py-6">{post.tagline}</h2>
			<h3 className="pt-2">
				Written By: <strong>{post.author}</strong>
			</h3>
			<h4 className="">Date: {post.date}</h4>

			<section>{post.content}</section>
			<section className="mt-12 border-t pt-8 mx-auto w-full flex flex-col justify-center items-center">
				<h3 className="text-xl font-semibold mb-4">
					Ready to fix what’s holding your website back?
				</h3>
				<p className="mb-6">
					Whether your site needs a full redesign or just a few strategic
					improvements, I’m here to help. At Dreaux Digital, I build fast,
					modern websites that convert visitors into customers — built around
					your goals, not guesswork.
				</p>

				<Link to="/#contact">
					<button className="bg-[#FFD600] text-black font-bold px-6 py-3 rounded hover:bg-[#e5c200] transition  ">
						Let’s Talk About Your Site
					</button>
				</Link>
			</section>
		</section>
	);
}

export default BlogPost;
