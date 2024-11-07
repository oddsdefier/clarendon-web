import React, { useRef } from "react";
import AdmissionSide from "./components/AdmissionSide";
import OnThisPage from "@/components/OnThisPage";
import PageLayout from "@/components/PageLayout";

const Requirements: React.FC = () => {
  const navItems = [{ href: "#sample", label: "Sample" }];
  const mainContentRef = useRef<HTMLDivElement>(null);

  const observerOptions = {
    rootMargin: "-5% 0px -60% 0px",
    threshold: 0.5,
  };

  const mainContent = (
    <div>
      <div className="mx-auto max-w-2xl space-y-8 p-6">
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h1 className="mb-4 text-2xl font-bold text-gray-800">
            College Requirements
          </h1>
          <p className="mb-4 text-gray-600">
            In order to be an enrolled student at Clarendon, the following
            documentary requirements must be met:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-gray-700">
            <li>PSA copy of birth certificate</li>
            <li>Form 137</li>
            <li>Form 138</li>
            <li>Good Moral Certificate</li>
          </ul>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h1 className="mb-4 text-2xl font-bold text-gray-800">
            Special Science Class
          </h1>
          <p className="mb-4 text-gray-600">
            First and second quarter grades in Grade 6:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-gray-700">
            <li>85% and above in Science, Math, and English</li>
            <li>85% in other subjects</li>
            <li>No grades lower than 80%</li>
            <li>General average of 85% and above</li>
          </ul>
        </div>
      </div>
    </div>
  );
  const pageContent = (
    <div
      ref={mainContentRef}
      className="no-scrollbar flex-grow lg:h-[calc(100vh-2rem)] lg:overflow-y-auto lg:px-16"
    >
      <div className="px-6 md:px-2">{mainContent}</div>
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
          <AdmissionSide />
        </>
      }
    />
  );
};

export default Requirements;
