import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-scroll";
import Image from "next/image";
import config from "../config/index.json";

const Header = () => {
  const { navigation, company } = config;
  const { name: companyName, logo } = company;

  return (
    <header className="w-full bg-[#091232ff] py-5">
      <Popover>
        <div className="relative px-4 sm:px-6 lg:px-12">
          <nav
            className="relative flex items-center justify-between sm:h-12 w-full"
            aria-label="Global"
          >
            {/* Logo on the left */}
            <div className="flex-shrink-0">
              <a href="#">
                <span className="sr-only">{companyName}</span>
                <Image
                  src={logo}
                  alt="logo"
                  width={128}
                  height={}
                  className="h-10 w-auto sm:h-12"
                />
              </a>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex space-x-12">
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

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <Popover.Button className="bg-[#0f2a44] rounded-md p-2 inline-flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#14436a] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary">
                <span className="sr-only">Open main menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          </nav>
        </div>

        {/* Mobile menu panel */}
        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-md bg-[#0b1b56ff] ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <Image
                  src={logo}
                  alt={companyName}
                  width={64}
                  height={64}
                  className="h-8 w-auto"
                />
                <Popover.Button className="bg-[#0f2a44] rounded-md p-2 inline-flex items-center justify-center text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary">
                  <span className="sr-only">Close main menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <div className="px-2 pt-2 pb-3 space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    spy={true}
                    smooth={true}
                    duration={1000}
                    className="block px-3 py-2 rounded-md text-lg font-semibold text-gray-300 hover:text-white cursor-pointer"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  );
};

export default Header;
