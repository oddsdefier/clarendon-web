import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
	const date = new Date();
	return (
		<nav className="bg-background p-4 flex flex-col justify-between h-full">
			<Accordion type="single" collapsible className="w-full">
				{navigationData.map((category) => (
					<AccordionItem key={category.title} value={category.title.toLowerCase().replace(/\s+/g, "-")}>
						<AccordionTrigger className="text-sm font-medium focus:outline-none outline outline-none">{category.title}</AccordionTrigger>
						<AccordionContent>
							<ul className="space-y-1">
								{category.items.map((item) => (
									<li key={item.title}>
										<a href={item.href} className="text-sm block p-2 hover:bg-accent rounded-md">
											<span className="font-medium">{item.title}</span>
											<p className="text-xs text-muted-foreground">{item.description}</p>
										</a>
									</li>
								))}
							</ul>
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
			<div>
				<p className="font-medium text-sm text-gray-800/60">{date.getFullYear()}</p>
			</div>
		</nav>
	);
};
export default MobileNavigation;
