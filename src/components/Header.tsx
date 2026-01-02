import React from "react";
import { Link } from "react-scroll";
import Image from "next/image";
import config from "../config/index.json";

const Header = () => {
  const { navigation, company } = config;
  const { name: companyName, logo } = company;

  return (
    <header className="w-full bg-[#091232ff]">
      <div className="flex justify-start px-4 h-14 items-center">
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
      </div>

      <nav className="mx-auto max-w-7xl px-0 flex h-14 items-center justify-end gap-6">
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
      </nav>
    </header>
  );
};

export default Header;
