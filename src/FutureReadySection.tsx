import React from "react";

const FutureReadySection: React.FC = () => {
	return (
		<section className="container mx-auto px-4 py-12 md:py-16 lg:py-24">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
				<div className="space-y-6 px-4 lg:px-0">
					<h2 className="text-2xl md:text-3xl lg:text-4xl font-astralaga font-bold text-clarc-blue uppercase leading-relaxed">Future-Ready Learning</h2>

					<p className="text-base max-w-sm lg:max-w-xl md:text-lg lg:text-xl text-gray-600 leading-7">Clarendon is one of the leading private universities in the Philippines offering accessible, quality, and future-ready education. We aim to develop well-rounded students who are intellectually curious, creative problem solvers, critical thinkers, responsible digital citizens, professionals, and contributing members of society. Clarendon graduates are globally competitive and exhibit the core values of fortitude, excellence, and uprightness.</p>

					<div className="flex flex-col sm:flex-row gap-4 pt-4">
						<button className="px-6 py-3 text-sm md:text-base font-semibold text-white bg-indigo-900 border-2 border-indigo-900 rounded-full hover:bg-indigo-700 transition-colors duration-300">Philosophy of Education</button>
						<button className="px-6 py-3 text-sm md:text-base font-semibold text-indigo-900 border-2 border-indigo-900 rounded-full hover:bg-indigo-100 transition-colors duration-300">Awards and Recognition</button>
					</div>
				</div>
				<div className="mt-8 lg:mt-0 hidden md:flex">
					<img src="https://www.feu.edu.ph/wp-content/uploads/2024/05/FEU-Website-front-picture.png" alt="Future-ready learning at Clarendon" className="w-full h-auto max-w-lg mx-auto rounded-lg" />
				</div>
			</div>
		</section>
	);
};

export default FutureReadySection;
