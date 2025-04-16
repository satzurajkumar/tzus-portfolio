// Projects Section Component
import React, { useState } from "react";
import { projectsData } from "@/data/projectData";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Search, ThumbsUp } from "lucide-react";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from "@/components/ui/cards";
import { cardVariants, techVariants } from "@/components/helperFunct/helper";

import { Input } from "@/components/ui/inputs";

import { cn } from "@/lib/utils";
export function ProjectsSection() {
	const [selectedType, setSelectedType] = useState<
		"all" | "search" | "recommendation"
	>("all");
	const [searchQuery, setSearchQuery] = useState("");

	const filteredProjects = projectsData.filter((project) => {
		const typeMatch = selectedType === "all" || project.type === selectedType;
		const searchMatch =
			project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			project.description.toLowerCase().includes(searchQuery.toLowerCase());
		return typeMatch && searchMatch;
	});

	return (
		<section id="projects" className="py-16 md:py-24">
			<div className="container mx-auto">
				<h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
					Projects
				</h2>

				{/* Project Filters */}
				<div className="flex flex-wrap justify-center gap-4 mb-8">
					<Button
						variant={selectedType === "all" ? "default" : "outline"}
						onClick={() => setSelectedType("all")}
						className={cn(
							"text-gray-300 hover:text-white",
							selectedType === "all"
								? "bg-gradient-to-r from-blue-500/80 to-purple-500/80 text-white border-white/20"
								: "border border-gray-700 hover:bg-gray-800/50"
						)}
					>
						All
					</Button>
					<Button
						variant={selectedType === "search" ? "default" : "outline"}
						onClick={() => setSelectedType("search")}
						className={cn(
							"text-gray-300 hover:text-white",
							selectedType === "search"
								? "bg-gradient-to-r from-blue-500/80 to-purple-500/80 text-white border-white/20"
								: "border border-gray-700 hover:bg-gray-800/50"
						)}
					>
						Search
					</Button>
					<Button
						variant={selectedType === "recommendation" ? "default" : "outline"}
						onClick={() => setSelectedType("recommendation")}
						className={cn(
							"text-gray-300 hover:text-white",
							selectedType === "recommendation"
								? "bg-gradient-to-r from-blue-500/80 to-purple-500/80 text-white border-white/20"
								: "border border-gray-700 hover:bg-gray-800/50"
						)}
					>
						Recommendation
					</Button>
					{/* Search Input */}
					<div className="flex items-center">
						<Input
							type="text"
							placeholder="Search projects..."
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							className="w-48 sm:w-64 bg-gray-800/50 text-gray-300 border-gray-700 placeholder:text-gray-500"
						/>
						<Search className="w-5 h-5 text-gray-400 ml-2" />
					</div>
				</div>

				{/* Project Cards */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					<AnimatePresence>
						{filteredProjects.map((project) => (
							<motion.div
								key={project.id}
								variants={cardVariants}
								initial="hidden"
								animate="visible"
								exit="exit"
							>
								<Card className="bg-gray-900 border border-gray-800 hover:border-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl">
									<CardHeader>
										<CardTitle className="text-white text-xl font-semibold flex items-center gap-2">
											{project.title}
											{project.type === "search" ? (
												<Search className="w-5 h-5 text-blue-400" />
											) : (
												<ThumbsUp className="w-5 h-5 text-purple-400" />
											)}
										</CardTitle>
										<CardDescription className="text-gray-400">
											{project.description}
										</CardDescription>
									</CardHeader>
									<CardContent>
										<div className="mb-4">
											<h4 className="text-gray-300 font-medium mb-2">
												Technologies Used:
											</h4>
											<div className="flex flex-wrap gap-2">
												{project.technologies.map((tech, index) => (
													<motion.span
														key={index}
														variants={techVariants}
														initial="hidden"
														whileInView="visible"
														viewport={{ once: true }}
														className="bg-gray-800/50 border border-gray-700 rounded-full px-3 py-1 text-xs text-gray-400"
													>
														{tech}
													</motion.span>
												))}
											</div>
										</div>
										<a
											href={project.link}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium"
										>
											View on GitHub <ArrowUpRight className="w-4 h-4 ml-1" />
										</a>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</AnimatePresence>
				</div>
				{filteredProjects.length === 0 && (
					<div className="text-center text-gray-400 py-8">
						No projects found matching your criteria.
					</div>
				)}
			</div>
		</section>
	);
}
