import { useState, useEffect } from "react";
import { Search, Menu, MapPin, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ClarendonNavigationMenu } from "./NavigationMenu";
import MobileNavigation from "./MobileNavigation";
import { Link } from "react-router-dom";
import { clarcAssets } from "@/utils/link_images";
import { useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const logoLink = clarcAssets.primary_logo;
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

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className="fixed left-0 right-0 top-0 z-[9999]">
      <nav className="flex flex-col bg-white">
        {location.pathname === "/" ? (
          <div className="hidden h-16 items-center bg-clarc-blue p-3 text-indigo-50 md:flex">
            <div className="container mx-auto flex h-8 justify-between px-2 text-sm sm:px-4 sm:text-base md:px-6">
              <div className="flex w-full items-center justify-end gap-1 text-clarc-gold">
                <MapPin className="h-5 w-5" />
                <h1 className="text-sm lg:text-[0.95rem]">
                  Bayanihan, Odiong, Roxas Oriental Mindoro
                </h1>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="container relative mx-auto flex h-16 items-center justify-between border-b border-clarc-blue/10 p-4 lg:p-0">
          <Link
            to={"/"}
            className="z-10 flex items-center justify-center gap-1"
          >
            <img
              src={logoLink}
              alt="Clarendon College Logo"
              className="square h-10 w-10"
            />
            <h1
              className="md:text-md font-universal_serif text-base font-semibold tracking-wider text-clarc-blue"
              style={{ lineHeight: 1.05 }}
            >
              CLARENDON <br></br> COLLEGE
            </h1>
          </Link>
          <div className="absolute hidden w-full items-center justify-center lg:flex">
            <ClarendonNavigationMenu />
          </div>
          <div className="flex items-center justify-center">
            <Search className="h-4 w-4 text-clarc-blue lg:h-5 lg:w-5" />
            <button onClick={toggleMenu} className="focus:outline-none">
              <motion.div
                initial={false}
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex md:hidden"
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5 text-clarc-blue lg:h-6 lg:w-6" />
                ) : (
                  <Menu className="h-5 w-5 text-clarc-blue lg:h-6 lg:w-6" />
                )}
              </motion.div>
            </button>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              animate={{ opacity: [0, 1] }}
              exit={{ opacity: 1 }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed inset-y-0 left-0 top-16 z-50 w-full overflow-y-auto bg-white shadow-lg"
            >
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
