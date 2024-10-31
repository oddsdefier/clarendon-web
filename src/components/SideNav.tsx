import { Separator } from "@radix-ui/react-separator";
import { ArrowUpRight } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

interface NavigationProps {
  title: string;
  navItems: { to: string; label: string }[];
}
const SideNavigation: React.FC<NavigationProps> = ({ title, navItems }) => {
  return (
    <nav className="flex w-full flex-col">
      <h1 className="text-base font-semibold text-clarc-blue">{title}</h1>
      <Separator className="my-3 h-1 w-1/4 bg-clarc-gold/50" />
      <ul className="space-y-2">
        {navItems.map((item) => (
          <li key={item.to} className="mb-3 text-sm">
            <NavLink
              to={item.to}
              className={({ isActive }: { isActive: boolean }) =>
                `flex items-center transition-colors ${isActive ? "font-medium text-clarc-blue" : "text-muted-foreground/70 hover:text-clarc-blue"}`
              }
            >
              {item.label}
              <ArrowUpRight
                className={`ml-2 h-3 w-3 transition-transform ${({ isActive }: { isActive: boolean }) => (isActive ? "rotate-90" : "")}`}
              />
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default SideNavigation;
