import NewsCard from "@/components/NewsCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import { NewsItem, newsItems } from "@/utils/data_news_and_events";
import { sdgColorMap, clarendonSDGs } from "@/utils/data_sdgs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { Calendar, Share2, Tag } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

// Main NewsDetail component
export default function NewsDetail() {
  const { slug } = useParams();
  const [newsItem, setNewsItem] = useState<NewsItem | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState<number>(0);
  const [slidesPerView, setSlidesPerView] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const updateSlidesPerView = useCallback(() => {
    if (window.innerWidth >= 768) {
      setSlidesPerView(2);
    } else {
      setSlidesPerView(1);
    }
  }, []);

  useEffect(() => {
    updateSlidesPerView();
    const handleResize = () => {
      requestAnimationFrame(updateSlidesPerView);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [updateSlidesPerView]);

  useEffect(() => {
    if (!api) return;
    const totalSlides: number = relatedArticles.length;
    const pages = Math.ceil(totalSlides / slidesPerView);
    setTotalPages(pages);

    const updateCurrent = () => {
      setCurrent(api.selectedScrollSnap());
    };

    updateCurrent();
    api.on("select", updateCurrent);

    return () => {
      api.off("select", updateCurrent);
    };
  }, [api, slidesPerView, relatedArticles]);

  useEffect(() => {
    const item = newsItems.find((item: NewsItem) => item.slug === slug);
    if (item) {
      setNewsItem({
        ...item,
      });
    }
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
      alert(
        "Sharing is not supported on this browser. You can copy the URL to share.",
      );
    }
  };

  if (loading) {
    return <LoadingSkeleton />;
  }

  if (!newsItem) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background font-geist">
      <main className="container mx-auto px-4 py-8 lg:px-6 lg:pb-16">
        <article className="mx-auto max-w-4xl">
          <NewsHeader newsItem={newsItem} />
          <NewsImage src={newsItem.image} alt={newsItem.title} />
          <NewsContent content={newsItem.content || ""} />
          <NewsFooter category={newsItem.category} onShare={handleShare} />
        </article>
        <RelatedArticles
          articles={relatedArticles}
          api={api}
          setApi={setApi}
          slidesPerView={slidesPerView}
          current={current}
          totalPages={totalPages}
        />
        <BackToNewsLink />
      </main>
    </div>
  );
}

// Helper components
const LoadingSkeleton = () => (
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

const NotFound = () => (
  <div className="flex h-screen flex-col items-center justify-center">
    <h2 className="mb-4 text-2xl font-bold">News item not found.</h2>
    <Link to="/" className="text-primary hover:underline">
      Return to News List
    </Link>
  </div>
);

const BackToNewsLink = () => (
  <div className="flex w-full items-center justify-center py-4">
    <Link
      to="/all-news/"
      className="group rounded-full bg-clarc-blue px-5 py-4 text-clarc-gold transition-colors duration-300 hover:bg-clarc-gold hover:text-clarc-blue lg:px-6"
    >
      <span className="text-sm text-clarc-gold group-hover:text-clarc-blue lg:text-base">
        {"Read More"}
      </span>
    </Link>
  </div>
);

const NewsHeader = ({ newsItem }: { newsItem: NewsItem }) => (
  <header className="mb-8">
    <p className="mb-3 text-sm font-medium uppercase tracking-wider text-clarc-blue/70">
      {"— "} {newsItem.category}
    </p>
    <h1 className="mb-3 text-3xl font-bold leading-[1] text-clarc-blue lg:text-4xl">
      {newsItem.title}
    </h1>
    <div className="flex items-center space-x-2 text-sm text-muted-foreground outline-none lg:space-x-4">
      <div className="flex items-center">
        <Avatar className="mr-1 h-6 w-6 lg:mr-2 lg:h-8 lg:w-8">
          <AvatarImage src={newsItem.authorImage} alt={newsItem.author} />
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
    <div className="mt-5 space-x-1">
      <h1 className="mb-1 text-sm text-gray-500">Related Goals</h1>
      {newsItem.sdg.map((sdg) => (
        <TooltipProvider delayDuration={10} key={sdg}>
          <Tooltip>
            <TooltipTrigger asChild>
              <a href="/">
                <p
                  className={`inline-flex rounded-sm px-2 text-sm font-bold text-white`}
                  style={{ backgroundColor: `${sdgColorMap[sdg - 1]}` }}
                >
                  {sdg}
                </p>
              </a>
            </TooltipTrigger>
            <TooltipContent
              className="rounded-md p-2 text-sm text-white"
              style={{ backgroundColor: `${sdgColorMap[sdg - 1]}` }}
            >
              {clarendonSDGs[sdg - 1].title}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  </header>
);

const NewsImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="flex w-full items-center justify-center">
    <img src={src} alt={alt} className="mb-8 w-full rounded-lg object-cover" />
  </div>
);

const NewsContent = ({ content }: { content: string }) => (
  <div
    className="prose prose-lg mb-8 max-w-none text-foreground"
    dangerouslySetInnerHTML={{ __html: content }}
  />
);

const NewsFooter = ({
  category,
  onShare,
}: {
  category: string;
  onShare: () => void;
}) => (
  <footer className="mt-8 border-t border-border pt-8">
    <div className="flex flex-wrap items-center justify-between">
      <div className="flex flex-wrap items-center justify-center space-x-2 sm:mb-0">
        <Tag className="h-5 w-5 text-clarc-blue" />
        <Button variant="outline" size="sm" className="text-clarc-blue">
          {category}
        </Button>
      </div>
      <Button
        variant="outline"
        size="sm"
        onClick={onShare}
        className="bg-clarc-blue text-clarc-gold transition-colors duration-200 hover:bg-clarc-gold hover:text-clarc-blue"
      >
        <Share2 className="mr-2 h-4 w-4" />
        Share
      </Button>
    </div>
  </footer>
);

const RelatedArticles = ({
  articles,
  api,
  setApi,
  slidesPerView,
  current,
  totalPages,
}: {
  articles: NewsItem[];
  api: CarouselApi | undefined;
  setApi: (api: CarouselApi) => void;
  slidesPerView: number;
  current: number;
  totalPages: number;
}) => (
  <section className="mx-auto mt-16 max-w-4xl">
    <h2 className="mb-4 text-lg font-bold text-clarc-blue lg:mb-6 lg:text-2xl">
      Related Articles
    </h2>
    <div className="">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          slidesToScroll: slidesPerView,
        }}
        className="w-full"
      >
        <CarouselContent>
          {articles.map((article, index) => (
            <CarouselItem key={index} className="sm:basis-1/2">
              <div className="p-1">
                <NewsCard key={article.id} item={article} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden h-10 w-10 -translate-y-5 md:-left-14 md:flex" />
        <CarouselNext className="hidden h-10 w-10 -translate-y-5 md:-right-14 md:flex" />
      </Carousel>
      <div className="my-8 flex justify-center">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={`z-20 mx-1 aspect-square h-1 w-1 rounded-full transition-colors duration-200 md:h-2 md:w-2 ${
              index === current ? "bg-clarc-blue" : "bg-clarc-blue/30"
            }`}
            onClick={() => api?.scrollTo(index * slidesPerView)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  </section>
);
