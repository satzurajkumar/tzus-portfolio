"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
	Github,
	Linkedin,
	Mail,
	ChevronRight,
	ArrowUpRight,
	Search,
	ThumbsUp,
	Zap,
	Cpu,
	BookOpen,
	Code2,
	MessageSquare,
	Users,
	Briefcase,
} from "lucide-react";
import { Header } from "@/components/ui/header";
//import { Button } from '@/components/ui/button'; // Removed - defined locally
//import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'; // Removed - defined locally
//import { Input } from '@/components/ui/input'; // Removed - defined locally
import { cn } from "@/lib/utils"; // Kept this, assuming it's a small utility

// Placeholder for actual project data.  Replace with your real data.
interface Project {
	id: string;
	title: string;
	description: string;
	technologies: string[];
	link: string;
	type: "search" | "recommendation";
	featured: boolean;
	image: string; // Add this
}

const projectsData: Project[] = [
	{
		id: "1",
		title: "Personalized Product Recommendation Engine",
		description:
			"Developed a recommendation engine using collaborative filtering and content-based methods to suggest products to users based on their past behavior and preferences.",
		technologies: ["Python", "TensorFlow", "Elasticsearch", "Next.js"],
		link: "https://github.com/yourusername/recommendation-engine",
		type: "recommendation",
		featured: true,
		image: "/images/project1.png", // Add actual image paths
	},
	{
		id: "2",
		title: "Semantic Search for E-commerce",
		description:
			"Implemented a semantic search engine that understands user queries beyond keyword matching, improving search accuracy and user experience.  Utilized transformer models and vector databases.",
		technologies: [
			"Python",
			"PyTorch",
			"Hugging Face Transformers",
			"Pinecone",
			"React",
		],
		link: "https://github.com/yourusername/semantic-search",
		type: "search",
		featured: true,
		image: "/images/project2.png",
	},
	{
		id: "3",
		title: "Real-time News Recommendation System",
		description:
			"Built a system that recommends news articles to users in real-time, based on their interests and current events.  Employs a combination of machine learning and content analysis techniques.",
		technologies: [
			"Kafka",
			"Spark Streaming",
			"MLlib",
			"Node.js",
			"PostgreSQL",
		],
		link: "https://github.com/yourusername/news-recommendation",
		type: "recommendation",
		featured: false,
		image: "/images/project3.png",
	},
	{
		id: "4",
		title: "AI-Powered Job Search Engine",
		description:
			"Developed a search engine that helps job seekers find relevant positions using AI to understand job descriptions and user skills.  Includes features for personalized job alerts.",
		technologies: ["Python", "Scrapy", "Elasticsearch", "Flask", "React"],
		link: "https://github.com/yourusername/job-search-engine",
		type: "search",
		featured: false,
		image: "/images/project4.png",
	},
	{
		id: "5",
		title: "Context-Aware Product Recommendations for Mobile App",
		description:
			"Integrated a recommendation engine into a mobile app, providing users with context-aware product suggestions based on their location, time, and app usage.",
		technologies: ["React Native", "TensorFlow Lite", "Firebase", "Python"],
		link: "https://github.com/yourusername/mobile-recommendation-app",
		type: "recommendation",
		featured: false,
		image: "/images/project5.png",
	},
];

// Animation Variants
const cardVariants = {
	hidden: { opacity: 0, y: 50 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeInOut" },
	},
	exit: { opacity: 0, y: -50, transition: { duration: 0.4 } },
};

const fadeInVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { duration: 0.8, delay: 0.3 } },
};

const techVariants = {
	hidden: { opacity: 0, scale: 0.8 },
	visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.5 } },
};

// Helper function to simulate typing effect (for the intro text)
const useTypewriter = (text: string, delay = 150) => {
	const [typedText, setTypedText] = useState("");
	const [index, setIndex] = useState(0);

	useEffect(() => {
		if (index < text.length) {
			const timer = setTimeout(() => {
				setTypedText((prev) => prev + text.charAt(index));
				setIndex(index + 1);
			}, delay);
			return () => clearTimeout(timer);
		}
	}, [index, text, delay]);

	return typedText;
};

// --- UI Components (Simplified for standalone) ---

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "default" | "outline";
	size?: "default" | "lg";
	className?: string;
}

