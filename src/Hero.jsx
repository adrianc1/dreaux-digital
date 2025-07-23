import { IoIosArrowDown } from 'react-icons/io';
import heroBg from './assets/hero-bg.jpg';

function Hero() {
	return (
		<div
			className="hero-container bg-black w-full h-screen text-center px-4 flex flex-col justify-center m-0 p-0"
			style={{
				backgroundImage: `linear-gradient(rgba(0, 0, 0,0.5), rgba(0, 0, 0,0.5)), url(${heroBg})`,
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
			}}
		>
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
					<h3 className="tagline max-w-6xl mx-auto text-white text-2xl mb-8 md:text-4xl lg:px-8">
						Web development and management, so you can focus on growing your
						business.
					</h3>
				</div>
				<a href="#services">
					<button className="bg-[#FFD600] hover:bg-[#e6c100] text-black font-bold text-lg px-8 py-4 rounded-xl shadow-[0_0_20px_rgba(255,214,0,0.3)] hover:shadow-[0_0_30px_rgba(255,214,0,0.5)] transform hover:scale-105 transition-all duration-300 w-full max-w-xs mx-auto md:max-w-sm cursor-pointer">
						View Services
					</button>
				</a>
				<a href="#about">
					<IoIosArrowDown className="text-white text-6xl mx-auto mt-4 animate-bounce" />
				</a>
			</div>
		</div>
	);
}

export default Hero;
