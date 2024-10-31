import { clarcAssets } from "@/utils/link_images";
import { Link } from "react-router-dom";

const culturalCenterImg = clarcAssets.images["cultural_center"];
const polkaPattern = clarcAssets.assets["polka_pattern"];

export default function CarpeDiemSection() {
  return (
    <section className="overflow-hidden py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="order-last space-y-8 lg:order-first">
            <h2 className="font-astralaga text-3xl font-bold uppercase leading-tight tracking-wide text-clarc-blue sm:text-4xl lg:text-5xl">
              Seize the Day
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-gray-700 sm:text-lg lg:text-xl">
              At Clarendon College, we embrace the philosophy of "Carpe Diem" -
              Seize the Day. Our commitment is to provide an environment where
              students can maximize their potential, take advantage of every
              opportunity, and prepare themselves for a future filled with
              promise and success.
            </p>
            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <Link
                to={"/about/philosophy-of-education"}
                className="group flex max-w-fit items-center justify-center space-x-2 rounded-full bg-clarc-blue px-6 py-3 text-sm font-semibold text-clarc-gold transition duration-300 hover:bg-clarc-gold hover:text-clarc-blue focus:outline-none md:text-base lg:px-6"
              >
                Philosophy of Education
              </Link>
              <button className="max-w-fit rounded-full border-2 border-indigo-900 px-6 py-3 text-sm font-semibold text-indigo-900 transition-colors duration-300 hover:border-clarc-gold hover:bg-clarc-gold/20 hover:text-clarc-gold md:text-base">
                Awards and Recognition
              </button>
            </div>
          </div>
          <div className="relative order-first lg:order-last">
            <div className="absolute bottom-0 right-0 -z-10 h-3/4 w-3/4 translate-x-1/4 translate-y-1/4 opacity-65">
              <img
                src={polkaPattern}
                alt=""
                className="h-full w-full rounded-lg object-cover"
                style={{ filter: "hue-rotate(10deg)" }}
              />
            </div>
            <div className="absolute left-0 top-0 -z-10 h-3/4 w-3/4 -translate-x-1/4 -translate-y-1/4 opacity-65">
              <img
                src={polkaPattern}
                alt=""
                className="h-full w-full rounded-lg object-cover"
                style={{ filter: "hue-rotate(10deg)" }}
              />
            </div>
            <img
              src={culturalCenterImg}
              alt="Cultural Center at Clarendon College"
              className="h-auto w-full rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
