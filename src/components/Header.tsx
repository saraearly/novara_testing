import React from "react";
import { Link } from "react-scroll";
import Image from "next/image";
import config from "../config/index.json";

const Header = () => {
  const { navigation, company } = config;
  const { name: companyName, logo } = company;
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-[#091232ff] shadow-md" : "bg-gray-900/40 backdrop-blur-sm"
        }`}
    >
      <nav className="flex items-center justify-between h-14 px-4">
        {/* Logo */}
        <a href="#" className="flex items-center pl-4">
          <span className="sr-only">{companyName}</span>
          <Image
            src={logo}
            alt="logo"
            width={96}
            height={96}
            className="h-10 w-auto"
            priority
          />
        </a>

        {/* Navigation */}
        <div className="flex items-center gap-6 pr-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              smooth
              duration={1000}
              className="text-base font-semibold leading-none text-white hover:text-gray-200 cursor-pointer whitespace-nowrap"
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
