import Header from "@/components/Header";
import OnThisPage from "@/components/OnThisPage";
import PageLayout from "@/components/PageLayout";
import { coursesData } from "@/utils/data_courses";
import { clarcAssets } from "@/utils/link_images";
import React, { useRef } from "react";
import AcademicsSide from "./components/AcademicsSide";
import CustomBreadcrumb from "@/components/BreadCrumb";

const College: React.FC = () => {
  const mainContentRef = useRef<HTMLDivElement>(null);

  coursesData.filter((course) => course.code);

  const courseNavItems = coursesData.map((course) => ({
    href: `#${course.code.toLowerCase()}`,
    label: course.code,
    indent: true,
  }));

  const navItems = [{ href: "#college", label: "College" }, ...courseNavItems];
  const observerOptions = {
    rootMargin: "-5% 0px -60% 0px",
    threshold: 0.1,
  };

  const title = "College";
  const headerImg = clarcAssets.colored_logo.gold;
  const headerConfig = {
    containerClassName: "bg-clarc-blue",
    backdropClassName: "absolute inset-0",
    titleClassName:
      "lg:text-5xl uppercase italic text-white tracking-wider font-universal_serif",
  };

  const pageContent = (
    <div
      ref={mainContentRef}
      className="no-scrollbar flex-grow bg-clarc-gold lg:h-[calc(100vh-2rem)] lg:overflow-y-auto lg:bg-transparent lg:px-16"
    >
      <CustomBreadcrumb
        currentPage="College"
        secondLink="/academics"
        secondTitle="Academics"
      />
      <div id="college">
        <Header title={title} img={headerImg} headerConfig={headerConfig} />
      </div>
      {/* <div className="px-0 py-5 text-lg md:px-2 lg:px-4" id="intro">
        Clarendon College offers a variety of courses.
      </div> */}

      <div className="px-0 py-5 pb-10 md:px-2 lg:px-4 lg:pb-72">
        {coursesData.map((course) => (
          <div
            className="relative space-y-4 overflow-hidden bg-clarc-gold px-6 py-8 text-clarc-blue lg:mb-12 lg:rounded-sm"
            id={course.code.toLocaleLowerCase()}
          >
            {/* <div className="absolute right-0 top-0 z-10 aspect-square h-1/2 -translate-y-1/4 translate-x-1/4 rounded-full bg-clarc-blue/10">
                Logo
              </div> */}
            <div className="z-20">
              <h1 className="relative inline-flex text-lg font-bold text-clarc-white lg:text-xl">
                <span className="z-10 bg-clarc-blue py-2 pr-6">
                  {course.title}
                  <span className="ml-2 font-medium italic">{`(${course.code})`}</span>
                </span>
                <span className="absolute left-0 top-0 z-0 h-full w-1/2 -translate-x-8 bg-clarc-blue"></span>
              </h1>
              <p className="mt-3 max-w-3xl text-pretty py-3 text-lg leading-7">
                {course.summary}
              </p>
              <ul className="my-4 space-y-2">
                <h1 className="text-lg font-bold">
                  {course.programHighlights ? "Program Highlights" : ""}
                </h1>
                {course.programHighlights?.map((programHighlight) => (
                  <li className="ml-2 text-base font-medium italic">
                    — {programHighlight}
                  </li>
                ))}
              </ul>
              <ul className="my-4 space-y-2">
                <h1 className="text-lg font-bold">
                  {course.specializations ? "Specialization" : ""}
                </h1>
                {course.specializations?.map((specialization) => (
                  <li className="ml-2 text-base font-medium">
                    — {`Major in ${specialization}`}
                  </li>
                ))}
              </ul>
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
          <AcademicsSide />
        </>
      }
    />
  );
};

export default College;
