import React from "react";
import { staticContent } from "@/utils/static_content";

const mission = staticContent.mission;
const vision = staticContent.vision;


const VisionMission: React.FC = () => {
	return (
		<div className="min-h-screen w-full bg-white flex flex-col">
			<div className="container mx-auto px-4 sm:px-6 max-w-4xl py-8 sm:py-12">
				{[mission, vision].map((section) => (
					<div key={section.id} id={section.id} className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 mt-8 pb-10">
						<div>
							<h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-clarc-blue">{section.title}</h2>
							<p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{section.text}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default VisionMission;
