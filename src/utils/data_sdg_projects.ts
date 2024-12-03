export interface SdgProject {
  id: number;
  title: string;
  date: string;
  image: string;
  sdg: number[];
  description: string;
  author: string;
}

export const sdgProjectsData: SdgProject[] = [
  {
    id: 1,
    title: "No Poverty Project",
    date: "2021-10-10",
    image:
      "https://sdg.neda.gov.ph/wp-content/uploads/2019/01/Banner1_UNICEF.jpg",
    sdg: [7],
    description:
      "A project focused on eradicating poverty through various community programs.",
    author: "John Doe",
  },
  {
    id: 2,
    title: "Zero Hunger Initiative",
    date: "2022-01-15",
    image:
      "https://www.borgenmagazine.com/wp-content/uploads/2024/05/Zero-Hunger-Strategy-768x510.jpg",
    sdg: [2, 13],
    description:
      "A project aimed at providing nutritious meals to underprivileged children.",
    author: "Jane Doe",
  },
  {
    id: 3,
    title: "Quality Education for All",
    date: "2022-03-20",
    image: "https://www.ei-ie.org/image/Quality-education.jpg/lead.jpg",
    sdg: [4],
    description:
      "An initiative to improve the quality of education in rural areas.",
    author: "John Smith",
  },
];
