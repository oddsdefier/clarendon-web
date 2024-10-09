import React from "react";
const ResourceButtons: React.FC = () => {
	return (
		<div className=" bg-clarc-blue">
			<div className="grid grid-cols-1 md:grid-cols-4 px-4 py-8 gap-3 lg:gap-5 container mx-auto text-clarc-gold text-xs sm:text-md md:text-base">
				<button className="px-6 py-3.5 border border-clarc-gold rounded-full">Online Resources</button>
				<button className="px-6 py-3.5 border border-clarc-gold rounded-full">International</button>
				<button className="px-6 py-3.5 border border-clarc-gold rounded-full">Arts and Culture</button>
				<button className="px-6 py-3.5 border border-clarc-gold rounded-full">Alumni</button>
			</div>
		</div>
	);
};

export default ResourceButtons;
