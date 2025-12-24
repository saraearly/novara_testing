import React from "react";
import Header from "./Header";
import MainHero from "./MainHero";
import MainHeroImage from "./MainHeroImage";

const HeroSection = () => (
  <>
    {/* Header at top */}
    <Header />

    <section className="w-full relative lg:h-[600px] pt-20">
      {/* Hero image (right side on lg and up) */}
      <div className="relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 z-0">
        <MainHeroImage />
      </div>

      {/* Left gradient overlay */}
      <div
        className="absolute left-0 top-0 bottom-0 w-full lg:w-1/2 z-10"
        style={{
          background:
            "linear-gradient(90deg, #0f2a44 0%, rgba(15,42,68,0.0) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Text container */}
      <div className="absolute inset-0 flex items-center z-20">
        <div className="w-full lg:w-1/2 px-6 lg:pl-16">
          <div className="max-w-lg">
            <MainHero />
          </div>
        </div>
      </div>
    </section>
  </>
);

export default HeroSection;
