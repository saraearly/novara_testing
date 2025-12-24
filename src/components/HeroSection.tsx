import React from "react";
import Header from "./Header";
import MainHero from "./MainHero";
import MainHeroImage from "./MainHeroImage";
import Logo from "../assets/images/network_bluebackground.png"; // Replace with your logo path
import Image from "next/image";

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
            "linear-gradient(90deg, #091232ff 0%, #151f41ff 30%, rgba(15,42,68,0.0) 100%)",
        }}
      />

      <div className="relative z-20 px-4 sm:px-6 lg:pl-16 flex items-center h-full">
        {/* Text */}
        <div className="text-left px-4 sm:px-6 lg:pl-16 lg:max-w-none">
          <MainHero />
        </div>
      </div>

      {/* Image on right half for large screens */}
      <div className="absolute top-0 left-[30%] w-[70%] h-full z-0">
        <MainHeroImage className="w-full h-full object-cover" />
      </div>

      {/* Circular logo at the bottom center */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-30">
        <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden shadow-lg border-4 border-white">
          <Image src={Logo} alt="Logo" className="object-cover" width={128} height={128} />
        </div>
      </div>
    </section>
  </div>
);

export default HeroSection;
