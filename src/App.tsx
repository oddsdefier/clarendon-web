import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";

// Import main page components eagerly
import CarouselHero from "@/sections/CarouselHero";
import ResourceButtons from "@/sections/ResourceButtons";
import FutureReadingSection from "@/sections/CarpeDiem";
import ApplicationSection from "@/sections/ApplicationSection";
import NewsAndEventsSection from "@/sections/NewsAndEvent";
import VideoSection from "@/sections/VideoSection";

// Lazy load only the NewsDetail component
const NewsDetail = lazy(() => import("@/sections/NewsDetail"));

// Loading component
const Loading = () => <div className="text-center p-4">Loading...</div>;

const MainPage: React.FC = () => {
	return (
		<>
			<CarouselHero />
			<ResourceButtons />
			<FutureReadingSection />
			<ApplicationSection />
			<NewsAndEventsSection />
			<VideoSection />
		</>
	);
};

const NotFound = () => (
	<div className="text-center p-8 min-h-screen flex justify-center mx-auto items-center ">
		<div className="container">
			<h1 className="text-lg text-red-500 lg:text-3xl font-bold">404 - Page Not Found</h1>
			<p className="text-sm font-medium text-gray-800/60 lg:text-base">The page you are looking for does not exist.</p>
		</div>
	</div>
);

const ScrollToTop: React.FC = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
};

const App: React.FC = () => {
	return (
		<Router>
			<ScrollToTop />
			<div className="font-manrope min-h-screen overflow-x-hidden">
				<Header />
				<main>
					<Routes>
						<Route path="/" element={<MainPage />} />
						<Route
							path="/news/:slug"
							element={
								<Suspense fallback={<Loading />}>
									<NewsDetail />
								</Suspense>
							}
						/>
						<Route path="*" element={<NotFound />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
