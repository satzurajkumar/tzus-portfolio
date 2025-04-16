"use client";

import React from "react";

import { Header } from "@/components/header";
import { HeroSection } from "@/components/ui/hero";
import { AboutSection } from "@/components/aboutSection";
import { ProjectsSection } from "@/components/projectsSection";
import { ContactSection } from "@/components/contactSection";

// Main App Component
const App = () => {
	return (
		<div className="bg-gray-950 min-h-screen p-6">
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
