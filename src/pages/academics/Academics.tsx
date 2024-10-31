import React, { useRef } from "react";
import AcademicsSide from "./components/AcademicsSide";
import OnThisPage from "@/components/OnThisPage";
import PageLayout from "@/components/PageLayout";

const Academics: React.FC = () => {
  const navItems = [{ href: "#sample", label: "Sample" }];
  const mainContentRef = useRef<HTMLDivElement>(null);

  const pageContent = (
    <div
      ref={mainContentRef}
      className="no-scrollbar flex-grow lg:h-[calc(100vh-2rem)] lg:overflow-y-auto lg:px-16"
    >
      <div className="px-6 md:px-2">
        <h2>Overview</h2>
        <p>
          Welcome to the Academics section. Here you will find information about
          our programs, courses, and academic resources.
        </p>
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

export default Academics;
