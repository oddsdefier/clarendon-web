import { Facebook, Linkedin } from "lucide-react";
import BackgroundImage from "./BackgroundImage";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

const bgImgUrl = "https://scontent.fmnl3-3.fna.fbcdn.net/v/t1.6435-9/87552206_109185400685458_8773993985245970432_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeFO4Mchm6htvMg3jfpS88muV7IgrR-L65lXsiCtH4vrmbjZ8WFU0JAn-9mlwAyPhTmA3SH4R7N9-RgW0S0GkGW2&_nc_ohc=IDqxNCm7-KUQ7kNvgEF9FhL&_nc_ht=scontent.fmnl3-3.fna&_nc_gid=A5VdmLMMKAhdBxXSNnq4UGb&oh=00_AYC3SJL1bVCLptcCij-ssMAGnZCLpTWeVLiYOmDDHC2img&oe=672F3CA6";

const helperTitleClass = "text-md lg:text-lg font-semibold mb-4 text-indigo-100";
const listElWrapperClass = "not-italic text-indigo-200 text-sm lg:text-md space-y-3";

const socialsLogo = "w-5 h-5 text-indigo-200 hover:text-clarc-gold transition transition-colors duration-200";
export default function Footer() {
	return (
		<footer className="relative  text-white pt-16 pb-24 px-4 lg:px-0">
			<BackgroundImage url={bgImgUrl} className="opacity-100" />
			<div className="container mx-auto px-4 flex flex-col lg:flex-row justify-evenly  gap-8 z-10 relative">
				<div className="flex flex-col items-start">
					<div className="flex items-center mb-4">
						<img src="https://scontent.fmnl9-5.fna.fbcdn.net/v/t39.30808-6/431963925_915159387277103_632830678809030111_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=EG0nO6DtNlYQ7kNvgGBPwd9&_nc_ht=scontent.fmnl9-5.fna&_nc_gid=AEcQme1MIs51qwFd-o7TM8N&oh=00_AYAN25wnEJSKQiSwwuTSzcMWrls6yLD9t6dhTMwjjfYwFQ&oe=670AA4CA" alt="Clarendon College Logo" className="square rounded-full w-10 h-10 lg:w-[2.3rem] lg:h-[2.3rem] mr-2" />

						<span className="text-xl lg:text-3xl font-semibold font-astralaga text-clarc-gold">Clarendon College</span>
					</div>
				</div>
				<div>
					<h3 className={helperTitleClass}>Get In Touch</h3>
					<address className={listElWrapperClass}>
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
					<h3 className={helperTitleClass}>Learn More</h3>
					<ul className={listElWrapperClass}>
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
							<a href="#" className="hover:underline">
								Programs
							</a>
						</li>
						<li>
							<a href="#" className="hover:underline">
								Contact
							</a>
						</li>
					</ul>
				</div>
				<div>
					<h3 className={helperTitleClass}>Socials</h3>
					<div className="flex gap-2">
						{[
							{ Component: Facebook, href: "https://facebook.com" },
							{ Component: InstagramLogoIcon, href: "https://instagram.com" },
							{ Component: Linkedin, href: "https://linkedin.com" },
						].map(({ Component, href }, index) => (
							<motion.a key={index} href={href} whileTap={{ scale: [0.9, 1] }} whileHover={{ scale: [0.9, 1] }}>
								<Component className={socialsLogo} />
							</motion.a>
						))}
					</div>
				</div>
			</div>
			<div className="flex gap-1 flex-col px-4 py-5 mt-10 z-10 relative container mx-auto justify-start lg:justify-center items-start lg:items-center ">
				<p className="text-sm text-clarc-gold font-semibold">&copy; {new Date().getFullYear()} Clarendon College</p>
				<p className="text-sm text-clarc-gold/80 font-semibold">All rights reserved.</p>
			</div>
		</footer>
	);
}
