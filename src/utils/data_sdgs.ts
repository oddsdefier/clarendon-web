import { newsItems, NewsItem } from "./data_news_and_events";

type sdgColorMapType = string[];
export type SDG = {
  code: number;
  title: string;
  description: string;
  link?: string;
  img: string;
  color: string;
  news: NewsItem[];
};
export const sdgColorMap: sdgColorMapType = [
  "#15335f",
  "#c9b163",
  "#4C9F38",
  "#E5243B",
  "#DDA83A",
  "#4C9F38",
  "#C5192D",
  "#FF3A21",
  "#26BDE2",
  "#FCC30B",
  "#A21942",
  "#FD6925",
  "#DD1367",
  "#FD9D24",
  "#BF8B2E",
  "#3F7E44",
  "#0A97D9",
  "#56C02B",
  "#00689D",
  "#19486A",
];

export const clarendonSDGs: SDG[] = [
  {
    code: 1,
    title: "No Poverty",
    description: "End poverty in all its forms everywhere.",
    link: "https://www.un.org/sustainabledevelopment/poverty/",
    img: "https://res.cloudinary.com/dfntpqzza/image/upload/v1732668728/E-WEB-Goal-01_ax4rid.png",
    color: sdgColorMap[0],
    news: newsItems.filter((news) => news.sdg.includes(1)),
  },
  {
    code: 2,
    title: "Zero Hunger",
    description:
      "End hunger, achieve food security and improved nutrition and promote sustainable agriculture.",
    link: "https://www.un.org/sustainabledevelopment/hunger/",
    img: "https://res.cloudinary.com/dfntpqzza/image/upload/v1732668729/E-WEB-Goal-02_j6s1j9.png",
    color: sdgColorMap[1],
    news: newsItems.filter((news) => news.sdg.includes(2)),
  },
  {
    code: 3,
    title: "Good Health and Well-being",
    description:
      "Ensure healthy lives and promote well-being for all at all ages.",
    link: "https://www.un.org/sustainabledevelopment/health/",
    img: "https://res.cloudinary.com/dfntpqzza/image/upload/v1732668729/E-WEB-Goal-03_d15hzb.png",
    color: sdgColorMap[2],
    news: newsItems.filter((news) => news.sdg.includes(3)),
  },
  {
    code: 4,
    title: "Quality Education",
    description:
      "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.",
    link: "https://www.un.org/sustainabledevelopment/education/",
    img: "https://res.cloudinary.com/dfntpqzza/image/upload/v1732668728/E-WEB-Goal-04_y4noqx.png",
    color: sdgColorMap[3],
    news: newsItems.filter((news) => news.sdg.includes(4)),
  },
  {
    code: 5,
    title: "Gender Equality",
    description: "Achieve gender equality and empower all women and girls",
    link: "https://www.un.org/sustainabledevelopment/gender-equality/",
    img: "https://res.cloudinary.com/dfntpqzza/image/upload/v1732668729/E-WEB-Goal-05_i1yhav.png",
    color: sdgColorMap[4],
    news: newsItems.filter((news) => news.sdg.includes(5)),
  },

  {
    code: 6,
    title: "Clean Water and Sanitation",
    description:
      "Ensure availability and sustainable management of water and sanitation for all.",
    link: "https://www.un.org/sustainabledevelopment/water-and-sanitation/",
    img: "https://res.cloudinary.com/dfntpqzza/image/upload/v1732668729/E-WEB-Goal-06_luplyo.png",
    color: sdgColorMap[5],
    news: newsItems.filter((news) => news.sdg.includes(6)),
  },
  {
    code: 7,
    title: "Affordable and Clean Energy",
    description:
      "Ensure access to affordable, reliable, sustainable and modern energy for all.",
    link: "https://www.un.org/sustainabledevelopment/energy/",
    img: "https://res.cloudinary.com/dfntpqzza/image/upload/v1732668729/E-WEB-Goal-07_p4nile.png",
    color: sdgColorMap[6],
    news: newsItems.filter((news) => news.sdg.includes(7)),
  },
  {
    code: 8,
    title: "Decent Work and Economic Growth",
    description:
      "Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all.",
    link: "https://www.un.org/sustainabledevelopment/economic-growth/",
    img: "https://res.cloudinary.com/dfntpqzza/image/upload/v1732668728/E-WEB-Goal-08_q9ssgz.png",
    color: sdgColorMap[7],
    news: newsItems.filter((news) => news.sdg.includes(8)),
  },
  {
    code: 9,
    title: "Industry, Innovation and Infrastructure",
    description:
      "Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation.",
    link: "https://www.un.org/sustainabledevelopment/infrastructure-industrialization/",
    img: "https://res.cloudinary.com/dfntpqzza/image/upload/v1732668729/E-WEB-Goal-09_ovzrvr.png",
    color: sdgColorMap[8],
    news: newsItems.filter((news) => news.sdg.includes(9)),
  },
  {
    code: 10,
    title: "Reduced Inequality",
    description: "Reduce inequality within and among countries.",
    link: "https://www.un.org/sustainabledevelopment/inequality/",
    img: "https://res.cloudinary.com/dfntpqzza/image/upload/v1732668729/E-WEB-Goal-10_wfgw8a.png",
    color: sdgColorMap[9],
    news: newsItems.filter((news) => news.sdg.includes(10)),
  },
  {
    code: 11,
    title: "Sustainable Cities and Communities",
    description:
      "Make cities and human settlements inclusive, safe, resilient and sustainable.",
    link: "https://www.un.org/sustainabledevelopment/cities/",
    img: "https://res.cloudinary.com/dfntpqzza/image/upload/v1732668729/E-WEB-Goal-11_vdoixb.png",
    color: sdgColorMap[10],
    news: newsItems.filter((news) => news.sdg.includes(11)),
  },
  {
    code: 12,
    title: "Responsible Consumption and Production",
    description: "Ensure sustainable consumption and production patterns.",
    link: "https://www.un.org/sustainabledevelopment/sustainable-consumption-production/",
    img: "https://res.cloudinary.com/dfntpqzza/image/upload/v1732668729/E-WEB-Goal-12_fwqqdx.png",
    color: sdgColorMap[11],
    news: newsItems.filter((news) => news.sdg.includes(12)),
  },
  {
    code: 13,
    title: "Climate Action",
    description: "Take urgent action to combat climate change and its impacts.",
    link: "https://www.un.org/sustainabledevelopment/climate-change-2/",
    img: "https://res.cloudinary.com/dfntpqzza/image/upload/v1732668730/E-WEB-Goal-13_qcqigt.png",
    color: sdgColorMap[12],
    news: newsItems.filter((news) => news.sdg.includes(13)),
  },
  {
    code: 14,
    title: "Life Below Water",
    description:
      "Conserve and sustainably use the oceans, seas and marine resources for sustainable development.",
    link: "https://www.un.org/sustainabledevelopment/oceans/",
    img: "https://res.cloudinary.com/dfntpqzza/image/upload/v1732668730/E-WEB-Goal-14_k9j09m.png",
    color: sdgColorMap[13],
    news: newsItems.filter((news) => news.sdg.includes(14)),
  },
  {
    code: 15,
    title: "Life on Land",
    description:
      "Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss.",
    img: "https://res.cloudinary.com/dfntpqzza/image/upload/v1732668730/E-WEB-Goal-15_cdoibs.png",
    color: sdgColorMap[14],
    news: newsItems.filter((news) => news.sdg.includes(15)),
  },
  {
    code: 16,
    title: "Peace, Justice and Strong Institutions",
    description:
      "Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels.",
    link: "https://www.un.org/sustainabledevelopment/peace-justice/",
    img: "https://res.cloudinary.com/dfntpqzza/image/upload/v1732668730/E-WEB-Goal-16_ubgaka.png",
    color: sdgColorMap[15],
    news: newsItems.filter((news) => news.sdg.includes(1)),
  },
  {
    code: 17,
    title: "Partnerships for the Goals",
    description:
      "Strengthen the means of implementation and revitalize the Global Partnership for Sustainable Development.",
    link: "https://www.un.org/sustainabledevelopment/globalpartnerships/",
    img: "https://res.cloudinary.com/dfntpqzza/image/upload/v1732668730/E-WEB-Goal-17_ifnfbi.png",
    color: sdgColorMap[16],
    news: newsItems.filter((news) => news.sdg.includes(17)),
  },
];
