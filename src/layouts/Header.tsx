import { useState, useEffect } from "react";
import { Search, Menu, MapPin, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ClarendonNavigationMenu } from "./NavigationMenu";
import MobileNavigation from "./MobileNavigation";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}

		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isMenuOpen]);

	return (
		<header className="bg-white">
			<nav className="flex flex-col">
				<div className="hidden md:flex p-3 text-indigo-50 bg-clarc-blue">
					<div className="flex justify-between container mx-auto px-2 text-sm sm:text-base sm:px-4 md:px6 h-8">
						<div className="w-full flex justify-end items-center gap-1 text-clarc-gold">
							<MapPin className="w-4 h-4" />
							<h1 className="text-xs lg:text-[0.95rem]">Bayanihan, Odiong, Roxas Oriental Mindoro</h1>
						</div>
					</div>
				</div>
				<div>
					<div className="relative container mx-auto flex justify-between items-center p-3 px-4">
						<div className="flex gap-1 justify-center items-center">
							<img src="https://scontent.fmnl9-5.fna.fbcdn.net/v/t39.30808-6/431963925_915159387277103_632830678809030111_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=EG0nO6DtNlYQ7kNvgGBPwd9&_nc_ht=scontent.fmnl9-5.fna&_nc_gid=AEcQme1MIs51qwFd-o7TM8N&oh=00_AYAN25wnEJSKQiSwwuTSzcMWrls6yLD9t6dhTMwjjfYwFQ&oe=670AA4CA" alt="Clarendon College Logo" className="square w-6 h-6 lg:w-[2.3rem] lg:h-[2.3rem]" />
							<h1 className="font-astralaga text-base md:text-2xl text-clarc-blue font-semibold">Carpe Diem</h1>
						</div>
						<div className="absolute hidden lg:flex w-[99%] gap-10 items-center justify-center">
							<ClarendonNavigationMenu />
						</div>
						<div className="flex gap-3 justify-center items-center">
							<Search className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600" />
							<button onClick={toggleMenu} className="focus:outline-none">
								<motion.div initial={false} animate={{ rotate: isMenuOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
									{isMenuOpen ? <X className="w-5 h-5 lg:w-6 lg:h-6 text-gray-600" /> : <Menu className="w-5 h-5 lg:w-6 lg:h-6 text-gray-600" />}
								</motion.div>
							</button>
						</div>
					</div>
				</div>
			</nav>
			<AnimatePresence>
				{isMenuOpen && (
					<>
						<motion.div animate={{ opacity: [0, 1] }} exit={{ opacity: 1 }} transition={{ type: "tween", duration: 0.3 }} className="fixed inset-y-0 top-12 left-0 w-full bg-white shadow-lg z-50 overflow-y-auto">
							<div className="h-full">
								{/* <div className="w-full flex justify-between bg-clarc-blue p-4">
									<div className="flex gap-1 justify-center items-center">
										<img src="https://scontent.fmnl9-5.fna.fbcdn.net/v/t39.30808-6/431963925_915159387277103_632830678809030111_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=EG0nO6DtNlYQ7kNvgGBPwd9&_nc_ht=scontent.fmnl9-5.fna&_nc_gid=AEcQme1MIs51qwFd-o7TM8N&oh=00_AYAN25wnEJSKQiSwwuTSzcMWrls6yLD9t6dhTMwjjfYwFQ&oe=670AA4CA" alt="Clarendon College Logo" className="square w-6 h-6 rounded-full" />
										<h1 className="text-xl font-medium font-astralaga text-clarc-gold">Clarendon College</h1>
									</div>

									<button onClick={toggleMenu} className="focus:outline-none">
										<motion.div>{isMenuOpen ? <X className="w-5 h-5 lg:w-6 lg:h-6 text-clarc-gold" /> : <Menu className="w-5 h-5 lg:w-6 lg:h-6 text-gray-600" />}</motion.div>
									</button>
								</div> */}
								<MobileNavigation />
							</div>
						</motion.div>
						{/* <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleMenu} /> */}
					</>
				)}
			</AnimatePresence>
		</header>
	);
}
