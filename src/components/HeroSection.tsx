import React from "react";
import MainHero from "./MainHero";
import MainHeroImage from "./MainHeroImage";
import config from "../config/index.json";

const HeroSection = () => {
  const { mainHero } = config;

  return (
    <section className="w-full relative lg:h-[600px]">
      {/* Hero image (right side on lg and up) */}
      <MainHeroImage />

      {/* Left gradient overlay - covers full width on small, half on lg */}
      <div
        className="absolute left-0 top-0 bottom-0 w-full lg:w-1/2"
        style={{
          background:
            "linear-gradient(90deg, #0f2a44 0%, rgba(15,42,68,0.0) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Text container — constrained to left half on large screens */}
      <div className="absolute inset-0 flex items-center">
        <div className="w-full lg:w-1/2 px-6 lg:pl-16">
          <div className="max-w-lg">
            <MainHero />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
