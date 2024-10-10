import { ExternalLink, Facebook, Linkedin } from "lucide-react";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

const bgImgUrl = "https://scontent.fmnl3-3.fna.fbcdn.net/v/t1.6435-9/87552206_109185400685458_8773993985245970432_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeFO4Mchm6htvMg3jfpS88muV7IgrR-L65lXsiCtH4vrmbjZ8WFU0JAn-9mlwAyPhTmA3SH4R7N9-RgW0S0GkGW2&_nc_ohc=IDqxNCm7-KUQ7kNvgEF9FhL&_nc_ht=scontent.fmnl3-3.fna&_nc_gid=A5VdmLMMKAhdBxXSNnq4UGb&oh=00_AYC3SJL1bVCLptcCij-ssMAGnZCLpTWeVLiYOmDDHC2img&oe=672F3CA6";

const helperTitleClass = "text-md lg:text-base font-semibold mb-4 text-indigo-100/95";
const listElWrapperClass = "not-italic text-indigo-200/90 text-sm lg:text-md space-y-3";

const socialsLogo = "w-5 h-5 text-indigo-200 hover:text-clarc-gold transition transition-colors duration-200";
export default function Footer() {
	return (
		<footer className="relative bg-clarc-blue/10  text-white pt-16 pb-24 px-4 lg:px-0">
			<div
				className={`absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-20`}
				style={{
					backgroundImage: `url(${bgImgUrl})`,
				}}></div>
			<div className="-z-10 absolute inset-0 bg-clarc-blue opacity-50"></div>

			<div className="-z-10 absolute inset-0 bg-gradient-to-b from-clarc-blue to-transparent opacity-100"></div>

			<div className="container mx-auto px-4 flex flex-col lg:flex-row justify-evenly  gap-8 z-10 relative">
				<div className="flex gap-2">
					<img src="https://scontent.fmnl9-5.fna.fbcdn.net/v/t39.30808-6/431963925_915159387277103_632830678809030111_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=EG0nO6DtNlYQ7kNvgGBPwd9&_nc_ht=scontent.fmnl9-5.fna&_nc_gid=AEcQme1MIs51qwFd-o7TM8N&oh=00_AYAN25wnEJSKQiSwwuTSzcMWrls6yLD9t6dhTMwjjfYwFQ&oe=670AA4CA" alt="Clarendon College Logo" className="square rounded-full w-8 h-8 lg:w-[2.3rem] lg:h-[2.3rem]" />
					<div>
						<div className="flex items-center gap-1 mb-4 row-span-1 col-span-1">
							<span className="text-2xl lg:text-3xl font-semibold font-astralaga text-clarc-gold">Clarendon College</span>
						</div>
						<div className="hidden lg:flex gap-1 flex-col mt-0 z-10 relative container mx-auto justify-start  items-start row-span-2">
							<p className="text-sm text-clarc-gold/90 font-semibold">&copy; {new Date().getFullYear()} Clarendon College</p>
							<p className="ml-3.5 text-sm text-clarc-gold/80 font-semibold">All rights reserved.</p>
						</div>
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
			<div className="flex lg:hidden gap-1 flex-col px-4 py-5 mt-10 z-10 relative container mx-auto justify-start lg:justify-center items-start lg:items-center ">
				<p className="text-sm text-clarc-gold font-semibold">&copy; {new Date().getFullYear()} Clarendon College</p>
				<p className="text-sm text-clarc-gold/80 font-semibold">All rights reserved.</p>
			</div>
		</footer>
	);
}
