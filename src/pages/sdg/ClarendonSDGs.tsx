import React from "react";
import { SDG, clarendonSDGs } from "@/utils/data_sdgs";
import { newsItems } from "@/utils/data_news_and_events";

const ClarendonSDGs: React.FC = () => {
  const presentSDGs = newsItems.map((news) => news.sdg);
  const uniqueSDGs = [...new Set(presentSDGs.flat())].sort((a, b) => a - b);
  const filteredSDGs: SDG[] = clarendonSDGs.filter((sdg) =>
    uniqueSDGs.includes(sdg.code),
  );

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

  const SDGLogo =
    "https://res.cloudinary.com/dfntpqzza/image/upload/v1732689056/E_SDG_logo_UN_emblem_square_trans_WEB_kaxx92.png";
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
            {clarendonSDGs.map((sdg) => (
              <a
                key={sdg.code}
                href={`#SDG${sdg.code}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(`SDG${sdg.code}`);
                }}
              >
                <div className="aspect-square hover:opacity-40">
                  <img src={sdg.img} alt={sdg.title} />
                </div>
              </a>
            ))}
            <div className="flex aspect-square items-center justify-center hover:opacity-40">
              <img src={SDGLogo} alt="SDG Logo" />
            </div>
          </div>
          {/* GRIDs */}
          <div className="space-y-4">
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
                  <div className="flex justify-start py-3">
                    <img
                      src={sdg.img}
                      alt={sdg.title}
                      className="aspect-square h-48 w-48"
                    />
                  </div>
                  <div className="py-3">
                    <h2 className="text-xl font-bold leading-[1] text-clarc-blue">
                      {"Clarendon on "}
                      {sdg.title}
                    </h2>
                    <ul className="list-disc py-3 pl-5">
                      {relatedNews.map((news) => (
                        <li key={news.id}>
                          <a
                            href={`/news/${news.slug}`}
                            target="_blank"
                            className="hover:text-clarc-blue hover:underline hover:underline-offset-1"
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
