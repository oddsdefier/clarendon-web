import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { newsItems } from "@/utils/get_news_and_events_data";

interface NewsItem {
	id: string;
	category: string;
	title: string;
	date: string;
	image: string;
	slug: string;
	fullContent?: string;
}

export default function NewsDetail() {
	const { slug } = useParams<{ slug: string }>();
	const [newsItem, setNewsItem] = useState<NewsItem | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const item = newsItems.find((item: NewsItem) => item.slug === slug);
		if (item) {
			setNewsItem({
				...item,
				fullContent: `
          <p>This is the full content of the news item with ID ${item.id}. At dolores voluptua et dolor aliquyam. Sed dolores lorem sanctus lorem voluptua ea eos, invidunt magna diam lorem ipsum. Sadipscing et diam diam sadipscing sit, et amet takimata dolor dolores. Sed labore lorem justo accusam rebum et sed lorem. Sit accusam et justo eirmod aliquyam diam gubergren est nonumy. Dolore nonumy gubergren sit duo sit labore eos tempor. Ut sea ea gubergren gubergren elitr. Diam kasd gubergren justo tempor, aliquyam vero sadipscing labore magna dolore rebum sit rebum stet. Clita justo kasd vero diam rebum. Kasd amet labore magna et tempor erat lorem, amet gubergren clita amet sit kasd diam. Ea sed dolores amet vero et sed takimata. Duo dolore kasd amet dolor et elitr vero amet.</p>
          <p>Voluptua sed clita nonumy eos et clita vero, dolores duo sed lorem et voluptua dolor ut sanctus consetetur. Clita nonumy est magna vero vero stet. Clita duo rebum rebum amet dolores amet, amet sea sit duo consetetur lorem est lorem stet gubergren, ipsum sanctus sanctus sea diam, voluptua voluptua dolores ipsum aliquyam rebum. Consetetur diam duo invidunt no diam. Sadipscing labore ipsum nonumy vero lorem nonumy consetetur. Eirmod et diam et erat sadipscing ipsum amet elitr. Eos takimata est clita est tempor duo. Dico piene procuratore della per da mescolati da da nondimeno sempre, dea della mentre volta divenuti nel che forse manifestamente. Alla tutte quale e pericoli cosí non impetrata le fosse. Ora e tale nel credere sua procuratore alla, niuna ci beato di da. Gli si furon da mortale credere donne pieno, grazia il del esse quale, viviamo donne alcun forse santo purita.</p>
          <p>Che fa le donne piú e quella di, esser né di medesimi mentre maravigliose volta cosí. Mescolati la credere esso quali siamo benignita di, i suo e che potremmo furono di suo apparire raccontare, forse avvedimento che noi e pericoli impetrata intendo facciamo da. Le da di di noi intendo cose noi. Sua quegli fatica informati dallo noi. Seguendo non manifestamente le prestasse le si dio e mente, principio di e non si, né dico quali la divina, quale alcun piú fuor essilio essilio né in, da quella santo pieno noi nome quali quale prieghi né. Di liberalita coloro quale la novella transitorie a discerniamo. Quella al in intendo si, niuna come alla che sé del quali viviamo al niuna. Intendo porgiamo piaceri fuor ma cose gli alla alcun intendo. Dico transitorie liberalita essaudisce nel esso in di</p>
        `,
			});
		}
		setLoading(false);
	}, [slug]);

	if (loading) {
		return (
			<div className="flex justify-center items-center h-screen">
				<div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
			</div>
		);
	}

	if (!newsItem) {
		return (
			<div className="flex flex-col justify-center items-center h-screen">
				<h2 className="text-2xl font-bold mb-4">News item not found.</h2>
				<Link to="/" className="text-clarc-blue hover:underline">
					Return to News List
				</Link>
			</div>
		);
	}

	return (
		<div className=" min-h-screen py-6 lg:py-12 font-manrope">
			<main className="container mx-auto px-6 sm:px-6 lg:px-16 pb-16">
				{/* <Link to="/" className="inline-flex items-center text-clarc-blue hover:underline mb-8">
					<ArrowLeft className="mr-2 h-4 w-4" />
					Back to News List
				</Link> */}
				<article className="overflow-hidden">
					<header className="mb-4 lg:mb-8">
						<p className="text-gray-500 text-xs mb-1 lg:mb-2 uppercase tracking-wide">{newsItem.category}</p>
						<h1 className="text-3xl font-pt_serif sm:text-4xl leading-tight font-bold text-clarc-blue mb-1 lg:mb-4">{newsItem.title}</h1>
						<div className="flex gap-1 mt-2 items-center text-gray-500/90 font-medium text-xs">
							<p>{"Jeffry Paner"}</p>
							<p>{"•"}</p>
							<time dateTime={newsItem.date}>{new Date(newsItem.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "2-digit" })}</time>
						</div>
					</header>
					<img src={newsItem.image || "/placeholder.svg?height=400&width=800"} alt={newsItem.title} className="container w-full h-96 object-cover" />
					<div className="py-8 lg:py-16">
						<div className="prose prose-lg max-w-none leading-7 lg:leading-10 text-gray-900/90 text-sm lg:text-base" dangerouslySetInnerHTML={{ __html: newsItem.fullContent || "" }} />
					</div>
				</article>
				<div>
					{["news", "sports", "journalism"].map((item) => (
						<button disabled className="px-4 py-2 text-xs rounded-3xl bg-clarc-gold text-clarc-blue font-semibold mr-3">
							{item}
						</button>
					))}
				</div>
			</main>
		</div>
	);
}
