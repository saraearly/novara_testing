import React from "react";
import config from "../config/index.json";

type MainHeroImageProps = {
  className?: string;
};

const MainHeroImage = ({ className }: MainHeroImageProps) => {
  const { mainHero } = config;

  return (
    <img
      src={mainHero.img}
      alt="Hero image"
      className={className}
    />
  );
};

export default MainHeroImage;
