import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';

import Nav from './Nav';
import Footer from './Footer';

function App() {
	const [showNav, setShowNav] = useState(false);
	const [showTitle, setShowTitle] = useState(false); // for "Dreaux Digital"

	// Toggle menu
	function toggleNav() {
		setShowNav((prev) => !prev);
	}

	// Listen to scroll and toggle title visibility
	useEffect(() => {
		function handleScroll() {
			if (window.scrollY > 100) {
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
			<Nav onClick={toggleNav} showNav={showNav} showTitle={showTitle} />
			<Home />
			<Footer />
		</div>
	);
}

export default App;
