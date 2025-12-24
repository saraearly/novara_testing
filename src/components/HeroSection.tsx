import React from "react";
import Header from "./Header";
import MainHero from "./MainHero";
import MainHeroImage from "./MainHeroImage";

const HeroSection = () => (
  <div className="relative">
    {/* Header at top */}
    <Header />

    <section className="w-full relative flex items-center lg:h-[600px] overflow-hidden">
      {/* Hero image */}
      <div className="absolute inset-0 lg:inset-y-0 lg:left-1/2 lg:w-1/2 z-0">
        <MainHeroImage />
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute left-0 top-0 bottom-0 w-full lg:w-1/2 z-10"
        style={{
          background:
            "linear-gradient(90deg, #0f2a44 0%, rgba(15,42,68,0.0) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Text container */}
      <div className="relative z-20 w-full px-6 py-12 lg:py-0 lg:w-1/2 lg:pl-16 flex flex-col justify-center">
        <div className="max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
          <MainHero />
        </div>
      </div>
    </section>
  </div>
);

export default HeroSection;
