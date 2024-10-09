import React, { useState, useEffect } from "react";
import { ArrowRight, Calendar } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useCarousel } from "@/components/ui/carousel";

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

const NewsAndEventsSection: React.FC = () => {
	const [api, setApi] = useState<ReturnType<typeof useCarousel>>();
	const [current, setCurrent] = useState(0);

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
		<section className="py-12 bg-gray-50">
			<div className="container mx-auto px-4">
				<div className="flex flex-col sm:flex-row justify-between items-center mb-10">
					<h1 className="font-astralaga text-3xl md:text-4xl font-semibold text-gray-800 mb-4 sm:mb-0">College News and Events</h1>
					<button className="flex items-center space-x-2 bg-clarc-blue hover:bg-indigo-800 text-white font-semibold py-4 px-6 rounded-full transition duration-300">
						<span className="text-md">View All News</span>
						<ArrowRight size={20} />
					</button>
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
									<Card className="overflow-hidden shadow-sm hover:shadow-md transition duration-300 transform hover:-translate-y-1">
										<a href={item.link} className="block relative group">
											<div className="aspect-w-16 aspect-h-9 overflow-hidden">
												<img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
												<div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
													<span className="text-white font-semibold text-lg">Read More</span>
												</div>
											</div>
										</a>
										<CardContent className="p-4 space-y-6">
											<h4 className="text-sm font-semibold text-indigo-600 mb-2">{item.category}</h4>
											<h2 className="font-astralaga text-xl font-bold text-gray-800 mb-3 line-clamp-2">{item.title}</h2>
											<div className="flex justify-start items-center gap-2">
												<Calendar className="w-4 h-4 text-gray-500" />
												<p className="text-sm text-gray-500 font-semibold">{item.date}</p>
											</div>
										</CardContent>
									</Card>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
				<div className="flex justify-center mt-4">
					{newsItems.map((_, index) => (
						<button key={index} className={`w-3 h-3 rounded-full mx-1 transition-colors duration-200 ${index === current ? "bg-clarc-blue" : "bg-gray-300"}`} onClick={() => api?.scrollTo(index)} aria-label={`Go to slide ${index + 1}`} />
					))}
				</div>
			</div>
		</section>
	);
};

export default NewsAndEventsSection;
