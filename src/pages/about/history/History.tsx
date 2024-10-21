import React from "react";
import { clarcAssets } from "@/utils/img_links";
import Timeline from "./Timeline";
import ClarendonHistory from "./ClarendonHistory";

const img = clarcAssets.images.cultural_center;
const logo = clarcAssets.primary_logo;
const History: React.FC = () => {
	return (
		<div className="history min-h-screen w-full bg-white">
			<div
				className="relative opacity-90 h-56 bg-primary overflow-hidden flex items-center"
				style={{
					backgroundImage: `url(${img})`,
				}}>
				<div className="absolute inset-0 bg-gradient-to-t from-clarc-blue to-transparent opacity-60" />
				<div className="container mx-auto z-10 px-6 flex justify-center">
					<h1 className="text-xl lg:text-[2rem] font-semibold text-white font-astralaga">
						Nurturing minds, Shaping
						<span className="text-clarc-gold"> futures</span> since 1996
					</h1>
				</div>
			</div>
			<div>
				<Timeline />
				<div className="container mx-auto flex justify-center items-center pt-5">
					<img src={logo} alt="Clarendon Logo" className="w-48 h-48 aspect-square" />
				</div>
				<ClarendonHistory />
			</div>
		</div>
	);
};
export default History;
