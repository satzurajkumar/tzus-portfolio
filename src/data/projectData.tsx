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

export const projectsData: Project[] = [
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
