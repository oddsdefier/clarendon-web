import { Button } from "@/components/ui/button";

const resourceButtons = [
  { label: "News and Events", href: "news-and-events" },
  { label: "Admission", href: "application-section" },
  { label: "Videos", href: "videos-section" },
  { label: "Alumni", href: "alumni" },
];

export default function ResourceButtons() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = window.innerHeight * 0.11;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="bg-clarc-blue lg:block">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {resourceButtons.map((button) => (
            <Button
              key={button.label}
              variant="outline"
              className="w-full border-clarc-gold bg-transparent py-4 text-base text-clarc-gold transition-colors duration-300 hover:bg-clarc-gold hover:text-clarc-blue"
              asChild
            >
              <a
                key={button.label}
                href={button.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(`${button.href}`);
                }}
              >
                {button.label}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
