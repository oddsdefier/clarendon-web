import { clarcAssets } from "@/utils/img_links";
import { staticContent } from "@/utils/static_content";
import React from "react";
import Header from "./components/Header";
import { Separator } from "@radix-ui/react-separator";
import AboutUs from "./components/AboutUs";

const VisionMission: React.FC = () => {
	const sections = [staticContent.mission, staticContent.vision];
	const title = "Mission and Vision";
	const img = clarcAssets.images.tourism;
	return (
		<div className="w-full bg-white">
			<Header img={img} title={title} />
			<main className="container mx-auto lg:flex lg:gap-12 py-5 px-4 lg:py-10" id="mission-vision">
				<div className="relative container mx-auto max-w-4xl">
					{sections.map((section) => (
						<div key={section.id} id={section.id} className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 mt-0 pb-10">
							<div>
								<h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-clarc-blue">{section.title}</h2>
								<Separator className="bg-clarc-gold/80 w-1/4 my-3 h-1" />
								<p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">{section.text}</p>
							</div>
						</div>
					))}
				</div>
				<aside className="w-64 hidden lg:block">
					<AboutUs />
				</aside>
			</main>
		</div>
	);
};

export default VisionMission;
