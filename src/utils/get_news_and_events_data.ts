export interface NewsItem {
	id: string;
	// type: "news" | "event";
	category: string;
	title: string;
	date: string;
	image: string;
	slug: string;
}

export const newsItems: NewsItem[] = [
	{
		id: "1",
		category: "International News",
		title: "CLARC goes global",
		date: "October 09, 2024",
		image: "https://res.cloudinary.com/dfntpqzza/image/upload/v1729228487/462489344_1065119515614422_7635874021848328696_n.jpg_u2vocy.jpg",
		slug: "clarc-goes-global",
	},
	{
		id: "2",
		category: "Campus Life",
		title: "New Building",
		date: "September 15, 2024",
		image: "https://res.cloudinary.com/dfntpqzza/image/upload/v1729228784/410282251_853897020070007_4156709952716535615_n.jpg_olvlys.jpg",
		slug: "new-student-center-opens",
	},
	{
		id: "3",
		category: "Academic Achievement",
		title: "Students Win National Competition",
		date: "August 22, 2024",
		image: "https://res.cloudinary.com/dfntpqzza/image/upload/v1729228709/451300567_1003303658462675_6725677853035530200_n.jpg_iozjrd.jpg",
		slug: "students-win-national-competition",
	},
	{
		id: "4",
		category: "Culture",
		title: "Clarendon Cultural Center",
		date: "July 30, 2024",
		image: "https://res.cloudinary.com/dfntpqzza/image/upload/v1729131682/7831a26b-917d-494a-8ee5-20d06dce76f9_hvfgte.jpg",
		slug: "clarendon-cultural-center",
	},
];
