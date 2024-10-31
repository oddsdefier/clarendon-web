import { staticContent } from "@/utils/static_content";
import { Separator } from "@radix-ui/react-separator";
import React from "react";
import AboutUs from "./components/AboutUs";
import { clarcAssets } from "@/utils/img_links";
import Header from "./components/Header";

const VisionMission: React.FC = () => {
  const sections = [staticContent.mission, staticContent.vision];
  const title = "Mission and Vision";
  const img = clarcAssets.images.new_building;
  return (
    <section className="container relative mx-auto w-full">
      <div className="relative flex min-h-svh lg:min-h-lvh">
        {/* Child Element */}
        <div
          className="no-scrollbar flex-grow overflow-y-auto pb-72 lg:px-16"
          style={{ height: "calc(100vh - 2rem)" }}
        >
          <Header img={img} title={title} />
          {sections.map((section) => (
            <div
              key={section.id}
              id={section.id}
              className="mt-0 flex flex-col items-start space-y-4 pb-10 sm:flex-row sm:space-x-4 sm:space-y-0"
            >
              <div>
                <h2 className="text-lg font-semibold text-clarc-blue sm:text-xl md:text-2xl lg:text-3xl">
                  {section.title}
                </h2>
                <Separator className="my-3 h-1 w-1/4 bg-clarc-gold/80" />
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg">
                  {section.text}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Child Element */}
        <aside className="sticky top-0 hidden border-l border-dotted border-gray-200 p-5 lg:block lg:w-60 lg:flex-shrink-0">
          <div className="h-full overflow-y-auto">
            {/* Child Element */}
            <AboutUs />
            {/* Child Element */}
          </div>
        </aside>
      </div>
    </section>
  );
};

export default VisionMission;
