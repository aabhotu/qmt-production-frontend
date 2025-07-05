"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { HiOutlineXMark, HiBars3 } from "react-icons/hi2";
import Image from "next/image";
import { usePathname } from "next/navigation";

import Container from "./Container";
// import { siteDetails } from "@/data/siteDetails";
import { menuItems } from "@/data/menuItems";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // ✅ Class cho menu item (có underline + hover effect)
  const getLinkClass = (url: string) =>
    `relative font-semibold transition-all duration-300 ease-in-out 
    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] 
    after:bg-[#00B207] after:transition-all after:duration-300 after:ease-in-out 
    ${
      pathname === url
        ? "text-[#00B207] font-bold after:w-full"
        : "text-gray-800 hover:text-[#2C742F] after:w-0"
    }`;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 w-full">
      <Container className="!px-0">
        <nav className="flex items-center justify-between py-4 px-5 md:py-6">
          {/* Logo & Slogan */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/logo_1.png"
                alt="icon"
                width={180}
                height={50}
                quality={100}
                className="object-contain"
              />
              {/* <span className="text-2xl md:text-3xl font-bold text-black">
                {siteDetails.siteName}
              </span> */}
            </Link>
            <span className="hidden lg:inline font-bold text-gray-800 leading-tight">
              CÔNG TY CỔ PHẦN SẢN XUẤT VÀ ỨNG DỤNG CÔNG NGHỆ QUANG MINH
            </span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-lg font-semibold text-gray-800">
            {menuItems.map((item) => (
              <li key={item.text}>
                <Link href={item.url} className={getLinkClass(item.url)}>
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-black p-2 rounded-md focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <HiOutlineXMark className="h-6 w-6" />
              ) : (
                <HiBars3 className="h-6 w-6" />
              )}
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-100 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-4 py-4 px-6 text-base text-gray-800">
            {menuItems.map((item) => (
              <li key={item.text}>
                <Link
                  href={item.url}
                  onClick={toggleMenu}
                  className={getLinkClass(item.url)}
                >
                  {item.text}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#cta"
                onClick={toggleMenu}
                className="block text-center text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition"
              >
                Bắt đầu
              </Link>
            </li>
          </ul>
        </div>
      </Transition>
    </header>
  );
};

export default Header;