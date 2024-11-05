import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import ViewAllBtn from "@/components/ViewAllBtn";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import NewsCard from "@/components/NewsCard";
import { newsItems } from "@/utils/data_news_and_events";
const headingTitle =
  "text-[1.7rem] md:text-4xl font-astralaga font-semibold text-clarc-blue";

const NewsAndEventsSection: React.FC = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState<number>(0);
  const [slidesPerView, setSlidesPerView] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const bgImgUrl = useMemo(
    () => newsItems[Math.floor(Math.random() * newsItems.length)].image,
    [],
  );

  const updateSlidesPerView = useCallback(() => {
    if (window.innerWidth >= 1024) {
      setSlidesPerView(3);
    } else if (window.innerWidth >= 768) {
      setSlidesPerView(2);
    } else {
      setSlidesPerView(1);
    }
  }, []);

  useEffect(() => {
    updateSlidesPerView();
    const handleResize = () => {
      requestAnimationFrame(updateSlidesPerView);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [updateSlidesPerView]);

  useEffect(() => {
    if (!api) return;

    const totalSlides: number = newsItems.length;
    const pages = Math.ceil(totalSlides / slidesPerView);
    setTotalPages(pages);

    const updateCurrent = () => {
      setCurrent(api.selectedScrollSnap());
    };

    updateCurrent();
    api.on("select", updateCurrent);

    return () => {
      api.off("select", updateCurrent);
    };
  }, [api, slidesPerView]);

  // const NewsCard = React.memo(({ item }: { item: NewsItem }) => (
  //   <Card className="transform overflow-hidden rounded-none bg-clarc-gold/10 pb-3 shadow-sm outline-none transition duration-300 hover:bg-clarc-gold/20">
  //     <div>
  //       <Link to={`/news/${item.slug}`} className="group relative block">
  //         <div className="relative overflow-hidden">
  //           <img
  //             src={item.image}
  //             alt={item.title}
  //             className="h-52 w-full rounded-sm object-contain transition-transform duration-300 group-hover:scale-110"
  //             loading="lazy"
  //           />
  //           <img
  //             src={item.image}
  //             alt=""
  //             className="absolute left-0 top-0 -z-10 h-52 w-full rounded-sm object-cover opacity-10"
  //             loading="lazy"
  //           />
  //           <div className="duration-400 absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 transition-opacity group-hover:opacity-100">
  //             <span className="text-base font-semibold text-white">
  //               Read More
  //             </span>
  //           </div>
  //         </div>
  //       </Link>
  //       <CardContent className="space-y-2 p-4 pt-8">
  //         <h4 className="mb-6 text-sm font-medium uppercase tracking-wider text-clarc-gold">
  //           {"— "}
  //           {item.category}
  //         </h4>
  //         <h2 className="line-clamp-2 font-astralaga text-lg font-bold text-clarc-blue lg:text-lg">
  //           {item.title}
  //         </h2>
  //         <div className="flex items-center justify-start gap-1">
  //           <Calendar className="h-4 w-4 text-gray-800/60" />
  //           <p className="text-sm font-medium text-gray-800/60">{item.date}</p>
  //         </div>

  //         <div className="pt-5">
  //           <Link
  //             to={`/news/${item.slug}`}
  //             className="flex w-full items-center justify-start gap-1 text-primary/80 hover:text-primary"
  //           >
  //             <CircleChevronRight className="h-4 w-4" />
  //             <p className="text-sm">Read More</p>
  //           </Link>
  //         </div>
  //       </CardContent>
  //     </div>
  //   </Card>
  // ));

  return (
    <section
      className="relative bg-clarc-white/10 py-8 sm:py-12 lg:py-16"
      id="news-and-events"
    >
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: `url(${bgImgUrl})`,
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-white to-transparent opacity-100" />
      <div className="container mx-auto px-4">
        <div className="mb-10 flex flex-col items-start justify-between gap-5 sm:flex-row lg:items-center">
          <h1 className={headingTitle}>News and Events</h1>
          <ViewAllBtn children={"View All News"} link={"/all-news/"} />
        </div>
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            slidesToScroll: slidesPerView,
          }}
          className="w-full"
        >
          <CarouselContent>
            {newsItems.map((item, index) => (
              <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <NewsCard item={item} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden h-10 w-10 -translate-y-5 md:-left-14 md:flex" />
          <CarouselNext className="hidden h-10 w-10 -translate-y-5 md:-right-14 md:flex" />
        </Carousel>
        <div className="my-8 flex justify-center">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`z-20 mx-1 aspect-square h-1 w-1 rounded-full transition-colors duration-200 md:h-2 md:w-2 ${index === current ? "bg-clarc-blue" : "bg-clarc-blue/30"}`}
              onClick={() => api?.scrollTo(index * slidesPerView)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(NewsAndEventsSection);
