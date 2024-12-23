import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { navigationData } from "@/utils/data_navigation";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { NavigationMenuItem } from "@/components/ui/navigation-menu";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const MobileNavigation: React.FC = () => {
  const socialsLogo =
    "w-5 h-5 text-gray-500/60 hover:text-clarc-gold transition transition-colors duration-200";
  return (
    <nav className="container mx-auto flex h-full flex-col justify-between bg-background p-4">
      <Accordion type="single" collapsible className="w-full">
        {navigationData.map((category) =>
          category.type === "link" ? (
            <NavigationMenuItem
              key={category.title}
              className="flex list-none items-center justify-between rounded-none border-b border-dashed border-gray-300 text-base outline-none hover:bg-accent"
            >
              <Link
                to={category.link || ""}
                className="flex flex-1 items-center justify-between p-2 py-4 text-sm font-medium text-clarc-blue"
              >
                <p className="text-lg font-bold uppercase italic outline-none outline focus:outline-none">
                  {category.title}
                </p>
                <ArrowUpRight className="aspect-square h-4 w-4 text-gray-400" />
              </Link>
            </NavigationMenuItem>
          ) : (
            <AccordionItem
              key={category.title}
              value={category.title.toLowerCase().replace(/\s+/g, "-")}
              className="border-b border-dashed border-gray-300"
            >
              <AccordionTrigger className="px-2 text-lg font-bold uppercase italic outline-none outline focus:outline-none">
                {category.title}
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-1">
                  {category.items?.map((item) => (
                    <li key={item.title}>
                      <Link
                        to={item.href}
                        className="flex items-center justify-between border-none p-2 text-base outline-none hover:bg-accent"
                      >
                        <span className="font-normal text-gray-700/80">
                          {item.title}
                        </span>
                        <ArrowUpRight className="aspect-square h-4 w-4 text-clarc-blue/80" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ),
        )}
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
