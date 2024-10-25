import React from "react";
import AboutUs from "./components/AboutUs";

const SchoolEmblem: React.FC = () => {
	return (
		<div className="w-full bg-white min-h-svh lg:min-h-lvh">
			<main className="container mx-auto lg:flex lg:gap-12 py-5 px-4 lg:py-10" id="school-emblem">
				<div className="relative container mx-auto max-w-4xl">
					<h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-clarc-blue">School Emblem</h2>
					<div className="flex justify-center items-center w-full">
						<img src="../school-emblem.jpg" alt="School Emblem" className="max-w-4xl min-w-full" />
					</div>
				</div>

				<aside className="w-64 hidden lg:block">
					<AboutUs />
				</aside>
			</main>
		</div>
	);
};

export default SchoolEmblem;
