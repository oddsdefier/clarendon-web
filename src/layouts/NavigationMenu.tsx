/**
 * TODO: Revise the desktop navigation menu to match the design system
 * - The navigation menu's content should be same for desktop and mobile
 */

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { navigationData } from "@/utils/data_navigation";
import * as React from "react";
import { Link } from "react-router-dom";

const navTriggerStyle = "text-clarc-blue hover:text-clarc-blue/90";

export function ClarendonNavigationMenu() {
  return (
    <NavigationMenu className="z-50">
      <NavigationMenuList>
        <>
          {navigationData.map((section) =>
            section.type === "link" ? (
              // Nav Item as Link or No Children (Render Documentation here)
              <NavigationMenuItem key={section.title}>
                <Link to={section.link || ""}>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {section.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ) : (
              <NavigationMenuItem key={section.title}>
                {/* Nav Item with Children */}
                <NavigationMenuTrigger className={navTriggerStyle}>
                  {section.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]">
                    {section?.items?.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        to={item.href}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ),
          )}
        </>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<typeof Link>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground opacity-75">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";
