import { Separator } from "@radix-ui/react-separator";
import { ArrowUpRight } from "lucide-react";
// import { ArrowUpRight } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";
// import { ChevronRight } from "lucide-react";

const navItems = [
	{ to: "/about/history", label: "History" },
	{ to: "/about/mission-vision", label: "Mission and Vision" },
	{ to: "/about/core-values", label: "Core Values" },
	{ to: "/about/school-emblem", label: "School Emblem" },
	{ to: "/about/philosophy-of-education", label: "Philosophy of Education" },
];

const AboutUs: React.FC = () => {
	return (
		<div className="flex flex-col w-full lg:w-64">
			<h1 className="text-lg font-semibold text-clarc-blue">About Us</h1>
			<Separator className="bg-clarc-gold/50 w-1/4 my-3 h-1" />
			
			<nav>
				<ul className="space-y-2">
					{navItems.map((item) => (
						<li key={item.to} className="mb-3">
							<NavLink to={item.to} className={({ isActive }: { isActive: boolean }) => `flex items-center text-base transition-colors ${isActive ? "text-clarc-blue font-medium" : "text-muted-foreground/70 hover:text-clarc-blue"}`}>
								{item.label}
								<ArrowUpRight className={`ml-2 h-4 w-4 transition-transform ${({ isActive }: { isActive: boolean }) => (isActive ? "rotate-90" : "")}`} />
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};

export default AboutUs;
