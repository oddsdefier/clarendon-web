import * as React from "react";

import { cn } from "@/lib/utils";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
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
];
const academics: { title: string; href: string; description: string }[] = [
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
];
const campus_life: { title: string; href: string; description: string }[] = [
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
								<ListItem key={component.title} title={component.title} href={component.href}>
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
							{components.map((component) => (
								<ListItem key={component.title} title={component.title} href={component.href}>
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
								<ListItem key={component.title} title={component.title} href={component.href}>
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
								<ListItem key={component.title} title={component.title} href={component.href}>
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

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a ref={ref} className={cn("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground", className)} {...props}>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = "ListItem";