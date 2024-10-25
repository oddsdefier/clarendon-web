import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ChartSpline, Flame, Trophy, University, User } from "lucide-react";
// import { clarcAssets } from "@/utils/img_links";
import AboutUs from "../components/AboutUs";
export default function ClarendonHistory() {
	const iconStyle = "w-6 h-6 aspect-square mt-1 flex-shrink-0 text-clarc-blue hidden lg:flex";
	const navItems = [{ href: "#timeline", label: "Timeline" }];
	const titleStyle = "text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-clarc-blue";
	const contentStyle = "text-sm sm:text-base text-muted-foreground leading-relaxed";

	return (
		<main className="container mx-auto lg:flex gap-12 lg:py-5 px-4 lg:px-0" id="history-clarendon">
			<div className="flex-1 lg:border-r lg:border-dotted lg:border-gray-200">
				<header className="text-center p-5 lg:p-8 lg:mx-10 lg:rounded-sm mb-5 lg:mb-10 bg-clarc-gold/100">
					<h1 className="text-2xl sm:text-3xl md:text-3xl font-bold text-clarc-blue mb-2">The History of Clarendon College</h1>
					<p className="text-sm sm:text-lg md:text-lg text-clarc-blue">A Legacy of Excellence in Education Since 1996</p>
				</header>
				<div className="relative container mx-auto max-w-4xl  space-y-8 bg-background text-foreground">
					<section className="space-y-8">
						<div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
							<User className={iconStyle} />
							<div id="founder">
								<h2 className={titleStyle}>Founder</h2>
								<p className={contentStyle}>
									Our Founder, <strong>Lucille Torrefiel Tesorero</strong>, committed herself to a life of service. Inspired by her father, Andres Torrefiel, the first mayor and founder of the town of Roxas, she would take this inspiration and invest it in the many noble endeavors her life would be known for. Born in Aklan and trained at the University of Santo Tomas and Adamson's University to be an Educator and later at the University of the Philippines to be a Botanist, Maam Lucille or "Mama Lucy" as she is endearingly referred to, would spend her life in gardens and classrooms cultivating people and plants to be productive and fruitful.
								</p>
							</div>
						</div>

						<div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
							<University className={iconStyle} />
							<div id="birth-of-clarendon">
								<h2 className={titleStyle}>The Birth of Clarendon</h2>
								<p className={contentStyle}>Clarendon College was founded as Clarendon Montessori in 1996 under Lucille T. Tesorero. The goal of the Montessori was to provide global quality education for preschoolers that was made accessible to the locale of Roxas, Oriental Mindoro. Along with her two daughters, Lucille Tesorero Bacay and Flerie Tesorero Sucgang, the Montessori flourished with its meagre staff and passionate parents. The parents of the first batch of students strongly encouraged this small Montessori to expand into Primary Education. With this impetus, the President of the Montessori Engr Juanito A. Bacay purchased a lot in Odiong to establish a private elementary school in 1998.</p>
							</div>
						</div>

						<div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
							<ChartSpline className={iconStyle} />
							<div id="growth-and-evolution">
								<h2 className={titleStyle}>Growth and Evolution</h2>
								<p className="text-sm sm:text-base text-muted-foreground 	">By 2002, Clarendon Montessori would rename itself to Clarendon College opening both a high school and college department. At this stage of development Clarendon College was equipped to offer instruction from k-10 and degrees in BEED and BSED with majors in English and Mathematics. The following year Clarendon College would offer a BSBA program major in Business Management. In 2006, the college department would graduate its first batch of students and the High School Department qualified to be an ESC scholarship fund recipient from the government.</p>
								<p className="text-sm sm:text-base text-muted-foreground leading-relaxed mt-4">By 2015, Clarendon College would be offering degrees in Elementary and Secondary Education with majors in English, Filipino and Mathematics. It's college of Business Administration offered majors in Operations Management and Financial Management. Also, degrees in Information Systems and Tourism Management would be on offer by this year. In 2017, Clarendon would join the country in its plan to integrate with the ASEAN region by offering Senior High School capacitating the school as a k-12 center of education.</p>
							</div>
						</div>
					</section>

					<div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
						<Trophy className={iconStyle} />
						<div id="recent-achievements">
							<h2 className={titleStyle}>Recent Achievements</h2>
							<ul className="space-y-4">
								<li className="flex flex-col sm:flex-row items-start space-y-2 sm:space-y-0 sm:space-x-3">
									<Badge variant="secondary" className="mt-1 flex-shrink-0 bg-clarc-blue text-clarc-gold hover:bg-clarc-blue/90">
										2018
									</Badge>
									<p className={contentStyle}>Became the region's only provider of the Bachelor's of Culture and Arts Education (BCAED)</p>
								</li>
								<li className="flex flex-col sm:flex-row items-start space-y-2 sm:space-y-0 sm:space-x-3">
									<Badge variant="secondary" className="mt-1 flex-shrink-0 bg-clarc-blue text-clarc-gold hover:bg-clarc-blue/90">
										2021
									</Badge>
									<p className={contentStyle}>Qualified for an innovation grant to open a cultural center, the first of its kind opened by a Private School in the region</p>
								</li>
							</ul>
						</div>
					</div>

					<div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 mt-8 pb-10">
						<Flame className={iconStyle} />
						<div id="our-ongoing-mission">
							<h2 className={titleStyle}>Our Ongoing Mission</h2>
							<p className={contentStyle}>As of this writing, the school's mandate remains unchanged: to provide high quality education informed by Filipino values responsive to the needs of the country for the sake of the betterment of our fellow men. Clarendon College continues to be a bastion of pride, carrying forward the legacy of its founder, Mama Lucy T. Tesorero, in cultivating minds and shaping futures.</p>
						</div>
					</div>
				</div>
			</div>

			<aside className="w-64 hidden lg:block">
				<div className="mb-5">
					<h2 className="text-lg font-semibold text-clarc-blue">On This Page</h2>
					<Separator className="bg-clarc-gold/50 w-1/4 my-3 h-1" />
					<h3 className="text-clarc-blue font-medium mb-2">History</h3>
					<nav aria-label="Table of contents">
						<ul className="space-y-2">
							{navItems.map((item, index) => (
								<li key={index} className="mb-3">
									<a href={item.href} className="flex items-center text-base transition-colors text-muted-foreground/80 hover:text-clarc-blue">
										{item.label}
									</a>
								</li>
							))}
						</ul>
					</nav>
				</div>
				<AboutUs />
			</aside>
		</main>
	);
}
