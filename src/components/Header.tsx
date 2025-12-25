import React from "react";
import { Link } from "react-scroll";
import Image from "next/image";
import config from "../config/index.json";

const Header = () => {
  const { navigation, company } = config;
  const { name: companyName, logo } = company;

  return (
    <header className="w-full bg-[#091232ff] py-5">
      <div className="relative px-4 sm:px-6 lg:px-12">
        <nav className="flex items-center justify-between w-full" aria-label="Global">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#">
              <span className="sr-only">{companyName}</span>
              <Image
                src={logo}
                alt="logo"
                width={128}
                height={128}
                className="h-12 w-auto sm:h-16"
              />
            </a>
          </div>

          {/* Navigation links - always visible */}
          <div className="flex flex-wrap space-x-6 sm:space-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                spy={true}
                smooth={true}
                duration={1000}
                className="text-lg font-semibold text-gray-300 hover:text-white cursor-pointer"
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
