import Services from './Services';
import Hero from './Hero';
import AboutUs from './About';
import Process from './Process';
import Contact from './Contact';
import Projects from './Projects';

export default function Home() {
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
