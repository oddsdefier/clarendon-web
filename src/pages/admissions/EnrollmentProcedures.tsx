import React, { useRef } from "react";
import AdmissionSide from "./components/AdmissionSide";
import OnThisPage from "@/components/OnThisPage";
import PageLayout from "@/components/PageLayout";
import { Construction } from "lucide-react";

const EnrollmentProcedures: React.FC = () => {
  const navItems = [{ href: "#sample", label: "Sample" }];
  const mainContentRef = useRef<HTMLDivElement>(null);

  const observerOptions = {
    rootMargin: "-5% 0px -60% 0px",
    threshold: 0.5,
  };
  const idk = (
    <div className="flex min-h-svh items-center justify-center lg:min-h-lvh">
      <div className="gap-2">
        <div className="mb-3 h-6 w-6 rounded-md">
          <Construction className="h-8 w-8 text-clarc-blue/60" />
        </div>
        <div>
          <h1 className="mb-1 text-2xl font-bold lowercase text-clarc-blue">
            Under Construction...
          </h1>
          <p className="text-base font-medium text-clarc-blue/80 lg:text-lg">
            Sir/Ma'am, I don't <span className="font-bold">yet</span> have any
            idea what to put here.
          </p>
        </div>
        <a href="/academics/"></a>
        <button
          onClick={() => window.history.back()}
          className="mt-4 rounded bg-clarc-blue px-4 py-2 font-semibold text-clarc-gold hover:bg-clarc-blue/90"
        >
          Go Back
        </button>
      </div>
    </div>
  );
  const pageContent = (
    <div
      ref={mainContentRef}
      className="no-scrollbar flex-grow lg:h-[calc(100vh-2rem)] lg:overflow-y-auto lg:px-16"
    >
      <div className="px-6 md:px-2">{idk}</div>
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

export default EnrollmentProcedures;
