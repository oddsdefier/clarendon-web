import slugify from "slugify";
import { newsItems, NewsItem } from "@/utils/get_news_and_events_data";

function processNewsItems(newsItems: NewsItem[]): (NewsItem & { id: string; slug: string })[] {
	return newsItems.map((item, index) => {
		return {
			...item,
			id: `news-${Date.now()}-${index + 1}`,
			slug: slugify(item.title, { lower: true }),
		};
	});
}

processNewsItems(newsItems);
