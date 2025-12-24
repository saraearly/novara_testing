import React from "react";
import Header from "./Header";
import MainHero from "./MainHero";
import MainHeroImage from "./MainHeroImage";

const HeroSection = () => (
  <div className="relative">
    {/* Header */}
    <Header />

    <section className="relative w-full overflow-hidden h-[300px] lg:h-[600px]">
      {/* Gradient overlay (always full width) */}
      <div
        className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, #0f2a44 0%, #0f2a44 40%, rgba(15,42,68,0.0) 100%)",
        }}
      />

      <div className="relative z-20 px-6 py-12 lg:pl-16 flex items-center h-full">
        {/* Text */}
        <div className="max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
          <MainHero />
        </div>
      </div>

      {/* Image on right half for large screens */}
      <div className="absolute top-0 left-1/2 w-1/2 h-full z-0">
        <MainHeroImage className="w-full h-full object-cover" />
      </div>
    </section>
  </div>
);

export default HeroSection;
