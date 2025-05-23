import { useState, useEffect } from 'react';
import Services from './Services';
import Hero from './Hero';
import AboutUs from './About';
import Process from './Process';
import Contact from './Contact';
import Projects from './Projects';
import Nav from './Nav';
import Footer from './Footer';
import './App.css';

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
		<>
			<Nav onClick={toggleNav} showNav={showNav} showTitle={showTitle} />
			<Hero />
			<AboutUs />
			<Services />
			<Projects />
			<Process />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
