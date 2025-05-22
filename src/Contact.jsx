function Contact() {
	return (
		<section
			id="contact"
			className="bg-white text-gray-900 py-16 px-6 max-w-3xl mx-auto"
		>
			<h2 className="text-4xl font-bold text-center mb-8">Get In Touch</h2>
			<p className="text-center mb-10 max-w-xl mx-auto">
				Ready to start your project or just want to say hello? Send a message
				and I’ll get back to you ASAP.
			</p>

			<form
				className="space-y-6 max-w-md mx-auto"
				onSubmit={(e) => {
					e.preventDefault();
					alert('Form submission logic here');
				}}
			>
				<div>
					<label htmlFor="name" className="block mb-2 font-semibold">
						Name
					</label>
					<input
						id="name"
						type="text"
						required
						className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#7ddeff]"
					/>
				</div>

				<div>
					<label htmlFor="email" className="block mb-2 font-semibold">
						Email
					</label>
					<input
						id="email"
						type="email"
						required
						className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#7ddeff]"
					/>
				</div>

				<div>
					<label htmlFor="message" className="block mb-2 font-semibold">
						Message
					</label>
					<textarea
						id="message"
						rows="5"
						required
						className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#7ddeff]"
					/>
				</div>

				<button
					type="submit"
					className="bg-[#7ddeff] hover:bg-[#5cd8e8] text-black font-semibold px-6 py-3 rounded w-full transition"
				>
					Send Message
				</button>
			</form>
		</section>
	);
}

export default Contact;
