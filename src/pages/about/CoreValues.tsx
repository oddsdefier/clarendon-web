import OnThisPage from "@/components/OnThisPage";
import { Separator } from "@/components/ui/separator";
import { clarcAssets } from "@/utils/link_images";
import { staticContent } from "@/utils/data_static_content";
import React, { useRef } from "react";
import AboutUs from "./components/AboutUsSide";
import Header from "./components/Header";
import PageLayout from "@/components/PageLayout";

const CoreValues: React.FC = () => {
  const mainContentRef = useRef<HTMLDivElement>(null);
  const sections = [
    staticContent.coreValues,
    staticContent.inclusivity,
    staticContent.adaptability,
    staticContent.integrity,
  ];
  const title = "Core Values, Inclusivity, Adaptability and Integrity";
  const img = clarcAssets.images.foundation;
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

  const pageContent = (
    <div
      ref={mainContentRef}
      className="no-scrollbar flex-grow overflow-y-auto pb-72 lg:px-16"
      style={{ height: "calc(100vh - 2rem)" }}
    >
      <Header img={img} title={title} />
      <div className="px-6 md:px-2">
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
