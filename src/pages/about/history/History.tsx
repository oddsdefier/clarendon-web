import { useEffect } from "react";
// import { clarcAssets } from "@/utils/img_links";
import ClarendonHistory from "./ClarendonHistory";
import Timeline from "./Timeline";

export default function History() {
	useEffect(() => {
		const handleScroll = (event: Event) => {
			event.preventDefault();
			const target = event.target as HTMLAnchorElement;
			const id = target.getAttribute("href");
			if (id) {
				const element = document.querySelector(id);
				if (element) {
					const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
					const offsetPosition = elementPosition - window.innerHeight / 3;

					window.scrollTo({
						top: offsetPosition,
						behavior: "smooth",
					});
				}
			}
		};

		const links = document.querySelectorAll('a[href^="#"]');
		links.forEach((link) => {
			link.addEventListener("click", handleScroll);
		});

		return () => {
			links.forEach((link) => {
				link.removeEventListener("click", handleScroll);
			});
		};
	}, []);

	return (
		<div className="w-full bg-white pt-8">
			<main className="container mx-auto flex gap-12">
				<div className="flex-1">
					<ClarendonHistory />
					<Timeline />
				</div>
			</main>
		</div>
	);
}
