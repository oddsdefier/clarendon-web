import React from "react";
import { staticContent } from "@/utils/static_content";
import { clarcAssets } from "@/utils/img_links";
import Header from "./components/Header";
import { Separator } from "@radix-ui/react-separator";
import AboutUs from "./components/AboutUs";

const philosophyOfEducation: React.FC = () => {
	const sections = [staticContent.philosophyOfEducation];
	const img = clarcAssets.images.tourism;
	const title = ""; //made this empty so i can avoid redundancy

	return (
		<div className="w-full bg-white min-h-svh lg:min-h-lvh">
			<Header img={img} title={title} />
			<main className="container mx-auto lg:flex lg:gap-12 py-5 px-4 lg:py-10" id="philosophy-of-education">
				<div className="flex-1 lg:border-r lg:border-dotted lg:border-gray-200 pr-8">
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

export default philosophyOfEducation;
