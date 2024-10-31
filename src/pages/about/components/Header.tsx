import React from "react";
interface HeaderProp {
  img: string;
  title: string;
}

/**
 * TODO: Adjust the text positioning inside the div, do it on all pages with header
 */
const Header: React.FC<HeaderProp> = ({ img, title }) => {
  return (
    <div
      className="relative mb-10 mt-5 flex h-48 items-center overflow-hidden rounded-sm bg-primary opacity-90"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-clarc-blue to-transparent opacity-90" />
      <div className="container z-10 mx-auto flex justify-center px-12 text-center">
        <h1 className="font-astralaga text-xl font-semibold italic text-white/90 lg:text-4xl">
          {title}
        </h1>
      </div>
    </div>
  );
};
export default Header;
