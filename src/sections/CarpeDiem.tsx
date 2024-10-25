import { clarcAssets } from "@/utils/img_links";
import { Link } from "react-router-dom";

const culturalCenterImg = clarcAssets.images["cultural_center"];
const polkaPattern = clarcAssets.assets["polka_pattern"];

export default function CarpeDiemSection() {
	return (
		<section className="py-16 md:py-24 lg:py-32 overflow-hidden">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
					<div className="space-y-8 order-last lg:order-first">
						<h2 className="text-3xl sm:text-4xl lg:text-5xl font-astralaga tracking-wide font-bold text-clarc-blue uppercase leading-tight">Seize the Day</h2>
						<p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-2xl">At Clarendon College, we embrace the philosophy of "Carpe Diem" - Seize the Day. Our commitment is to provide an environment where students can maximize their potential, take advantage of every opportunity, and prepare themselves for a future filled with promise and success.</p>
						<div className="flex flex-col sm:flex-row gap-4 pt-4">
							<Link to={"/about/philosophy-of-education"} className="max-w-fit px-6 py-3 text-sm md:text-base focus:outline-none flex justify-center items-center space-x-2 text-clarc-gold bg-clarc-blue hover:bg-clarc-gold hover:text-clarc-blue font-semibold lg:px-6 rounded-full transition duration-300 group">
								Philosophy of Education
							</Link>
							<button className="max-w-fit px-6 py-3 text-sm md:text-base font-semibold text-indigo-900 border-2 border-indigo-900 rounded-full hover:border-clarc-gold hover:bg-clarc-gold/20 hover:text-clarc-gold transition-colors duration-300">Awards and Recognition</button>
						</div>
					</div>
					<div className="relative order-first lg:order-last">
						<div className="absolute -z-10 bottom-0 right-0 translate-x-1/4 translate-y-1/4 opacity-65 w-3/4 h-3/4">
							<img src={polkaPattern} alt="" className="w-full h-full object-cover rounded-lg" style={{ filter: "hue-rotate(10deg)" }} />
						</div>
						<div className="absolute -z-10 top-0 left-0 -translate-x-1/4 -translate-y-1/4 opacity-65 w-3/4 h-3/4">
							<img src={polkaPattern} alt="" className="w-full h-full object-cover rounded-lg" style={{ filter: "hue-rotate(10deg)" }} />
						</div>
						<img src={culturalCenterImg} alt="Cultural Center at Clarendon College" className="w-full h-auto rounded-lg shadow-xl" />
					</div>
				</div>
			</div>
		</section>
	);
}
