import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
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
const NewsDetail = lazy(() => import("@/pages/NewsDetail"));

//Pages
import NotFound from "@/pages/NotFoundPage";

//About Page
import History from "@/pages/about/history/History";
import PhilosophyOfEducation from "@/pages/about/PhilosophyOfEducation";
import VisionMission from "@/pages/about/VisionMission";
import CoreValues from "@/pages/about/CoreValues";
import SchoolEmblem from "@/pages/about/SchoolEmblem";

//Academics Page
import College from "@/pages/academics/College";
import SeniorHigh from "@/pages/academics/SeniorHigh";
import JuniorHigh from "@/pages/academics/JuniorHigh";
import Academics from "./pages/academics/Academics";

//Admission Page
import Admission from "@/pages/admissions/Overview";
import Requirements from "./pages/admissions/Requirements";
import EnrollmentProcedures from "./pages/admissions/EnrollmentProcedures";
import FeesPaymentsDiscounts from "./pages/admissions/FeesPaymentsDiscounts";
import Scholarships from "./pages/admissions/Scholarships";
import WithdrawalTransfer from "./pages/admissions/WithdrawalTransfer";

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
			<div className="font-geist min-h-svh lg:min-h-lvh overflow-x-hidden">
				<Header />
				<main>
					<Routes>
						<Route path="/" element={<MainPage />} errorElement={<NotFound />} />
						<Route
							path="/news/:slug"
							element={
								<Suspense fallback={<Loading />}>
									<NewsDetail />
								</Suspense>
							}
						/>
						{/* ABOUT */}
						<Route path="/about/history" element={<History />} />
						<Route path="/about/philosophy-of-education" element={<PhilosophyOfEducation />} />
						<Route path="/about/core-values" element={<CoreValues />} />
						<Route path="/about/mission-vision" element={<VisionMission />} />
						<Route path="/about/school-emblem" element={<SchoolEmblem />} />
						<Route path="/about" element={<Navigate to="/about/history" />} />

						{/* ACADEMICS */}
						<Route path="/academics/academics" element={<Academics />} />
						<Route path="/academics/junior-high" element={<JuniorHigh />} />
						<Route path="/academics/senior-high" element={<SeniorHigh />} />
						<Route path="/academics/college" element={<College />} />

						{/* ADMISSION */}
						<Route path="/admissions/overview" element={<Admission />} />
						<Route path="/admissions/requirements" element={<Requirements />} />
						<Route path="/admissions/enrollment" element={<EnrollmentProcedures />} />
						<Route path="/admissions/fees-payments-discounts" element={<FeesPaymentsDiscounts />} />
						<Route path="/admissions/withdrawal-transfer" element={<WithdrawalTransfer />} />
						<Route path="/admissions/scholarships" element={<Scholarships />} />

						{/* NOT FOUND */}
						<Route path="*" element={<NotFound />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
