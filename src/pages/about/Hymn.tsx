import CustomBreadcrumb from "@/components/BreadCrumb";
import Header from "@/components/Header";
import PageLayout from "@/components/PageLayout";
import { clarcAssets } from "@/utils/link_images";

import React from "react";
import AboutUs from "./components/AboutUsSide";

const Hymn: React.FC = () => {
  const img = clarcAssets.colored_logo.gold;
  const title = "Clarendon Hymn"; //made this empty so i can avoid redundancy
  const headerConfig = {
    imageWrapperClassName: "absolute inset-4",
    bgImageClassName: "bg-contain",
    containerClassName: "bg-clarc-blue lg:mb-0",
    backdropClassName: "absolute inset-0",
    titleClassName:
      "text-clarc-white not-italic uppercase font-universal_serif tracking-wider",
  };
  const h2Style = "mb-2 text-lg font-semibold text-center";
  const pStyle = "text-center text-base";
  const mainContent = (
    <div className="flex min-h-screen items-center justify-center pb-24 lg:pb-48">
      <div className="w-full max-w-2xl overflow-hidden">
        <div className="space-y-6 text-gray-600">
          <div>
            <h2 className={h2Style}>I.</h2>
            <p className={pStyle}>
              Clarendon, mabuhay ka! Tanglaw na ilaw sa kadiliman.
              <br />
              Pag-asa ng bayan, iyong gabayan
              <br />
              Tungo sa bagong kasaysayan.
            </p>
          </div>
          <div>
            <h2 className={h2Style}>II.</h2>
            <p className={pStyle}>
              Mataas na antas ng kaalaman
              <br />
              Hinahangad na tanging yaman.
              <br />
              Edukasyong makatao at makabayan,
              <br />
              Tugon sa pangangailangan.
            </p>
          </div>
          <div>
            <h2 className={h2Style}>Koro 1</h2>
            <p className={pStyle}>
              Kabutihan, kahusayan,
              <br />
              Kadakilaan para sa kinabukasan!
              <br />
              Para sa sarili, pamilya, at bayan,
              <br />
              Magbunyi ka, Clarendon!
            </p>
          </div>
          <div>
            <h2 className={h2Style}>III.</h2>
            <p className={pStyle}>
              Lunduyan ka ng kaalaman,
              <br />
              Husay ng kabataan!
              <br />
              Ilaw ka ng sambayanan,
              <br />
              Gabay magpakailanman!
            </p>
          </div>
          <div>
            <h2 className={h2Style}>Koro 1</h2>
            <p className={pStyle}>
              Kabutihan, kahusayan,
              <br />
              Kadakilaan para sa kinabukasan!
              <br />
              Para sa sarili, pamilya, at bayan,
              <br />
              Magbunyi ka, Clarendon!
            </p>
          </div>
          <div>
            <h2 className={h2Style}>Koro 2</h2>
            <p className={pStyle}>
              Hangad namin ay katatagan,
              <br />
              Lakas ng puso at isipan
              <br />
              Upang magsilbi sa Diyos at sa Bayan.
              <br />
              Magbunyi ka, Clarendon!
            </p>
          </div>
          <p className="mt-6 text-center font-semibold">
            Clarendon, mabuhay ka!
          </p>
        </div>
      </div>
    </div>
  );
  const pageContent = (
    <div className="no-scrollbar min-h-svh flex-grow lg:h-[calc(100vh-2rem)] lg:overflow-y-auto lg:px-16">
      <div className="lg:px-0">
        <CustomBreadcrumb
          currentPage="Hymn"
          secondLink="/about"
          secondTitle="About"
        />
        <Header img={img} title={title} headerConfig={headerConfig} />
        <div className="px-6 py-5 md:px-2">{mainContent}</div>
      </div>
    </div>
  );
  return <PageLayout mainContent={pageContent} sidebarContent={<AboutUs />} />;
};

export default Hymn;
