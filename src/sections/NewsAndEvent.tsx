import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { Calendar, CircleChevronRight } from "lucide-react";
import React, { useCallback, useEffect, useMemo, useState } from "react";

import CarouselItemAnim from "@/components/CarouselItemAnim";
import ViewAllBtn from "@/components/ViewAllBtn";
import { NewsItem, newsItems } from "@/utils/get_news_and_events_data";
import { Link } from "react-router-dom";

const headingTitle = "text-[1.65rem] md:text-3xl font-astralaga font-semibold text-clarc-blue";

const NewsAndEventsSection: React.FC = () => {
	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState<number>(0);
	const [slidesPerView, setSlidesPerView] = useState<number>(1);
	const [totalPages, setTotalPages] = useState<number>(1);

	const bgImgUrl = useMemo(() => newsItems[Math.floor(Math.random() * newsItems.length)].image, []);

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

	const NewsCard = React.memo(({ item, index }: { item: NewsItem; index: number }) => (
		<Card className="hover:bg-clarc-gold/20 overflow-hidden shadow-none outline-none border-none transition duration-300 transform rounded-none bg-transparent">
			<CarouselItemAnim index={index}>
				<Link to={`/news/${item.slug}`} className="block relative group">
					<div className="overflow-hidden relative">
						<img src={item.image} alt={item.title} className="rounded-sm w-full h-52 object-contain transition-transform duration-300 group-hover:scale-110" loading="lazy" />
						<img src={item.image} alt="" className="absolute top-0 left-0 -z-10 rounded-sm w-full h-52 object-cover opacity-10" loading="lazy" />
						<div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
							<span className="text-white font-semibold text-base">Read More</span>
						</div>
					</div>
				</Link>
				<CardContent className="p-4 space-y-2 pt-8">
					<h4 className="uppercase text-sm tracking-wider font-semibold text-clarc-blue/80 mb-6">
						{"— "}
						{item.category}
					</h4>
					<h2 className="font-astralaga text-lg lg:text-lg font-bold text-clarc-blue line-clamp-2">{item.title}</h2>
					<div className="flex justify-start items-center gap-1">
						<Calendar className="w-4 h-4 text-gray-800/60" />
						<p className="text-sm text-gray-800/60 font-semibold">{item.date}</p>
					</div>
					<div className="pt-5">
						<Link to={`/news/${item.slug}`} className="flex w-full items-center justify-start gap-1">
							<CircleChevronRight className="w-4 h-4 text-gray-800/70" />
							<p className="text-gray-800/80 text-sm">Read More</p>
						</Link>
					</div>
				</CardContent>
			</CarouselItemAnim>
		</Card>
	));

	return (
		<section className="py-16 bg-white/10 relative lg:min-h-screen" id="news-and-events">
			<div
				className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-10"
				style={{
					backgroundImage: `url(${bgImgUrl})`,
				}}
			/>
			<div className="-z-10 absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-100" />
			<div className="container mx-auto px-4">
				<div className="flex flex-col sm:flex-row justify-between items-start lg:items-center mb-10 gap-5">
					<h1 className={headingTitle}>News and Events</h1>
					<ViewAllBtn children={"View All News"} link={"/"} />
				</div>
				<Carousel
					setApi={setApi}
					opts={{
						align: "start",
						slidesToScroll: slidesPerView,
					}}
					className="w-full">
					<CarouselContent>
						{newsItems.map((item, index) => (
							<CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
								<div className="p-1">
									<NewsCard item={item} index={index} />
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="w-10 h-10 hidden md:flex md:-left-14 -translate-y-5" />
					<CarouselNext className="w-10 h-10 hidden md:flex md:-right-14 -translate-y-5" />
				</Carousel>
				<div className="flex justify-center my-8">
					{Array.from({ length: totalPages }).map((_, index) => (
						<button key={index} className={`z-20 w-1 h-1 md:w-2 md:h-2 aspect-square rounded-full mx-1 transition-colors duration-200 ${index === current ? "bg-clarc-blue" : "bg-clarc-blue/30"}`} onClick={() => api?.scrollTo(index * slidesPerView)} aria-label={`Go to slide ${index + 1}`} />
					))}
				</div>
			</div>
		</section>
	);
};

export default React.memo(NewsAndEventsSection);
