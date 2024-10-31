import React, { useRef } from "react";
import AdmissionSide from "./components/AdmissionSide";
import OnThisPage from "@/components/OnThisPage";

const FeesPaymentsDiscounts: React.FC = () => {
  const navItems = [{ href: "#sample", label: "Sample" }];
  const mainContentRef = useRef<HTMLDivElement>(null);

  const pageContent = (
    <div className="parent min-h-svh lg:min-h-lvh" id="sample">
      <div>Page Content will be rendered here.</div>
      <div className="children">Children1</div>
    </div>
  );

  const observerOptions = {
    rootMargin: "-5% 0px -60% 0px",
    threshold: 0.5,
  };

  return (
    <section className="container relative mx-auto w-full">
      <div className="relative flex min-h-svh lg:min-h-lvh">
        {/* Child Element */}
        <div
          className="no-scrollbar flex-grow overflow-y-auto lg:px-16"
          style={{ height: "calc(100vh - 2rem)" }}
        >
          {pageContent}
        </div>
        {/* Child Element */}
        <aside className="sticky top-0 hidden border-l border-dotted border-gray-200 p-5 lg:block lg:w-60 lg:flex-shrink-0">
          <div className="h-full overflow-y-auto">
            {/* Child Element */}
            <OnThisPage
              mainContentRef={mainContentRef}
              navItems={navItems}
              observerOptions={observerOptions}
            />
            <AdmissionSide />
            {/* Child Element */}
          </div>
        </aside>
      </div>
    </section>
  );
};

export default FeesPaymentsDiscounts;
