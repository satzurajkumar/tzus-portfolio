// Header Component
export function Header() {
	return (
		<header className="py-6">
			<div className="container mx-auto flex items-center justify-between">
				<a
					href="#"
					className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
				>
					S-Tzu
				</a>
				<nav>
					<ul className="flex space-x-6">
						<li>
							<a
								href="#about"
								className="text-gray-300 hover:text-white transition-colors duration-300"
							>
								About
							</a>
						</li>
						<li>
							<a
								href="#projects"
								className="text-gray-300 hover:text-white transition-colors duration-300"
							>
								Projects
							</a>
						</li>
						<li>
							<a
								href="#contact"
								className="text-gray-300 hover:text-white transition-colors duration-300"
							>
								Contact
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
