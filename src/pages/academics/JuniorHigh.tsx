import React, { useRef } from "react";
import AcademicsSide from "./components/AcademicsSide";
import OnThisPage from "@/components/OnThisPage";
import PageLayout from "@/components/PageLayout";
import { hsOfferingData } from "@/utils/data_hs_offering";
import { clarcAssets } from "@/utils/link_images";
import Header from "@/components/Header";

const JuniorHigh: React.FC = () => {
  const navItems = [{ href: "#sample", label: "Sample" }];
  const mainContentRef = useRef<HTMLDivElement>(null);
  const title = "Junior High School";
  const headerImg = clarcAssets.colored_logo.white;

  const headerConfig = {
    containerClassName: "bg-clarc-blue",
    backdropClassName: "absolute inset-0",
    titleClassName: "text-clarc-white font-universal_serif ",
  };
  const pageContent = (
    <div
      ref={mainContentRef}
      className="no-scrollbar flex-grow lg:h-[calc(100vh-2rem)] lg:overflow-y-auto lg:px-16"
    >
      <div id="junior-high">
        <Header title={title} img={headerImg} headerConfig={headerConfig} />
      </div>
      <div className="px-6 md:px-2">
        <div className="py-5">
          {hsOfferingData.junior.map((item) => (
            <div key={item.classType} className="pb-5">
              <h1 className="text-xl font-bold leading-[1] text-clarc-blue">
                {item.classType}
              </h1>
              <p className="mt-3 text-base text-foreground/70">
                {item.description}
              </p>
            </div>
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

export default JuniorHigh;
