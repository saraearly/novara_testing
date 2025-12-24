import React from "react";
import Menu from "./Menu";
import config from "../config/index.json";

const HeroSection = () => {
  const { mainHero } = config;

  // Split subtitle to separate "NOVARA" for gradient effect
  const subtitleParts = mainHero.subtitle.split("NOVARA");
  const withPart = subtitleParts[0]?.split("with");

  return (
    <div className="w-full relative">
      {/* Header */}
      <Menu />

      {/* Hero container */}
      <div className="relative w-full lg:h-[600px]">
        {/* Hero Image */}
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src={mainHero.img}
            alt={mainHero.alt || "Hero image"}
          />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f2a44] to-transparent lg:w-1/2"></div>

        {/* Text overlay */}
        <div className="absolute inset-0 flex items-center lg:pl-16 px-6">
          <div className="max-w-lg text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
              <span className="block xl:inline">{mainHero.title}</span>{" "}
              <span className="block xl:inline">
                {withPart?.[0] || ""} <span>with</span> {withPart?.[1] || ""}
                <span className="inline bg-gradient-to-r from-purple-600 to-blue-300 bg-clip-text text-transparent ml-2">
                  NOVARA{subtitleParts[1]}
                </span>
              </span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-200">
              {mainHero.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
