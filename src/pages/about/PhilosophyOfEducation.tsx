import { clarcAssets } from "@/utils/link_images";
import { staticContent } from "@/utils/data_static_content";
import { Separator } from "@radix-ui/react-separator";
import React from "react";
import AboutUs from "./components/AboutUsSide";
import Header from "./components/Header";
import PageLayout from "@/components/PageLayout";

const philosophyOfEducation: React.FC = () => {
  const sections = [staticContent.philosophyOfEducation];
  const img = clarcAssets.images.tourism;
  const title = "Philosophy of Education"; //made this empty so i can avoid redundancy

  const pageContent = (
    <div className="no-scrollbar min-h-svh flex-grow lg:h-[calc(100vh-2rem)] lg:overflow-y-auto lg:px-16">
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

  return <PageLayout mainContent={pageContent} sidebarContent={<AboutUs />} />;
};

export default philosophyOfEducation;
