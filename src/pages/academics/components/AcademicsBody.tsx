import React, { ReactNode } from "react";

interface SidebarProps {
	pageSpecificNav: ReactNode;
	academics: ReactNode;
}

interface AcademicsBodyProps {
	children: ReactNode;
	pageSpecificNav: ReactNode;
	Academics: React.ComponentType;
}

const Sidebar: React.FC<SidebarProps> = ({ pageSpecificNav, academics }) => {
	return (
		<aside className="w-64 hidden lg:block">
			{pageSpecificNav}
			{academics}
		</aside>
	);
};

const AcademicsBody: React.FC<AcademicsBodyProps> = ({ children, pageSpecificNav, Academics }) => {
	return (
		<div className="college min-h-svh mlg:min-h-lvh">
			<main className="container mx-auto lg:flex gap-12 lg:py-4 px-4 lg:px-0">
				<div className="flex-1 lg:border-r lg:border-dotted lg:border-gray-200">{children}</div>
				<Sidebar pageSpecificNav={pageSpecificNav} academics={<Academics />} />
			</main>
		</div>
	);
};

export default AcademicsBody;
