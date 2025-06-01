import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

function Contact() {
	const [showMessageSent, setShowMessageSent] = useState(true);
	const form = useRef();

	function sendEmail(e) {
		const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
		const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
		const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
		e.preventDefault();
		emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
			() => {
				setShowMessageSent(true);
				form.current.reset();
			},
			(error) => {
				alert('failed to send message, please try again', error.text);
			}
		);
	}

	const closeDialog = () => {
		setShowMessageSent(false);
	};

	return (
		<section
			id="contact"
			className="bg-white text-gray-900 py-16 px-6 max-w-4xl mx-auto"
		>
			<h2 className="text-4xl font-bold text-center mb-8 uppercase">
				Get In Touch
			</h2>
			<p className="text-center mb-10 max-w-4xl mx-auto">
				Ready to start your project or just want to say hello? Send a message
				and I’ll get back to you ASAP.
			</p>

			{showMessageSent && (
				<div className="message-sent-modal w-3/4 max-w-4xl border-4 px-8 py-16 text-center absolute bg-white mx-auto right-0 left-0">
					<h3 className="mb-16 font-bold">
						Thank you! Your message was successfully sent.
					</h3>
					<button
						className="bg-[#FFD600] hover:bg-[#e8d577] text-black font-semibold px-6 py-3 rounded w-3/4 transition cursor-pointer border-1 border-black"
						onPointerDown={closeDialog}
					>
						Okay
					</button>
				</div>
			)}

			<form
				ref={form}
				onSubmit={sendEmail}
				className="space-y-6 max-w-md mx-auto"
			>
				<div>
					<label htmlFor="name" className="block mb-2 font-semibold">
						Name
					</label>
					<input
						id="name"
						type="text"
						name="name"
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
						name="email"
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
						name="message"
						required
						className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#7ddeff]"
					/>
				</div>

				<button
					type="submit"
					className="bg-[#FFD600] hover:bg-[#000000] hover:text-[#FFD600] text-black font-semibold px-6 py-3 rounded w-full transition cursor-pointer"
				>
					Send Message
				</button>
			</form>
		</section>
	);
}

export default Contact;
