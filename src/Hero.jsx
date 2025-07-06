import { IoIosArrowDown } from 'react-icons/io';

function Hero() {
	return (
		<div className="hero-container bg-black w-full h-screen text-center px-4 flex flex-col justify-center m-0 p-0 ">
			<div className="  hero-content h-[90%] flex flex-col justify-around lg:h-full">
				<div className="pt-10 opacity-0 fade-in-element">
					<h1 className=" title  dreaux-title text-[#FFD600] text-7xl font-bold tracking-wider md:text-9xl lg:pt-16">
						DREAUX{' '}
					</h1>
					<h2 className="title digital-title tracking-wide text-[#FFD600] text-6xl font-bold md:text-9xl ">
						DIGITAL
					</h2>
				</div>

				<div className="">
					<h3 className="tagline text-white text-2xl mb-8 md:text-4xl">
						Web development and management, handling your online presence from
						strategy to launch, so you can focus on growing your business.
					</h3>
				</div>
				<a href="#services">
					<button className="bg-[#7ddeff] px-4 text-lg font-bold py-2 rounded hover:bg-[#5CD8E8] transition w-45 mx-auto text-neutral-950 text-center md:w-52 md:py-4 cursor-pointer">
						View Services
					</button>
				</a>
				<a href="#about">
					<IoIosArrowDown className="text-[#FFD600] text-6xl mx-auto mt-4 animate-bounce" />
				</a>
			</div>
		</div>
	);
}

export default Hero;
