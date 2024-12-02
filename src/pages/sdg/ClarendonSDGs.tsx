import React from "react";
import { SDG, clarendonSDGs } from "@/utils/data_sdgs";
import { newsItems } from "@/utils/data_news_and_events";

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
          {clarendonSDGs.map((sdg) => (
            <a
              href={`#SDG${sdg.code}`}
              onClick={(e) => {
                e.preventDefault();
                handleScroll(`SDG${sdg.code}`);
              }}
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
                        <h2 className="text-2xl font-bold">
                          {sdg.news.length}
                        </h2>
                        <p className="text-sm">Events</p>
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
  const presentSDGs = newsItems.map((news) => news.sdg);
  const uniqueSDGs = [...new Set(presentSDGs.flat())].sort((a, b) => a - b);
  const filteredSDGs: SDG[] = clarendonSDGs.filter((sdg) =>
    uniqueSDGs.includes(sdg.code),
  );

  return (
    <>
      <section className="container relative mx-auto w-full py-5">
        <div className="mx-auto mb-4 px-4 lg:w-1/2">
          <img
            src="https://res.cloudinary.com/dfntpqzza/image/upload/v1732689060/E_SDG_logo_UN_emblem_horizontal_WEB_yuc6lk.jpg"
            alt="SDG Logo"
          />
        </div>
        <main className="container mx-auto space-y-0 px-4 lg:w-4/5 lg:space-y-16">
          <div className="hidden lg:flex">
            {/* GRIDs */}
            <FlipCard />
            {/* GRIDs */}
          </div>

          <div className="space-y-9">
            {filteredSDGs.map((sdg) => {
              const relatedNews = newsItems.filter((news) =>
                news.sdg.includes(sdg.code),
              );
              return (
                <div
                  key={sdg.code}
                  className="flex flex-col md:flex-row md:gap-8 lg:bg-transparent"
                  id={`SDG${sdg.code}`}
                  style={{ background: `${sdg.color}50` }}
                >
                  <div className="flex justify-center">
                    <img
                      src={sdg.img}
                      alt={sdg.title}
                      className="object-contain lg:h-52 lg:w-52"
                    />
                  </div>
                  <div className="p-4 md:mt-0 md:w-2/3 lg:w-3/4">
                    <h2 className="mb-2 text-xl font-semibold leading-[1] text-gray-800">
                      {sdg.title}
                    </h2>
                    <ul className="space-y-2">
                      {relatedNews.map((news) => (
                        <li key={news.id} className="flex items-start">
                          <span className="mr-2 font-bold text-clarc-blue">
                            •
                          </span>
                          <a
                            href={`/news/${news.slug}`}
                            className="text-clarc-blue transition-colors duration-200 ease-in-out hover:text-clarc-gold"
                          >
                            {news.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </section>
      {/* <section className="container relative mx-auto w-4/5 space-y-4 pb-28"></section> */}
    </>
  );
};

export default ClarendonSDGs;
