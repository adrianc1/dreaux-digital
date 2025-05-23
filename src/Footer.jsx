function Footer() {
	return (
		<div className="footer-container bg-black h-12 flex justify-between px-8 align-middle my-auto">
			<p className="brand text-[#FFD600] font-bold my-auto">DREAUX DIGITAL</p>

			<p className="copyright text-white my-auto ">
				© {new Date().getFullYear()} Dreaux Digital. All rights reserved. <br />
			</p>
			<p className="copyright text-white my-auto text-sm ">
				Made by{' '}
				<a href="https://adriancrosby.netlify.app/" className="underline"></a>{' '}
				adrian@dreauxdigital.com
			</p>
		</div>
	);
}

export default Footer;
