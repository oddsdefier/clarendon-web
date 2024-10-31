import React, { useRef } from "react";
import AcademicsSide from "./components/AcademicsSide";
import OnThisPage from "@/components/OnThisPage";
import PageLayout from "@/components/PageLayout";
import { hsOfferingData } from "@/utils/data_hs_offering";

const SeniorHigh: React.FC = () => {
  const navItems = [{ href: "#sample", label: "Sample" }];
  const mainContentRef = useRef<HTMLDivElement>(null);

  const pageContent = (
    <div
      ref={mainContentRef}
      className="no-scrollbar flex-grow overflow-y-auto pb-72 lg:px-16"
      style={{ height: "calc(100vh - 2rem)" }}
    >
      <div className="px-6 md:px-2">
        <h2>Senior High</h2>
        <p>
          Welcome to the College section. Here you will find information about
          our college programs, courses, and academic resources.
        </p>

        <div className="content">
          {hsOfferingData.senior.map((tracks, index) => (
            <div key={index}>{JSON.stringify(tracks)}</div>
          ))}
        </div>
      </div>
    </div>
  );

  const observerOptions = {
    rootMargin: "-5% 0px -60% 0px",
    threshold: 0.5,
  };

  return (
    <PageLayout
      mainContent={pageContent}
      sidebarContent={
        <>
          <OnThisPage
            mainContentRef={mainContentRef}
            navItems={navItems}
            observerOptions={observerOptions}
          />
          <AcademicsSide />
        </>
      }
    />
  );
};

export default SeniorHigh;
