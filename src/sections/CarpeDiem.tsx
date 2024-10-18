import React from "react";
import { clarcAssets } from "@/utils/img_links";

const culturalCenterImg = clarcAssets.images["cultural_center"];
const polkaPattern = clarcAssets.assets["polka_pattern"];

const CarpeDiemSection: React.FC = () => {
	return (
		<section className="min-h-svh lg:min-h-screen">
			<div className="relative container mx-auto px-4 py-12 md:py-16 lg:py-20">
				<div className="grid grid-cols-1 lg:grid-cols-2 lg:px-16 gap-8 lg:gap-16 items-center">
					<div className="space-y-6 px-4 lg:px-0 order-last lg:order-first">
						<h2 className="text-2xl md:text-3xl lg:text-4xl font-astralaga tracking-wider font-bold text-clarc-blue uppercase leading-relaxed">Seize the Day</h2>
						<p className="text-base lg:text-lg max-w-sm lg:max-w-xl md:text-lg text-gray-600/90 leading-7">At Clarendon College, we embrace the philosophy of "Carpe Diem" - Seize the Day. Our commitment is to provide an environment where students can maximize their potential, take advantage of every opportunity, and prepare themselves for a future filled with promise and success.</p>

						<div className="flex flex-col sm:flex-row gap-2 lg:gap-4 py-2 justify-start items-start">
							<button className="max-w-fit px-6 py-3 text-sm md:text-base focus:outline-none flex justify-center items-center space-x-2 text-clarc-gold bg-clarc-blue hover:bg-clarc-gold hover:text-clarc-blue font-semibold lg:px-6 rounded-full transition duration-300 group">Philosophy of Education</button>
							<button className="max-w-fit px-6 py-3 text-sm md:text-base font-semibold text-indigo-900 border-2 border-indigo-900 rounded-full hover:border-clarc-gold hover:bg-clarc-gold/20 hover:text-clarc-gold transition-colors duration-300">Awards and Recognition</button>
						</div>
					</div>
					<div className="relative max-h-[80%] mt-8 lg:mt-0 md:flex my-10 lg:my-0 pointer-events-none order-first lg:order-last">
						<div className="-z-10 absolute bottom-0 right-0 translate-x-7 translate-y-10 opacity-85">
							<img src={polkaPattern} alt="Future-ready learning at Clarendon" className="w-full h-auto max-w-lg mx-auto rounded-lg" style={{ filter: "hue-rotate(10deg)" }} />
						</div>
						<div className="-z-10 absolute top-0 left-0 -translate-x-7 -translate-y-10 opacity-85">
							<img src={polkaPattern} alt="Future-ready learning at Clarendon" className="w-full h-auto max-w-lg mx-auto rounded-lg" style={{ filter: "hue-rotate(10deg)" }} />
						</div>
						<img src={culturalCenterImg} alt="Cultural Center" className="w-full h-auto max-w-lg mx-auto rounded-lg" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default CarpeDiemSection;
