import { GiHamburgerMenu } from 'react-icons/gi';
import { IoCloseSharp } from 'react-icons/io5';

function Nav({ showNav, onClick, showTitle }) {
	return (
		<div>
			<div
				className={`nav-menu fixed w-full text-center text-[#FFD600] bg-black transition-all duration-400 ${
					showNav ? 'top-16' : '-top-96'
				}`}
			>
				<ul
					className="flex flex-col gap-8 pb-4 pt-4 font-bold cursor-pointer"
					onClick={onClick}
				>
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="#services">Services</a>
					</li>
					<li>
						<a href="#projects">Projects</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
					{/* <li>
						<a href="#blog">Blog</a>
					</li> */}
				</ul>
			</div>
			<div
				className="text-[#FFD600] font-bold text-2xl transition-opacity duration-900 fixed top-4 px-5 z-51"
				style={{ opacity: showTitle ? 1 : 0 }}
			>
				DREAUX DIGITAL
			</div>

			<div className="nav fixed top-0 right-0 w-full h-10 bg-black flex justify-end items-center px-6 py-8 z-50">
				{showNav ? (
					<IoCloseSharp
						className="text-white text-3xl cursor-pointer transition-all duration-400"
						onClick={onClick}
					/>
				) : (
					<GiHamburgerMenu
						className="text-white text-3xl cursor-pointer transition-all duration-400"
						onClick={onClick}
					/>
				)}
			</div>
		</div>
	);
}

export default Nav;
