import { useEffect } from 'react';
function Services() {
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('fade-in-element');
					} else {
						entry.target.classList.remove('fade-in-element');
					}
				});
			},
			{ threshold: 0.1 }
		);

		const serviceElements = document.querySelectorAll('.service-card');
		serviceElements.forEach((el) => observer.observe(el));

		// Optional cleanup on unmount
		return () => {
			serviceElements.forEach((el) => observer.unobserve(el));
		};
	}, []);
	return (
		<section id="services" className="bg-black text-white py-16 px-6 w-full ">
			<div className="max-w-5xl mx-auto">
				<h2 className="text-4xl font-bold text-center mb-12 text-[#FFD600] uppercase">
					Services
				</h2>
				<div className="service-container grid gap-10 md:grid-cols-2 lg:grid-cols-3 mb-12 ">
					<div className="service-card hover:scale-115 p-6 border border-[#FFD600] rounded shadow hover:shadow-lg transition opacity-0">
						<h3 className="text-2xl font-semibold mb-3 text-[#FFD600]">
							Custom Web Design & Development
						</h3>
						<p>
							Build a fast, responsive website or web app tailored to your goals
							— designed to engage users, reflect your brand, and support your
							growth online.
						</p>
					</div>

					<div className="service-card hover:scale-115 p-6 border border-[#FFD600] rounded shadow hover:shadow-lg transition opacity-0">
						<h3 className="text-2xl font-semibold mb-3 text-[#FFD600]">
							Support & Optimization
						</h3>
						<p>
							Stay focused on your business while I keep your site or app
							updated, optimized, and running smoothly — with flexible support
							as you grow.
						</p>
					</div>

					<div className="service-card hover:scale-115 p-6 border border-[#FFD600] rounded shadow hover:shadow-lg transition opacity-0">
						<h3 className="text-2xl font-semibold mb-3 text-[#FFD600]">
							Analytics & Performance
						</h3>
						<p>
							Turn more visitors into customers by speeding up your site,
							optimizing user experience, and using data to boost conversions
							and grow revenue.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Services;
