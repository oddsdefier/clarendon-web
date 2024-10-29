import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { newsItems } from "@/utils/news_and_events_data";
import { ArrowLeft, Calendar, CircleChevronRight, Share2, Tag } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export interface NewsItem {
	id: string;
	category: string;
	title: string;
	date: string;
	image: string;
	slug: string;
	author?: string;
	authorImage?: string;
	content?: string;
}

// // Simulating the useParams hook
// const useParams = () => ({ slug: "clarc-goes-global" });

// Simulating the Link component
const Link = ({ to, children, className }: { to: string; children: React.ReactNode; className?: string }) => (
	<a href={to} className={className}>
		{children}
	</a>
);

// Simulating the CarouselItemAnim component
const CarouselItemAnim = ({ children }: { children: React.ReactNode; index: number }) => <div>{children}</div>;

const NewsCard = React.memo(({ item, index }: { item: NewsItem; index: number }) => (
	<Card className="shadow-sm pb-3 bg-clarc-gold/10 hover:bg-clarc-gold/20 overflow-hidden outline-none transition duration-300 transform rounded-none">
		<CarouselItemAnim index={index}>
			<Link to={`/news/${item.slug}`} className="block relative group">
				<div className="overflow-hidden relative">
					<img src={item.image} alt={item.title} className="rounded-sm w-full h-52 object-contain transition-transform duration-300 group-hover:scale-110" loading="lazy" />
					<img src={item.image} alt="" className="absolute top-0 left-0 -z-10 rounded-sm w-full h-52 object-cover opacity-10" loading="lazy" />
					<div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
						<span className="text-white font-semibold text-base">Read More</span>
					</div>
				</div>
			</Link>
			<CardContent className="p-4 space-y-2 pt-8">
				<h4 className="uppercase text-sm tracking-wider font-medium text-clarc-gold mb-6">
					{"— "}
					{item.category}
				</h4>
				<h2 className="font-astralaga text-lg lg:text-lg font-bold text-clarc-blue line-clamp-2">{item.title}</h2>
				<div className="flex justify-start items-center gap-1">
					<Calendar className="w-4 h-4 text-gray-800/60" />
					<p className="text-sm text-gray-800/60 font-medium">{item.date}</p>
				</div>
				<div className="pt-5">
					<Link to={`/news/${item.slug}`} className="text-primary/80 hover:text-primary flex w-full items-center justify-start gap-1">
						<CircleChevronRight className="w-4 h-4" />
						<p className="text-sm">Read More</p>
					</Link>
				</div>
			</CardContent>
		</CarouselItemAnim>
	</Card>
));

