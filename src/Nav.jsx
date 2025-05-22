import { GiHamburgerMenu } from 'react-icons/gi';

function Nav() {
	return (
		<div className="nav flex justify-between w-full bg-black">
			<span>x</span>
			<GiHamburgerMenu className="w-auto text-white" />;
		</div>
	);
}

export default Nav;
