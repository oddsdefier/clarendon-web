import SideNavigation from "@/components/SideNav";
import { navigationData } from "@/utils/data_navigation";
import React from "react";

const admissionsData = navigationData.find(
  (category) => category.title === "Admissions",
);

if (!admissionsData) {
  console.error("Admissions data not found");
}

const navItems = admissionsData
  ? admissionsData.items.map((link) => ({
      to: link.href,
      label: link.title,
    }))
  : [];

const AdmissionSide: React.FC = () => {
  return <SideNavigation title="Admission" navItems={navItems} />;
};

export default AdmissionSide;
