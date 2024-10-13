import React from "react";
import BackgroundImage from "./BackgroundImage";
import { Sparkle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const bgImgUrl = "https://lh3.googleusercontent.com/p/AF1QipPHx6N8IUwzWj67sVKPKpIsHM9ifsP6XW9q6Pn1=s680-w680-h510";
const owlImgUrl = "https://scontent.fmnl8-2.fna.fbcdn.net/v/t39.30808-6/431946606_915179940608381_6879013593159267845_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeHcnIjh2HXMi9SLzaMsO_7BpDgxLiTrlUikODEuJOuVSNyuzrYtFGFYcBMRdsjHMz-oUA3MhMhpyoeMeJ2rj-GX&_nc_ohc=tRW-9mTQNFMQ7kNvgHHlIUq&_nc_ht=scontent.fmnl8-2.fna&_nc_gid=AlnkLOh6eLoztj8B9q3ONph&oh=00_AYAgDA2IAPiG5NMVTxp9OFQADXot0Nnfz7Clpx5ASztkow&oe=670AC468";

const ApplicationSection: React.FC = () => {
	return (
		<section className="px-4 py-20 lg:py-24 relative bg-clarc-blue/10">
			<BackgroundImage url={bgImgUrl} />
			<div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16 relative z-[99]">
				<div className="w-full lg:w-1/2">
					<div className="aspect-square max-w-xs lg:max-w-md mx-auto">
						<motion.img src={owlImgUrl} alt="Application image" className="w-full h-full object-cover rounded-lg lg:-rotate-2 -rotate-0 hover:rotate-0 transition-all duration-150" whileInView={{ scale: [1, 0.85, 1], rotate: [0, -12, 0] }} />
					</div>
				</div>
				<div className="px-4 lg:px-0 w-full flex flex-col justify-center items-center lg:items-start lg:w-1/2 space-y-6 text-center lg:text-left text-indigo-50 max-w-sm lg:max-w-xl">
					<h1 className="font-astralaga text-lg md:text-2xl lg:text-3xl font-semibold text-clarc-gold relative">
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
							<Sparkles className=" text-white absolute rotate-12 scale-110 top-0 -right-2 translate-x-2 -translate-y-1 w-4 h-4 transition-all duration-500" />
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
							<Sparkle className=" text-white absolute -rotate-[45deg] scale-110 top-0 -left-2 -translate-x-1 -translate-y-0 w-[0.5rem] h-[0.5rem] transition-all duration-500" />
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
							<Sparkle className=" text-white absolute -rotate-[19deg] scale-110 top-0 -left-2 -translate-x-1 -translate-y-1 w-[0.55rem] h-[0.55rem] transition-all duration-500" />
						</motion.span>
					</h1>

					<h2 className="text-base md:text-xl font-medium text-white/90">Student Placement Admission to College Education</h2>

					<p className="text-sm md:text-xl leading-10 max-w-2xl mx-auto lg:mx-0 text-white/70">SPACE is Clarendon's admissions portal. Senior high school graduates who wish to apply may start the admissions process by uploading their personal information here. Be Brave, be an OWL, and Make it Clarendon!</p>

					<button className="shadow-lg shadow-clarc-blue group w-auto flex items-center justify-center  gap-2 mt-4 px-6 py-4 text-sm lg:text-base font-semibold text-indigo-100 border border-indigo-50 rounded-full hover:bg-clarc-blue hover:border-white hover:text-white transition-colors duration-300 focus:outline-none active:bg-clarc-blue">
						<p>Start your CLARC journey here</p>
						<Sparkles className="w-5 h-5 group-hover:rotate-6 group-hover:scale-125 transition-all duration-300 group-hover:text-clarc-gold " />
					</button>
				</div>
			</div>
		</section>
	);
};

export default ApplicationSection;
