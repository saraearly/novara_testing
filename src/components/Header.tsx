import React from "react";
import { Link } from "react-scroll";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
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
      <Popover className="relative">
        <div className="flex items-center justify-between h-14 px-4">
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 pr-4">
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

          {/* Mobile Hamburger */}
          <div className="flex md:hidden pr-4">
            <Popover.Button className="bg-transparent p-2 inline-flex items-center justify-center text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-background divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <Image
                      src={logo}
                      alt="logo"
                      width={40}
                      height={40}
                      className="h-8 w-auto"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-background rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        smooth
                        duration={1000}
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 cursor-pointer"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  );
};

export default Header;
