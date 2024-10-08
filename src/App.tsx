import { Search, Menu, MapPin } from "lucide-react";
import { CarouselPlugin } from "./Carousel";
function App() {
	return (
		<div className="font-inter min-h-screen">
			<header>
				<nav className="flex flex-col">
					<div data-first-header className="py-8 text-indigo-50 bg-indigo-800">
						<div className="flex justify-between container mx-auto px-2 text-md sm:text-base sm:px-4 md:px6">
							<div className="flex gap-2">
								<MapPin />
								<h1>Bayanihan, Odiong, Roxas Oriental Mindoro</h1>
							</div>
							<div>
								<a href="">Privacy Policy</a>
							</div>
						</div>
					</div>
					<div data-second-header className="py-2 border border-b border-gray-300 ">
						<div className="container mx-auto flex justify-between items-center px-2 sm:px-4 md:px6">
							<div className="py-4 flex gap-1 justify-center items-center">
								<img src="https://scontent.fmnl9-5.fna.fbcdn.net/v/t39.30808-6/431963925_915159387277103_632830678809030111_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=EG0nO6DtNlYQ7kNvgGBPwd9&_nc_ht=scontent.fmnl9-5.fna&_nc_gid=AEcQme1MIs51qwFd-o7TM8N&oh=00_AYAN25wnEJSKQiSwwuTSzcMWrls6yLD9t6dhTMwjjfYwFQ&oe=670AA4CA" alt="Clarendon College Logo" className="square w-10 h-10" />
								<h1 className="text-3xl text-indigo-800 font-bold">ClarC</h1>
							</div>
							<div className="flex gap-2 justify-center items-center">
								<Search />
								<Menu />
							</div>
						</div>
					</div>
				</nav>
			</header>
			<section className="">
				<main>
					<CarouselPlugin />
					<div className=" bg-indigo-800">
						<div className="grid grid-cols-2 sm:grid-cols-4 py-8 gap-5 container mx-auto text-indigo-50 text-sm md:text-base">
							<button className="px-6 py-2 outline outline-indigo-50 rounded-xl">Online Resources</button>
							<button className="px-6 py-2 outline outline-indigo-50 rounded-xl">International</button>
							<button className="px-6 py-2 outline outline-indigo-50 rounded-xl">Arts and Culture</button>
							<button className="px-6 py-2 outline outline-indigo-50 rounded-xl">Alumni</button>
						</div>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-16 justify-center container mx-auto my-16">
						<div className="py-24">
							<h1 className="uppercase text-4xl font-serif pt-5">FUTURE-READY LEARNING</h1>
							<p className="text-2xl py-5 text-gray-600 font-medium">Clarendon is one of the leading private universities in the Philippines offering accessible, quality, and future-ready education. We aim to develop well-rounded students who are intellectually curious, creative problem solvers, critical thinkers, responsible digital citizens, professionals, and contributing members of society. FEU graduates are globally competitive and exhibit the core values of fortitude, excellence, and uprightness.</p>
							<div className="flex gap-5 justify-center py-5">
								<button className="px-6 py-4 text-indigo-50 font-semibold bg-indigo-800 rounded-xl">Philosophy of Education</button>
								<button className="px-6 py-4 text-indigo-800 font-semibold outline-2 outline-indigo-800 rounded-xl">Awards and Recognition</button>
							</div>
						</div>
						<div className="row row-2 flex justify-center items-center">
							<img src="https://www.feu.edu.ph/wp-content/uploads/2024/05/FEU-Website-front-picture.png" alt="img1" />
						</div>
					</div>
					<div className="flex justify-center container mx-auto my-16">
						<div className="row row-2 flex justify-center items-center">
							<img src="https://scontent.fmnl8-2.fna.fbcdn.net/v/t39.30808-6/431946606_915179940608381_6879013593159267845_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeHcnIjh2HXMi9SLzaMsO_7BpDgxLiTrlUikODEuJOuVSNyuzrYtFGFYcBMRdsjHMz-oUA3MhMhpyoeMeJ2rj-GX&_nc_ohc=tRW-9mTQNFMQ7kNvgHHlIUq&_nc_ht=scontent.fmnl8-2.fna&_nc_gid=AlnkLOh6eLoztj8B9q3ONph&oh=00_AYAgDA2IAPiG5NMVTxp9OFQADXot0Nnfz7Clpx5ASztkow&oe=670AC468" alt="img1" />
						</div>
						<div className="py-24">
							<h1 className="font-semibold text-4xl font-serif pt-5 text-center px-10">Application Are Open</h1>
							<h3 className="font-semibold text-2xl pt-8 py-5 text-center px-10 text-gray-600">Student Placement Admission to College Education</h3>
							<p className="text-2xl py-5 text-gray-600 font-medium text-center px-16">SPACE is FEU’s admissions portal. Senior high school graduates who wish to apply may start the admissions process by uploading their personal information here. Be Brave, be a Tamaraw, and Make it FEU!.</p>
							<div className="flex gap-5 justify-center py-5">
								<button className="px-6 py-4 text-indigo-800 font-semibold outline-2 outline-indigo-800 rounded-full hover:bg-indigo-800 hover:text-indigo-50">Start your CLARC journey here</button>
							</div>
						</div>
					</div>

					<div className="flex flex-col gap-10">
						<div data-header className="flex justify-between items-center container mx-auto">
							<h1 className="font-semibold text-3xl font-serif py-5 text-center">College News and Events</h1>
							<button className="px-6 py-3 text-indigo-800 font-semibold bg-indigo-300 rounded-full mr-5">View All News</button>
						</div>
						<div data-carousel className="grid grid-cols-4 container mx-auto gap-10">
							<div data-event-card className="rounded-lg overflow-hidden">
								<img src="https://www.feu.edu.ph/wp-content/uploads/2024/10/462133588_1107903954235527_7937138906334353410_n.jpg" alt="" className="aspect-video object-cover" />
								<div className="mt-10">
									<h4 className="tracking-tight text-base uppercase font-semibold text-indigo-700 pt-4">— International News</h4>
									<h2 className="font-serif text-xl leading-5 font-semibold text-gray-500 py-6">CLARC goes global</h2>
									<p className="text-md text-gray-400">October 09, 2024</p>
								</div>
							</div>
							<div data-event-card className="rounded-lg overflow-hidden">
								<img src="https://www.feu.edu.ph/wp-content/uploads/2024/10/462133588_1107903954235527_7937138906334353410_n.jpg" alt="" className="aspect-video object-cover" />
								<div className="mt-10">
									<h4 className="tracking-tight text-base uppercase font-semibold text-indigo-700 pt-4">— International News</h4>
									<h2 className="font-serif text-xl leading-5 font-semibold text-gray-500 py-6">CLARC goes global</h2>
									<p className="text-md text-gray-400">October 09, 2024</p>
								</div>
							</div>
							<div data-event-card className="rounded-lg overflow-hidden">
								<img src="https://www.feu.edu.ph/wp-content/uploads/2024/10/462133588_1107903954235527_7937138906334353410_n.jpg" alt="" className="aspect-video object-cover" />
								<div className="mt-10">
									<h4 className="tracking-tight text-base uppercase font-semibold text-indigo-700 pt-4">— International News</h4>
									<h2 className="font-serif text-xl leading-5 font-semibold text-gray-500 py-6">CLARC goes global</h2>
									<p className="text-md text-gray-400">October 09, 2024</p>
								</div>
							</div>
							<div data-event-card className="rounded-lg overflow-hidden">
								<img src="https://www.feu.edu.ph/wp-content/uploads/2024/10/462133588_1107903954235527_7937138906334353410_n.jpg" alt="" className="aspect-video object-cover" />
								<div className="mt-10">
									<h4 className="tracking-tight text-base uppercase font-semibold text-indigo-700 pt-4">— International News</h4>
									<h2 className="font-serif text-xl leading-5 font-semibold text-gray-500 py-6">CLARC goes global</h2>
									<p className="text-md text-gray-400">October 09, 2024</p>
								</div>
							</div>
						</div>
					</div>

					<div className="flex justify-center container mx-auto my-16">
						<div className="row row-2 flex justify-center items-center">
							<img src="https://scontent.fmnl8-2.fna.fbcdn.net/v/t39.30808-6/431946606_915179940608381_6879013593159267845_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeHcnIjh2HXMi9SLzaMsO_7BpDgxLiTrlUikODEuJOuVSNyuzrYtFGFYcBMRdsjHMz-oUA3MhMhpyoeMeJ2rj-GX&_nc_ohc=tRW-9mTQNFMQ7kNvgHHlIUq&_nc_ht=scontent.fmnl8-2.fna&_nc_gid=AlnkLOh6eLoztj8B9q3ONph&oh=00_AYAgDA2IAPiG5NMVTxp9OFQADXot0Nnfz7Clpx5ASztkow&oe=670AC468" alt="img1" />
						</div>
						<div className="py-24">
							<h1 className="font-semibold text-4xl font-serif pt-5 text-center px-10">Application Are Open</h1>
							<h3 className="font-semibold text-2xl pt-8 py-5 text-center px-10 text-gray-600">Student Placement Admission to College Education</h3>
							<p className="text-2xl py-5 text-gray-600 font-medium text-center px-16">SPACE is FEU’s admissions portal. Senior high school graduates who wish to apply may start the admissions process by uploading their personal information here. Be Brave, be a Tamaraw, and Make it FEU!.</p>
							<div className="flex gap-5 justify-center py-5">
								<button className="px-6 py-4 text-indigo-800 font-semibold outline-2 outline-indigo-800 rounded-full hover:bg-indigo-800 hover:text-indigo-50">Start your CLARC journey here</button>
							</div>
						</div>
					</div>
				</main>
			</section>
			<footer></footer>
		</div>
	);
}

export default App;
