import sportsAppImg from './assets/laconner.png';
import resume from './assets/ezresume.png';
import coffeeShopImg from './assets/project3.png';
import portfolioImg from './assets/project4.png';
function Projects() {
	return (
		<section id="projects" className="bg-white text-gray-900 py-16 w-full">
			<div className="max-w-6xl mx-auto px-6">
				<h2 className="text-4xl font-bold text-center mb-12">PROJECTS</h2>

				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{/* Project Card 4 */}
					<div className="bg-gray-100 rounded-xl shadow overflow-hidden hover:shadow-lg transition">
						<img
							src={resume}
							alt="Project Portfolio"
							className="w-full h-56 object-contain object-top rounded-t-xl"
						/>
						<div className="p-4">
							<h3 className="text-xl font-semibold mb-2">Resume Builder</h3>
							<p className="text-sm text-gray-600 mb-3">
								Easy Resume Builder and Download
							</p>
							<a
								href="https://ezresumepro.netlify.app/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-500 hover:underline text-sm font-medium cursor-pointer"
							>
								View Project →
							</a>
						</div>
					</div>
					{/* Project Card 1 */}
					<div className="bg-gray-100 rounded-xl shadow overflow-hidden hover:shadow-lg transition">
						<img
							src={portfolioImg}
							alt="Retro Portfolio"
							className="w-full h-56 object-cover object-top rounded-t-xl"
						/>
						<div className="p-4">
							<h3 className="text-xl font-semibold mb-2">
								Retro Win95 OS Portfolio
							</h3>
							<p className="text-sm text-gray-600 mb-3">
								Windows98 OS inspired responsive retro portfolio.
							</p>
							<a
								href="https://adriancrosby.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-500 hover:underline text-sm font-medium cursor-pointer"
							>
								View Project →
							</a>
						</div>
					</div>

					{/* Project Card 2 */}
					<div className="bg-gray-100 rounded-xl shadow overflow-hidden hover:shadow-lg transition">
						<img
							src={coffeeShopImg}
							alt="Coffee Shop Screenshot"
							className="w-full h-56 object-cover object-top rounded-t-xl"
						/>
						<div className="p-4">
							<h3 className="text-xl font-semibold mb-2">
								Cafe w/ Menu Website
							</h3>
							<p className="text-sm text-gray-600 mb-3">
								A minimalist-feeling cafe website with a food and drink menu.
							</p>
							<a
								href="https://olivascafe.netlify.app"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-500 hover:underline text-sm font-medium cursor-pointer"
							>
								View Project →
							</a>
						</div>
					</div>

					{/* Project Card 3 */}
					<div className="bg-gray-100 rounded-xl shadow overflow-hidden hover:shadow-lg transition">
						<img
							src={sportsAppImg}
							alt="Sports App Screenshot"
							className="w-full h-56 object-cover object-top rounded-t-xl"
						/>
						<div className="p-4">
							<h3 className="text-xl font-semibold mb-2">
								Sports Progressive Web App
							</h3>
							<p className="text-sm text-gray-600 mb-3">
								High School Sports PWA centralized web app for parents,
								teachers, and students for team information.
							</p>
							<a
								href="https://laconnersportsapp.netlify.app/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-500 hover:underline text-sm font-medium cursor-pointer"
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
