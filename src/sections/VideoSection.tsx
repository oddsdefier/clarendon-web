import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import ViewAllBtn from "@/components/ViewAllBtn";
import { videoItem, videos } from "@/utils/data_videos";
import { motion } from "framer-motion";
import { Play, Youtube } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";

const bgImgUrl =
  "https://scontent.fmnl3-3.fna.fbcdn.net/v/t1.6435-9/87552206_109185400685458_8773993985245970432_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeFO4Mchm6htvMg3jfpS88muV7IgrR-L65lXsiCtH4vrmbjZ8WFU0JAn-9mlwAyPhTmA3SH4R7N9-RgW0S0GkGW2&_nc_ohc=IDqxNCm7-KUQ7kNvgEF9FhL&_nc_ht=scontent.fmnl3-3.fna&_nc_gid=A5VdmLMMKAhdBxXSNnq4UGb&oh=00_AYC3SJL1bVCLptcCij-ssMAGnZCLpTWeVLiYOmDDHC2img&oe=672F3CA6";

const VideoCard = React.memo(
  ({
    video,
    hoveredId,
    setHoveredId,
  }: {
    video: videoItem;
    index: number;
    hoveredId: number | null;
    setHoveredId: (id: number | null) => void;
  }) => (
    <Card className="border-none bg-transparent shadow-none">
      <CardContent className="p-0">
        <div>
          <figure className="relative aspect-video w-full overflow-hidden rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-tr from-black/80 to-transparent opacity-95"></div>
            <img
              src={video.thumbnail}
              alt={`${video.title} Thumbnail`}
              className="h-full w-full object-cover"
            />
            <div
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 transition-opacity duration-300 hover:bg-opacity-50"
              onMouseEnter={() => setHoveredId(video.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <motion.div
                className="relative"
                initial={{ scale: 1 }}
                animate={{ scale: hoveredId === video.id ? 1.1 : 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 -z-10 rounded-full bg-white opacity-25"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{
                    scale: hoveredId === video.id ? 1.5 : 0.8,
                    opacity: hoveredId === video.id ? 0.5 : 0,
                  }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                <motion.a
                  href={video.link}
                  className="z-10 grid h-10 w-10 place-items-center rounded-full border border-white bg-transparent text-primary shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Play ${video.title} video`}
                >
                  <Play className="h-4 w-4 text-white" />
                </motion.a>
              </motion.div>
            </div>
          </figure>
          <div className="mt-4">
            <h2 className="w-3/4 text-left text-base font-semibold text-gray-700 lg:text-lg">
              {video.title}
            </h2>
            <p className="mt-1 text-left text-xs font-normal text-gray-700/70">
              Sanctus duo accusam eos clita aliquyam eos stet diam stet stet.
              Sed labore elitr diam invidunt ipsum et, est at.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  ),
);

const VideoSection: React.FC = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState<number | null>(0);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [slidesPerView, setSlidesPerView] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);

    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  useEffect(() => {
    if (!api) return;

    const totalSlides: number = videos.length;
    const pages: number = Math.ceil(totalSlides / slidesPerView);
    setTotalPages(pages);

    const updateCurrent = () => {
      const currentIndex = api.selectedScrollSnap();
      setCurrent(Math.floor(currentIndex));
    };

    updateCurrent();

    api.on("select", updateCurrent);

    return () => {
      api.off("select", updateCurrent);
    };
  }, [api, slidesPerView]);

  const setHoveredIdCallback = useCallback((id: number | null) => {
    setHoveredId(id);
  }, []);

  return (
    <div
      className="relative bg-clarc-white/10 py-8 sm:py-12 lg:py-16"
      id="videos-section"
    >
      <Youtube className="square absolute top-0 -z-[9] hidden h-1/2 w-1/2 translate-y-0 rotate-12 text-white opacity-40 lg:-top-12 lg:right-5 lg:flex lg:translate-x-8 lg:translate-y-8" />
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: `url(${bgImgUrl})`,
        }}
      ></div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-clarc-gold to-transparent opacity-100"></div>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h3 className="mb-4 text-lg font-semibold uppercase text-clarc-blue/70 lg:text-xl">
            Our Videos
          </h3>
          <h1 className="font-astralaga text-2xl font-semibold text-clarc-blue md:text-3xl">
            Experience{" "}
            <span className="text-clarc-gold lg:text-[2.1rem]">Clarendon</span>{" "}
            through these videos
          </h1>
        </div>

        <Carousel
          setApi={setApi}
          className="mx-auto w-full"
          opts={{
            align: "start",
            slidesToScroll: slidesPerView,
          }}
        >
          <CarouselContent>
            {videos.map((video, index) => (
              <CarouselItem
                key={video.id}
                className="py-2 md:basis-1/2 lg:basis-1/3"
              >
                <VideoCard
                  video={video}
                  index={index}
                  hoveredId={hoveredId}
                  setHoveredId={setHoveredIdCallback}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden h-10 w-10 -translate-y-[5.5rem] opacity-45 md:-left-14 md:flex" />
          <CarouselNext className="hidden h-10 w-10 -translate-y-[5.5rem] opacity-45 md:-right-14 md:flex" />
        </Carousel>
        <div className="my-4 flex justify-center">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`z-20 mx-1 aspect-square h-1 w-1 rounded-full transition-colors duration-200 md:h-2 md:w-2 ${index === current ? "bg-clarc-blue" : "bg-clarc-blue/30"}`}
              onClick={() => api?.scrollTo(index * slidesPerView)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <ViewAllBtn children={"View All Videos"} link={"/"} />
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
