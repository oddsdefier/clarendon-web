import React from "react";

interface BgImageProps {
	url: string;
	className?: string;
}
const BackgroundImage: React.FC<BgImageProps> = ({ url, className }) => {
	return (
		<div
			className={`absolute inset-0 z-0 bg-cover bg-center bg-no-repeat ${className}`}
			style={{
				backgroundImage: `url(${url})`,
			}}>
			<div className="absolute inset-0 bg-gradient-to-b from-clarc-blue to-transparent opacity-95"></div>
			<div className="absolute inset-0 bg-clarc-blue opacity-90"></div>
		</div>
	);
};
export default BackgroundImage;
