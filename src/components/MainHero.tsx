import React from "react";
import config from "../config/index.json";

const MainHero = () => {
  const { mainHero } = config;
  const subtitleParts = (mainHero.subtitle || "").split("NOVARA");
  const withPart = subtitleParts[0]?.split("with");

  return (
    <div>
      {/* Title — set to white so it reads over the dark gradient */}
      <h1 className="text-3xl tracking-tight font-bold sm:text-4xl md:text-5xl lg:text-6xl text-white">
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
      <p className="mt-4 text-xl md:text-2xl text-gray-200">
        {mainHero.description}
      </p>
    </div>
  );
};

export default MainHero;
