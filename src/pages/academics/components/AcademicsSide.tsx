import { navigationData } from "@/utils/navigation_data";
import React from "react";
import SideNavigation from "@/components/SideNav";

const academicsData = navigationData.find((category) => category.title == "Academics");

if (!academicsData) {
	console.error("Academics data not found");
}

const navItems = academicsData
	? academicsData.items.map((link) => ({
			to: link.href,
			label: link.title,
	  }))
	: [];
const AcademicsSide: React.FC = () => {
	return <SideNavigation title="Academics" navItems={navItems} />;
};

export default AcademicsSide;
