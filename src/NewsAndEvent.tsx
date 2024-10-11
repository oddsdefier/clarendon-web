import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { ArrowRight, Calendar, CircleChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
		image: "https://scontent.fmnl8-6.fna.fbcdn.net/v/t39.30808-6/462489344_1065119515614422_7635874021848328696_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHlJXB43YlUQcpcHgJOUke3W4hZsdWmz-FbiFmx1abP4WrefL3IN2hkHC-gL01KdP4FekB8VonTSjxgW-4Is1BC&_nc_ohc=0R4TXO3M5T8Q7kNvgGSsT_M&_nc_ht=scontent.fmnl8-6.fna&_nc_gid=AlsY4pF8zpqLfbpjcqVJC9n&oh=00_AYDfgmWvHYlrwg6MmcqWxHL6Z-7H7_5C_IuJtZaTrzzR3A&oe=670D527A",
		link: "/",
	},
	{
		category: "Campus Life",
		title: "New Student Center Opens",
		date: "September 15, 2024",
		image: "https://scontent.fmnl8-3.fna.fbcdn.net/v/t39.30808-6/455599851_1024173819708992_513435606900008794_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFJgOkMpWXPtUpWUk3YJYTGfeQKfZqfuxJ95Ap9mp-7EjfZiRdLos_nB4kqp-5NphGKbYII5LPQ8XtMBVmJ1X9d&_nc_ohc=lzpMNcfjrdkQ7kNvgEVrNjB&_nc_ht=scontent.fmnl8-3.fna&_nc_gid=AP0UElh72_S7lBmcl961Za3&oh=00_AYBuT_i2l3DOB4VfSnd8j7uGS7kpBGm_HV04Dv7pVt7eNg&oe=670D8202",
		link: "/",
	},
	{
		category: "Academic Achievement",
		title: "Students Win National Competition",
		date: "August 22, 2024",
		image: "https://scontent.fmnl8-1.fna.fbcdn.net/v/t39.30808-6/451300567_1003303658462675_6725677853035530200_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGGSZJPy1VsRQczE9PnBJAMDjZ22N7BhKIONnbY3sGEoutRECPzsYoyQmjQugfhwy072jB9Lo_3dqGgv95tHVsb&_nc_ohc=mntr7S7mqgIQ7kNvgEQmmt0&_nc_ht=scontent.fmnl8-1.fna&_nc_gid=AwzqxoOIcFfVSqkdYvGvWHr&oh=00_AYDjau1dy0Z8hothutILewVhrsC6Tu3rML54jIKMGYy-2Q&oe=670D7C85",
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
const bgImgUrl = newsItems[Math.floor(Math.random() * newsItems.length)].image;
console.log(bgImgUrl);
const NewsAndEventsSection: React.FC = () => {
	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState<number | null>(0);
	const [slidesPerView, setSlidesPerView] = useState<number>(1);
	const [totalPages, setTotalPages] = useState<number>(1);

	useEffect(() => {
		const updateSlidesPerView = () => {
			if (window.innerWidth >= 1024) {
				console.log("1024");
				setSlidesPerView(3);
			} else if (window.innerWidth >= 768) {
				console.log("768");
				setSlidesPerView(2);
			} else {
				console.log("smol width");
				setSlidesPerView(1);
			}
		};
		updateSlidesPerView();
		window.addEventListener("resize", updateSlidesPerView);
		return () => window.removeEventListener("resize", updateSlidesPerView);
	});
	useEffect(() => {
		if (!api) {
			return;
		}

		const totalSlides = newsItems.length;
		const pages = Math.ceil(totalSlides / slidesPerView);
		setTotalPages(pages);

		const updateCurrent = () => {
			const currentIndex = api.selectedScrollSnap();
			setCurrent(currentIndex);
		};
		updateCurrent();
		setCurrent(api.selectedScrollSnap());

		api.on("select", updateCurrent);

		return () => {
			api.off("select", updateCurrent);
		};
	}, [api, slidesPerView]);

	return (
		<section className="py-16 bg-white/10 relative">
			<div
				className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-10"
				style={{
					backgroundImage: `url(${bgImgUrl})`,
				}}></div>
			<div className="-z-10 absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-100"></div>
			<div className="container mx-auto px-4">
				<div className="flex flex-col sm:flex-row justify-between items-start lg:items-center mb-10 gap-5">
					<h1 className="text-[1.65rem] md:text-3xl font-astralaga font-semibold text-clarc-blue">College News and Events</h1>

					<motion.button className="focus:outline-none flex items-center space-x-2 bg-clarc-blue hover:bg-clarc-gold text-white font-semibold  px-5 py-4 lg:px-6 rounded-full transition duration-300 group" whileTap={{ scale: [0.8, 1] }} whileHover={{ scale: [0.7, 1] }}>
						<span className="text-sm lg:text-base text-clarc-gold group-hover:text-clarc-blue">View All News</span>
						<ArrowRight className="w-5 h-5 text-clarc-gold group-hover:text-clarc-blue" />
					</motion.button>
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
									<Card className="overflow-hidden shadow-none outline-none border-none transition duration-300 transform rounded-none bg-transparent">
										<a href={item.link} className="block relative group">
											<div className=" overflow-hidden">
												<img src={item.image} alt={item.title} className="rounded-sm w-full h-52 object-cover transition-transform duration-300 group-hover:scale-110" />
												<div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
													<span className="text-white font-semibold text-base">Read More</span>
												</div>
											</div>
										</a>
										<CardContent className="p-4 space-y-2 mt-8">
											<h4 className="uppercase text-[0.89rem] font-semibold text-clarc-blue/80 mb-6">
												{"— "}
												{item.category}
											</h4>
											<h2 className="font-astralaga text-lg font-bold text-clarc-blue line-clamp-2">{item.title}</h2>
											<div className="flex justify-start items-center gap-1">
												<Calendar className="w-4 h-4 text-gray-800/60" />
												<p className="text-sm text-gray-800/60 font-semibold">{item.date}</p>
											</div>
											<div className="pt-5">
												<a href="./" className="flex w-full items-center justify-start gap-1">
													<CircleChevronRight className="w-4 h-4 text-gray-800/70" />
													<p className="text-gray-800/80 text-sm">Read More</p>
												</a>
											</div>
										</CardContent>
									</Card>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="hidden md:flex md:-left-10" />
					<CarouselNext className="hidden md:flex md:-right-10" />
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

export default NewsAndEventsSection;
