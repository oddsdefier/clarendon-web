import { useEffect, useState, useCallback } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { clarcAssets } from "@/utils/img_links";
const imgLinks = [clarcAssets.images.cultural_center, clarcAssets.images.foundation, clarcAssets.images.new_building, clarcAssets.images.old_pic, clarcAssets.images.prisaa, clarcAssets.images.tourism];

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
		<div className="w-full mx-auto bg-clarc-blue lg:min-h-lvh" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
			<Carousel setApi={setApi} className="w-full">
				<CarouselContent>
					{imgLinks.map((imgLink, index) => (
						<CarouselItem key={index}>
							<div className="relative lg:aspect-video flex items-center justify-center w-full">
								{/* <div className="z-10 absolute inset-0 flex items-center justify-center">
									<h1 className="text-white text-lg lg:text-9xl">sample text</h1>
								</div> */}
								<div className="absolute inset-0 bg-gradient-to-t from-clarc-blue to-transparent opacity-40" />
								<img src={imgLink} alt={`Image ${index + 1}`} className="w-full h-96 lg:h-full object-cover" />
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className="w-10 h-10 hidden md:flex md:left-12 opacity-65" />
				<CarouselNext className="w-10 h-10 hidden md:flex md:right-12 opacity-65" />
				<div className="absolute bottom-0 left-0 right-0 bg-transparent z-100 flex justify-center py-3 lg:py-6">
					{imgLinks.map((_, index) => (
						<button key={index} className={`z-20 w-1 h-1 md:w-2 md:h-2 aspect-square rounded-full mx-1 transition-colors duration-200 ${index === current ? "bg-clarc-gold" : "bg-clarc-white/80"}`} onClick={() => api?.scrollTo(index)} aria-label={`Go to slide ${index + 1}`} />
					))}
				</div>
			</Carousel>
		</div>
	);
};
export default CarouselHero;
