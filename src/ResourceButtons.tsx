import { Button } from "@/components/ui/button";

const resourceButtons = [
	{ label: "Online Resources", href: "#online-resources" },
	{ label: "International", href: "#international" },
	{ label: "Arts and Culture", href: "#arts-and-culture" },
	{ label: "Alumni", href: "#alumni" },
];

export default function ResourceButtons() {
	return (
		<div className="bg-clarc-blue lg:block">
			<div className="container mx-auto px-4 py-8">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
					{resourceButtons.map((button) => (
						<Button key={button.label} variant="outline" className="w-full bg-transparent text-clarc-gold border-clarc-gold hover:bg-clarc-gold hover:text-clarc-blue transition-colors duration-300" asChild>
							<a href={button.href}>{button.label}</a>
						</Button>
					))}
				</div>
			</div>
		</div>
	);
}
