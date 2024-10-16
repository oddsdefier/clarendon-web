export interface NewsItem {
	category: string;
	title: string;
	date: string;
	image: string;
	link: string;
}

export const newsItems: NewsItem[] = [
	{
		category: "International News",
		title: "CLARC goes global",
		date: "October 09, 2024",
		image: "https://scontent.fmnl8-6.fna.fbcdn.net/v/t39.30808-6/462489344_1065119515614422_7635874021848328696_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHlJXB43YlUQcpcHgJOUke3W4hZsdWmz-FbiFmx1abP4WrefL3IN2hkHC-gL01KdP4FekB8VonTSjxgW-4Is1BC&_nc_ohc=0R4TXO3M5T8Q7kNvgGSsT_M&_nc_ht=scontent.fmnl8-6.fna&_nc_gid=AlsY4pF8zpqLfbpjcqVJC9n&oh=00_AYDfgmWvHYlrwg6MmcqWxHL6Z-7H7_5C_IuJtZaTrzzR3A&oe=670D527A",
		link: "/",
	},
	{
		category: "Campus Life",
		title: "New Student Center Opens",
		date: "September 15, 2024",
		image: "https://scontent.fmnl8-3.fna.fbcdn.net/v/t39.30808-6/455599851_1024173819708992_513435606900008794_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFJgOkMpWXPtUpWUk3YJYTGfeQKfZqfuxJ95Ap9mp-7EjfZiRdLos_nB4kqp-5NphGKbYII5LPQ8XtMBVmJ1X9d&_nc_ohc=lzpMNcfjrdkQ7kNvgEVrNjB&_nc_ht=scontent.fmnl8-3.fna&_nc_gid=AP0UElh72_S7lBmcl961Za3&oh=00_AYBuT_i2l3DOB4VfSnd8j7uGS7kpBGm_HV04Dv7pVt7eNg&oe=670D8202",
		link: "/",
	},
	{
		category: "Academic Achievement",
		title: "Students Win National Competition",
		date: "August 22, 2024",
		image: "https://scontent.fmnl8-1.fna.fbcdn.net/v/t39.30808-6/451300567_1003303658462675_6725677853035530200_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGGSZJPy1VsRQczE9PnBJAMDjZ22N7BhKIONnbY3sGEoutRECPzsYoyQmjQugfhwy072jB9Lo_3dqGgv95tHVsb&_nc_ohc=mntr7S7mqgIQ7kNvgEQmmt0&_nc_ht=scontent.fmnl8-1.fna&_nc_gid=AwzqxoOIcFfVSqkdYvGvWHr&oh=00_AYDjau1dy0Z8hothutILewVhrsC6Tu3rML54jIKMGYy-2Q&oe=670D7C85",
		link: "/news/national-competition-win",
	},
	{
		category: "Culture",
		title: "Clarendon Cultural Center",
		date: "July 30, 2024",
		image: "https://www.travelorientalmindoro.ph/Content/img/uploads/7831a26b-917d-494a-8ee5-20d06dce76f9.jpg",
		link: "/news/renewable-energy-breakthrough",
	},
];
