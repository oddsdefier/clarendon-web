import {
  ExternalLink,
  Facebook,
  Linkedin,
  Youtube,
  Twitter,
} from "lucide-react";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { clarcAssets } from "@/utils/link_images";

const Footer: React.FC = () => {
  const clarcLogo = clarcAssets.primary_logo;
  const bgImgUrl = clarcAssets.images.old_pic;

  const helperTitleStyle =
    "text-md lg:text-base font-semibold mb-4 text-indigo-100/95";
  const listElWrapperStyle =
    "not-italic text-indigo-200/90 text-sm lg:text-md space-y-3";
  const socialsLogo =
    "w-5 h-5 text-indigo-200 hover:text-clarc-gold transition transition-colors duration-200";
  return (
    <footer className="relative bg-clarc-blue/10 px-4 pb-12 pt-8 text-white sm:px-0 lg:px-0 lg:pb-24 lg:pt-16">
      <div
        className={`absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-20`}
        style={{
          backgroundImage: `url(${bgImgUrl})`,
        }}
      ></div>
      <div className="absolute inset-0 -z-10 bg-clarc-blue opacity-70"></div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-clarc-blue to-transparent opacity-100"></div>

      <div className="container relative z-10 mx-auto flex flex-col justify-evenly gap-8 lg:flex-row">
        <div className="flex items-center gap-1 lg:items-start lg:gap-2">
          <img
            src={clarcLogo}
            alt="Clarendon College Logo"
            className="square aspect-square h-16 w-16 rounded-full lg:h-10 lg:w-10"
          />
          <div>
            <div className="col-span-1 row-span-1 flex items-center gap-1 lg:mb-4 lg:items-start">
              <span className="font-universal_serif text-xl font-semibold leading-[1.15] tracking-wider text-clarc-gold">
                Clarendon College
              </span>
            </div>
            <div className="container relative z-10 row-span-2 mx-auto mt-0 hidden flex-col items-start justify-start gap-1 lg:flex">
              <p className="text-sm font-semibold text-clarc-gold/90">
                &copy; {new Date().getFullYear()} Clarendon College
              </p>
              <p className="ml-3.5 text-sm font-semibold text-clarc-gold/80">
                All rights reserved.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3 className={helperTitleStyle}>Socials</h3>
          <div className="flex gap-3">
            {[
              { Component: Facebook, href: "https://facebook.com" },
              { Component: InstagramLogoIcon, href: "https://instagram.com" },
              { Component: Linkedin, href: "https://linkedin.com" },
              { Component: Youtube, href: "https://linkedin.com" },
              { Component: Twitter, href: "https://linkedin.com" },
            ].map(({ Component, href }, index) => (
              <motion.a
                key={index}
                href={href}
                whileTap={{ scale: [0.9, 1] }}
                whileHover={{ scale: [0.9, 1] }}
              >
                <Component className={socialsLogo} />
              </motion.a>
            ))}
          </div>
        </div>
        <div>
          <h3 className={helperTitleStyle}>Get In Touch</h3>
          <address className={listElWrapperStyle}>
            <p>Bayanihan St., Odiong</p>
            <p>Roxas, Oriental Mindoro</p>
            <p>
              Email:{" "}
              <a
                href="mailto:clarendoncollege@edu.ph"
                className="hover:underline"
              >
                clarendoncollege@edu.ph
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+1234567890" className="hover:underline">
                (123) 456-7890
              </a>
            </p>
          </address>
        </div>

        <div>
          <h3 className={helperTitleStyle}>Learn More</h3>
          <ul className={listElWrapperStyle}>
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Admissions
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center gap-1 hover:underline lg:justify-center"
              >
                <span>Programs</span>{" "}
                <ExternalLink className="mb-0.5 h-3.5 w-3.5" />
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container relative z-10 mx-auto mt-10 flex flex-col items-start justify-start gap-1 py-5 lg:hidden lg:items-center lg:justify-center lg:px-4">
        <p className="text-sm font-semibold text-clarc-gold">
          &copy; {new Date().getFullYear()} Clarendon College
        </p>
        <p className="text-sm font-semibold text-clarc-gold/80">
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
