import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, AnimatePresence } from "framer-motion";

interface Props {
	children: React.ReactNode;
	width?: "fit-content" | "100%";
	staggerDelay?: number;
}

export const Reveal = ({ children, width = "fit-content", staggerDelay = 0.25 }: Props) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: false });

	const mainControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			mainControls.start("visible");
		}
	}, [isInView, mainControls]);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: staggerDelay,
			},
		},
	};

	const childVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
			<AnimatePresence>
				{isInView && (
					<motion.div variants={containerVariants} initial="hidden" animate={mainControls}>
						{React.Children.map(children, (child, index) => (
							<motion.div key={index} variants={childVariants}>
								{child}
							</motion.div>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};