const Button: React.FC<ButtonProps> = ({
	variant = "default",
	size = "default",
	className,
	children,
	...props
}) => {
	const baseClasses =
		"inline-flex items-center justify-center rounded-md font-medium transition-colors";

	const variantClasses =
		variant === "default"
			? "bg-blue-500 text-white hover:bg-blue-600"
			: variant === "outline"
			? "border border-gray-700 text-gray-300 hover:bg-gray-800/50 hover:text-white"
			: "";

	const sizeClasses = size === "lg" ? "px-6 py-3 text-lg" : "px-4 py-2 text-sm";

	const classes = cn(baseClasses, variantClasses, sizeClasses, className);

	return (
		<button className={classes} {...props}>
			{children}
		</button>
	);
};

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
	className?: string;
}
const Card: React.FC<CardProps> = ({ className, children, ...props }) => {
	return (
		<div className={cn("bg-white rounded-lg shadow-md", className)} {...props}>
			{children}
		</div>
	);
};

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
	className?: string;
}

const CardHeader: React.FC<CardHeaderProps> = ({
	className,
	children,
	...props
}) => {
	return (
		<div className={cn("p-6", className)} {...props}>
			{children}
		</div>
	);
};

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
	className?: string;
}

const CardTitle: React.FC<CardTitleProps> = ({
	className,
	children,
	...props
}) => {
	return (
		<h3 className={cn("text-2xl font-semibold", className)} {...props}>
			{children}
		</h3>
	);
};
interface CardDescriptionProps
	extends React.HTMLAttributes<HTMLParagraphElement> {
	className?: string;
}

const CardDescription: React.FC<CardDescriptionProps> = ({
	className,
	children,
	...props
}) => {
	return (
		<p className={cn("text-gray-500", className)} {...props}>
			{children}
		</p>
	);
};

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
	className?: string;
}

const CardContent: React.FC<CardContentProps> = ({
	className,
	children,
	...props
}) => {
	return (
		<div className={cn("p-6", className)} {...props}>
			{children}
		</div>
	);
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	className?: string;
}

const Input: React.FC<InputProps> = ({ className, ...props }) => {
	const classes = cn(
		"w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500",
		className
	);
	return <input className={classes} {...props} />;
};

// --- Components ---

// Hero Section Component
const HeroSection = () => {
	const introText = `Hi, I'm SanTzu Rajkumar, an AI Software Developer.`;
	const typedIntroText = useTypewriter(introText);

	return (
		<section className="py-16 md:py-24">
			<div className="container mx-auto text-center">
				<motion.h1
					variants={fadeInVariants}
					initial="hidden"
					animate="visible"
					className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-500 inline-block text-transparent bg-clip-text"
				>
					{typedIntroText}
				</motion.h1>
				<motion.p
					variants={fadeInVariants}
					initial="hidden"
					animate="visible"
					className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-8"
				>
					I specialize in Search and Recommendation Engines, building
					intelligent systems that connect people with the information and
					products they need.
				</motion.p>
				<motion.div
					variants={fadeInVariants}
					initial="hidden"
					animate="visible"
				>
					<Button
						variant="outline"
						size="lg"
						className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border border-white/10 hover:from-blue-500/30 hover:to-purple-500/30 hover:border-white/20 transition-all duration-300"
					>
						<a href="#projects" className="flex items-center gap-2">
							View Projects <ChevronRight className="w-5 h-5" />
						</a>
					</Button>
				</motion.div>
			</div>
		</section>
	);
};

