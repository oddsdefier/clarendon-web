import { useEffect, useState, useCallback } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { clarcAssets } from "@/utils/link_images";
const imgLinks = [
  clarcAssets.images.cultural_center,
  clarcAssets.images.foundation,
  clarcAssets.images.new_building,
  clarcAssets.images.old_pic,
  clarcAssets.images.prisaa,
  clarcAssets.images.tourism,
];

const CarouselHero = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    if (!api || !autoplay) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api, autoplay]);

  const handleMouseEnter = useCallback(() => setAutoplay(false), []);
  const handleMouseLeave = useCallback(() => setAutoplay(true), []);
  return (
    <div
      className="mx-auto w-full bg-clarc-blue lg:min-h-lvh"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {imgLinks.map((imgLink, index) => (
            <CarouselItem key={index}>
              <div className="relative flex w-full items-center justify-center lg:aspect-video">
                {/* <div className="z-10 absolute inset-0 flex items-center justify-center">
									<h1 className="text-white text-lg lg:text-9xl">sample text</h1>
								</div> */}
                <div className="absolute inset-0 bg-gradient-to-t from-clarc-blue to-transparent opacity-40" />
                <img
                  src={imgLink}
                  alt={`Image ${index + 1}`}
                  className="h-96 w-full object-cover lg:h-full"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden h-10 w-10 opacity-65 md:left-12 md:flex" />
        <CarouselNext className="hidden h-10 w-10 opacity-65 md:right-12 md:flex" />
        <div className="z-100 absolute bottom-0 left-0 right-0 flex justify-center bg-transparent py-3 lg:py-6">
          {imgLinks.map((_, index) => (
            <button
              key={index}
              className={`z-20 mx-1 aspect-square h-1 w-1 rounded-full transition-colors duration-200 md:h-2 md:w-2 ${index === current ? "bg-clarc-gold" : "bg-clarc-white/80"}`}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
};
export default CarouselHero;
