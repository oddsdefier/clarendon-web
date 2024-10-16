import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import ResourceButtons from "@/sections/ResourceButtons";
import ApplicationSection from "@/sections/ApplicationSection";
import CarouselHero from "@/sections/CarouselHero";
import FutureReadingSection from "@/sections/CarpeDiem";
import NewsAndEventsSection from "@/sections/NewsAndEvent";
import VideoSection from "@/sections/VideoSection";
import React from "react";

const App: React.FC = () => {
	return (
		<div className="font-inter min-h-screen overflow-x-hidden">
			<Header />
			<section>
				<main>
					<CarouselHero />
					<ResourceButtons />

					<FutureReadingSection />
					<ApplicationSection />
					<NewsAndEventsSection />
					<VideoSection />
				</main>
			</section>
			<Footer />
		</div>
	);
};

export default App;
