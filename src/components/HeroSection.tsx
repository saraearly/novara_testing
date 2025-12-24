import React from "react";
import MainHero from "./MainHero";
import MainHeroImage from "./MainHeroImage";

const HeroSection = () => {
  return (
    <div className="w-full relative lg:h-[600px]">
      {/* Hero Image */}
      <MainHeroImage />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f2a44] to-transparent lg:w-1/2"></div>

      {/* Text overlay */}
      <div className="absolute inset-0 flex items-center lg:pl-16 px-6">
        <div className="max-w-lg text-left">
          <MainHero />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
