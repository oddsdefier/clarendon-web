import { useState, useEffect } from "react";
import { Search, Menu, MapPin, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ClarendonNavigationMenu } from "./NavigationMenu";
import MobileNavigation from "./MobileNavigation";

const logoLink = "/clarc-logo.png";

const Header: React.FC = () => {
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
							<MapPin className="w-5 h-5" />
							<h1 className="text-sm lg:text-[0.95rem]">Bayanihan, Odiong, Roxas Oriental Mindoro</h1>
						</div>
					</div>
				</div>
				<div>
					<div className="relative container mx-auto flex justify-between items-center p-3 px-4">
						<div className="flex gap-1 justify-center items-center">
							<img src={logoLink} alt="Clarendon College Logo" className="square w-6 h-6 lg:w-[2.3rem] lg:h-[2.3rem]" />
							<h1 className="font-universal_serif text-base md:text-2xl text-clarc-blue font-semibold">Carpe Diem</h1>
						</div>
						<div className="absolute hidden lg:flex w-[99%] gap-10 items-center justify-center">
							<ClarendonNavigationMenu />
						</div>
						<div className="flex gap-3 justify-center items-center">
							<Search className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600" />
							<button onClick={toggleMenu} className="focus:outline-none">
								<motion.div initial={false} animate={{ rotate: isMenuOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="flex md:hidden">
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
								<MobileNavigation />
							</div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</header>
	);
};
export default Header;
