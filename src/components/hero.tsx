// Hero Section Component
import { motion } from "framer-motion";
import { useTypewriter, fadeInVariants } from "@/components/helperFunct/helper";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Header } from "./header";

export function HeroSection() {
	const introText = `Hi, I'm Sanju Rajkumar, a Software Developer.`;
	const typedIntroText = useTypewriter(introText);

	return (
		<div className="flex flex-col min-h-screen">
			<Header />

			<section className=" py-16 md:py-24 my-auto ">
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
		</div>
	);
}
