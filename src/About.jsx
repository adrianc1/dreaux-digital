import { useEffect, useState } from 'react';
import pfp from '../src/assets/pfp.png';

function AboutUs() {
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('spin');
						entry.target.classList.add('fade-in-x');
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
		<section id="about" className="bg-gray-300 text-gray-900 py-16 w-full ">
			<div className="max-w-6xl mx-auto ">
				<h2 className="text-4xl font-bold text-center mb-8">
					ABOUT DREAUX DIGITAL
				</h2>
				<div className="flex flex-col-reverse lg:flex-row items-center justify-center w-full  mx-auto">
					<p className=" w-full text-2xl leading-12 flex-3 px-12">
						Dreaux Digital builds clean, responsive websites and custom web apps
						designed to drive traffic and support your growth. We handle the
						design, development, and ongoing site management—so you can{' '}
						<span className="italic underline">focus on your business.</span>
						<br />
						<br />
						<strong>Stress less. Go with Dreaux.</strong>
					</p>
					<div className="flex-2">
						<img
							src={pfp}
							alt=""
							className={`pfp w-2/3 mx-auto mb-8 opacity-100 md:w-1/3 lg:w-2/3 ${
								isSpinning ? 'spin' : ''
							}`}
							onPointerDown={handleClick}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutUs;
