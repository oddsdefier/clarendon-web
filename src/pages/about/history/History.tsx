import { useEffect, useRef, useState } from "react";
import ClarendonHistory from "./ClarendonHistory";
import Timeline from "./Timeline";
import AboutUs from "../components/AboutUs";
import { Separator } from "@radix-ui/react-separator";

export default function History() {
  const mainContentRef = useRef<HTMLDivElement>(null);
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
      console.log(link);
    });

    // Set up Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(entry);
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-5% 0px -60% 0px", threshold: 0.5 },
    );

    // Observe all sections
    const sections = mainContentRef.current?.querySelectorAll("div[id]");
    sections?.forEach((section) => observer.observe(section));

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleScroll);
      });
      sections?.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navItems = [
    { href: "#history-clarendon", label: "History" },
    { href: "#founder", label: "Founder", indent: true },
    { href: "#birth-of-clarendon", label: "Birth Of Clarendon", indent: true },
    {
      href: "#growth-and-evolution",
      label: "Growth And Evolution",
      indent: true,
    },
    {
      href: "#recent-achievements",
      label: "Recent Achievements",
      indent: true,
    },
    {
      href: "#our-ongoing-mission",
      label: "Our Ongoing Mission",
      indent: true,
    },
    { href: "#timeline", label: "Timeline" },
  ];

  const OnThisPage = (
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
  return (
    <section className="container relative mx-auto w-full">
      <div className="relative flex min-h-svh self-start lg:min-h-lvh">
        <div
          ref={mainContentRef}
          className="no-scrollbar flex-grow overflow-y-auto"
          style={{ height: "calc(100vh - 2rem)" }}
        >
          <ClarendonHistory />
          <Timeline />
        </div>
        <aside className="sticky top-0 hidden p-5 lg:block lg:w-60 lg:flex-shrink-0">
          <div className="h-full overflow-y-auto">
            {OnThisPage}
            <AboutUs />
          </div>
        </aside>
      </div>
    </section>
  );
}
