import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
	className?: string;
}
export const Card: React.FC<CardProps> = ({
	className,
	children,
	...props
}) => {
	return (
		<div className={cn("bg-white rounded-lg shadow-md", className)} {...props}>
			{children}
		</div>
	);
};

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
	className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
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

export const CardTitle: React.FC<CardTitleProps> = ({
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

export const CardDescription: React.FC<CardDescriptionProps> = ({
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

export const CardContent: React.FC<CardContentProps> = ({
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
