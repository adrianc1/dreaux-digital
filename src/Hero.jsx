import { IoArrowDownOutline } from 'react-icons/io5';
import { IoIosArrowDown } from 'react-icons/io';

function Hero() {
	return (
		<div className="hero-container bg-black w-full h-[100vh] text-center px-4 ">
			<div className="hero-content h-[90%] flex flex-col justify-around">
				<h1 className="title dreaux-title text-[#FFD600] text-7xl font-bold tracking-widest  ">
					DREAUX <h2 className="title digital-title tracking-wide">DIGITAL</h2>
				</h1>
				<div className="">
					<h3 className="tagline text-white text-2xl mb-4">
						Turning perception into reality.
					</h3>
					<p className="text-white text-sm">
						Custom websites, apps, and web services — built with strategy,
						crafted for growth.
					</p>
				</div>
				<a href="#services">
					<button className="bg-[#7ddeff]  px-4 py-2 rounded font-semibold hover:bg-[#5CD8E8] transition w-36 mx-auto text-neutral-950">
						View Services
					</button>
				</a>
				<a href="#about">
					{/* <IoArrowDownOutline className="text-[#FFD600] text-6xl mx-auto mt-4 animate-bounce" /> */}

					<IoIosArrowDown className="text-[#FFD600] text-6xl mx-auto mt-4 animate-bounce" />
				</a>
			</div>
		</div>
	);
}

export default Hero;
