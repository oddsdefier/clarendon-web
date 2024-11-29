export interface NewsItem {
  id: string;
  category: string;
  title: string;
  date: string;
  image: string;
  slug: string;
  author: string;
  authorImage: string;
  content: string;
  sdg: number[];
}

export const newsItems: NewsItem[] = [
  {
    id: "1",
    category: "Campus Life",
    title: "New Building",
    date: "15 Sept 2024",
    author: "Jaylord Goleña",
    authorImage: "/placeholder.svg?height=50&width=50",
    image:
      "https://res.cloudinary.com/dfntpqzza/image/upload/v1729228784/410282251_853897020070007_4156709952716535615_n.jpg_olvlys.jpg",
    slug: "new-student-center-opens",
    content: `
    <p style="font-size: 1rem">Chess Players Shine in Roxas District Meet Tournament</p>
    <p>On October 11, 2024, at Roxas Central School, a thrilling chess competition happened that showcased some real potential among talented individuals. Aira Charis Fradejas won the girls' division and advanced to the unit meet, while Lyka Jane Sapupo achieved a respectable fourth-place performance. Joel Torino III finished ninth in the boys' category, while Zentgeilner Ali Mortel took first place and qualified for the unit meet. For the students, it was an excellent day full of strategy and friendly competition.</p>
  `,
    sdg: [1, 2],
  },
  {
    id: "2",
    category: "Academic Achievement",
    title: "Students Bag Medals on National Competition",
    date: "10 Aug 2024",
    author: "Jaylord Goleña",
    authorImage: "/placeholder.svg?height=50&width=50",
    image:
      "https://res.cloudinary.com/dfntpqzza/image/upload/v1729228709/451300567_1003303658462675_6725677853035530200_n.jpg_iozjrd.jpg",
    slug: "students-win-national-competition",
    content: `
    <p style="font-size: 1rem">Chess Players Shine in Roxas District Meet Tournament</p>
    <p>On October 11, 2024, at Roxas Central School, a thrilling chess competition happened that showcased some real potential among talented individuals. Aira Charis Fradejas won the girls' division and advanced to the unit meet, while Lyka Jane Sapupo achieved a respectable fourth-place performance. Joel Torino III finished ninth in the boys' category, while Zentgeilner Ali Mortel took first place and qualified for the unit meet. For the students, it was an excellent day full of strategy and friendly competition.</p>
  `,
    sdg: [6],
  },
  {
    id: "3",
    category: "Culture",
    title: "Clarendon Cultural Center",
    date: "30 Mar 2024",
    author: "Jaylord Goleña",
    authorImage: "/placeholder.svg?height=50&width=50",
    image:
      "https://res.cloudinary.com/dfntpqzza/image/upload/v1729131682/7831a26b-917d-494a-8ee5-20d06dce76f9_hvfgte.jpg",
    slug: "clarendon-cultural-center",
    content: `
    <p style="font-size: 1rem">Chess Players Shine in Roxas District Meet Tournament</p>
    <p>On October 11, 2024, at Roxas Central School, a thrilling chess competition happened that showcased some real potential among talented individuals. Aira Charis Fradejas won the girls' division and advanced to the unit meet, while Lyka Jane Sapupo achieved a respectable fourth-place performance. Joel Torino III finished ninth in the boys' category, while Zentgeilner Ali Mortel took first place and qualified for the unit meet. For the students, it was an excellent day full of strategy and friendly competition.</p>
  `,
    sdg: [17, 9, 13],
  },
  {
    id: "4",
    category: "International News",
    title: "CLARC goes global",
    date: "05 Oct 2024",
    author: "Jaylord Goleña",
    authorImage: "/placeholder.svg?height=50&width=50",
    image:
      "https://res.cloudinary.com/dfntpqzza/image/upload/v1729228487/462489344_1065119515614422_7635874021848328696_n.jpg_u2vocy.jpg",
    slug: "clarc-goes-global",
    content: `
    <p style="font-size: 1rem">Chess Players Shine in Roxas District Meet Tournament</p>
    <p>On October 11, 2024, at Roxas Central School, a thrilling chess competition happened that showcased some real potential among talented individuals. Aira Charis Fradejas won the girls' division and advanced to the unit meet, while Lyka Jane Sapupo achieved a respectable fourth-place performance. Joel Torino III finished ninth in the boys' category, while Zentgeilner Ali Mortel took first place and qualified for the unit meet. For the students, it was an excellent day full of strategy and friendly competition.</p>
  `,
    sdg: [4, 6, 1],
  },
];
