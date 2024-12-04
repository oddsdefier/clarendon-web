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

    handleResize();
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

      <div className="grid grid-cols-1 gap-[0.05rem] md:grid-cols-2 lg:grid-cols-3">
        {currentNews.map((item) => (
          <Link to={`/news/${item.slug}`} key={item.id} className="w-full">
            <div className="group overflow-hidden border border-clarc-blue/20 transition-colors duration-300 hover:bg-clarc-blue">
              <div className="flex aspect-square h-64 w-full flex-col md:flex-row">
                <div className="relative flex-1 p-5 py-8">
                  <div className="mb-4 text-sm text-muted-foreground group-hover:text-clarc-gold">
                    {item.date}
                  </div>
                  <div className="mb-2 line-clamp-3 text-pretty text-2xl font-bold leading-[1.1] text-clarc-blue group-hover:text-clarc-gold">
                    {item.title}
                  </div>
                  <div className="mt-5 lg:mt-8">
                    <p className="py-2 text-sm text-sky-500 group-hover:text-clarc-gold">
                      ...
                    </p>
                    <p className="text-sm text-clarc-gold group-hover:text-clarc-gold">
                      Read More
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
