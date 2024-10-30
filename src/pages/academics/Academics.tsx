import React from "react";
import AcademicsBody from "./components/AcademicsBody";
import AcademicsSide from "./components/AcademicsSide";
import { Separator } from "@radix-ui/react-separator";
const Academics: React.FC = () => {
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

	const pageContent = (
		<div className="parent min-h-svh lg:min-h-lvh">
			<div>Page Content will be rendered here.</div>
			<div className="children">Children1</div>
		</div>
	);

	return (
		<AcademicsBody pageSpecificNav={pageSpecificNav} Academics={AcademicsSide}>
			{pageContent}
		</AcademicsBody>
	);
};

export default Academics;
