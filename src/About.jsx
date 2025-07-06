import { useEffect, useState } from 'react';
import pfp from '../src/assets/pfp.png';
import aboutimg from '../src/assets/aboutimg2.jpg';

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
			<div className=" mx-auto ">
				<div className="flex flex-col lg:flex-col items-center justify-center w-full mx-auto">
					<div className="max-w-full overflow-hidden">
						<img src={aboutimg} alt="" className="w-full mb-8" />
					</div>
					<div className="max-w-6xl">
						<h2 className="text-4xl font-bold text-center mb-8">
							ABOUT DREAUX DIGITAL
						</h2>
						<p className=" w-full text-lg leading-10 flex-2 px-8">
							Dreaux Digital is a dedicated web development studio specializing
							in crafting modern, responsive, and highly functional front-end
							solutions. Leveraging expertise in web development and ongoing
							digital presence management, Dreaux Digital ensures online assets
							are optimized and up-to-date,{' '}
							<strong>allowing you to focus on your core business.</strong>{' '}
							Dreaux Digital partners with businesses and individuals to bring
							their digital visions to life—from engaging websites to dynamic
							web applications.
							<br />
							<br />
							At Dreaux Digital, the focus is on delivering digital experiences
							that not only meet immediate needs but also scale with future
							ambitions. Clear communication, meticulous attention to detail,
							and a commitment to project success are core principles at Dreaux
							Digital.
							<br />
							<br />
							<span className="no-wrap text-2xl text-center mx-auto">
								<strong>Stress less. Go with Dreaux.</strong>
							</span>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutUs;
