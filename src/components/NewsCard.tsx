import { NewsItem } from "@/utils/data_news_and_events";
import { Calendar } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "./ui/card";

const NewsCard = React.memo(({ item }: { item: NewsItem }) => (
  <Link to={`/news/${item.slug}`}>
    <Card className="transform overflow-hidden rounded-none bg-clarc-gold/10 shadow-sm outline-none transition duration-300 hover:bg-clarc-gold/20">
      <div>
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
          <h4 className="mb-3 text-sm font-medium uppercase tracking-wider text-clarc-gold">
            {"— "}
            {item.category}
          </h4>
          <h2 className="mb-3 line-clamp-2 text-xl font-semibold leading-[1.1] text-clarc-blue">
            {item.title}
          </h2>
          <div className="flex items-center justify-start gap-1">
            <Calendar className="h-4 w-4 text-gray-800/60" />
            <p className="text-sm font-medium text-gray-800/60">{item.date}</p>
          </div>
          <div className="pt-5"></div>
        </CardContent>
      </div>
    </Card>
  </Link>
));
export default NewsCard;
