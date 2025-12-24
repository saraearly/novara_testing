import React from "react";
import config from "../config/index.json";

const MainHero = () => {
  const { mainHero } = config;

  return (
    <div>
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white tracking-tight font-bold leading-tight">
        {/* First line: always one line on large screens */}
        <span className="inline-block whitespace-nowrap">
          {mainHero.title.replace("with NOVARA", "")}
        </span>

        {/* Second line: always 'with NOVARA' */}
        <span className="block">
          with{" "}
          <span
            className="inline-block bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(90deg, #7B2FF7 0%, #18D3C5 100%)",
            }}
          >
            NOVARA
          </span>
        </span>
      </h1>

      {/* Description */}
      <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-200 text-left lg:max-w-full">
        {mainHero.description}
      </p>
    </div>
  );
};

export default MainHero;
