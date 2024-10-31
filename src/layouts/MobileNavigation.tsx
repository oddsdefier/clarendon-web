import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import {
  Facebook,
  Linkedin,
  Youtube,
  Twitter,
  MoveUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { navigationData } from "@/utils/data_navigation";

const MobileNavigation: React.FC = () => {
  const socialsLogo =
    "w-5 h-5 text-gray-500/60 hover:text-clarc-gold transition transition-colors duration-200";

  return (
    <nav className="container mx-auto flex h-full flex-col justify-between bg-background p-4">
      <Accordion type="single" collapsible className="w-full">
        {navigationData.map((category) => (
          <AccordionItem
            key={category.title}
            value={category.title.toLowerCase().replace(/\s+/g, "-")}
          >
            <AccordionTrigger className="px-2 text-base font-bold uppercase text-clarc-blue outline-none outline focus:outline-none">
              {category.title}
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-1">
                {category.items.map((item) => (
                  <li key={item.title}>
                    <Link
                      to={item.href}
                      className="flex items-center justify-between rounded-md border-none p-2 text-base outline-none hover:bg-accent"
                    >
                      <span className="font-normal text-gray-700/80">
                        {item.title}
                      </span>
                      <MoveUpRight className="aspect-square h-3 w-3 text-clarc-blue/80" />
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div>
        <div className="flex w-full justify-start gap-3 py-3">
          {[
            { Component: Facebook, href: "https://facebook.com" },
            { Component: InstagramLogoIcon, href: "https://instagram.com" },
            { Component: Linkedin, href: "https://linkedin.com" },
            { Component: Youtube, href: "https://youtube.com" },
            { Component: Twitter, href: "https://twitter.com" },
          ].map(({ Component, href }, index) => (
            <motion.a
              key={index}
              href={href}
              whileTap={{ scale: [0.9, 1] }}
              whileHover={{ scale: [0.9, 1] }}
              target="_blank"
            >
              <Component className={socialsLogo} />
            </motion.a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default MobileNavigation;
