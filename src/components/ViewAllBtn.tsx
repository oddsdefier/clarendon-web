import { ReactNode } from "react";
import { motion } from "framer-motion";

import { ArrowRight } from "lucide-react";

interface ViewAllBtnProps {
	children: ReactNode;
	link: string;
}
const ViewAllBtn = ({ children, link }: ViewAllBtnProps) => {
	return (
		<motion.a href={link} className="relative focus:outline-none flex items-center space-x-2 bg-clarc-blue hover:bg-clarc-gold text-white font-semibold px-5 py-4 lg:px-6 rounded-full transition duration-300 group" whileTap={{ scale: [0.95, 1] }} whileHover={{ scale: [0.95, 1] }}>
			<span className="mr-4 text-sm lg:text-base text-clarc-gold group-hover:text-clarc-blue">{children}</span>
			<ArrowRight className="group-hover:-translate-x-3 absolute h-full top-0 right-0 -translate-x-4 w-5 text-clarc-gold group-hover:text-clarc-blue transition-all duration-300" />
		</motion.a>
	);
};

export default ViewAllBtn;
