// About Section Component
import { motion } from "framer-motion";
import { fadeInVariants } from "@/components/helperFunct/helper";

export function AboutSection() {
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
							Hello! I&apos;m Sanju Rajkumar, a passionate AI Software Developer
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
							I&apos;m passionate about leveraging AI to solve complex problems
							and create intuitive user experiences. My expertise includes
							machine learning, Computer Vision, natural language processing
							(NLP), information retrieval, and distributed systems. I&apos;m
							always eager to learn new technologies and take on challenging
							projects.
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
							src="/aboutMePortfolio.png"
							alt="Sai Krishna"
							className="w-full h-auto object-cover"
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
