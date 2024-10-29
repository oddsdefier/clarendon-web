import SideNavigation from "@/components/SideNav";
import { navigationData } from "@/utils/navigation_data";
import React from "react";

const aboutUsData = navigationData.find((category) => category.title == "About");

if (!aboutUsData) {
	console.error("About Us Data not found.");
}

const navItems = aboutUsData
	? aboutUsData.items.map((link) => ({
			to: link.href,
			label: link.title,
	  }))
	: [];

const AboutUs: React.FC = () => {
	return <SideNavigation title="About Us" navItems={navItems} />;
};

export default AboutUs;
