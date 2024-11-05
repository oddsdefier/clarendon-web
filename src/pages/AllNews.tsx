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
import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

interface NewsItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  image: string;
  author?: string;
  authorImage?: string;
}

export default function Component({ news }: { news: NewsItem[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const categories = useMemo(() => {
    const cats = new Set(news.map((item) => item.category));
    return ["all", ...Array.from(cats)];
  }, [news]);

  const filteredNews = useMemo(() => {
    if (selectedCategory === "all") return news;
    return news.filter((item) => item.category === selectedCategory);
  }, [news, selectedCategory]);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth >= 1024 ? 10 : 3);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, itemsPerPage]);

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
          <Link to={`/news/${item.slug}`} key={item.id}>
            <Card className="overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <CardHeader className="aspect-square w-full p-0 lg:w-32">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover lg:h-32"
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
