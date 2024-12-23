import Header from "@/components/Header";
import PageLayout from "@/components/PageLayout";
import { staticContent } from "@/utils/data_static_content";
import { clarcAssets } from "@/utils/link_images";
import { Separator } from "@radix-ui/react-separator";
import React from "react";
import AboutUs from "./components/AboutUsSide";
import CustomBreadcrumb from "@/components/BreadCrumb";

const philosophyOfEducation: React.FC = () => {
  const sections = [staticContent.philosophyOfEducation];
  const img = clarcAssets.colored_logo.gold;
  const title = "Philosophy of Education"; //made this empty so i can avoid redundancy
  const headerConfig = {
    imageWrapperClassName: "absolute inset-4",
    bgImageClassName: "bg-contain",
    containerClassName: "bg-clarc-blue",  
    backdropClassName: "absolute inset-0",
    titleClassName: "text-clarc-white",
  };
  const pageContent = (
    <div className="no-scrollbar min-h-svh flex-grow lg:h-[calc(100vh-2rem)] lg:overflow-y-auto lg:px-16">
      <CustomBreadcrumb
        currentPage="Philosophy of Education"
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

  return <PageLayout mainContent={pageContent} sidebarContent={<AboutUs />} />;
};

export default philosophyOfEducation;
