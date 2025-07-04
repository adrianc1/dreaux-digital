import { useEffect, useState } from 'react';
import pfp from '../src/assets/pfp.png';
import aboutimg from '../src/assets/aboutimg.jpg';

function AboutUs() {
	// useEffect(() => {
	// 	const observer = new IntersectionObserver(
	// 		(entries) => {
	// 			entries.forEach((entry) => {
	// 				if (entry.isIntersecting) {
	// 					entry.target.classList.add('spin');
	// 					entry.target.classList.add('fade-in-x');
	// 				} else {
	// 					entry.target.classList.remove('fade-in-x');
	// 					entry.target.classList.remove('spin');
	// 				}
	// 			});
	// 		},
	// 		{ threshold: 0 }
	// 	);

	// 	const pfp = document.querySelectorAll('.pfp');
	// 	pfp.forEach((el) => observer.observe(el));

	// 	// Optional cleanup on unmount
	// 	return () => {
	// 		pfp.forEach((el) => observer.unobserve(el));
	// 	};
	// }, []);

	// const [isSpinning, setIsSpinning] = useState(false);

	// const handleClick = () => {
	// 	setIsSpinning(true);

	// 	setTimeout(() => {
	// 		setIsSpinning(false);
	// 	}, 1000);
	// };
	return (
		<section id="about" className="bg-gray-300 text-gray-900 w-full ">
			<div className="max-w-6xl mx-auto ">
				<div className="flex flex-col lg:flex-row items-center justify-center w-full mx-auto">
					<div className="max-w-full overflow-hidden">
						<img src={aboutimg} alt="" className="w-full mb-8" />
					</div>
					<h2 className="text-4xl font-bold text-center mb-8">
						ABOUT DREAUX DIGITAL
					</h2>
					<p className=" w-full text-2xl leading-12 flex-2 px-8">
						Dreaux Digital is a dedicated web development studio specializing in
						crafting modern, responsive, and highly functional front-end
						solutions. Leveraging expertise in JavaScript and React, we partner
						with businesses and individuals to bring their digital visions to
						life, from engaging websites to dynamic web applications.
						<br />
						<br />
						At Dreaux Digital, our mission is to deliver digital experiences
						that not only meet your immediate needs but also scale with your
						future ambitions. Clear communication, meticulous attention to
						detail, and a commitment to project success are core principles at
						Dreaux Digital.
						<br />
						<br />
						<strong className="no-wrap">Stress less. Go with Dreaux.</strong>
					</p>
				</div>
			</div>
		</section>
	);
}

export default AboutUs;
