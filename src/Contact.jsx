import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

function Contact() {
	const [status, setStatus] = useState('idle'); // idle | sending | sent | error
	const form = useRef();

	function sendEmail(e) {
		e.preventDefault();
		const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
		const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
		const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

		setStatus('sending');
		emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
			() => {
				setStatus('sent');
				form.current.reset();
			},
			(err) => {
				setStatus('error');
				console.error(err);
			},
		);
	}

	return (
		<>
			<style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:ital,wght@0,300;0,400;0,600;0,700;1,300&display=swap');
        .font-bebas  { font-family: 'Bebas Neue', sans-serif; }
        .font-barlow { font-family: 'Barlow', sans-serif; }
        .clip-cta { clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px)); }
        .field-input {
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(255,255,255,0.15);
          color: white;
          width: 100%;
          padding: 10px 0;
          font-family: 'Barlow', sans-serif;
          font-weight: 300;
          font-size: 15px;
          outline: none;
          transition: border-color 0.2s ease;
        }
        .field-input::placeholder { color: rgba(255,255,255,0.2); }
        .field-input:focus { border-color: rgba(255,214,0,0.6); }
        .field-label {
          font-family: 'Barlow', sans-serif;
          font-weight: 300;
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          display: block;
          margin-bottom: 6px;
        }
        @keyframes expandX { from{transform:scaleX(0);opacity:0} to{transform:scaleX(1);opacity:1} }
        .divider-anim { transform-origin:left; animation: expandX 0.6s ease both 0.2s; }
        @keyframes modalIn { from{opacity:0;transform:scale(0.97)} to{opacity:1;transform:scale(1)} }
        .modal-anim { animation: modalIn 0.25s ease both; }
      `}</style>

			<section
				id="contact"
				className="relative bg-black overflow-hidden py-24 px-6 font-barlow"
			>
				{/* Grid lines */}
				<div className="absolute inset-0 pointer-events-none">
					{[25, 50, 75].map((p) => (
						<div
							key={p}
							className="absolute top-0 bottom-0 w-px bg-white opacity-[0.03]"
							style={{ left: `${p}%` }}
						/>
					))}
				</div>

				<div className="relative z-10 max-w-[1400px] mx-auto">
					<div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
						{/* Left — heading + info */}
						<div>
							<div className="flex items-center gap-3 mb-6">
								<span className="w-2 h-2 rounded-full bg-[#FFD600] shrink-0" />
								<span className="font-barlow font-light text-[11px] tracking-[0.3em] uppercase text-white/40">
									Let's Connect
								</span>
							</div>
							<div className="overflow-hidden mb-1">
								<h2
									className="font-bebas text-white leading-none tracking-wide"
									style={{ fontSize: 'clamp(52px, 8vw, 110px)' }}
								>
									GET IN
								</h2>
							</div>
							<div className="overflow-hidden">
								<h2
									className="font-bebas text-[#FFD600] leading-none tracking-wide"
									style={{ fontSize: 'clamp(52px, 8vw, 110px)' }}
								>
									TOUCH
								</h2>
							</div>
							<div className="divider-anim w-12 h-[2px] bg-[#FFD600] mt-5 mb-8" />
							<p
								className="font-barlow font-light text-white/45 max-w-sm leading-relaxed"
								style={{ fontSize: 'clamp(14px, 1.2vw, 16px)' }}
							>
								Ready to start your project or just want to say hello? Send a
								message and I'll get back to you ASAP.
							</p>

							{/* Decorative detail */}
							<div className="mt-12 border-l border-[#FFD600]/30 pl-5 space-y-1">
								<p className="font-bebas text-white/20 text-sm tracking-widest uppercase">
									Response Time
								</p>
								<p className="font-bebas text-[#FFD600] text-2xl tracking-wide">
									Within 24 Hours
								</p>
							</div>
						</div>

						{/* Right — form */}
						<div className="relative">
							{/* Sent modal */}
							{status === 'sent' && (
								<div className="modal-anim absolute inset-0 z-20 bg-black border border-[#FFD600]/30 flex flex-col items-center justify-center gap-6 p-10 text-center">
									<span className="font-bebas text-[#FFD600] text-6xl leading-none">
										✓
									</span>
									<h3 className="font-bebas text-white text-3xl tracking-wide">
										Message Sent
									</h3>
									<p className="font-barlow font-light text-white/40 text-sm">
										Thanks! I'll be in touch shortly.
									</p>
									<button
										onClick={() => setStatus('idle')}
										className="clip-cta font-barlow font-bold text-[11px] tracking-[0.2em] uppercase bg-[#FFD600] text-black px-8 py-3 transition-all duration-200 hover:bg-white cursor-pointer"
									>
										Done
									</button>
								</div>
							)}

							{/* Sending overlay */}
							{status === 'sending' && (
								<div className="modal-anim absolute inset-0 z-20 bg-black/80 border border-white/10 flex items-center justify-center">
									<div className="flex items-center gap-4">
										<div className="w-5 h-5 border-2 border-[#FFD600] border-t-transparent rounded-full animate-spin" />
										<span className="font-bebas text-white tracking-widest text-xl">
											Sending...
										</span>
									</div>
								</div>
							)}

							<form ref={form} onSubmit={sendEmail} className="space-y-8">
								<div>
									<label className="field-label" htmlFor="name">
										Name
									</label>
									<input
										id="name"
										type="text"
										name="name"
										required
										placeholder="Your name"
										className="field-input"
									/>
								</div>
								<div>
									<label className="field-label" htmlFor="email">
										Email
									</label>
									<input
										id="email"
										type="email"
										name="email"
										required
										placeholder="your@email.com"
										className="field-input"
									/>
								</div>
								<div>
									<label className="field-label" htmlFor="message">
										Message
									</label>
									<textarea
										id="message"
										rows="5"
										name="message"
										required
										placeholder="Tell me about your project..."
										className="field-input resize-none"
									/>
								</div>

								{status === 'error' && (
									<p className="font-barlow text-sm text-red-400/70">
										Failed to send. Please try again.
									</p>
								)}

								<button
									type="submit"
									disabled={status === 'sending'}
									className="clip-cta w-full font-barlow font-bold text-[12px] tracking-[0.2em] uppercase bg-[#FFD600] text-black py-4 transition-all duration-200 hover:bg-white hover:shadow-[0_0_30px_rgba(255,214,0,0.25)] disabled:opacity-50 cursor-pointer"
								>
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>

				<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFD600]/20 to-transparent" />
			</section>
		</>
	);
}

export default Contact;
