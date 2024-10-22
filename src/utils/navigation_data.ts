export interface NavItem {
	title: string;
	href: string;
	description: string;
}

export interface NavCategory {
	title: string;
	items: NavItem[];
}

export const navigationData: NavCategory[] = [
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
