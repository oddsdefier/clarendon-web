"use client";

import { useEffect, useState, useCallback } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";

const imgLinks = ["https://scontent.fmnl9-7.fna.fbcdn.net/v/t39.30808-6/462489344_1065119515614422_7635874021848328696_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=0R4TXO3M5T8Q7kNvgGSsT_M&_nc_ht=scontent.fmnl9-7.fna&_nc_gid=AizMCVbfRlJ9AW-F24pfw-a&oh=00_AYCcLqRxdQyFs-ilkgu9zBGtkaRVrnSoZJTvrLrfyirXBw&oe=670AAF7A", "https://scontent.fmnl8-1.fna.fbcdn.net/v/t1.6435-9/88184736_109184897352175_8564519449443434496_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=dVnL4YDLClQQ7kNvgFpiYgg&_nc_ht=scontent.fmnl8-1.fna&_nc_gid=AX9N5pwxZULJISE7RACaTpN&oh=00_AYDuf2cgfAdbBIgkKaDRv1sw1Wk0RJGDF1BnVMBLwxyREA&oe=672C2F91", "https://scontent.fmnl9-5.fna.fbcdn.net/v/t39.30808-6/453160139_1011457830980591_1569994780673681209_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF-5wpaQgPpZQZjyqXhOpmqeOgZhvm9OQN46BmG-b05A3RXWDe0wxFigaXb8w-JAwWfVvbGBHN60uVPahAJSMKT&_nc_ohc=mNbDVhpRA9UQ7kNvgEGybu8&_nc_ht=scontent.fmnl9-5.fna&_nc_gid=Ax49JVOJGYnlle_-MMtB8w6&oh=00_AYBsMQLomzcdru8GCLtbNtGnaN4xvo0fk9xGIVqtn_hHog&oe=670A94E7", "https://scontent.fmnl9-5.fna.fbcdn.net/v/t39.30808-6/449079327_988420149951026_2129255532063009486_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG0-KsbvBg6ffrJY4HMqc0u_IU0VHctjzX8hTRUdy2PNSRdS5rLJlcx4XiBpIp_e3FvkeuPWwUoC0bDe1KOslIC&_nc_ohc=saoEzDqz2OkQ7kNvgEtgxLp&_nc_ht=scontent.fmnl9-5.fna&_nc_gid=AuFFGpZnpbNDuT1AQRsybhK&oh=00_AYA_HdG4sqSpfHpFNxcE3mUPXyhaQaagOey_lME4N4wNnA&oe=670AB5BE"];

export default function CarouselPlugin() {
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
		<div className="w-full mx-auto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
			<Carousel setApi={setApi} className="w-full">
				<CarouselContent>
					{imgLinks.map((imgLink, index) => (
						<CarouselItem key={index}>
							<div className="aspect-video flex items-center justify-center">
								<img src={imgLink} alt={`Image ${index + 1}`} className="object-cover w-full h-full" />
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className="hidden md:flex md:left-12" />
				<CarouselNext className="hidden md:flex md:right-12" />
			</Carousel>
			<div className="flex justify-center my-4">
				{imgLinks.map((_, index) => (
					<button key={index} className={`w-2 h-2 aspect-square rounded-full mx-1 transition-colors duration-200 ${index === current ? "bg-clarc-gold" : "bg-gray-300"}`} onClick={() => api?.scrollTo(index)} aria-label={`Go to slide ${index + 1}`} />
				))}
			</div>
		</div>
	);
}
