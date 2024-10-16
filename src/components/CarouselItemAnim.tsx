import { motion } from "framer-motion";
import { ReactNode } from "react";
interface CarouselItemAnimProps {
	children: ReactNode;
	index: number;
}
const CarouselItemAnim = ({ children, index }: CarouselItemAnimProps) => {
	return (
		<motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
			{children}
		</motion.div>
	);
};

export default CarouselItemAnim;