// About Section Component
const AboutSection = () => {
	return (
		<section id="about" className="py-16 md:py-24 bg-gray-900">
			<div className="container mx-auto">
				<h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
					About Me
				</h2>
				<div className="grid md:grid-cols-2 gap-12 items-center">
					<div>
						<motion.p
							variants={fadeInVariants}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							className="text-gray-400 text-lg sm:text-xl leading-relaxed"
						>
							Hello! I'm SanTzu Rajkumar, a passionate AI Software Developer
							with a strong focus on developing cutting-edge search and
							recommendation systems. I have a degree in Computer Applications,
							I specialize in Search, Recommendation, and Information Retrieval.
						</motion.p>
						<motion.p
							variants={fadeInVariants}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							className="text-gray-400 text-lg sm:text-xl leading-relaxed mt-6"
						>
							I'm passionate about leveraging AI to solve complex problems and
							create intuitive user experiences. My expertise includes machine
							learning, Computer Vision, natural language processing (NLP),
							information retrieval, and distributed systems. I'm always eager
							to learn new technologies and take on challenging projects.
						</motion.p>
						<motion.div
							variants={fadeInVariants}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							className="mt-8"
						>
							<h3 className="text-2xl font-semibold text-white mb-4">
								My Skills
							</h3>
							<div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
								<div className="bg-gray-800/50 border border-gray-700 rounded-lg p-3 text-gray-300">
									Python
								</div>
								<div className="bg-gray-800/50 border border-gray-700 rounded-lg p-3 text-gray-300">
									Machine Learning
								</div>
								<div className="bg-gray-800/50 border border-gray-700 rounded-lg p-3 text-gray-300">
									TensorFlow
								</div>
								<div className="bg-gray-800/50 border border-gray-700 rounded-lg p-3 text-gray-300">
									PyTorch
								</div>
								<div className="bg-gray-800/50 border border-gray-700 rounded-lg p-3 text-gray-300">
									Elasticsearch
								</div>
								<div className="bg-gray-800/50 border border-gray-700 rounded-lg p-3 text-gray-300">
									React
								</div>
								<div className="bg-gray-800/50 border border-gray-700 rounded-lg p-3 text-gray-300">
									Next.js
								</div>
								<div className="bg-gray-800/50 border border-gray-700 rounded-lg p-3 text-gray-300">
									SQL/NoSQL
								</div>
								<div className="bg-gray-800/50 border border-gray-700 rounded-lg p-3 text-gray-300">
									Hugging Face
								</div>
							</div>
						</motion.div>
					</div>
					<motion.div
						variants={fadeInVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						className="rounded-lg overflow-hidden shadow-lg border border-gray-700"
					>
						<img
							src="/images/recommendation_engine_diagram.png" // Replace with actual image path
							alt="Sai Krishna"
							className="w-full h-auto object-cover"
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

// Projects Section Component
const ProjectsSection = () => {
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
};

// Contact Section Component
const ContactSection = () => {
	return (
		<section id="contact" className="py-16 md:py-24 bg-gray-900">
			<div className="container mx-auto">
				<h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
					Contact Me
				</h2>
				<div className="grid md:grid-cols-2 gap-12 items-center">
					<div>
						<motion.p
							variants={fadeInVariants}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							className="text-gray-400 text-lg sm:text-xl leading-relaxed mb-8"
						>
							I'm always open to new opportunities and collaborations. Feel free
							to reach out to me through any of the channels below.
						</motion.p>
						<motion.div
							variants={fadeInVariants}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							className="space-y-4"
						>
							<div className="flex items-center gap-4">
								<Mail className="w-6 h-6 text-gray-400" />
								<a
									href="mailto:saikrishna.k@example.com" // Replace
									className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-lg sm:text-xl"
								>
									tzu@satzu.dev
								</a>
							</div>
							<div className="flex items-center gap-4">
								<Linkedin className="w-6 h-6 text-gray-400" />
								<a
									href="https://www.linkedin.com/in/yourprofile" // Replace
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-lg sm:text-xl"
								>
									linkedin.com/in/satzurajkumar
								</a>
							</div>
							<div className="flex items-center gap-4">
								<Github className="w-6 h-6 text-gray-400" />
								<a
									href="https://github.com/yourusername" // Replace
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-lg sm:text-xl"
								>
									github.com/satzu_rk
								</a>
							</div>
						</motion.div>
					</div>
					<motion.div
						variants={fadeInVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						className="bg-gray-800/50 rounded-lg p-6 shadow-lg border border-gray-700"
					>
						<h3 className="text-2xl font-semibold text-white mb-4">
							Get in Touch
						</h3>
						<p className="text-gray-400 mb-6">
							Feel free to use the form below to send me a message.
						</p>
						{/* Simple Contact Form (No backend integration) */}
						<form className="space-y-4">
							<div>
								<Input
									type="text"
									placeholder="Your Name"
									className="bg-gray-700 text-white border-gray-600 placeholder:text-gray-400"
								/>
							</div>
							<div>
								<Input
									type="email"
									placeholder="Your Email"
									className="bg-gray-700 text-white border-gray-600 placeholder:text-gray-400"
								/>
							</div>
							<div>
								<textarea
									placeholder="Your Message"
									rows={4}
									className="bg-gray-700 text-white border-gray-600 placeholder:text-gray-400 w-full rounded-md p-4"
								></textarea>
							</div>
							<Button
								type="submit"
								className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
							>
								Send Message
							</Button>
						</form>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

// Main App Component
const App = () => {
	return (
		<div className="bg-gray-950 min-h-screen">
			<Header />
			<main>
				<HeroSection />
				<AboutSection />
				<ProjectsSection />
				<ContactSection />
			</main>
			<footer className="py-8 text-center text-gray-400 border-t border-gray-800 mt-12">
				<p>
					&copy; {new Date().getFullYear()} SanTzu_dev. All rights reserved.
				</p>
			</footer>
		</div>
	);
};

export default App;
