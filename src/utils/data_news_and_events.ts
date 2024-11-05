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

export const newsItems: NewsItem[] = [
  {
    id: "1",
    category: "Sports News",
    title: "Chess Players Shine in Roxas District Meet Tournament",
    date: "October 11, 2024",
    image:
      "https://scontent.fmnl8-6.fna.fbcdn.net/v/t39.30808-6/462785319_516805454641681_1576797062745541276_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH_JKqcoqpJZaD91ENrgldPwSd9Ucf-U6TBJ31Rx_5TpEoG2ZvlZ3tbiYfs2AypgcGmV3WJ9UYqIZRipt8EkOQ3&_nc_ohc=7wDrxc9Ao2cQ7kNvgHRKM80&_nc_zt=23&_nc_ht=scontent.fmnl8-6.fna&_nc_gid=AZWzrgORwP_lQoNauie_eWo&oh=00_AYAsKMdrhOym61D3CrLOsIkFHk-Ce4rBp5GkJoEn7PPL_w&oe=6728C9FE",
    slug: "chess-players-shine-in-roxas-district-meet-tournament",
  },

  {
    id: "2",
    category: "Campus Life",
    title: "New Building",
    date: "September 15, 2024",
    image:
      "https://res.cloudinary.com/dfntpqzza/image/upload/v1729228784/410282251_853897020070007_4156709952716535615_n.jpg_olvlys.jpg",
    slug: "new-student-center-opens",
  },
  {
    id: "3",
    category: "Academic Achievement",
    title: "Students Win National Competition",
    date: "August 22, 2024",
    image:
      "https://res.cloudinary.com/dfntpqzza/image/upload/v1729228709/451300567_1003303658462675_6725677853035530200_n.jpg_iozjrd.jpg",
    slug: "students-win-national-competition",
  },
  {
    id: "4",
    category: "Culture",
    title: "Clarendon Cultural Center",
    date: "July 30, 2024",
    image:
      "https://res.cloudinary.com/dfntpqzza/image/upload/v1729131682/7831a26b-917d-494a-8ee5-20d06dce76f9_hvfgte.jpg",
    slug: "clarendon-cultural-center",
  },
  {
    id: "5",
    category: "International News",
    title: "CLARC goes global",
    date: "October 09, 2024",
    image:
      "https://res.cloudinary.com/dfntpqzza/image/upload/v1729228487/462489344_1065119515614422_7635874021848328696_n.jpg_u2vocy.jpg",
    slug: "clarc-goes-global",
  },
];
