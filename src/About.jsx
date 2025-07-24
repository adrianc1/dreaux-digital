import { useEffect, useState } from 'react';
import aboutimg from '../src/assets/aboutimg2.jpg';

function AboutUs() {
	return (
		<section id="about" className="text-gray-900 w-full">
			{/* Image background section */}
			<div
				className="bg-cover bg-center bg-no-repeat w-full h-screen relative"
				style={{ backgroundImage: `url(${aboutimg})` }}
			>
				<div className="absolute top-172 z-10 h-full flex items-end justify-center px-4 pb-16 md:top-20 lg:top-60 lg:items-center lg:left-96">
					{' '}
					{/* Changed items-center to items-end and added pb-16 */}
					<div className="max-w-6xl mx-auto text-center">
						<h2 className="text-4xl font-bold mb-8">ABOUT DREAUX DIGITAL</h2>
						{/* Keep content minimal here since this is over the image */}
						<p className="text-xl font-semibold my-4">
							<strong>Stress less. Go with Dreaux.</strong>
						</p>
						<p className="text-lg text-left leading-10 px-4 md:px-8">
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
						</p>
					</div>
				</div>
			</div>

			{/* Yellow background section - made longer */}
			<div className="bg-[#f1b500] w-full py-96 sm:py-96 md:py-72 lg:py-12 px-4 lg:hidden">
				{' '}
				{/* Changed py-16 to py-32 for longer section */}
				<div className="max-w-6xl mx-auto">
					{/* You can add additional content here if needed */}
				</div>
			</div>
		</section>
	);
}

export default AboutUs;
