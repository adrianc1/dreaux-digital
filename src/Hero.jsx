import { IoIosArrowDown } from 'react-icons/io';

function Hero() {
	return (
		<div className="hero-container bg-black w-full h-[100vh] text-center px-4 ">
			<div className="hero-content pt-5 h-[90%] flex flex-col justify-around lg:h-full">
				<h1 className="title dreaux-title text-[#FFD600] text-7xl font-bold tracking-wider md:text-9xl">
					DREAUX <h2 className="title digital-title tracking-wide">DIGITAL</h2>
				</h1>
				<div className="">
					<h3 className="tagline text-white text-2xl mb-4 md:text-4xl">
						Turning perception into reality.
					</h3>
					<p className="text-white text-sm md:text-xl">
						Custom websites, apps, and web services — built with strategy,
						crafted for growth.
					</p>
				</div>
				<a href="#services">
					<button className="bg-[#7ddeff] px-4 py-2 rounded font-semibold hover:bg-[#5CD8E8] transition w-40 mx-auto text-neutral-950 text-center md:w-52 md:py-4">
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
