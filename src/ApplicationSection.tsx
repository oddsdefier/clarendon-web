import React from "react";
import BackgroundImage from "./BackgroundImage";

const bgImgUrl = "https://lh3.googleusercontent.com/p/AF1QipPHx6N8IUwzWj67sVKPKpIsHM9ifsP6XW9q6Pn1=s680-w680-h510";
const ApplicationSection: React.FC = () => {
	return (
		<section className="px-4 py-12 md:py-16 lg:py-24 relative">
			<BackgroundImage url={bgImgUrl} />
			<div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16 relative z-10">
				<div className="w-full lg:w-1/2">
					<div className="aspect-square max-w-xs lg:max-w-md mx-auto">
						<img src="https://scontent.fmnl8-2.fna.fbcdn.net/v/t39.30808-6/431946606_915179940608381_6879013593159267845_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeHcnIjh2HXMi9SLzaMsO_7BpDgxLiTrlUikODEuJOuVSNyuzrYtFGFYcBMRdsjHMz-oUA3MhMhpyoeMeJ2rj-GX&_nc_ohc=tRW-9mTQNFMQ7kNvgHHlIUq&_nc_ht=scontent.fmnl8-2.fna&_nc_gid=AlnkLOh6eLoztj8B9q3ONph&oh=00_AYAgDA2IAPiG5NMVTxp9OFQADXot0Nnfz7Clpx5ASztkow&oe=670AC468" alt="Application image" className="w-full h-full object-cover rounded-lg lg:-rotate-2 -rotate-1" />
					</div>
				</div>
				<div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left text-indigo-50 max-w-sm lg:max-w-xl ">
					<h1 className="font-astralaga text-xl md:text-4xl lg:text-5xl font-semibold ">Applications Are Open</h1>

					<h2 className="text-lg md:text-2xl font-medium ">Student Placement Admission to College Education</h2>

					<p className="text-sm md:text-xl leading-7 max-w-2xl mx-auto lg:mx-0">SPACE is Clarendon's admissions portal. Senior high school graduates who wish to apply may start the admissions process by uploading their personal information here. Be Brave, be an OWL, and Make it Clarendon!</p>

					<button className="mt-4 px-6 py-3 text-base font-semibold text-indigo-50 border border-indigo-50 rounded-full hover:bg-clarc-gold hover:border-clarc-gold hover:text-white transition-colors duration-300 focus:outline-none active:bg-clarc-gold/90">Start your CLARC journey here</button>
				</div>
			</div>
		</section>
	);
};

export default ApplicationSection;
