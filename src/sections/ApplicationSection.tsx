import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { Sparkle, Sparkles } from "lucide-react";
import BackgroundImage from "@/components/BackgroundImage";

import { clarcAssets } from "@/utils/img_links";

const bgImgUrl = clarcAssets.images["old_pic"];
const owlImgUrl = clarcAssets.mascot[3];

const ApplicationSection: React.FC = () => {
	const { scrollYProgress } = useScroll();

	const rotateProgress = useTransform(scrollYProgress, [0, 1], [-20, 20]);
	const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1.1]);

	return (
		<section className="px-4 py-16 lg:py-16 relative bg-clarc-blue/10 lg:min-h-screen" id="application-section">
			<BackgroundImage url={bgImgUrl} />
			<div className="container mx-auto flex flex-col lg:flex-row gap-3 items-center relative z-[99]">
				<div className="w-full lg:w-1/2">
					<div className="relative aspect-square max-w-6xl lg:max-w-6xl mx-auto flex justify-center items-center">
						<motion.img src={owlImgUrl} alt="Application image" className="bg-white max-w-sm lg:max-w-lg rounded-xl" style={{ rotate: rotateProgress, scale: scaleProgress }} />
						<div className="absolute w-3/4 h-3/4 bg-clarc-white opacity-10 rounded-3xl -rotate-1 -z-10"></div>
					</div>
				</div>
				<div className="px-4 lg:px-0 w-full flex flex-col justify-center items-center lg:items-start lg:w-1/2 space-y-5 text-center lg:text-left text-indigo-50 max-w-sm lg:max-w-xl">
					<h1 className="font-astralaga uppercase text-xl md:text-2xl lg:text-4xl font-semibold text-clarc-gold relative">
						<span className="z-10">Applications Are Open</span>
						<div className="-z-10 w-full absolute top-0 left-0 right-0 bg-clarc-blue h-14 -translate-y-2 blur-lg" />
						<motion.span
							className="absolute"
							animate={{
								scale: [1, 1.2, 1],
								opacity: [1, 0.8, 1],
							}}
							transition={{
								duration: 1,
								repeat: Infinity,
								repeatType: "loop",
							}}>
							<Sparkles className="text-white absolute rotate-12 scale-110 top-0 -right-2 translate-x-2 -translate-y-1 w-4 h-4 transition-all duration-500" />
						</motion.span>
						<motion.span
							className="absolute -left-0"
							animate={{
								scale: [1, 1.2, 1],
								opacity: [1, 0.8, 1],
							}}
							transition={{
								duration: 1,
								repeat: Infinity,
								repeatType: "loop",
							}}>
							<Sparkle className="text-white absolute -rotate-[45deg] scale-110 top-0 -left-2 -translate-x-1 -translate-y-0 w-[0.5rem] h-[0.5rem] transition-all duration-500" />
						</motion.span>
						<motion.span
							className="absolute right-2"
							animate={{
								scale: [1, 1.2, 1],
								opacity: [1, 0.8, 1],
							}}
							transition={{
								duration: 1,
								repeat: Infinity,
								repeatType: "loop",
							}}>
							<Sparkle className="text-white absolute -rotate-[19deg] scale-110 top-0 -left-2 -translate-x-1 -translate-y-1 w-[0.55rem] h-[0.55rem] transition-all duration-500" />
						</motion.span>
					</h1>

					<h2 className="text-base md:text-2xl font-medium text-white/90">Student Placement Admission to College Education</h2>

					<p className="text-base md:text-xl leading-loose max-w-3xl mx-auto lg:mx-0 text-white/70">SPACE is Clarendon's admissions portal. Senior high school graduates who wish to apply may start the admissions process by uploading their personal information here. Be Brave, be an OWL, and Make it Clarendon!</p>

					<button className="shadow-lg shadow-clarc-blue group w-auto flex items-center justify-center gap-2 mt-4 px-6 py-4 text-base lg:text-base font-semibold text-indigo-100/90 border border-indigo-50/40 rounded-full hover:bg-clarc-blue hover:border-white hover:text-white transition-colors duration-300 focus:outline-none active:bg-clarc-blue">
						<p>Start your CLARC journey here</p>
						<Sparkles className="w-5 h-5 group-hover:rotate-6 group-hover:scale-125 transition-all duration-300 group-hover:text-clarc-gold" />
					</button>
				</div>
			</div>
		</section>
	);
};

export default ApplicationSection;
