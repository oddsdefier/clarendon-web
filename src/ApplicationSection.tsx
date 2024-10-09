import React from "react";

const ApplicationSection: React.FC = () => {
	return (
		<section className="container mx-auto px-4 py-12 md:py-16 lg:py-24">
			<div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
				<div className="w-full lg:w-1/2">
					<div className="aspect-square max-w-md mx-auto">
						<img src="https://scontent.fmnl8-2.fna.fbcdn.net/v/t39.30808-6/431946606_915179940608381_6879013593159267845_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeHcnIjh2HXMi9SLzaMsO_7BpDgxLiTrlUikODEuJOuVSNyuzrYtFGFYcBMRdsjHMz-oUA3MhMhpyoeMeJ2rj-GX&_nc_ohc=tRW-9mTQNFMQ7kNvgHHlIUq&_nc_ht=scontent.fmnl8-2.fna&_nc_gid=AlnkLOh6eLoztj8B9q3ONph&oh=00_AYAgDA2IAPiG5NMVTxp9OFQADXot0Nnfz7Clpx5ASztkow&oe=670AC468" alt="Application image" className="w-full h-full object-cover rounded-lg shadow-lg" />
					</div>
				</div>
				<div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
					<h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800">Applications Are Open</h1>
					<h2 className="text-xl md:text-2xl font-semibold text-gray-700">Student Placement Admission to College Education</h2>
					<p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">SPACE is FEU's admissions portal. Senior high school graduates who wish to apply may start the admissions process by uploading their personal information here. Be Brave, be a Tamaraw, and Make it FEU!</p>
					<button className="mt-4 px-6 py-3 text-lg font-semibold text-indigo-900 border-2 border-indigo-900 rounded-full hover:bg-indigo-900 hover:text-white transition-colors duration-300">Start your CLARC journey here</button>
				</div>
			</div>
		</section>
	);
};

export default ApplicationSection;
