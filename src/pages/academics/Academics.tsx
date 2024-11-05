import React, { useRef } from "react";
import AcademicsSide from "./components/AcademicsSide";
// import OnThisPage from "@/components/OnThisPage";
import PageLayout from "@/components/PageLayout";
// import { Construction } from "lucide-react";
import { coursesData } from "@/utils/data_courses";
import { hsOfferingData } from "@/utils/data_hs_offering";
import { clarcAssets } from "@/utils/link_images";
const Academics: React.FC = () => {
  // const navItems = [{ href: "#sample", label: "Sample" }];
  const mainContentRef = useRef<HTMLDivElement>(null);

  const titleStyle =
    "mb-4 text-xl lg:text-xl font-semibold text-clarc-blue bg-clarc-gold inline-flex px-3 p-1";
  const listItemStyle = "text-base text-muted-foreground lg:text-lg";
  const h3Style = "mb-3 text-lg font-semibold text-clarc-blue/90 px-3";
  const mainContent = (
    <div className="mx-auto max-w-lg space-y-10 py-5 pb-48">
      <section>
        <h2 className={titleStyle}>College Programs</h2>
        <ul className="list-disc space-y-2 pl-6">
          {coursesData.map((course, index) => (
            <li key={index} className={listItemStyle}>
              {course.title}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className={titleStyle}>High School Programs</h2>
        <div className="mb-6">
          <h3 className={h3Style}>Senior High School</h3>
          <ul className="list-disc space-y-2 pl-6">
            {hsOfferingData.senior.map((track, index) => (
              <li key={index} className={listItemStyle}>
                {track.title}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className={h3Style}>Junior High School</h3>
          <ul className="list-disc space-y-2 pl-6">
            {hsOfferingData.junior.map((classes, index) => (
              <li key={index} className={listItemStyle}>
                {classes.classType}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
  const pageContent = (
    <div
      ref={mainContentRef}
      className="no-scrollbar relative flex-grow overflow-hidden lg:h-[calc(100vh-2rem)] lg:overflow-y-auto lg:px-16"
    >
      <div className="pointer-events-none absolute right-1/2 top-0 hidden aspect-square w-1/2 -translate-x-1/2 -translate-y-1/2 select-none overflow-hidden rounded-full opacity-20 lg:flex">
        <img
          src={clarcAssets.colored_logo.gold}
          alt="Logo"
          className="animate-spin-slow-1 bg-cover bg-center"
        />
      </div>
      <div className="px-6 md:px-2">{mainContent}</div>
    </div>
  );

  // const observerOptions = {
  //   rootMargin: "-5% 0px -60% 0px",
  //   threshold: 0.5,
  // };

  return (
    <PageLayout
      mainContent={pageContent}
      sidebarContent={
        <>
          {/* <OnThisPage
            mainContentRef={mainContentRef}
            navItems={navItems}
            observerOptions={observerOptions}
          /> */}
          <AcademicsSide />
        </>
      }
    />
  );
};

export default Academics;
