import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
// import ViewAllBtn from "@/components/ViewAllBtn";
import { sdgProjectsData } from "@/utils/data_sdg_projects";
import React, { useCallback, useEffect, useState } from "react";
import SDGCard from "./components/SDGCard";

const headingTitle =
  "text-xl md:text-2xl font-astralaga font-semibold text-clarc-blue italic";

const NewsAndEventsSection: React.FC = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState<number>(0);
  const [slidesPerView, setSlidesPerView] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

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

    const totalSlides: number = sdgProjectsData.length;
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

  return (
    <section className="relative bg-clarc-white/10" id="news-and-events">
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-white to-transparent opacity-100" />
      <div className="container mx-auto">
        <div className="mb-5 flex flex-col items-start justify-between gap-5 sm:flex-row lg:items-center">
          <h1 className={headingTitle}>Projects</h1>
          {/* <ViewAllBtn children={"View All News"} link={"/all-news/"} /> */}
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
            {sdgProjectsData.map((item, index) => (
              <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3">
                <div>
                  <SDGCard key={item.id} item={item} />
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
