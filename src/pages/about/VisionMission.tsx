import { clarcAssets } from "@/utils/img_links";
import { staticContent } from "@/utils/static_content";
import { Separator } from "@radix-ui/react-separator";
import React from "react";
import AboutUs from "./components/AboutUs";
import Header from "./components/Header";

const VisionMission: React.FC = () => {
	const sections = [staticContent.mission, staticContent.vision];
	const title = "Mission and Vision";
	const img = clarcAssets.images.new_building;
	return (
		<div className="w-full bg-white min-h-svh lg:min-h-lvh">
			<Header img={img} title={title} />
			<main className="container mx-auto lg:flex gap-8 py-5 px-4 lg:py-10" id="mission-vision">
				<div className="flex-1 lg:border-r lg:border-dotted lg:border-gray-200 lg:pr-8">
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
				<aside className="w-60 hidden lg:block">
					<AboutUs />
				</aside>
			</main>
		</div>
	);
};

export default VisionMission;
