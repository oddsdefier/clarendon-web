import { motion } from "framer-motion";
import { Play, Youtube } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";

import CarouselItemAnim from "@/components/CarouselItemAnim";
import ViewAllBtn from "@/components/ViewAllBtn";
import { videoItem, videos } from "@/utils/get_video_data";

const bgImgUrl = "https://scontent.fmnl3-3.fna.fbcdn.net/v/t1.6435-9/87552206_109185400685458_8773993985245970432_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeFO4Mchm6htvMg3jfpS88muV7IgrR-L65lXsiCtH4vrmbjZ8WFU0JAn-9mlwAyPhTmA3SH4R7N9-RgW0S0GkGW2&_nc_ohc=IDqxNCm7-KUQ7kNvgEF9FhL&_nc_ht=scontent.fmnl3-3.fna&_nc_gid=A5VdmLMMKAhdBxXSNnq4UGb&oh=00_AYC3SJL1bVCLptcCij-ssMAGnZCLpTWeVLiYOmDDHC2img&oe=672F3CA6";

const VideoCard = React.memo(({ video, index, hoveredId, setHoveredId }: { video: videoItem; index: number; hoveredId: number | null; setHoveredId: (id: number | null) => void }) => (
	<Card className="border-none shadow-none bg-transparent">
		<CardContent className="p-0">
			<CarouselItemAnim index={index}>
				<figure className="relative w-full rounded-lg overflow-hidden shadow-lg aspect-video">
					<div className="absolute inset-0 bg-gradient-to-tr from-black/80 to-transparent opacity-95"></div>
					<img src={video.thumbnail} alt={`${video.title} Thumbnail`} className="w-full h-full object-cover" />
					<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 transition-opacity duration-300 hover:bg-opacity-50" onMouseEnter={() => setHoveredId(video.id)} onMouseLeave={() => setHoveredId(null)}>
						<motion.div className="relative" initial={{ scale: 1 }} animate={{ scale: hoveredId === video.id ? 1.1 : 1 }} transition={{ duration: 0.3 }}>
							<motion.div
								className="absolute inset-0 bg-white rounded-full opacity-25 -z-10"
								initial={{ scale: 0.8, opacity: 0 }}
								animate={{
									scale: hoveredId === video.id ? 1.5 : 0.8,
									opacity: hoveredId === video.id ? 0.5 : 0,
								}}
								transition={{ duration: 1, repeat: Infinity }}
							/>
							<motion.a href={video.link} className="w-10 h-10 z-10 grid place-items-center rounded-full bg-transparent border border-white text-primary shadow-lg" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} aria-label={`Play ${video.title} video`}>
								<Play className="w-4 h-4 text-white" />
							</motion.a>
						</motion.div>
					</div>
				</figure>
				<div className="mt-4">
					<h2 className="text-left text-base lg:text-lg w-3/4 font-semibold text-gray-700">{video.title}</h2>
					<p className="mt-1 text-xs text-left font-normal text-gray-700/70">Sanctus duo accusam eos clita aliquyam eos stet diam stet stet. Sed labore elitr diam invidunt ipsum et, est at.</p>
				</div>
			</CarouselItemAnim>
		</CardContent>
	</Card>
));

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
		<div className="bg-clarc-gold/10 relative lg:min-h-screen" id="videos-section">
			<Youtube className="hidden lg:flex absolute rotate-12 top-0 lg:-top-12 lg:right-5 lg:translate-x-8 translate-y-0 lg:translate-y-8 w-1/2 h-1/2 square text-white -z-[9] opacity-40" />
			<div
				className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-10"
				style={{
					backgroundImage: `url(${bgImgUrl})`,
				}}></div>
			<div className="-z-10 absolute inset-0 bg-gradient-to-t from-clarc-gold to-transparent opacity-100"></div>
			<div className="container mx-auto px-4 py-8">
				<div className="text-center mb-8">
					<h3 className="uppercase text-lg lg:text-xl font-semibold text-clarc-blue/70 mb-4">Our Videos</h3>
					<h1 className="text-2xl md:text-3xl font-astralaga font-semibold text-clarc-blue">
						Experience <span className="text-clarc-gold lg:text-[2.1rem]">Clarendon</span> through these videos
					</h1>
				</div>

				<Carousel
					setApi={setApi}
					className="w-full mx-auto"
					opts={{
						align: "start",
						slidesToScroll: slidesPerView,
					}}>
					<CarouselContent>
						{videos.map((video, index) => (
							<CarouselItem key={video.id} className="md:basis-1/2 lg:basis-1/3 py-2">
								<VideoCard video={video} index={index} hoveredId={hoveredId} setHoveredId={setHoveredIdCallback} />
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="w-10 h-10 hidden md:flex md:-left-14 opacity-45 -translate-y-[5.5rem]" />
					<CarouselNext className="w-10 h-10 hidden md:flex md:-right-14 opacity-45 -translate-y-[5.5rem]" />
				</Carousel>
				<div className="flex justify-center my-4">
					{Array.from({ length: totalPages }).map((_, index) => (
						<button key={index} className={`z-20 w-1 h-1 md:w-2 md:h-2 aspect-square rounded-full mx-1 transition-colors duration-200 ${index === current ? "bg-clarc-blue" : "bg-clarc-blue/30"}`} onClick={() => api?.scrollTo(index * slidesPerView)} aria-label={`Go to slide ${index + 1}`} />
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
