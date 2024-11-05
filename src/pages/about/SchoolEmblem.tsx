import React from "react";
import AboutUs from "./components/AboutUsSide";
import PageLayout from "@/components/PageLayout";
import CustomBreadcrumb from "@/components/BreadCrumb";

const SchoolEmblem: React.FC = () => {
  const pageContent = (
    <div className="no-scrollbar min-h-svh flex-grow lg:h-[calc(100vh-2rem)] lg:overflow-y-auto lg:px-16">
      <div className="lg:px-0">
        <CustomBreadcrumb
          currentPage="School Emblem"
          secondLink="/about"
          secondTitle="About"
        />
        <div className="px-6 lg:px-0">
          <h2 className="text-xl font-semibold text-clarc-blue sm:text-xl md:text-2xl lg:text-3xl">
            School Emblem
          </h2>
          <div className="flex w-full items-center justify-center">
            <img src="../school-emblem.jpg" alt="School Emblem" />
          </div>
        </div>
      </div>
    </div>
  );
  return <PageLayout mainContent={pageContent} sidebarContent={<AboutUs />} />;
};

export default SchoolEmblem;
