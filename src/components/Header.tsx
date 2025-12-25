import React from "react";
import { Link } from "react-scroll";
import Image from "next/image";
import config from "../config/index.json";

const Header = () => {
  const { navigation, company } = config;
  const { name: companyName, logo } = company;

  return (
    <header className="w-full bg-[#091232ff] py-2 sm:py-3">
      <div className="px-4 sm:px-6 lg:px-12">
        <nav
          className="flex items-center justify-between w-full"
          aria-label="Global"
        >
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#">
              <span className="sr-only">{companyName}</span>
              <Image
                src={logo}
                alt="logo"
                width={128}
                height={128}
                className="h-10 w-auto sm:h-12"
              />
            </a>
          </div>

          {/* Navigation — ALWAYS visible */}
          <div className="flex space-x-8 sm:space-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                spy={true}
                smooth={true}
                duration={1000}
                className="text-sm sm:text-lg font-semibold text-gray-300 hover:text-white cursor-pointer whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
