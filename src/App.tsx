import CarouselPlugin from "./Carousel";
import React from "react";
import Header from "./Header";
import ResourceButtons from "./ResourceButtons";
import FutureReadingSection from "./FutureReadySection";
import ApplicationSection from "./ApplicationSection";
import NewsAndEventsSection from "./NewsAndEvent";
import VideoSection from "./VideoSection";
import Footer from "./Footer";

const App: React.FC = () => {
	return (
		<div className="font-inter min-h-screen">
			<Header />
			<section className="">
				<main>
					<CarouselPlugin />
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
