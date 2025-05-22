import { useState } from 'react';
import Services from './Services';
import Hero from './Hero';
import AboutUs from './About';
import Process from './Process';
import Contact from './Contact';
import './App.css';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Hero />
			<AboutUs />
			<Services />
			<Process />
			<Contact />
		</>
	);
}

export default App;
