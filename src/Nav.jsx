import { GiHamburgerMenu } from 'react-icons/gi';
import { IoCloseSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

function Nav({ showNav, onClick, showTitle, isBlogPage }) {
	return (
		<div>
			<div
				className={`nav-menu fixed w-full text-center text-[#FFD600] bg-black transition-all duration-400 ${
					showNav ? 'top-16' : '-top-96'
				} z-30`}
			>
				<ul
					className="flex flex-col gap-8 pb-4 pt-4 font-bold cursor-pointer"
					onClick={onClick}
				>
					<Link to="/#about">
						<li>About</li>
					</Link>
					<Link to="/#services">
						<li>Services</li>
					</Link>
					<Link to="/#projects">
						<li>Projects</li>
					</Link>
					<Link to="/#contact">
						<li>Contact</li>
					</Link>
					<Link to="/blog">
						<li>Blog</li>
					</Link>
				</ul>
			</div>
			{!isBlogPage && (
				<div
					className="text-[#FFD600] font-bold text-2xl transition-opacity duration-900 fixed top-4 px-5 z-90"
					style={{ opacity: showTitle ? 1 : 0 }}
				>
					DREAUX DIGITAL
				</div>
			)}

			{isBlogPage && (
				<div
					className="text-[#FFD600] font-bold text-2xl transition-opacity duration-900 fixed top-4 px-5 z-90"
					style={{ opacity: isBlogPage ? 1 : 0 }}
				>
					DREAUX DIGITAL
				</div>
			)}

			<div className="nav fixed top-0 right-0 w-full h-10 bg-black flex justify-end items-center px-6 py-8 z-50">
				{showNav ? (
					<IoCloseSharp
						className="text-white text-3xl cursor-pointer transition-all duration-800"
						onClick={onClick}
					/>
				) : (
					<GiHamburgerMenu
						className="text-white text-3xl cursor-pointer transition-all duration-800"
						onClick={onClick}
					/>
				)}
			</div>
		</div>
	);
}

export default Nav;
