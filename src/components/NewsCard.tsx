import { NewsItem } from "@/utils/data_news_and_events";
// import { clarendonSDGs, sdgColorMap } from "@/utils/data_sdgs";
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "./ui/card";

// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";

const NewsCard = React.memo(({ item }: { item: NewsItem }) => (
  <Link to={`/news/${item.slug}`}>
    <Card className="h-96 transform overflow-hidden rounded-none bg-white shadow-none outline outline-1 outline-gray-200 transition duration-300 hover:bg-clarc-gold/20">
      <div>
        <Link to={`/news/${item.slug}`} className="group relative block">
          <div className="relative overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            {/* <img
                src={item.image}
                alt=""
                className="absolute left-0 top-0 -z-10 h-52 w-full rounded-sm object-cover opacity-100"
                loading="lazy"
              /> */}
            <div className="duration-400 absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 transition-opacity group-hover:opacity-100">
              <span className="text-base font-semibold text-white">
                Read More
              </span>
            </div>
          </div>
        </Link>
        <CardContent className="space-y-2 p-4 py-6">
          <p className="text-sm font-medium uppercase text-gray-800/70">
            {item.date}
          </p>
          <h2 className="text-xl font-bold leading-[1.1] text-gray-800">
            {item.title}
          </h2>

          {/* <div>
            <p className="pt-3 text-xs font-medium text-gray-800/60">
              Related Goals
            </p>

            <div className="space-x-1">
              {item.sdg.map((sdg) => (
                <TooltipProvider delayDuration={10}>
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
          </div> */}
        </CardContent>
      </div>
    </Card>
  </Link>
));
export default NewsCard;
