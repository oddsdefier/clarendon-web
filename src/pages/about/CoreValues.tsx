import OnThisPage from "@/components/OnThisPage";
import { Separator } from "@/components/ui/separator";
import { clarcAssets } from "@/utils/link_images";
import { staticContent } from "@/utils/data_static_content";
import React, { useRef } from "react";
import AboutUs from "./components/AboutUsSide";
import Header from "../../components/Header";
import PageLayout from "@/components/PageLayout";
import CustomBreadcrumb from "@/components/BreadCrumb";

const CoreValues: React.FC = () => {
  const mainContentRef = useRef<HTMLDivElement>(null);
  const sections = [
    staticContent.coreValues,
    staticContent.inclusivity,
    staticContent.adaptability,
    staticContent.integrity,
  ];
  const title = "Core Values, Inclusivity, Adaptability and Integrity";
  const img = clarcAssets.colored_logo.gold;
  const navItems = [
    { href: "#core-values", label: "Core Values" },
    { href: "#inclusivity", label: "Inclusivity" },
    { href: "#adaptability", label: "Adaptability" },
    { href: "#integrity", label: "Integrity" },
  ];
  const observerOptions = {
    rootMargin: "-10% 0px -60% 0px",
    threshold: 0.2,
  };
  const headerConfig = {
    imageWrapperClassName: "absolute inset-4",
    bgImageClassName: "bg-contain",
    containerClassName: "bg-clarc-blue",
    backdropClassName: "absolute inset-0",
    titleClassName: "text-clarc-white",
  };
  const pageContent = (
    <div
      ref={mainContentRef}
      className="no-scrollbar flex-grow lg:h-[calc(100vh-2rem)] lg:overflow-y-auto lg:px-16 lg:pb-72"
    >
      <CustomBreadcrumb
        currentPage="Core Values"
        secondLink="/about"
        secondTitle="About"
      />
      <Header img={img} title={title} headerConfig={headerConfig} />
      <div className="px-6 py-5 md:px-2">
        {sections.map((section) => (
          <div
            key={section.id}
            id={section.id}
            className="mt-0 flex flex-col items-start space-y-4 pb-10 sm:flex-row sm:space-x-4 sm:space-y-0"
          >
            <div>
              <h2 className="text-xl font-semibold text-clarc-blue sm:text-xl md:text-2xl lg:text-3xl">
                {section.title}
              </h2>
              <Separator className="my-3 h-1 w-1/4 bg-clarc-gold/80" />
              <p className="text-base leading-relaxed text-muted-foreground lg:text-lg">
                {section.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

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
          <AboutUs />
        </>
      }
    />
  );
};

export default CoreValues;
