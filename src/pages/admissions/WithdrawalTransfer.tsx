import React, { useRef } from "react";
import AdmissionSide from "./components/AdmissionSide";
import OnThisPage from "@/components/OnThisPage";
import PageLayout from "@/components/PageLayout";

const WithdrawalTransfer: React.FC = () => {
  const navItems = [{ href: "#sample", label: "Sample" }];
  const mainContentRef = useRef<HTMLDivElement>(null);

  const observerOptions = {
    rootMargin: "-5% 0px -60% 0px",
    threshold: 0.5,
  };

  const pageContent = (
    <div className="no-scrollbar flex-grow lg:h-[calc(100vh-2rem)] lg:overflow-y-auto lg:px-16">
      <div>Page Content will be rendered here.</div>
      <div className="children">Withdrawal and Transfer</div>
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

export default WithdrawalTransfer;
