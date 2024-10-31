import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { newsItems } from "@/utils/data_news_and_events";
import {
  ArrowLeft,
  Calendar,
  CircleChevronRight,
  Share2,
  Tag,
} from "lucide-react";
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
const Link = ({
  to,
  children,
  className,
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <a href={to} className={className}>
    {children}
  </a>
);

// Simulating the CarouselItemAnim component
const CarouselItemAnim = ({
  children,
}: {
  children: React.ReactNode;
  index: number;
}) => <div>{children}</div>;

const NewsCard = React.memo(
  ({ item, index }: { item: NewsItem; index: number }) => (
    <Card className="transform overflow-hidden rounded-none bg-clarc-gold/10 pb-3 shadow-sm outline-none transition duration-300 hover:bg-clarc-gold/20">
      <CarouselItemAnim index={index}>
        <Link to={`/news/${item.slug}`} className="group relative block">
          <div className="relative overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="h-52 w-full rounded-sm object-contain transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <img
              src={item.image}
              alt=""
              className="absolute left-0 top-0 -z-10 h-52 w-full rounded-sm object-cover opacity-10"
              loading="lazy"
            />
            <div className="duration-400 absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 transition-opacity group-hover:opacity-100">
              <span className="text-base font-semibold text-white">
                Read More
              </span>
            </div>
          </div>
        </Link>
        <CardContent className="space-y-2 p-4 pt-8">
          <h4 className="mb-6 text-sm font-medium uppercase tracking-wider text-clarc-gold">
            {"— "}
            {item.category}
          </h4>
          <h2 className="line-clamp-2 font-astralaga text-lg font-bold text-clarc-blue lg:text-lg">
            {item.title}
          </h2>
          <div className="flex items-center justify-start gap-1">
            <Calendar className="h-4 w-4 text-gray-800/60" />
            <p className="text-sm font-medium text-gray-800/60">{item.date}</p>
          </div>
          <div className="pt-5">
            <Link
              to={`/news/${item.slug}`}
              className="flex w-full items-center justify-start gap-1 text-primary/80 hover:text-primary"
            >
              <CircleChevronRight className="h-4 w-4" />
              <p className="text-sm">Read More</p>
            </Link>
          </div>
        </CardContent>
      </CarouselItemAnim>
    </Card>
  ),
);

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
        author: "Jaylord Goleña",
        authorImage: "/placeholder.svg?height=50&width=50",
        content: `
      <p style="font-size: 1rem">Chess Players Shine in Roxas District Meet Tournament</p>
		  <p>On October 11, 2024, at Roxas Central School, a thrilling chess competition happened that showcased some real potential among talented individuals. Aira Charis Fradejas won the girls' division and advanced to the unit meet, while Lyka Jane Sapupo achieved a respectable fourth-place performance. Joel Torino III finished ninth in the boys' category, while Zentgeilner Ali Mortel took first place and qualified for the unit meet. For the students, it was an excellent day full of strategy and friendly competition.</p>
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
      alert(
        "Sharing is not supported on this browser. You can copy the URL to share.",
      );
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Skeleton className="mb-4 h-8 w-64" />
        <Skeleton className="mb-4 h-12 w-full" />
        <Skeleton className="mb-8 h-6 w-48" />
        <Skeleton className="mb-8 h-96 w-full" />
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
      <div className="flex h-screen flex-col items-center justify-center">
        <h2 className="mb-4 text-2xl font-bold">News item not found.</h2>
        <Link to="/" className="text-primary hover:underline">
          Return to News List
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background font-geist">
      <main className="container mx-auto px-4 py-8 lg:px-6 lg:pb-16">
        <Link
          to="/"
          className="hover:primary mb-8 inline-flex items-center text-sm text-primary/60"
        >
          <ArrowLeft className="mr-1 h-4 w-4 lg:mr-2" />
          Back to News List
        </Link>
        <article className="mx-auto max-w-4xl">
          <header className="mb-8">
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-clarc-blue/70">
              {newsItem.category}
            </p>
            <h1 className="mb-3 text-3xl font-bold text-clarc-blue lg:text-4xl">
              {newsItem.title}
            </h1>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground outline-none lg:space-x-4">
              <div className="flex items-center">
                <Avatar className="mr-1 h-6 w-6 lg:mr-2 lg:h-8 lg:w-8">
                  <AvatarImage
                    src={newsItem.authorImage}
                    alt={newsItem.author}
                  />
                  <AvatarFallback className="bg-clarc-gold/30 text-clarc-blue">
                    {newsItem.author?.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <span>{newsItem.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="mr-1 h-4 w-4 lg:mr-2" />
                <time dateTime={newsItem.date}>{newsItem.date}</time>
              </div>
            </div>
          </header>
          <div className="flex w-full items-center justify-center">
            <img
              src={newsItem.image}
              alt={newsItem.title}
              className="mb-8 w-full rounded-lg object-cover"
            />
          </div>
          <div
            className="prose prose-lg mb-8 max-w-none text-foreground"
            dangerouslySetInnerHTML={{ __html: newsItem.content || "" }}
          />
          <footer className="mt-8 border-t border-border pt-8">
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex flex-wrap items-center justify-center space-x-2 sm:mb-0">
                <Tag className="h-5 w-5 text-clarc-blue" />
                <Button variant="outline" size="sm" className="text-clarc-blue">
                  {newsItem.category}
                </Button>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleShare}
                className="bg-clarc-blue text-clarc-gold transition-colors duration-200 hover:bg-clarc-gold hover:text-clarc-blue"
              >
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </footer>
        </article>
        <section className="mt-16">
          <h2 className="mb-4 text-lg font-bold text-clarc-blue lg:mb-6 lg:text-2xl">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedArticles.map((article, index) => (
              <NewsCard key={article.id} item={article} index={index} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
