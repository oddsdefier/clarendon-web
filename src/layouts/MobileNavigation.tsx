import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { Facebook, Linkedin, Youtube, Twitter, MoveUpRight } from "lucide-react";
interface NavItem {
	title: string;
	href: string;
	description: string;
}

interface NavCategory {
	title: string;
	items: NavItem[];
}

const navigationData: NavCategory[] = [
	{
		title: "About",
		items: [
			{
				title: "History",
				href: "/",
				description: "Explore the history of Clarendon College.",
			},
			{
				title: "School Emblem",
				href: "/",
				description: "Explore the meaning behind the Clarendon College school emblem.",
			},
			{
				title: "Philosophy of Education",
				href: "/",
				description: "Discover the philosophy of education at Clarendon College.",
			},
			{
				title: "Vision and Mission",
				href: "/",
				description: "Explore the vision and mission of Clarendon College.",
			},
			{
				title: "Core Values",
				href: "/",
				description: "Learn about the core values that guide Clarendon College.",
			},
		],
	},
	{
		title: "Admissions",
		items: [
			{
				title: "Admission Requirements",
				href: "/docs/primitives/alert-dialog",
				description: "Admission criteria for Clarendon College.",
			},
			{
				title: "Enrollment Procedures",
				href: "/docs/primitives/hover-card",
				description: "Steps for enrolling at Clarendon College.",
			},
			{
				title: "Fees, Payments, and Discounts",
				href: "/docs/primitives/progress",
				description: "Details on tuition, payments, and discounts.",
			},
			{
				title: "Student Withdrawal or Transfer",
				href: "/docs/primitives/scroll-area",
				description: "Guidelines for withdrawing or transferring.",
			},
			{
				title: "Scholarships",
				href: "/docs/primitives/tabs",
				description: "Available scholarships at Clarendon College.",
			},
		],
	},
	{
		title: "Academics",
		items: [
			{
				title: "High School",
				href: "/",
				description: "Overview of Clarendon College's high school programs.",
			},
			{
				title: "Senior High School",
				href: "/",
				description: "Details about Clarendon College's senior high school curriculum.",
			},
			{
				title: "College",
				href: "/",
				description: "Information on degree programs at Clarendon College.",
			},
		],
	},
	{
		title: "Campus Life",
		items: [
			{
				title: "The Student Body",
				href: "/",
				description: "Overview of Clarendon College's high school programs.",
			},
			{
				title: "Holistic Wellbeing",
				href: "/",
				description: "Details about Clarendon College's senior high school curriculum.",
			},
			{
				title: "Learning Enrichment",
				href: "/",
				description: "Information on degree programs at Clarendon College.",
			},
		],
	},
];

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
										<a href={item.href} className="flex justify-between items-center text-base p-2 hover:bg-accent rounded-md">
											<span className="font-normal text-gray-700/80">{item.title}</span>
											<MoveUpRight className="w-3 h-3 aspect-square text-clarc-blue/80" />
										</a>
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
						{ Component: Youtube, href: "https://linkedin.com" },
						{ Component: Twitter, href: "https://linkedin.com" },
					].map(({ Component, href }, index) => (
						<motion.a key={index} href={href} whileTap={{ scale: [0.9, 1] }} whileHover={{ scale: [0.9, 1] }}>
							<Component className={socialsLogo} />
						</motion.a>
					))}
				</div>
			</div>
		</nav>
	);
};
export default MobileNavigation;
