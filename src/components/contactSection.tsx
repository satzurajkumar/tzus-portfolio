// Contact Section Component
import { motion } from "framer-motion";
import { fadeInVariants } from "@/components/helperFunct/helper";
import { Github, Linkedin, Mail } from "lucide-react";
import { Input } from "./ui/inputs";
import { Button } from "./ui/button";

export function ContactSection() {
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
							I&apos;m always open to new opportunities and collaborations. Feel
							free to reach out to me through any of the channels below.
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
}
