import { useEffect, useState } from 'react';
import pfp from '../src/assets/pfp.png';

function AboutUs() {
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('fade-in-x');
						entry.target.classList.add('spin');
					} else {
						entry.target.classList.remove('fade-in-x');
						entry.target.classList.remove('spin');
					}
				});
			},
			{ threshold: 0 }
		);

		const pfp = document.querySelectorAll('.pfp');
		pfp.forEach((el) => observer.observe(el));

		// Optional cleanup on unmount
		return () => {
			pfp.forEach((el) => observer.unobserve(el));
		};
	}, []);

	const [isSpinning, setIsSpinning] = useState(false);

	const handleClick = () => {
		setIsSpinning(true);

		setTimeout(() => {
			setIsSpinning(false);
		}, 1000);
	};
	return (
		<section id="about" className="bg-gray-300 text-gray-900 py-16 w-full">
			<div className="max-w-4xl mx-auto px-6">
				<h2 className="text-4xl font-bold text-center mb-8">
					ABOUT DREAUX DIGITAL
				</h2>
				<img
					src={pfp}
					alt=""
					className={`pfp w-1/2 mx-auto mb-8  opacity-100 ${
						isSpinning ? 'spin' : ''
					}`}
					onPointerDown={handleClick}
				/>

				<p className="mb-6 leading-relaxed">
					Hi, I’m Adrian — the developer behind Dreaux Digital. I help
					businesses build websites and apps that don’t just look great, but
					<strong> solve real problems</strong> and{' '}
					<strong>help drive growth</strong>.
				</p>

				<p className="mb-6 leading-relaxed">
					Whether you're just starting out or looking to improve your online
					presence, I work with you to <strong>bring your ideas to life</strong>
					. I work closely with clients of all sizes to turn ideas into
					thoughtful, scalable digital products.
				</p>

				<p className="mb-6 leading-relaxed">
					I use modern tools and frameworks to build fast, accessible websites
					tailored to your goals. Every project is a chance to build something
					meaningful — and I’d love to help with yours.
				</p>
			</div>
		</section>
	);
}

export default AboutUs;
