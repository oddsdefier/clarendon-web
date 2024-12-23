import { navigationData } from "@/utils/data_navigation";
import React from "react";
import SideNavigation from "@/components/SideNav";

const academicsData = navigationData.find(
  (category) => category.title == "Academics",
);

if (!academicsData) {
  console.error("Academics data not found");
}

const navItems =
  academicsData && academicsData.items
    ? academicsData.items.map((link) => ({
        to: link.href,
        label: link.title,
      }))
    : [];
const AcademicsSide: React.FC = () => {
  return <SideNavigation title="Academics" navItems={navItems} />;
};

export default AcademicsSide;
