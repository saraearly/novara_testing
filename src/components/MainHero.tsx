import React from "react";

import config from "../config/index.json";

const MainHero = () => {
  const { mainHero } = config;
  // Split subtitle to separate "NOVARA" for gradient
  const subtitleParts = mainHero.subtitle.split("NOVARA");
  // Split "with" to make it black
  const withPart = subtitleParts[0]?.split("with");
  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left">
        <h1
          className="text-4xl tracking-tight font-bold sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ color: "#00005eff" }}
        >
          <span className="block xl:inline">{mainHero.title}</span>{" "}
          <span className={`block xl:inline`}>
            {withPart?.[0] || ""}
            <span>with</span>
            {withPart?.[1] || ""}
            <span className="inline bg-gradient-to-r from-purple-600 to-blue-300 bg-clip-text text-transparent play-regular ml-2">
              NOVARA{subtitleParts[1]}
            </span>
          </span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          {mainHero.description}
        </p>
      </div>
    </main>
  );
};

export default MainHero;
