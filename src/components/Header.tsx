import { cn } from "@/lib/utils";
interface HeaderConfig {
  containerClassName?: string;
  imageWrapperClassName?: string;
  bgImageClassName?: string;
  backdropClassName?: string;
  titleClassName?: string;
}

interface HeaderProps {
  img: string;
  title: string;
  headerConfig?: HeaderConfig;
}

export default function Header({ img, title, headerConfig = {} }: HeaderProps) {
  const {
    containerClassName = "",
    imageWrapperClassName = "absolute inset-4 overflow-hidden",
    bgImageClassName = "",
    backdropClassName = "",
    titleClassName = "",
  } = headerConfig;

  return (
    <div
      className={cn(
        "relative flex h-48 items-center justify-center overflow-hidden bg-clarc-blue py-2 md:rounded-sm lg:mb-5 lg:mt-5",
        containerClassName,
      )}
    >
      <div className={imageWrapperClassName}>
        <div
          className={cn(
            "absolute inset-0 bg-contain bg-center bg-no-repeat opacity-90",
            bgImageClassName,
          )}
          style={{ backgroundImage: `url(${img})` }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-clarc-blue to-transparent opacity-90" />

      <div className={backdropClassName} />

      <div className="container relative z-10 mx-auto px-12 text-center">
        <h1
          className={cn(
            "font-astralaga text-3xl font-semibold italic text-white/90 lg:text-4xl",
            titleClassName,
          )}
        >
          {title}
        </h1>
      </div>
    </div>
  );
}
