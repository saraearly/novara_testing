import React from "react";
import config from "../config/index.json";

const MainHero = () => {
  const { mainHero } = config;
  const subtitleParts = (mainHero.subtitle || "").split("NOVARA");
  const withPart = subtitleParts[0]?.split("with");

  return (
    <div>
      {/* Title — set to white so it reads over the dark gradient */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white tracking-tight font-bold">
        <span className="block xl:inline">{mainHero.title}</span>{" "}
        <span className="block xl:inline">
          {withPart?.[0] || ""}
          <span className="mx-1">with</span>
          {withPart?.[1] || ""}
          <span className="inline bg-gradient-to-r from-purple-600 to-blue-300 bg-clip-text text-transparent ml-2">
            NOVARA{subtitleParts[1] || ""}
          </span>
        </span>
      </h1>

      {/* Description */}
      <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-200"></p>
    </div>
  );
};

export default MainHero;
