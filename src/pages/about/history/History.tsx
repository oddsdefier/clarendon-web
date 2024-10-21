import React from "react";
import { clarcAssets } from "@/utils/img_links";
import Timeline from "./Timeline";
import ClarendonHistory from "./ClarendonHistory";

const img = clarcAssets.images.new_building;
const History: React.FC = () => {
	return (
		<div className="history min-h-screen w-full bg-white">
			<div
				className="relative opacity-80 h-56 bg-primary overflow-hidden flex items-center"
				style={{
					backgroundImage: `url(${img})`,
				}}>
				<div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-40" />
				<div className="container mx-auto z-10 px-6 flex justify-center">
					<h1 className="text-[2rem] font-semibold text-white font-astralaga">Nurturing minds, Shaping futures since 1996</h1>
				</div>
			</div>
			<div>
				<ClarendonHistory />
				<Timeline />
			</div>
		</div>
	);
};
export default History;
