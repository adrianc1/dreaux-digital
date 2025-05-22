function Services() {
	return (
		<section className="bg-black text-white py-16 px-6 max-w-5xl mx-auto">
			<h2
				id="services"
				className="text-4xl font-bold text-center mb-12 text-[#FFD600]"
			>
				Services
			</h2>
			<div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 mb-12">
				<div className="service-card p-6 border border-[#FFD600] rounded shadow hover:shadow-lg transition">
					<h3 className="text-2xl font-semibold mb-3 text-[#FFD600]">
						Digital Strategy & Growth
					</h3>
					<p>
						Crafting tailored digital strategies that drive traffic, engage
						users, and convert visitors into loyal customers—helping your
						business grow online.
					</p>
				</div>
				<div className="service-card p-6 border border-[#FFD600] rounded shadow hover:shadow-lg transition">
					<h3 className="text-2xl font-semibold mb-3 text-[#FFD600]">
						Web Design & Management
					</h3>
					<p>
						Designing responsive, visually striking websites and managing their
						ongoing updates, performance, and optimization to keep your brand
						shining online.
					</p>
				</div>
				<div className="service-card p-6 border border-[#FFD600] rounded shadow hover:shadow-lg transition">
					<h3 className="text-2xl font-semibold mb-3 text-[#FFD600]">
						Custom Websites & Apps
					</h3>
					<p>
						Scalable and performant apps designed to engage users on any device.
					</p>
				</div>
			</div>
			<div className="text-center">
				<a href="#contact">
					<button className="bg-[#7ddeff] text-black font-semibold px-6 py-3 rounded shadow hover:bg-[#5CD8E8] transition">
						Get Started
					</button>
				</a>
			</div>
		</section>
	);
}

export default Services;
