import * as React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { cn } from "@/lib/utils";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

const admissions: { title: string; href: string; description: string }[] = [
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
];

const about: { title: string; href: string; description: string }[] = [
	{
		title: "History",
		href: "/docs/primitives/tabs",
		description: "Explore the history of Clarendon College.",
	},
	{
		title: "School Emblem",
		href: "/docs/primitives/tabs",
		description: "Explore the meaning behind the Clarendon College school emblem.",
	},
	{
		title: "Philosophy of Education",
		href: "/docs/primitives/tabs",
		description: "Discover the philosophy of education at Clarendon College.",
	},
	{
		title: "Vision and Mission",
		href: "/docs/primitives/tabs",
		description: "Explore the vision and mission of Clarendon College.",
	},
	{
		title: "Core Values",
		href: "/docs/primitives/tabs",
		description: "Learn about the core values that guide Clarendon College.",
	},
];
const academics: { title: string; href: string; description: string }[] = [
	{
		title: "High School",
		href: "/docs/primitives/tabs",
		description: "Overview of Clarendon College's high school programs.",
	},
	{
		title: "Senior High School",
		href: "/docs/primitives/tabs",
		description: "Details about Clarendon College's senior high school curriculum.",
	},
	{
		title: "College",
		href: "/docs/primitives/tabs",
		description: "Information on degree programs at Clarendon College.",
	},
];
const campus_life: { title: string; href: string; description: string }[] = [
	{
		title: "The Student Body",
		href: "/docs/primitives/tabs",
		description: "Overview of Clarendon College's high school programs.",
	},
	{
		title: "Holistic Wellbeing",
		href: "/docs/primitives/tabs",
		description: "Details about Clarendon College's senior high school curriculum.",
	},
	{
		title: "Learning Enrichment",
		href: "/docs/primitives/tabs",
		description: "Information on degree programs at Clarendon College.",
	},
];

const nav_trigger_style: string = "text-clarc-blue hover:text-clarc-blue/90";

export function ClarendonNavigationMenu() {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger className={nav_trigger_style}>About</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="text-lg grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
							{about.map((component) => (
								<ListItem key={component.title} title={component.title} to={component.href}>
									{component.description}
								</ListItem>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger className={nav_trigger_style}>Admissions</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
							{admissions.map((component) => (
								<ListItem key={component.title} title={component.title} to={component.href}>
									{component.description}
								</ListItem>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger className={nav_trigger_style}>Academics</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
							{academics.map((component) => (
								<ListItem key={component.title} title={component.title} to={component.href}>
									{component.description}
								</ListItem>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger className={nav_trigger_style}>Campus Life</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
							{campus_life.map((component) => (
								<ListItem key={component.title} title={component.title} to={component.href}>
									{component.description}
								</ListItem>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}

// ListItem Component using Link from react-router-dom
const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<typeof Link>>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<Link ref={ref} className={cn("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground", className)} {...props}>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
				</Link>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = "ListItem";
