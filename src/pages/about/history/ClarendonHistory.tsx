import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ChartSpline, Flame, Trophy, University, User } from "lucide-react";


export default function ClarendonHistory() {
	const iconStyle = "w-6 h-6 aspect-square mt-1 flex-shrink-0 text-clarc-blue";

	return (
		<div className="relative w-full">
			<div className="relative container mx-auto px-4 sm:px-6 max-w-4xl py-8 sm:py-12 space-y-8 bg-background text-foreground">
				<header className="text-center">
					<h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-clarc-blue mb-2">The History of Clarendon College</h1>
					<p className="text-sm sm:text-lg md:text-xl text-clarc-blue/70">A Legacy of Excellence in Education Since 1996</p>
				</header>

				<Separator className="py-0 my-0" />

				<section className="space-y-8">
					<div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
						<User className={`${iconStyle} sm:mt-1 hidden lg:flex`} />
						<div>
							<h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-clarc-blue">Founder</h2>
							<p className="text-sm sm:text-base text-muted-foreground leading-relaxed">Our Founder, Lucille Torrefiel Tesorero, committed herself to a life of service. Inspired by her father, Andres Torrefiel, the first mayor and founder of the town of Roxas, she would take this inspiration and invest it in the many noble endeavors her life would be known for. Born in Aklan and trained at the University of Santo Tomas and Adamson's University to be an Educator and later at the University of the Philippines to be a Botanist, Maam Lucille or "Mama Lucy" as she is endearingly referred to, would spend her life in gardens and classrooms cultivating people and plants to be productive and fruitful.</p>
						</div>
					</div>

					<div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
						<University className={`${iconStyle} sm:mt-1 hidden lg:flex`} />
						<div>
							<h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-clarc-blue">The Birth of Clarendon</h2>
							<p className="text-sm sm:text-base text-muted-foreground leading-relaxed">Clarendon College was founded as Clarendon Montessori in 1996 under Lucille T. Tesorero. The goal of the Montessori was to provide global quality education for preschoolers that was made accessible to the locale of Roxas, Oriental Mindoro. Along with her two daughters, Lucille Tesorero Bacay and Flerie Tesorero Sucgang, the Montessori flourished with its meagre staff and passionate parents. The parents of the first batch of students strongly encouraged this small Montessori to expand into Primary Education. With this impetus, the President of the Montessori Engr Juanito A. Bacay purchased a lot in Odiong to establish a private elementary school in 1998.</p>
						</div>
					</div>

					<div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
						<ChartSpline className={`${iconStyle} sm:mt-1 hidden lg:flex`} />
						<div>
							<h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-clarc-blue">Growth and Evolution</h2>
							<p className="text-sm sm:text-base text-muted-foreground leading-relaxed">By 2002, Clarendon Montessori would rename itself to Clarendon College opening both a high school and college department. At this stage of development Clarendon College was equipped to offer instruction from k-10 and degrees in BEED and BSED with majors in English and Mathematics. The following year Clarendon College would offer a BSBA program major in Business Management. In 2006, the college department would graduate its first batch of students and the High School Department qualified to be an ESC scholarship fund recipient from the government.</p>
							<p className="text-sm sm:text-base text-muted-foreground leading-relaxed mt-4">By 2015, Clarendon College would be offering degrees in Elementary and Secondary Education with majors in English, Filipino and Mathematics. It's college of Business Administration offered majors in Operations Management and Financial Management. Also, degrees in Information Systems and Tourism Management would be on offer by this year. In 2017, Clarendon would join the country in its plan to integrate with the ASEAN region by offering Senior High School capacitating the school as a k-12 center of education.</p>
						</div>
					</div>
				</section>

				<div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
					<Trophy className={`${iconStyle} sm:mt-1 hidden lg:flex`} />
					<div>
						<h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-clarc-blue">Recent Achievements</h2>
						<ul className="space-y-4">
							<li className="flex flex-col sm:flex-row items-start space-y-2 sm:space-y-0 sm:space-x-3">
								<Badge variant="secondary" className="mt-1 flex-shrink-0 bg-clarc-blue text-clarc-gold hover:bg-clarc-blue/90">
									2018
								</Badge>
								<p className="text-sm sm:text-base text-muted-foreground leading-relaxed">Became the region's only provider of the Bachelor's of Culture and Arts Education (BCAED)</p>
							</li>
							<li className="flex flex-col sm:flex-row items-start space-y-2 sm:space-y-0 sm:space-x-3">
								<Badge variant="secondary" className="mt-1 flex-shrink-0 bg-clarc-blue text-clarc-gold hover:bg-clarc-blue/90">
									2021
								</Badge>
								<p className="text-sm sm:text-base text-muted-foreground leading-relaxed">Qualified for an innovation grant to open a cultural center, the first of its kind opened by a Private School in the region</p>
							</li>
						</ul>
					</div>
				</div>

				<div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 mt-8 pb-10">
					<Flame className={`${iconStyle} sm:mt-1 hidden lg:flex`} />
					<div>
						<h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-clarc-blue">Our Ongoing Mission</h2>
						<p className="text-sm sm:text-base text-muted-foreground leading-relaxed">As of this writing, the school's mandate remains unchanged: to provide high quality education informed by Filipino values responsive to the needs of the country for the sake of the betterment of our fellow men. Clarendon College continues to be a bastion of pride, carrying forward the legacy of its founder, Mama Lucy T. Tesorero, in cultivating minds and shaping futures.</p>
					</div>
				</div>
			</div>
		</div>
	);
}
