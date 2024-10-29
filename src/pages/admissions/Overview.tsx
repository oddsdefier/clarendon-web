import React from "react";
import AdmissionBody from "./components/AdmissionBody";
import AdmissionSide from "./components/AdmissionSide";
import { Separator } from "@radix-ui/react-separator";
const Admission: React.FC = () => {
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
		<AdmissionBody pageSpecificNav={pageSpecificNav} Admission={AdmissionSide}>
			<p>Admission Overview</p>
		</AdmissionBody>
	);
};

export default Admission;
