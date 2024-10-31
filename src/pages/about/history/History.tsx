import { useRef } from "react";
import ClarendonHistory from "./ClarendonHistory";
import Timeline from "./Timeline";
import AboutUs from "../components/AboutUs";
import OnThisPage from "@/components/OnThisPage";
import PageLayout from "@/components/PageLayout";

export default function History() {
  const mainContentRef = useRef<HTMLDivElement>(null);
  const navItems = [
    { href: "#history-clarendon", label: "History" },
    { href: "#founder", label: "Founder", indent: true },
    { href: "#birth-of-clarendon", label: "Birth Of Clarendon", indent: true },
    {
      href: "#growth-and-evolution",
      label: "Growth And Evolution",
      indent: true,
    },
    {
      href: "#recent-achievements",
      label: "Recent Achievements",
      indent: true,
    },
    {
      href: "#our-ongoing-mission",
      label: "Our Ongoing Mission",
      indent: true,
    },
    { href: "#timeline", label: "Timeline" },
  ];
  const observerOptions = {
    rootMargin: "-5% 0px -60% 0px",
    threshold: 0.5,
  };

  const pageContent = (
    <div
      ref={mainContentRef}
      className="no-scrollbar flex-grow overflow-y-auto lg:px-16"
      style={{ height: "calc(100vh - 2rem)" }}
    >
      <ClarendonHistory />
      <Timeline />
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
}
