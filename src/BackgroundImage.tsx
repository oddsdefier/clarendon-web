import React from "react";

interface BgImageProps {
	url: string;
	className?: string;
}
const BackgroundImage: React.FC<BgImageProps> = ({ url, className }) => {
	return (
		<div
			className={`absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat ${className}`}
			style={{
				backgroundImage: `url(${url})`,
			}}>
			<div className="absolute inset-0 bg-gradient-to-b from-clarc-blue to-transparent opacity-100"></div>
			<div className="absolute inset-0 bg-clarc-blue opacity-70"></div>
		</div>
	);
};
export default BackgroundImage;
