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
//fixed top-16 right-0 bottom-0 overflow-y-auto
const AcademicsBody: React.FC<AcademicsBodyProps> = ({ children, pageSpecificNav, Academics }) => {
	const Sidebar: React.FC<SidebarProps> = ({ pageSpecificNav, academics }) => {
		return (
			<aside className=" w-64 hidden lg:block ">
				{pageSpecificNav}
				{academics}
			</aside>
		);
	};
	return (
		<div className="min-h-svh mlg:min-h-lvh">
			<main className="relative container mx-auto lg:flex gap-8 lg:py-4 px-4 lg:px-0">
				<div className="flex-1 lg:border-r lg:border-dotted lg:border-gray-200">{children}</div>
				<Sidebar pageSpecificNav={pageSpecificNav} academics={<Academics />} />
			</main>
		</div>
	);
};

export default AcademicsBody;
