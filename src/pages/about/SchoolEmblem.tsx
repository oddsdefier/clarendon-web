import React from "react";
import AboutUs from "./components/AboutUs";

const SchoolEmblem: React.FC = () => {
	return (
		<div className="min-h-screen w-full bg-white">
			<main className="container mx-auto flex gap-12 py-10" id="mission-vision">
				<div className="relative container mx-auto max-w-4xl">
					<h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-clarc-blue">School Emblem</h2>
					<div className="flex justify-center items-center w-full">
						<img src="../public/school-emblem.jpg" alt="School Emblem" className="max-w-4xl w-[40rem]" />
					</div>
				</div>

				<aside className="w-64">
					<AboutUs />
				</aside>
			</main>
		</div>
	);
};

export default SchoolEmblem;
