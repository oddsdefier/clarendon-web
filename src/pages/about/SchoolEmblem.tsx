import React from "react";
import AboutUs from "./components/AboutUs";

const SchoolEmblem: React.FC = () => {
  return (
    <section className="container relative mx-auto w-full">
      <div className="relative flex min-h-svh lg:min-h-lvh">
        {/* Child Element */}
        <div
          className="no-scrollbar flex-grow overflow-y-auto pb-72 lg:px-16"
          style={{ height: "calc(100vh - 2rem)" }}
        >
          <div className="py-5">
            <h2 className="text-lg font-semibold text-clarc-blue sm:text-xl md:text-2xl lg:text-3xl">
              School Emblem
            </h2>
            <div className="flex w-full items-center justify-center">
              <img src="../school-emblem.jpg" alt="School Emblem" />
            </div>
          </div>
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

export default SchoolEmblem;
