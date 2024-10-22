import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { Facebook, Linkedin, Youtube, Twitter, MoveUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { navigationData } from "@/utils/navigation_data";

const MobileNavigation: React.FC = () => {
	const socialsLogo = "w-5 h-5 text-gray-500/60 hover:text-clarc-gold transition transition-colors duration-200";

	return (
		<nav className="bg-background p-4 flex flex-col justify-between h-full">
			<Accordion type="single" collapsible className="w-full">
				{navigationData.map((category) => (
					<AccordionItem key={category.title} value={category.title.toLowerCase().replace(/\s+/g, "-")}>
						<AccordionTrigger className="uppercase font-semibold text-lg text-clarc-blue focus:outline-none outline outline-none">{category.title}</AccordionTrigger>
						<AccordionContent>
							<ul className="space-y-1">
								{category.items.map((item) => (
									<li key={item.title}>
										<Link to={item.href} className="flex justify-between items-center text-base p-2 hover:bg-accent rounded-md">
											<span className="font-normal text-gray-700/80">{item.title}</span>
											<MoveUpRight className="w-3 h-3 aspect-square text-clarc-blue/80" />
										</Link>
									</li>
								))}
							</ul>
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
			<div>
				<div className="flex gap-3 w-full justify-start py-3">
					{[
						{ Component: Facebook, href: "https://facebook.com" },
						{ Component: InstagramLogoIcon, href: "https://instagram.com" },
						{ Component: Linkedin, href: "https://linkedin.com" },
						{ Component: Youtube, href: "https://youtube.com" },
						{ Component: Twitter, href: "https://twitter.com" },
					].map(({ Component, href }, index) => (
						<motion.a key={index} href={href} whileTap={{ scale: [0.9, 1] }} whileHover={{ scale: [0.9, 1] }} target="_blank">
							<Component className={socialsLogo} />
						</motion.a>
					))}
				</div>
			</div>
		</nav>
	);
};

export default MobileNavigation;
