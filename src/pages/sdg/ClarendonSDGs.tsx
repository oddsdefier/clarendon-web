import { sdgProjectsData } from "@/utils/data_sdg_projects";
import { SDGType, SDGs } from "@/utils/data_sdgs";
import React from "react";
import SDGCarousel from "./SDGCarousel";

const FlipCard: React.FC = () => {
  const SDGLogo =
    "https://res.cloudinary.com/dfntpqzza/image/upload/v1732689056/E_SDG_logo_UN_emblem_square_trans_WEB_kaxx92.png";
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = window.innerHeight * 0.11;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <section className="mx-auto">
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
          {SDGs.map((sdg) => (
            <a
              href={`#SDG${sdg.code}`}
              onClick={(e) => {
                e.preventDefault();
                handleScroll(`SDG${sdg.code}`);
              }}
              key={sdg.code}
            >
              <div
                key={sdg.code}
                className="group aspect-square [perspective:1000px]"
              >
                <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front Face */}
                  <div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden]">
                    {sdg.img && (
                      <img
                        className="h-full w-full cursor-pointer object-cover object-center"
                        src={sdg.img}
                        alt={sdg.title}
                      />
                    )}
                  </div>
                  {/* Front Face */}
                  {/* Back Face */}
                  <div className="absolute inset-0 h-full w-full bg-clarc-blue text-center text-slate-200 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <div className="flex min-h-full flex-col items-center justify-center p-4">
                      <div className="flex flex-col items-start justify-center">
                        <h2 className="text-lg font-bold sm:text-2xl">
                          {sdg.project.length > 0 ? sdg.project.length : "No"}
                        </h2>
                        <p className="text-xs opacity-80 sm:text-sm">
                          {sdg.project.length > 1 ? "Projects" : "Project"}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Back Face */}
                </div>
              </div>
            </a>
          ))}
          <div className="flex aspect-square items-center justify-center bg-gray-50">
            <img src={SDGLogo} alt="SDG Logo" className="scale-75" />
          </div>
        </div>
      </div>
    </section>
  );
};

const ClarendonSDGs: React.FC = () => {
  const presentSDGs = sdgProjectsData.map((sdgData) => sdgData.sdg);
  const uniqueSDGs = [...new Set(presentSDGs.flat())].sort((a, b) => a - b);
  const filteredSDGs: SDGType[] = SDGs.filter((sdg) =>
    uniqueSDGs.includes(sdg.code),
  );

  return (
    <>
      <section className="container relative mx-auto w-full py-5">
        <div className="mx-auto mb-10 flex flex-col items-center justify-center px-4 lg:w-1/2">
          <h1 className="inline-flex rounded-md bg-[#009EDB10] px-4 py-1 text-center font-semibold text-[#009EDB] lg:text-lg">
            Clarendon College's
          </h1>
          <img
            src="https://res.cloudinary.com/dfntpqzza/image/upload/v1732689060/E_SDG_logo_UN_emblem_horizontal_WEB_yuc6lk.jpg"
            alt="SDG Logo"
          />
        </div>
        <main className="container mx-auto space-y-0 px-4 lg:w-4/5 lg:space-y-10">
          <div className="hidden lg:flex">
            <FlipCard />
          </div>
          <div>
            <SDGCarousel />
          </div>
          <div className="space-y-5 px-4 pb-36 lg:space-y-0">
            {filteredSDGs.map((sdg) => {
              return (
                <div
                  key={sdg.code}
                  className="flex flex-col md:flex-row lg:bg-transparent"
                  id={`SDG${sdg.code}`}
                  style={{ background: `${sdg.color}20` }}
                >
                  <div
                    className="flex justify-center p-4"
                    style={{ background: `${sdg.color}` }}
                  >
                    <img
                      src={sdg.img}
                      alt={sdg.title}
                      className="h-32 w-32 object-contain sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-52 lg:w-52"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </section>
    </>
  );
};

export default ClarendonSDGs;
