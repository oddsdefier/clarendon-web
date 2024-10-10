import * as React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";

const videos = [
	{
		id: 1,
		title: "HIGHLIGHTS: 2024 Commencement Exercises",
		thumbnail: "https://img.youtube.com/vi/5XuRNRzQjro/sddefault.jpg",
	},
	{
		id: 2,
		title: "Campus Tour 2024",
		thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/sddefault.jpg",
	},
	{
		id: 3,
		title: "Student Life at Clarendon",
		thumbnail: "https://img.youtube.com/vi/jNQXAC9IVRw/sddefault.jpg",
	},
	{
		id: 4,
		title: "Research Spotlight: AI in Education",
		thumbnail: "https://img.youtube.com/vi/M7lc1UVf-VE/sddefault.jpg",
	},
];

export default function Component() {
	const [api, setApi] = React.useState<CarouselApi>();
	const [current, setCurrent] = React.useState(0);
	const [count, setCount] = React.useState(0);
	const [hoveredId, setHoveredId] = React.useState<number | null>(null);

	React.useEffect(() => {
		if (!api) {
			return;
		}

		setCount(videos.length);
		setCurrent(api.selectedScrollSnap() + 1);

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);

	return (
		<div className="container mx-auto my-16 px-4">
			<div className="text-center mb-10">
				<h3 className="uppercase text-xl font-semibold text-gray-500 mb-2">Our Videos</h3>
				<h1 className="text-3xl md:text-4xl font-astralaga font-semibold text-clarc-blue">Experience Clarendon through these videos</h1>
			</div>

			<Carousel setApi={setApi} className="w-full  mx-auto">
				<CarouselContent>
					{videos.map((video, index) => (
						<CarouselItem key={video.id} className="md:basis-1/2 lg:basis-1/3">
							<Card className="border-none shadow-none">
								<CardContent className="p-0">
									<motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
										<figure className="relative w-full rounded-lg overflow-hidden shadow-lg aspect-video">
											<img src={video.thumbnail} alt={`${video.title} Thumbnail`} className="w-full h-full object-cover" />
											<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 transition-opacity duration-300 hover:bg-opacity-50" onMouseEnter={() => setHoveredId(video.id)} onMouseLeave={() => setHoveredId(null)}>
												<motion.div className="relative" initial={{ scale: 1 }} animate={{ scale: hoveredId === video.id ? 1.1 : 1 }} transition={{ duration: 0.3 }}>
													<motion.div
														className="absolute inset-0 bg-white rounded-full opacity-25"
														initial={{ scale: 0.8, opacity: 0 }}
														animate={{
															scale: hoveredId === video.id ? 1.5 : 0.8,
															opacity: hoveredId === video.id ? 0.5 : 0,
														}}
														transition={{ duration: 1, repeat: Infinity }}
													/>
													<motion.button className="w-16 h-16 grid place-items-center rounded-full bg-white text-primary shadow-lg" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} aria-label={`Play ${video.title} video`}>
														<Play className="w-7 h-7 text-gray-700" />
													</motion.button>
												</motion.div>
											</div>
										</figure>
										<div className="mt-4">
											<h2 className="text-center text-lg uppercase font-medium text-gray-800">{video.title}</h2>
										</div>
									</motion.div>
								</CardContent>
							</Card>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className="hidden md:flex md:-left-12" />
				<CarouselNext className="hidden md:flex md:-right-12" />
			</Carousel>

			<div className="mt-4 text-center text-sm text-muted-foreground">
				Video {current} of {count}
			</div>

			<div className="mt-10 flex justify-center">
				<button className="rounded-full bg-clarc-blue px-5 py-3 text-sm text-white font-semibold hover:bg-blue-800 transition-colors duration-300">View More Videos</button>
			</div>
		</div>
	);
}
