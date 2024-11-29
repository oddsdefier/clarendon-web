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
                    <div className="flex min-h-full flex-col items-center justify-center">
                      <h2 className="text-base font-bold">{sdg.news.length}</h2>
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
      <section className="container relative mx-auto w-full py-5 pb-16">
        <div className="mx-auto w-1/2 pb-5">
          <img
            src="https://res.cloudinary.com/dfntpqzza/image/upload/v1732689060/E_SDG_logo_UN_emblem_horizontal_WEB_yuc6lk.jpg"
            alt="SDG Logo"
          />
        </div>
        <main className="mx-auto w-4/5 space-y-16">
          {/* GRIDs */}
          <FlipCard />
          {/* GRIDs */}

          <div className="space-y-0">
            {filteredSDGs.map((sdg) => {
              const relatedNews = newsItems.filter((news) =>
                news.sdg.includes(sdg.code),
              );
              return (
                <div
                  key={sdg.code}
                  className="flex gap-2 space-x-4 border-y border-gray-200"
                  id={`SDG${sdg.code}`}
                >
                  <div className="flex items-center justify-center py-3">
                    <img
                      src={sdg.img}
                      alt={sdg.title}
                      className="aspect-square h-52 w-52"
                    />
                  </div>
                  <div className="py-3">
                    {/* <h2 className="text-xl font-bold leading-[1] text-clarc-blue">
                      {"Clarendon on "}
                      {sdg.title}
                    </h2> */}
                    <ul className="list-disc pl-5">
                      {relatedNews.map((news) => (
                        <li key={news.id}>
                          <a
                            href={`/news/${news.slug}`}
                            target="_blank"
                            className="text-clarc-blue hover:text-clarc-gold"
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
      <section className="container relative mx-auto w-4/5 space-y-4 pb-28"></section>
    </>
  );
};

export default ClarendonSDGs;
