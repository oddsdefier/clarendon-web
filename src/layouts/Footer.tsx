import { ExternalLink, Facebook, Linkedin, Youtube, Twitter } from "lucide-react";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { clarcAssets } from "@/utils/img_links";

const Footer: React.FC = () => {
	const clarcLogo = clarcAssets.primary_logo;
	const bgImgUrl = clarcAssets.images.old_pic;

	const helperTitleStyle = "text-md lg:text-base font-semibold mb-4 text-indigo-100/95";
	const listElWrapperStyle = "not-italic text-indigo-200/90 text-sm lg:text-md space-y-3";
	const socialsLogo = "w-5 h-5 text-indigo-200 hover:text-clarc-gold transition transition-colors duration-200";
	return (
		<footer className="relative bg-clarc-blue/10  text-white pt-8 pb-12 lg:pt-16 lg:pb-24 px-2 lg:px-0">
			<div
				className={`absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-20`}
				style={{
					backgroundImage: `url(${bgImgUrl})`,
				}}></div>
			<div className="-z-10 absolute inset-0 bg-clarc-blue opacity-70"></div>
			<div className="-z-10 absolute inset-0 bg-gradient-to-b from-clarc-blue to-transparent opacity-100"></div>

			<div className="container mx-auto px-4 flex flex-col lg:flex-row justify-evenly  gap-8 z-10 relative">
				<div className="flex gap-1 lg:gap-2">
					<img src={clarcLogo} alt="Clarendon College Logo" className="square rounded-full w-8 h-8 lg:w-10 lg:h-10 aspect-square" />
					<div>
						<div className="flex items-center gap-1 mb-4 row-span-1 col-span-1">
							<span className="text-xl font-semibold font-universal_serif text-clarc-gold tracking-wider">Clarendon College</span>
						</div>
						<div className="hidden lg:flex gap-1 flex-col mt-0 z-10 relative container mx-auto justify-start  items-start row-span-2">
							<p className="text-sm text-clarc-gold/90 font-semibold">&copy; {new Date().getFullYear()} Clarendon College</p>
							<p className="ml-3.5 text-sm text-clarc-gold/80 font-semibold">All rights reserved.</p>
						</div>
					</div>
				</div>
				<div>
					<h3 className={helperTitleStyle}>Socials</h3>
					<div className="flex gap-3">
						{[
							{ Component: Facebook, href: "https://facebook.com" },
							{ Component: InstagramLogoIcon, href: "https://instagram.com" },
							{ Component: Linkedin, href: "https://linkedin.com" },
							{ Component: Youtube, href: "https://linkedin.com" },
							{ Component: Twitter, href: "https://linkedin.com" },
						].map(({ Component, href }, index) => (
							<motion.a key={index} href={href} whileTap={{ scale: [0.9, 1] }} whileHover={{ scale: [0.9, 1] }}>
								<Component className={socialsLogo} />
							</motion.a>
						))}
					</div>
				</div>
				<div>
					<h3 className={helperTitleStyle}>Get In Touch</h3>
					<address className={listElWrapperStyle}>
						<p>Bayanihan St., Odiong</p>
						<p>Roxas, Oriental Mindoro</p>
						<p>
							Email:{" "}
							<a href="mailto:clarendoncollege@edu.ph" className="hover:underline">
								clarendoncollege@edu.ph
							</a>
						</p>
						<p>
							Phone:{" "}
							<a href="tel:+1234567890" className="hover:underline">
								(123) 456-7890
							</a>
						</p>
					</address>
				</div>

				<div>
					<h3 className={helperTitleStyle}>Learn More</h3>
					<ul className={listElWrapperStyle}>
						<li>
							<a href="#" className="hover:underline">
								About Us
							</a>
						</li>
						<li>
							<a href="#" className="hover:underline">
								Admissions
							</a>
						</li>

						<li>
							<a href="#" className="hover:underline flex items-center lg:justify-center gap-1">
								<span>Programs</span> <ExternalLink className="w-3.5 h-3.5 mb-0.5" />
							</a>
						</li>
						<li>
							<a href="#" className="hover:underline">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="flex lg:hidden gap-1 flex-col px-4 py-5 mt-10 z-10 relative container mx-auto justify-start lg:justify-center items-start lg:items-center ">
				<p className="text-sm text-clarc-gold font-semibold">&copy; {new Date().getFullYear()} Clarendon College</p>
				<p className="text-sm text-clarc-gold/80 font-semibold">All rights reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
