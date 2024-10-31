import React, { useRef } from "react";
import AcademicsSide from "./components/AcademicsSide";
import OnThisPage from "@/components/OnThisPage";
import PageLayout from "@/components/PageLayout";

const College: React.FC = () => {
  const navItems = [{ href: "#sample", label: "Sample" }];
  const mainContentRef = useRef<HTMLDivElement>(null);

  const pageContent = (
    <div
      ref={mainContentRef}
      className="no-scrollbar flex-grow overflow-y-auto pb-72 lg:px-16"
      style={{ height: "calc(100vh - 2rem)" }}
    >
      <div>
        <h2>College</h2>
        <p>
          Welcome to the College section. Here you will find information about
          our college programs, courses, and academic resources.
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

export default College;
