import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Home';
import Blog from './blog/index.jsx';
import BlogPost from './blog/BlogPost';
import Nav from './Nav';
import Footer from './Footer';

function App() {
	const [showNav, setShowNav] = useState(false);
	const [showTitle, setShowTitle] = useState(false); // for "Dreaux Digital"
	const isBlogPage =
		location.pathname === '/blog' || location.pathname.startsWith('/blog/');

	// Toggle menu
	function toggleNav() {
		setShowNav((prev) => !prev);
	}

	// Listen to scroll and toggle title visibility
	useEffect(() => {
		function handleScroll() {
			if (isBlogPage || window.scrollY > 100) {
				setShowTitle(true);
			} else {
				setShowTitle(false);
			}
		}

		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className="flex flex-col min-h-screen  ">
			<Nav
				onClick={toggleNav}
				showNav={showNav}
				showTitle={showTitle}
				setShowTitle={setShowTitle}
				isBlogPage={isBlogPage}
			/>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/blog/:slug" element={<BlogPost />} />
			</Routes>

			<Footer />
		</div>
	);
}

export default App;
