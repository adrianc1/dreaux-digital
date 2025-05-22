import { useState } from 'react';
import Services from './Services';
import Hero from './Hero';
import AboutUs from './About';
import Process from './Process';
import Contact from './Contact';
import Projects from './Projects';
// import Nav from './Nav';
import './App.css';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			{/* <Nav /> */}
			<Hero />
			<AboutUs />
			<Services />
			<Projects />
			<Process />
			<Contact />
		</>
	);
}

export default App;
