import React from "react";
import config from "../config/index.json";

const MainHero = () => {
  const { mainHero } = config;

  return (
    <div>
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white tracking-tight font-bold leading-tight">
        {/* First line on large screens */}
        <span className="block lg:block">
          Innovate medical{" "}
          <span className="hidden lg:inline">intelligence</span>
        </span>

        {/* Second line */}
        <span className="block">
          {/* For smaller screens, include "intelligence" again */}
          <span className="lg:hidden">intelligence </span>
          with{" "}
          <span className="bg-gradient-to-r from-purple-600 to-blue-300 bg-clip-text text-transparent">
            NOVARA
          </span>
        </span>
      </h1>

      {/* Description */}
      <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-200 max-w-lg">
        {mainHero.description}
      </p>
    </div>
  );
};

export default MainHero;
