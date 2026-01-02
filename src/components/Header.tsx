import React from "react";
import { Link } from "react-scroll";
import Image from "next/image";
import config from "../config/index.json";

const Header = () => {
  const { navigation, company } = config;
  const { name: companyName, logo } = company;

  return (
    <header className="w-full bg-[#091232ff]">
      <nav className="flex items-center justify-between h-14 px-4">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <span className="sr-only">{companyName}</span>
          <Image
            src={logo}
            alt="logo"
            width={96}
            height={96}
            className="h-7 w-auto"
            priority
          />
        </a>

        {/* Navigation */}
        <div className="flex items-center gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              smooth
              duration={1000}
              className="text-sm font-semibold leading-none text-gray-300 hover:text-white cursor-pointer whitespace-nowrap"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
