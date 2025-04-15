import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	className?: string;
}

export const Input: React.FC<InputProps> = ({ className, ...props }) => {
	const classes = cn(
		"w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500",
		className
	);
	return <input className={classes} {...props} />;
};
