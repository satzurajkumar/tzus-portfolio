import { cn } from "@/lib/utils"; // Kept this, assuming it's a small utility

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "default" | "outline";
	size?: "default" | "lg";
	className?: string;
}

export const Button: React.FC<ButtonProps> = ({
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
