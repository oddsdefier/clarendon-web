import * as React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

type MenuItem = {
	title: string;
	href: string;
	description: string;
};

type MenuSection = {
	title: string;
	items: MenuItem[];
};

const menuConfig: MenuSection[] = [
	{
		title: "About",
		items: [
			{
				title: "History",
				href: "/about/history",
				description: "Explore the history of Clarendon College.",
			},
			{
				title: "School Emblem",
				href: "/about/school-emblem",
				description: "Explore the meaning behind the Clarendon College school emblem.",
			},
			{
				title: "Vision and Mission",
				href: "/about/mission-vision",
				description: "Explore the vision and mission of Clarendon College.",
			},
			{
				title: "Philosophy of Education",
				href: "/about/philosophy-of-education",
				description: "Discover the philosophy of education at Clarendon College.",
			},
			{
				title: "Core Values",
				href: "/about/core-values",
				description: "Learn about the core values that guide Clarendon College.",
			},
		],
	},
	{
		title: "Admissions",
		items: [
			{
				title: "Admission Requirements",
				href: "/admissions/requirements",
				description: "Admission criteria for Clarendon College.",
			},
			{
				title: "Enrollment Procedures",
				href: "/admissions/enrollment",
				description: "Steps for enrolling at Clarendon College.",
			},
			{
				title: "Fees, Payments, and Discounts",
				href: "/admissions/fees",
				description: "Details on tuition, payments, and discounts.",
			},
			{
				title: "Student Withdrawal or Transfer",
				href: "/admissions/withdrawal-transfer",
				description: "Guidelines for withdrawing or transferring.",
			},
			{
				title: "Scholarships",
				href: "/admissions/scholarships",
				description: "Available scholarships at Clarendon College.",
			},
		],
	},
	{
		title: "Academics",
		items: [
			{
				title: "High School",
				href: "/academics/high-school",
				description: "Overview of Clarendon College's high school programs.",
			},
			{
				title: "Senior High School",
				href: "/academics/senior-high",
				description: "Details about Clarendon College's senior high school curriculum.",
			},
			{
				title: "College",
				href: "/academics/college",
				description: "Information on degree programs at Clarendon College.",
			},
		],
	},
	{
		title: "Campus Life",
		items: [
			{
				title: "The Student Body",
				href: "/campus-life/student-body",
				description: "Learn about the diverse student community at Clarendon College.",
			},
			{
				title: "Holistic Wellbeing",
				href: "/campus-life/wellbeing",
				description: "Discover our approach to student health and wellness.",
			},
			{
				title: "Learning Enrichment",
				href: "/campus-life/enrichment",
				description: "Explore extracurricular and enrichment opportunities.",
			},
		],
	},
];

const navTriggerStyle = "text-clarc-blue hover:text-clarc-blue/90";

export function ClarendonNavigationMenu() {
	return (
		<NavigationMenu className="z-50">
			<NavigationMenuList>
				{menuConfig.map((section) => (
					<NavigationMenuItem key={section.title}>
						<NavigationMenuTrigger className={navTriggerStyle}>{section.title}</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className="grid gap-3 p-4 md:w-[400px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]">
								{section.items.map((item) => (
									<ListItem key={item.title} title={item.title} to={item.href}>
										{item.description}
									</ListItem>
								))}
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	);
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<typeof Link>>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<Link ref={ref} className={cn("block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground", className)} {...props}>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground opacity-75">{children}</p>
				</Link>
			</NavigationMenuLink>
		</li>
	);
});

ListItem.displayName = "ListItem";
