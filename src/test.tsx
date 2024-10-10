import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";

import React, { useEffect, useState } from "react";

interface NewsItem {
	category: string;
	title: string;
	date: string;
	image: string;
	link: string;
}

const newsItems: NewsItem[] = [
	{
		category: "International News",
		title: "CLARC goes global",
		date: "October 09, 2024",
		image: "https://www.feu.edu.ph/wp-content/uploads/2024/10/462133588_1107903954235527_7937138906334353410_n.jpg",
		link: "/news/clarc-goes-global",
	},
	{
		category: "Campus Life",
		title: "New Student Center Opens",
		date: "September 15, 2024",
		image: "https://www.feu.edu.ph/wp-content/uploads/2024/10/462133588_1107903954235527_7937138906334353410_n.jpg",
		link: "/news/new-student-center",
	},
	{
		category: "Academic Achievement",
		title: "Students Win National Competition",
		date: "August 22, 2024",
		image: "https://www.feu.edu.ph/wp-content/uploads/2024/10/462133588_1107903954235527_7937138906334353410_n.jpg",
		link: "/news/national-competition-win",
	},
	{
		category: "Research Spotlight",
		title: "Breakthrough in Renewable Energy",
		date: "July 30, 2024",
		image: "https://www.feu.edu.ph/wp-content/uploads/2024/10/462133588_1107903954235527_7937138906334353410_n.jpg",
		link: "/news/renewable-energy-breakthrough",
	},
];

const TEST: React.FC = () => {
	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState<number | null>(0);

	useEffect(() => {
		if (!api) {
			return;
		}

		setCurrent(api.selectedScrollSnap());

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap());
		});
	}, [api]);

	return (
		<section className="py-12">
			<div className="container mx-auto px-4">
				<div className="text-center mb-10">
					<h3 className="uppercase text-sm font-medium text-gray-600 mb-2">Our Videos</h3>
					<h1 className="text-3xl md:text-4xl font-astralaga font-semibold text-gray-900">Experience Clarendon through these videos</h1>
				</div>
				<Carousel
					setApi={setApi}
					opts={{
						align: "start",
						loop: true,
					}}
					className="w-full">
					<CarouselContent>
						{newsItems.map((item, index) => (
							<CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
								<div className="p-1">
									<Card className="overflow-hidden shadow-none outline-none border-none transition duration-300 transform hover:-translate-y-1">
										<a href={item.link} className="block relative group">
											<div className=" overflow-hidden">
												<img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
												<div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
													<span className="text-white font-semibold text-lg">Read More</span>
												</div>
											</div>
										</a>
										<CardContent className="p-4 space-y-6">
											<h4 className="text-base font-semibold text-clarc-blue mb-2">
												{"— "}
												{item.category}
											</h4>
											<h2 className="font-astralaga text-xl font-bold text-gray-800 mb-3 line-clamp-2">{item.title}</h2>
											<div className="flex justify-start items-center gap-2">
												<p className="text-sm text-gray-500 font-semibold">{item.date}</p>
											</div>
										</CardContent>
									</Card>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="md:-left-12" />
					<CarouselNext className="md:-right-12" />
				</Carousel>
				<div className="flex justify-center my-6">
					{/**
					 * TODO: Fix the logic when clicking the circle it does not go to the right card
					 *
					 */}
					{newsItems.map((_, index) => (
						<button key={index} className={`w-2 h-2 aspect-square rounded-full mx-1 transition-colors duration-200 ${index === current ? "bg-clarc-gold" : "bg-gray-300"}`} onClick={() => api?.scrollTo(index)} aria-label={`Go to slide ${index + 1}`} />
					))}
				</div>
			</div>
		</section>
	);
};

export default TEST;
