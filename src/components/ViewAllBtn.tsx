import { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ViewAllBtnProps {
  children: ReactNode;
  link: string;
}
const ViewAllBtn = ({ children, link }: ViewAllBtnProps) => {
  return (
    <motion.a
      href={link}
      className="group relative flex items-center space-x-2 rounded-full bg-clarc-blue px-5 py-4 font-semibold text-white transition duration-300 hover:bg-clarc-gold focus:outline-none lg:px-6"
      whileTap={{ scale: [0.95, 1] }}
      whileHover={{ scale: [0.95, 1] }}
    >
      <span className="mr-4 text-sm text-clarc-gold group-hover:text-clarc-blue lg:text-base">
        {children}
      </span>
      <ArrowRight className="absolute right-0 top-0 h-full w-5 -translate-x-4 text-clarc-gold transition-all duration-300 group-hover:-translate-x-3 group-hover:text-clarc-blue" />
    </motion.a>
  );
};

export default ViewAllBtn;
