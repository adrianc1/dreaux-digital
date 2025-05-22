function Projects() {
	return (
		<section id="projects" className="bg-white text-gray-900 py-16 w-full">
			<div className="max-w-6xl mx-auto px-6">
				<h2 className="text-5xl font-bold text-center mb-12">PROJECTS</h2>

				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{/* Project Card 1 */}
					<div className="bg-gray-100 rounded-xl shadow overflow-hidden hover:shadow-lg transition">
						<img
							src="/project1.png"
							alt="Sports App"
							className="w-full h-56 object-cover object-top rounded-t-xl"
						/>
						<div className="p-4">
							<h3 className="text-xl font-semibold mb-2">Sports App</h3>
							<p className="text-sm text-gray-600 mb-3">
								Short description of what this project does or solves.
							</p>
							<a
								href="https://your-live-demo-or-github.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-500 hover:underline text-sm font-medium"
							>
								View Project →
							</a>
						</div>
					</div>

					{/* Project Card 2 */}
					<div className="bg-gray-100 rounded-xl shadow overflow-hidden hover:shadow-lg transition">
						<img
							src="/project4.png"
							alt="Project Portfolio"
							className="w-full h-56 object-cover object-top rounded-t-xl"
						/>
						<div className="p-4">
							<h3 className="text-xl font-semibold mb-2">Project Portfolio</h3>
							<p className="text-sm text-gray-600 mb-3">
								Another brief description here.
							</p>
							<a
								href="https://another-link.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-500 hover:underline text-sm font-medium"
							>
								View Project →
							</a>
						</div>
					</div>

					{/* Project Card 3 */}
					<div className="bg-gray-100 rounded-xl shadow overflow-hidden hover:shadow-lg transition">
						<img
							src="/project2.png"
							alt="Project Portfolio"
							className="w-full h-56 object-cover object-top rounded-t-xl"
						/>
						<div className="p-4">
							<h3 className="text-xl font-semibold mb-2">Project Portfolio</h3>
							<p className="text-sm text-gray-600 mb-3">
								Another brief description here.
							</p>
							<a
								href="https://another-link.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-500 hover:underline text-sm font-medium"
							>
								View Project →
							</a>
						</div>
					</div>

					{/* Project Card 4 */}
					<div className="bg-gray-100 rounded-xl shadow overflow-hidden hover:shadow-lg transition">
						<img
							src="/project3.png"
							alt="Project Portfolio"
							className="w-full h-56 object-cover object-top rounded-t-xl"
						/>
						<div className="p-4">
							<h3 className="text-xl font-semibold mb-2">Project Portfolio</h3>
							<p className="text-sm text-gray-600 mb-3">
								Another brief description here.
							</p>
							<a
								href="https://another-link.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-500 hover:underline text-sm font-medium"
							>
								View Project →
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Projects;
