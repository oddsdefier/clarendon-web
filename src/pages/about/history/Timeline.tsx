import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Separator } from "@radix-ui/react-separator";

const TimelineEvent: React.FC<{ event: { year: string; title: string; description: string }; index: number }> = ({ event, index }) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.5 });

	const animationProps = {
		initial: { opacity: 0, scale: 0.9 },
		animate: isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 },
		transition: { duration: 0.2, delay: index * 0.05 },
	};

	return (
		<motion.div ref={ref} {...animationProps} className={`mb-4 md:mb-16 flex flex-col md:flex-row md:justify-between md:items-center w-full ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
			<div className="md:w-5/12 order-2 md:order-none bg-clarc-blue"></div>
			<div className="z-20 flex items-center md:flex-col mb-4 md:mb-0">
				<div className="text-white/65 bg-white flex items-center justify-center p-1 mr-4 md:mr-0 md:mb-2">
					<p className="text-sm md:text-base font-semibold text-clarc-blue">{event.year}</p>
				</div>
				<div className="flex-1 h-0.5 md:h-full w-full md:w-0.5 bg-gray-300"></div>
			</div>
			<div className="md:w-5/12 p-4 rounded-lg shadow-md bg-clarc-blue/10 border border-primary/20 relative order-1 md:order-none">
				<div className={`hidden md:block absolute top-1/2 -mt-px h-px bg-gray-300 ${index % 2 === 0 ? "left-full" : "right-full"}`} style={{ width: "15%" }}></div>
				<h3 className="font-bold text-lg mb-2 text-clarc-blue">{event.title}</h3>
				<p className="text-sm text-gray-600/80">{event.description}</p>
			</div>
		</motion.div>
	);
};

const Timeline: React.FC = () => {
	const timelineEvents = [
		{ year: "1996", title: "Founding of Clarendon Montessori", description: "Clarendon Montessori was founded by Lucille T. Tesorero in Bagumbayan, Roxas to provide global quality education for preschoolers." },
		{ year: "1998", title: "Expansion to Primary Education", description: "Encouraged by parents, the Montessori expanded into Primary Education after Engr Juanito A. Bacay purchased a lot in Odiong." },
		{ year: "2002", title: "Renaming to Clarendon College", description: "Clarendon Montessori was renamed Clarendon College and began offering high school and college departments, including degrees in BEED and BSED." },
		{ year: "2003", title: "Introduction of BSBA Program", description: "Clarendon College began offering a BSBA program with a major in Business Management." },
		{ year: "2006", title: "First College Graduates", description: "The college department graduated its first batch of students and the High School Department qualified as an ESC scholarship fund recipient." },
		{ year: "2015", title: "Expansion of Degree Offerings", description: "Clarendon College added degrees in Elementary and Secondary Education with majors in English, Filipino, Mathematics, Information Systems, and Tourism Management." },
		{ year: "2017", title: "Introduction of Senior High School", description: "Clarendon College introduced Senior High School as part of the national integration with the ASEAN region." },
		{ year: "2018", title: "Launch of BCAED Program", description: "Clarendon College became the region's only provider of a Bachelor's in Culture and Arts Education (BCAED)." },
		{ year: "2021", title: "Cultural Center Establishment", description: "Clarendon College opened the first private school cultural center in the region, funded by an innovation grant." },
	];

	const containerRef = useRef(null);
	const navItems = [
		{ href: "#history-clarendon", label: "History of Clarendon College" },
		{ href: "#founder", label: "Founder", indent: true },
		{ href: "#birth-of-clarendon", label: "Birth Of Clarendon", indent: true },
		{ href: "#growth-and-evolution", label: "Growth And Evolution", indent: true },
		{ href: "#recent-achievements", label: "Recent Achievements", indent: true },
		{ href: "#our-ongoing-mission", label: "Our Ongoing Mission", indent: true },
	];

	return (
		<main className="container mx-auto lg:flex gap-12 lg:py-5 px-4 lg:px-0" id="timeline">
			<div className="flex-1 lg:border-r lg:border-dotted lg:border-gray-200">
				{/* <Separator className="bg-clarc-gold/50 w-1/4 h-1" /> */}
				<header className="text-center p-5 lg:p-8 lg:mx-10 lg:rounded-sm mb-5 lg:mb-10  bg-clarc-blue/100">
					<h1 className="text-2xl sm:text-3xl md:text-3xl font-bold text-clarc-gold mb-2">The Timeline of Clarendon College</h1>
					<p className="text-sm sm:text-lg md:text-lg text-clarc-gold/70">A Legacy of Excellence in Education Since 1996</p>
				</header>

				<div ref={containerRef} className="relative container mx-auto max-w-4xl">
					<div className="absolute hidden md:flex md:left-1/2 top-0 bottom-0 w-0.5 bg-clarc-gold md:transform md:-translate-x-1/2" />
					<div className="py-8 md:py-16">
						{timelineEvents.map((event, index) => (
							<TimelineEvent key={index} event={event} index={index} />
						))}
					</div>
				</div>
			</div>

			<aside className="w-64 hidden lg:block">
				<div className="mb-5 pt-5">
					<h2 className="text-lg font-semibold text-clarc-blue">On This Page</h2>
					<Separator className="bg-clarc-gold/50 w-1/4 my-3 h-1" />
					<nav aria-label="Table of contents">
						<ul className="space-y-2">
							{navItems.map((item, index) => (
								<li key={index} className={item.indent ? "mb-3 ml-2" : "mb-3"}>
									<a href={item.href} className="flex items-center text-base transition-colors text-muted-foreground hover:text-clarc-blue">
										{item.label}
									</a>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</aside>
		</main>
	);
};

export default Timeline;
