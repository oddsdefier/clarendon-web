export interface NewsItem {
  id: string;
  category: string;
  title: string;
  date: string;
  timestamp: number;
  image: string;
  slug: string;
  author: string;
  authorImage: string;
  content: string;
}

export const newsItems: NewsItem[] = [
  {
    id: "1",
    category: "Campus Life",
    title: "New Building",
    date: "15 Sept 2024",
    timestamp: 1725161461000, // Sept 15, 2024
    author: "Jaylord Goleña",
    authorImage: "/placeholder.svg?height=50&width=50",
    image:
      "https://res.cloudinary.com/dfntpqzza/image/upload/v1729228784/410282251_853897020070007_4156709952716535615_n.jpg_olvlys.jpg",
    slug: "new-student-center-opens",
    content: `
    <p style="font-size: 1rem">Chess Players Shine in Roxas District Meet Tournament</p>
    <p>On October 11, 2024, at Roxas Central School, a thrilling chess competition happened that showcased some real potential among talented individuals. Aira Charis Fradejas won the girls' division and advanced to the unit meet, while Lyka Jane Sapupo achieved a respectable fourth-place performance. Joel Torino III finished ninth in the boys' category, while Zentgeilner Ali Mortel took first place and qualified for the unit meet. For the students, it was an excellent day full of strategy and friendly competition.</p>
  `,
  },
  {
    id: "2",
    category: "Academic Achievement",
    title: "Students Bag Medals on National Competition",
    date: "10 Aug 2024",
    timestamp: 1710729061000,
    author: "Jaylord Goleña",
    authorImage: "/placeholder.svg?height=50&width=50",
    image:
      "https://res.cloudinary.com/dfntpqzza/image/upload/v1729228709/451300567_1003303658462675_6725677853035530200_n.jpg_iozjrd.jpg",
    slug: "students-win-national-competition",
    content: `
    <p style="font-size: 1rem">Chess Players Shine in Roxas District Meet Tournament</p>
    <p>On October 11, 2024, at Roxas Central School, a thrilling chess competition happened that showcased some real potential among talented individuals. Aira Charis Fradejas won the girls' division and advanced to the unit meet, while Lyka Jane Sapupo achieved a respectable fourth-place performance. Joel Torino III finished ninth in the boys' category, while Zentgeilner Ali Mortel took first place and qualified for the unit meet. For the students, it was an excellent day full of strategy and friendly competition.</p>
  `,
  },
  {
    id: "3",
    category: "Culture",
    title: "Clarendon Cultural Center",
    date: "30 Mar 2024",
    timestamp: 1726425600000,
    author: "Jaylord Goleña",
    authorImage: "/placeholder.svg?height=50&width=50",
    image:
      "https://res.cloudinary.com/dfntpqzza/image/upload/v1729131682/7831a26b-917d-494a-8ee5-20d06dce76f9_hvfgte.jpg",
    slug: "clarendon-cultural-center",
    content: `
    <p style="font-size: 1rem">Chess Players Shine in Roxas District Meet Tournament</p>
    <p>On October 11, 2024, at Roxas Central School, a thrilling chess competition happened that showcased some real potential among talented individuals. Aira Charis Fradejas won the girls' division and advanced to the unit meet, while Lyka Jane Sapupo achieved a respectable fourth-place performance. Joel Torino III finished ninth in the boys' category, while Zentgeilner Ali Mortel took first place and qualified for the unit meet. For the students, it was an excellent day full of strategy and friendly competition.</p>
  `,
  },
  {
    id: "4",
    category: "International News",
    title: "CLARC goes global",
    date: "05 Oct 2024",
    timestamp: 1733009461000,
    author: "Jaylord Goleña",
    authorImage: "/placeholder.svg?height=50&width=50",
    image:
      "https://res.cloudinary.com/dfntpqzza/image/upload/v1729228487/462489344_1065119515614422_7635874021848328696_n.jpg_u2vocy.jpg",
    slug: "clarc-goes-global",
    content: `
    <p style="font-size: 1rem">Chess Players Shine in Roxas District Meet Tournament</p>
    <p>On October 11, 2024, at Roxas Central School, a thrilling chess competition happened that showcased some real potential among talented individuals. Aira Charis Fradejas won the girls' division and advanced to the unit meet, while Lyka Jane Sapupo achieved a respectable fourth-place performance. Joel Torino III finished ninth in the boys' category, while Zentgeilner Ali Mortel took first place and qualified for the unit meet. For the students, it was an excellent day full of strategy and friendly competition.</p>
  `,
  },
  {
    id: "5",
    category: "Campus News",
    title:
      "COMELEC Boosts Awareness with Voter Education and ACM Demo in Clarendon College",
    date: "02 Dec 2024",
    timestamp: 1733282555534,
    author: "Jeffry James Paner",
    authorImage: "/placeholder.sg?height=50&width=50",
    image:
      "https://res.cloudinary.com/dfntpqzza/image/upload/v1733122179/IMG_5917_d177mq.jpg",
    slug: "comelec-voter-education-acm-demo-clarendon-college",
    content: `
    <p style="font-size: 1rem">To enhance the awareness of young voters about the new Automatic Counting Machine, the Commission on Elections (COMELEC) conducted a Voter Education and ACM Demonstration in Clarendon College, December 2.</p>
    <p>TThe Commission on Elections (COMELEC), in collaboration with College Department President Mr. Nestor Salvacion, held a Voter Education and Automated Counting Machine (ACM) Demonstration at Clarendon to educate young voters on the new vote-counting technology. The initiative aimed to raise awareness among students from the Information Systems (IS) and Education departments about the significance of modernizing the electoral process. </p>
    <p>COMELEC introduced the ACM as the next step in improving election transparency and efficiency. Unlike the previous manual counting machines, the new ACM boasts features like advanced sensors, touchscreen interfaces, and improved scanning and printing capabilities. These enhancements aim to reduce errors and expedite results, addressing long-standing concerns about vote accuracy and delays.</p>
    <p>Salvacion highlighted the importance of educating first-time and young voters about the electoral process, emphasizing that understanding the ACM strengthens voter confidence. "An informed electorate is the foundation of a fair democracy," he noted during the event.
    The Voter Education program underscored the role of technology in shaping the future of Philippine elections, advocating for active participation and vigilance among the youth to ensure the integrity of the democratic process.</p>
  `,
  },
];
