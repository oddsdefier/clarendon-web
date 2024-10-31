import React from "react";
import AboutUs from "./components/AboutUsSide";
import PageLayout from "@/components/PageLayout";

const SchoolEmblem: React.FC = () => {
  const pageContent = (
    <div
      className="no-scrollbar flex-grow overflow-y-auto pb-72 lg:px-16"
      style={{ height: "calc(100vh - 2rem)" }}
    >
      <div className="py-5">
        <h2 className="text-lg font-semibold text-clarc-blue sm:text-xl md:text-2xl lg:text-3xl">
          School Emblem
        </h2>
        <div className="flex w-full items-center justify-center">
          <img src="../school-emblem.jpg" alt="School Emblem" />
        </div>
      </div>
    </div>
  );
  return <PageLayout mainContent={pageContent} sidebarContent={<AboutUs />} />;
};

export default SchoolEmblem;
