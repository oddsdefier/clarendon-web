import React, { useRef } from "react";
import AcademicsSide from "./components/AcademicsSide";
import OnThisPage from "@/components/OnThisPage";
import PageLayout from "@/components/PageLayout";

const SeniorHigh: React.FC = () => {
  const navItems = [{ href: "#sample", label: "Sample" }];
  const mainContentRef = useRef<HTMLDivElement>(null);

  const pageContent = (
    <div className="parent min-h-svh lg:min-h-lvh" id="sample">
      <div>Page Content will be rendered here.</div>
      <div className="children">Senior High</div>
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
