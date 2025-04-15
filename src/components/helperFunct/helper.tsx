// Helper function to simulate typing effect (for the intro text)
import { useState, useEffect } from "react";

export const useTypewriter = (text: string, delay = 150) => {
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

// Animation Variants
export const cardVariants = {
	hidden: { opacity: 0, y: 50 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeInOut" },
	},
	exit: { opacity: 0, y: -50, transition: { duration: 0.4 } },
};

export const fadeInVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { duration: 0.8, delay: 0.3 } },
};

export const techVariants = {
	hidden: { opacity: 0, scale: 0.8 },
	visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.5 } },
};
