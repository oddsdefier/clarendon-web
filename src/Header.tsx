import React from "react";
import { Search, Menu, MapPin } from "lucide-react";
const Header: React.FC = () => {
	return (
		<header>
			<nav className="flex flex-col">
				<div className="hidden md:flex p-3 text-indigo-50 bg-clarc-blue">
					<div className="flex justify-between container mx-auto px-2 text-sm sm:text-base sm:px-4 md:px6 ">
						<div className="flex justify-center items-center gap-1">
							<MapPin className="w-4 h-4" />
							<h1>Bayanihan, Odiong, Roxas Oriental Mindoro</h1>
						</div>
						<div>
							<a href="">Privacy Policy</a>
						</div>
					</div>
				</div>
				<div>
					<div className="container mx-auto flex justify-between items-center p-3">
						<div className="flex gap-1 justify-center items-center">
							<img src="https://scontent.fmnl9-5.fna.fbcdn.net/v/t39.30808-6/431963925_915159387277103_632830678809030111_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=EG0nO6DtNlYQ7kNvgGBPwd9&_nc_ht=scontent.fmnl9-5.fna&_nc_gid=AEcQme1MIs51qwFd-o7TM8N&oh=00_AYAN25wnEJSKQiSwwuTSzcMWrls6yLD9t6dhTMwjjfYwFQ&oe=670AA4CA" alt="Clarendon College Logo" className="square w-8 h-8 lg:w-10 lg:h-10" />
							<h1 className="text-lg md:text-2xl text-clarc-blue font-bold">Clarendon College</h1>
						</div>
						<div className="hidden lg:flex gap-10 items-center justify-center">
							<div>
								<a href="">Clarendar</a>
							</div>
							<div>
								<a href="">Owl TV</a>
							</div>
							<div>
								<a href="">Guidelines</a>
							</div>
							<div>
								<a href="">Policy</a>
							</div>
						</div>
						<div className="flex gap-3 justify-center items-center">
							<Search className="w-5 h-5 lg:w-6 lg:h-6 text-gray-600" />
							<Menu className="w-5 h-5 lg:w-6 lg:h-6 text-gray-600" />
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
};
export default Header;
