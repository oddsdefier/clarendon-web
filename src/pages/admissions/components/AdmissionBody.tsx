import React, { ReactNode, ComponentType } from "react";

interface SidebarProps {
	pageSpecificNav: ReactNode;
	admission: ReactNode;
}

interface AdmissionBodyProps {
	children: ReactNode;
	pageSpecificNav: ReactNode;
	Admission: ComponentType;
}

const Sidebar: React.FC<SidebarProps> = ({ pageSpecificNav, admission }) => {
	return (
		<aside className="w-64 hidden lg:block">
			{pageSpecificNav}
			{admission}
		</aside>
	);
};

const AdmissionBody: React.FC<AdmissionBodyProps> = ({ children, pageSpecificNav, Admission }) => {
	return (
		<div className="college min-h-svh mlg:min-h-lvh">
			<main className="container mx-auto lg:flex gap-12 lg:py-4 px-4 lg:px-0">
				<div className="flex-1 lg:border-r lg:border-dotted lg:border-gray-200">{children}</div>
				<Sidebar pageSpecificNav={pageSpecificNav} admission={<Admission />} />
			</main>
		</div>
	);
};

export default AdmissionBody;
