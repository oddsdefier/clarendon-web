import { Separator } from "@radix-ui/react-separator";
import React, { useRef, useState, useEffect } from "react";

interface OnThisPageProps {
  navItems: { href: string; label: string; indent?: boolean }[];
  mainContentRef: React.RefObject<HTMLDivElement>;
  observerOptions: ObserverOptions;
}

type ObserverOptions = {
  rootMargin: string;
  threshold: number;
};

const OnThisPage: React.FC<OnThisPageProps> = ({
  navItems,
  mainContentRef,
  observerOptions,
}) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const navRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());

  useEffect(() => {
    const handleScroll = (event: Event) => {
      event.preventDefault();
      const target = event.currentTarget as HTMLAnchorElement;
      const id = target.getAttribute("href");
      if (id && mainContentRef.current) {
        const element = mainContentRef.current.querySelector(id);
        if (element) {
          const viewportHeight = window.innerHeight;
          const scrollOffset = viewportHeight * 0.05;
          const elementPosition = (element as HTMLElement).offsetTop;
          const offsetPosition = elementPosition - scrollOffset;

          mainContentRef.current.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    };

    const links = document.querySelectorAll('nav a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", handleScroll);
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = mainContentRef.current?.querySelectorAll("div[id]");
    sections?.forEach((section) => observer.observe(section));

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleScroll);
      });
      sections?.forEach((section) => observer.unobserve(section));
    };
  }, [mainContentRef, observerOptions]);

  return (
    <div className="mb-5">
      <h2 className="text-base font-semibold text-clarc-blue">On This Page</h2>
      <Separator className="my-3 h-1 w-1/4 bg-clarc-gold/50" />
      <nav aria-label="Table of contents">
        <ul className="space-y-2">
          {navItems.map((item, index) => (
            <li key={index} className={item.indent ? "mb-3 ml-2" : "mb-3"}>
              <a
                href={item.href}
                ref={(el) => el && navRefs.current.set(item.href.slice(1), el)}
                className={`flex items-center text-sm transition-colors hover:text-clarc-blue ${
                  activeSection === item.href.slice(1)
                    ? "font-medium text-clarc-blue"
                    : "text-muted-foreground/80"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default OnThisPage;
