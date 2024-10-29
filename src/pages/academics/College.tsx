import React from "react";
import AcademicsBody from "./components/AcademicsBody";
import AcademicsSide from "./components/AcademicsSide";
import { Separator } from "@radix-ui/react-separator";
const College: React.FC = () => {
	const navItems = [{ href: "#timeline", label: "Timeline" }];
	const pageSpecificNav = (
		<div className="mb-5">
			<h2 className="text-base font-semibold text-clarc-blue">On This Page</h2>
			<Separator className="bg-clarc-gold/50 w-1/4 my-3 h-1" />
			<h3 className="text-clarc-blue font-medium mb-2">History</h3>
			<nav aria-label="Table of contents">
				<ul className="space-y-2">
					{navItems.map((item, index) => (
						<li key={index} className="mb-3">
							<a href={item.href} className="flex items-center text-sm transition-colors text-muted-foreground/80 hover:text-clarc-blue">
								{item.label}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);

	return (
		<AcademicsBody pageSpecificNav={pageSpecificNav} Academics={AcademicsSide}>
			<p>College</p>
		</AcademicsBody>
	);
};

export default College;
