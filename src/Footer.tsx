import React from "react";

const Footer: React.FC = () => {
	return (
		<footer className=" p-18 py-16 lg:pt-24 pb-32 bg-gray-800 text-white ">
			<div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 p-5">
				<div className="flex flex-col gap-1 justify-start items-start">
					<div className="flex items-center justify-center gap-1">
						<div>Logo</div>
						<div>Clarendon</div>
					</div>
					<div className="text-start mt-4">
						<p>© 2024 Clarendon. All rights reserved.</p>
					</div>
				</div>

				<div className="flex flex-col gap-1 justify-start items-start text-md text-gray-200 space-y-1">
					<h3 className="font-semibold text-lg text-white">Get In Touch</h3>
					<p>1234 University Ave</p>
					<p>City, State, 56789</p>
					<p>Email: info@clarendon.edu</p>
					<p>Phone: (123) 456-7890</p>
				</div>

				<div className="flex flex-col gap-1 justify-start items-start text-md text-gray-200 space-y-1">
					<h3 className="font-semibold text-lg text-white">Learn More</h3>
					<p>About Us</p>
					<p>Admissions</p>
					<p>Programs</p>
					<p>Contact</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