export default function NewsDetail() {
	const { slug } = useParams();
	const [newsItem, setNewsItem] = useState<NewsItem | null>(null);
	const [relatedArticles, setRelatedArticles] = useState<NewsItem[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const item = newsItems.find((item: NewsItem) => item.slug === slug);
		if (item) {
			setNewsItem({
				...item,
				author: "Jeffry Paner",
				authorImage: "/placeholder.svg?height=50&width=50",
				content: `
		  <p style="font-size: 1rem">Clarendon College (CLARC) is proud to announce its expansion into the global education market. This groundbreaking move marks a significant milestone in the institution's history and opens up new opportunities for students worldwide.</p>
		  <p>CLARC has established partnerships with renowned universities across Europe, Asia, and North America. These collaborations will facilitate student exchange programs, joint research initiatives, and shared academic resources.</p>
		  <p>To support its global outreach, CLARC has launched a state-of-the-art online learning platform. This platform will offer a wide range of courses to international students, allowing them to experience CLARC's high-quality education from anywhere in the world.</p>
		  <p>As part of its global initiative, CLARC will be introducing various cultural exchange programs. These programs aim to foster cross-cultural understanding and prepare students for the increasingly interconnected global job market.</p>
		  <p>While expanding globally, CLARC remains committed to its local community. The global initiative is expected to bring diverse perspectives to the campus, enriching the educational experience for all students.</p>
		  <p>Looking ahead, CLARC plans to establish satellite campuses in key international locations. This expansion will further solidify its position as a global educational institution and provide more opportunities for students to gain international exposure.</p>
		  <p>CLARC's global expansion represents a bold step forward in its mission to provide world-class education. As the college embarks on this exciting journey, it remains dedicated to its core values of academic excellence, innovation, and inclusivity.</p>
		`,
			});
		}
		// Get related articles (excluding the current article)
		const related = newsItems.filter((item) => item.slug !== slug).slice(0, 3);
		setRelatedArticles(related);
		setLoading(false);
	}, [slug]);

	const handleShare = async () => {
		if (navigator.share && newsItem) {
			try {
				await navigator.share({
					title: newsItem.title,
					text: `Check out this news article: ${newsItem.title}`,
					url: window.location.href,
				});
			} catch (error) {
				console.error("Error sharing:", error);
			}
		} else {
			// Fallback for browsers that don't support navigator.share
			alert("Sharing is not supported on this browser. You can copy the URL to share.");
		}
	};

	if (loading) {
		return (
			<div className="container mx-auto px-4 py-8">
				<Skeleton className="h-8 w-64 mb-4" />
				<Skeleton className="h-12 w-full mb-4" />
				<Skeleton className="h-6 w-48 mb-8" />
				<Skeleton className="h-96 w-full mb-8" />
				<div className="space-y-4">
					<Skeleton className="h-4 w-full" />
					<Skeleton className="h-4 w-full" />
					<Skeleton className="h-4 w-2/3" />
				</div>
			</div>
		);
	}

	if (!newsItem) {
		return (
			<div className="flex flex-col justify-center items-center h-screen">
				<h2 className="text-2xl font-bold mb-4">News item not found.</h2>
				<Link to="/" className="text-primary hover:underline">
					Return to News List
				</Link>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-background font-geist">
			<main className="container mx-auto px-4 lg:px-6 py-8 lg:pb-16">
				<Link to="/" className="inline-flex text-sm items-center text-primary/60 hover:primary mb-8">
					<ArrowLeft className="mr-1 lg:mr-2 h-4 w-4" />
					Back to News List
				</Link>
				<article className="max-w-4xl mx-auto">
					<header className="mb-8">
						<p className="text-clarc-blue/70 font-medium text-sm mb-2 uppercase tracking-wider">{newsItem.category}</p>
						<h1 className="text-3xl lg:text-4xl font-bold text-clarc-blue mb-3">{newsItem.title}</h1>
						<div className="flex items-center space-x-2 lg:space-x-4 text-sm text-muted-foreground outline-none">
							<div className="flex items-center">
								<Avatar className="w-6 h-6 lg:h-8 lg:w-8 mr-1 lg:mr-2">
									<AvatarImage src={newsItem.authorImage} alt={newsItem.author} />
									<AvatarFallback className="bg-clarc-gold/30	 text-clarc-blue">{newsItem.author?.charAt(0)}</AvatarFallback>
								</Avatar>
								<span>{newsItem.author}</span>
							</div>
							<div className="flex items-center">
								<Calendar className="mr-1 lg:mr-2 h-4 w-4" />
								<time dateTime={newsItem.date}>{newsItem.date}</time>
							</div>
						</div>
					</header>
					<img src={newsItem.image} alt={newsItem.title} className="w-full h-96 object-cover rounded-lg mb-8" />
					<div className="prose prose-lg max-w-none text-foreground mb-8" dangerouslySetInnerHTML={{ __html: newsItem.content || "" }} />
					<footer className="mt-8 pt-8 border-t border-border">
						<div className="flex flex-wrap items-center justify-between">
							<div className="flex flex-wrap justify-center items-center space-x-2 sm:mb-0">
								<Tag className="h-5 w-5 text-clarc-blue" />
								<Button variant="outline" size="sm" className="text-clarc-blue">
									{newsItem.category}
								</Button>
							</div>
							<Button variant="outline" size="sm" onClick={handleShare} className="bg-clarc-blue text-clarc-gold hover:bg-clarc-gold hover:text-clarc-blue transition-colors duration-200">
								<Share2 className="mr-2 h-4 w-4" />
								Share
							</Button>
						</div>
					</footer>
				</article>
				<section className="mt-16">
					<h2 className="text-lg lg:text-2xl font-bold mb-4 lg:mb-6 text-clarc-blue">Related Articles</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{relatedArticles.map((article, index) => (
							<NewsCard key={article.id} item={article} index={index} />
						))}
					</div>
				</section>
			</main>
		</div>
	);
}
