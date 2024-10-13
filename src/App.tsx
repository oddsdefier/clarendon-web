import React from "react";
import Header from "./layouts/Header";
import ResourceButtons from "./ResourceButtons";
import FutureReadingSection from "./CarpeDiem";
import ApplicationSection from "./ApplicationSection";
import NewsAndEventsSection from "./NewsAndEvent";
import VideoSection from "./VideoSection";
import Footer from "./layouts/Footer";
import CarouselHero from "./CarouselHero";

const App: React.FC = () => {
	return (
		<div className="font-inter min-h-screen overflow-x-hidden">
			<Header />
			<section className="">
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
