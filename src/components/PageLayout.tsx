import React, { ReactNode } from "react";

interface PageLayoutProps {
  mainContent: ReactNode;
  sidebarContent: ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  mainContent,
  sidebarContent,
}) => (
  <section className="container relative mx-auto w-full">
    <div className="relative flex min-h-svh lg:min-h-lvh">
      {/* Main Content */}
      <div
        className="no-scrollbar flex-grow overflow-y-auto lg:px-16"
        style={{ height: "calc(100vh - 2rem)" }}
      >
        {mainContent}
      </div>
      {/* Main Content */}
      {/* Sidebar */}
      <aside className="sticky top-0 hidden border-l border-dotted border-gray-200 p-5 lg:block lg:w-60 lg:flex-shrink-0">
        <div className="h-full overflow-y-auto">{sidebarContent}</div>
      </aside>
      {/* Sidebar */}
    </div>
  </section>
);

export default PageLayout;
