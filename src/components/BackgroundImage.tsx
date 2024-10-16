import React from "react";

interface BgImageProps {
	url: string;
	className?: string;
}
const BackgroundImage: React.FC<BgImageProps> = ({ url, className }) => {
	return (
		<>
			<div
				className={`absolute inset-0 -z-[11] bg-cover bg-center bg-no-repeat ${className}`}
				style={{
					backgroundImage: `url(${url})`,
				}}>
				<div className="absolute inset-0 bg-clarc-blue opacity-80"></div>
			</div>
			<div
				style={{
					backgroundImage: "linear-gradient(#c9b163 1px, transparent 1px), linear-gradient(to right, #c9b163 1px, transparent 1px)",
					backgroundSize: "30px 30px",
				}}
				className="-z-10 absolute inset-0 opacity-40"
			/>
			<div className="z-[10] absolute inset-0 bg-gradient-to-t from-clarc-blue to-transparent opacity-100" />
		</>
	);
};
export default BackgroundImage;
