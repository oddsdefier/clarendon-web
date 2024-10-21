import React from "react";

const PhilosophyOfEducation: React.FC = () => {
	return (
		<div className="min-h-screen w-full bg-white flex flex-col">
			<div className="container mx-auto px-4 sm:px-6 max-w-4xl">
				<div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 mt-8 pb-10">
					<div>
						<h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-clarc-blue">Philosophy of Education</h2>
						<p className="text-sm sm:text-base text-muted-foreground leading-relaxed">At Clarendon College we want students to recognize and help foster a culture that supports the belief that education is a cooperative endeavor. All members of the school community must model the cultural, professional, and educational standards of the school by working as effective team members that meet deadlines and accomplish clearly defined goals utilizing all the talents and respecting the individual differences of each member of the school community.</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PhilosophyOfEducation;
