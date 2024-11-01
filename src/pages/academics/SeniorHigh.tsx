import React, { useRef } from "react";
import AcademicsSide from "./components/AcademicsSide";
import OnThisPage from "@/components/OnThisPage";
import PageLayout from "@/components/PageLayout";
import { hsOfferingData } from "@/utils/data_hs_offering";
import Header from "@/components/Header";
import { clarcAssets } from "@/utils/link_images";

const SeniorHigh: React.FC = () => {
  const navItems = [{ href: "#sample", label: "Sample" }];
  const mainContentRef = useRef<HTMLDivElement>(null);

  const title = "Senior High School";
  const headerImg = clarcAssets.colored_logo.gold;
  const headerConfig = {
    containerClassName: "bg-clarc-blue",
    backdropClassName: "absolute inset-0",
    titleClassName: "text-white tracking-wider font-universal_serif",
  };
  const pageContent = (
    <div
      ref={mainContentRef}
      className="no-scrollbar flex-grow bg-clarc-gold lg:h-[calc(100vh-2rem)] lg:overflow-y-auto lg:bg-transparent lg:px-16"
    >
      <div id="senior-high">
        <Header title={title} img={headerImg} headerConfig={headerConfig} />
      </div>
      <div className="md:px-2 lg:px-6">
        <div className="pb-52 lg:py-5">
          {hsOfferingData.senior.map((track) => (
            <div className="overflow-hidden bg-clarc-gold px-6 py-8 pb-5 text-clarc-blue lg:mb-12 lg:rounded-sm">
              <p className="relative z-10 inline-flex text-base text-clarc-gold">
                <span className="z-10 bg-clarc-blue py-2 pr-6 text-xl font-bold leading-[1]">
                  {track.title}
                  <span className="ml-2 font-medium italic">{`(${track.trackCode})`}</span>
                </span>
                <span className="absolute left-0 top-0 z-0 h-full w-full -translate-x-8 bg-clarc-blue"></span>
              </p>
              <p className="mt-3 max-w-3xl text-pretty py-3 text-lg leading-7">
                {track.description}
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

export default SeniorHigh;
