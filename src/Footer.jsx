function Footer() {
	return (
		<div className="footer-container bg-black h-14 w-full px-4 bottom-0 flex flex-col">
			<p className="brand text-[#FFD600] font-bold my-auto flex-2 pt-2">
				DREAUX DIGITAL
			</p>
			<p className="copyright text-white text-xs flex-1 pb-2">
				© {new Date().getFullYear()} Dreaux Digital. All rights reserved. <br />
			</p>
		</div>
	);
}

export default Footer;
