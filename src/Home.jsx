import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Services from './Services';
import Hero from './Hero';
import AboutUs from './About';
import Process from './Process';
import Contact from './Contact';
import Projects from './Projects';

export default function Home() {
	const location = useLocation();

	useEffect(() => {
		if (location.hash) {
			const id = location.hash.replace('#', '');
			const el = document.getElementById(id);
			if (el) el.scrollIntoView({ behavior: 'smooth' });
		}
	}, [location]);
	return (
		<div className="home-container flex-1">
			<Hero />
			<AboutUs />
			<Services />
			<Projects />
			<Process />
			<Contact />
		</div>
	);
}
