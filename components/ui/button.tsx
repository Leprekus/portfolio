import * as React from "react";
import Link, { LinkProps } from "next/link";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, children, ...props }, ref) => {
		return (
			<button
			ref={ref}
			className={[
				// Base look
				"inline-flex items-center justify-center",
				"bg-white text-black border border-black",
				"rounded-none", // squared corners
				// Sizing & spacing
				"h-10 px-4 text-sm",
				// Interaction
				"transition-colors",
				"hover:bg-black hover:text-white",
				"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/60",
				"disabled:opacity-50 disabled:cursor-not-allowed",
				className,
			].join(" ")}
			{...props}
			>
			{children}
			</button>
		);
	}
);

Button.displayName = "Button";


type LinkButtonProps = LinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: React.ReactNode;
};

export const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
	({ className, children, ...props }) => {
		return (
			<Link 
			className={[
				// Base look
				"inline-flex items-center justify-center",
				"bg-white text-black border border-black",
				"rounded-none", // squared corners
				// Sizing & spacing
				"h-10 px-4 text-sm",
				// Interaction
				"transition-colors",
				"hover:bg-black hover:text-white",
				"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/60",
				"disabled:opacity-50 disabled:cursor-not-allowed",
				className,
			].join(" ")}
			{...props}>
			{children}
			</Link>
		);
	}
);

LinkButton.displayName = "LinkButton";
