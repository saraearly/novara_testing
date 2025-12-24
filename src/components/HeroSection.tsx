import React from "react";
import Header from "./Header";
import MainHero from "./MainHero";
import MainHeroImage from "./MainHeroImage";

const HeroSection = () => (
  <div className="relative">
    {/* Header at top */}
    <Header />

    <section className="relative grid grid-cols-1 lg:grid-cols-2 w-full overflow-hidden">
    {/* Left side (text + gradient) */}
    <div className="relative flex items-center px-6 py-12 lg:pl-16">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f2a44] to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
        <MainHero />
        </div>
    </div>

    {/* Right side (image) */}
    <div className="h-[300px] lg:h-[600px]">
        <MainHeroImage className="w-full h-full object-cover" />
    </div>
    </section>

  </div>
);

export default HeroSection;
