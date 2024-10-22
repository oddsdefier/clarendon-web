import React from "react";
interface HeaderProp {
	img: string;
	title: string;
}
const Header: React.FC<HeaderProp> = ({ img, title }) => {
	return (
		<div
			className="relative opacity-90 h-48 bg-primary overflow-hidden flex items-center"
			style={{
				backgroundImage: `url(${img})`,
			}}>
			<div className="absolute inset-0 bg-gradient-to-t from-clarc-blue to-transparent opacity-90" />
			<div className="container mx-auto z-10 px-6 flex justify-center">
				<h1 className="text-xl lg:text-4xl font-semibold text-white font-astralaga">{title}</h1>
			</div>
		</div>
	);
};
export default Header;
