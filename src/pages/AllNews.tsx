import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { NewsItem } from "@/utils/data_news_and_events";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

export default function AllNews({ news }: { news: NewsItem[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const categories = useMemo(() => {
    const cats = new Set(news.map((item) => item.category));
    return ["all", ...Array.from(cats)];
  }, [news]);

  const filteredNews = useMemo(() => {
    if (selectedCategory === "all") return news;
    return news.filter((item) => item.category === selectedCategory);
  }, [news, selectedCategory]);

  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  const currentNews = filteredNews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Select onValueChange={(value) => setSelectedCategory(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-4">
        {currentNews.map((item) => (
          <Link to={`/news/${item.slug}`}>
            <Card key={item.id} className="overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <CardHeader className="aspect-square w-32 p-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-32 w-full object-cover"
                  />
                </CardHeader>
                <CardContent className="flex-1 p-4">
                  <div className="mb-2 text-sm text-muted-foreground">
                    {item.category}
                  </div>
                  <CardTitle className="mb-2">{item.title}</CardTitle>
                  <div className="mb-4 text-sm text-muted-foreground">
                    {item.date}
                  </div>
                  {item.author && (
                    <div className="flex items-center">
                      {item.authorImage && (
                        <img
                          src={item.authorImage}
                          alt={item.author}
                          className="mr-2 h-8 w-8 rounded-full"
                        />
                      )}
                      <span className="text-sm">{item.author}</span>
                    </div>
                  )}
                </CardContent>
              </div>
            </Card>
          </Link>
        ))}
      </div>
      <Pagination className="mt-8">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              //   disabled={currentPage === 1}
            />
          </PaginationItem>
          {[...Array(totalPages)].map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                onClick={() => setCurrentPage(index + 1)}
                isActive={currentPage === index + 1}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              //   disabled={currentPage === totalPages}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
