import React, { useState } from "react";
import { menuItems } from "../menuItems";
import HamburgerButton from "../components/HamburgerButton";
import { SlLogin } from "react-icons/sl";
import { IoIosHeartEmpty } from "react-icons/io";
import { TfiAngleRight } from "react-icons/tfi";

const Header = ({ isMobileMenuOpen, setIsMobileMenuOpen, setIsShowSignPopup, scrolled }) => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  return (
    <div
      className={`sticky w-full top-0 left-0 z-10 flex items-center justify-center
        ${
          scrolled
            ? "h-16 bg-white border-b border-b-gray-200 px-4 md:px-12  duration-300"
            : "h-20 px-6 md:px-14  border-b border-b-transparent duration-300"
        }`}
    >
      <div className="flex justify-between items-center gap-2 w-full">
        {/* Mobile Hamburger Button */}
        <div
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="md:hidden rotate-180 scale-90"
        >
          <HamburgerButton
            isOpen={isMobileMenuOpen}
            color={scrolled ? "#444444" : "#fff"}
          />
        </div>

        {/* Logo */}
        <div className="text-2xl text-blue-600 font-bold absolute top-[22px] md:top-4 left-1/2 -translate-x-1/2 md:static md:-translate-x-0">
          Logo
        </div>

        {/* navbar */}
        <nav className="flex items-center gap-8 text-sm">
          {/* Left menu items */}
          <ul className="hidden md:flex items-center gap-5 font-bold">
            {menuItems.map((item, idx) => (
              <li
                key={idx}
                className={`relative group duration-300 cursor-pointer ${
                  scrolled
                    ? "text-[#444444] hover:text-primary"
                    : "text-white hover:text-white/50"
                }`}
              >
                <a href="#">{item.title}</a>
                {item.submenu && (
                  // Sub menu from Main menu
                  <div className="absolute pt-9 top-0 -left-2 text-black opacity-0 invisible group-hover:opacity-100 group-hover:visible origin-top-left scale-75 group-hover:scale-100 duration-300 group-hover:delay-300">
                    <div className="relative bg-white w-52 rounded-sm">
                      <div className="absolute -translate-y-full left-6 w-0 h-0 border-[8px] border-transparent border-b-white border-t-0"></div>

                      {item.submenu.map((item, idx) => (
                        <div
                          key={idx}
                          onMouseEnter={() =>
                            item.submenu && setShowSubMenu(item.title)
                          }
                          onMouseLeave={() =>
                            item.submenu && setShowSubMenu("")
                          }
                          className={`relative cursor-pointer font-normal text-nowrap px-2 py-3 border-b hover:text-primary hover:bg-[#f9f9f9] hover:pl-3 duration-300 ${
                            item.submenu
                              ? "flex items-center justify-between"
                              : ""
                          }`}
                        >
                          <a href="#">{item.title}</a>
                          {item.submenu && (
                            <TfiAngleRight className="text-gray-500" />
                          )}

                          {/* Sub menu from Sub menu Box */}
                          {item.submenu && (
                            <div
                              className={`absolute top-0 left-full w-48 bg-white duration-300 rounded-sm shadow-2xl origin-top ${
                                showSubMenu === item.title
                                  ? "scale-100 opacity-100 visible"
                                  : "scale-90 opacity-0 invisible"
                              }`}
                            >
                              {item.submenu.map((item, idx) => (
                                <div
                                  key={idx}
                                  className="text-nowrap px-2 py-3 border-b text-black hover:text-primary hover:bg-[#f9f9f9] hover:pl-3 duration-300"
                                >
                                  <a href="#">{item.title}</a>
                                </div>
                              ))}
                            </div>
                          )}
                          {/* ----------- */}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Right buttons div */}
          <div
            className={`flex items-center gap-3 ${
              scrolled ? "text-[#444444]" : "text-white"
            }`}
          >
            <button className="hidden md:block z-10 font-bold text-white bg-primary px-3 py-2 rounded-md hover:bg-gold hover:text-black duration-300 ease-in">
              Add Listing
            </button>
            <SlLogin
              onClick={(e) => { setIsShowSignPopup(true); e.stopPropagation() }}
              className={`text-[1.5rem] duration-300 cursor-pointer ${
                scrolled ? "hover:text-primary" : "hover:text-white/50"
              }`}
            />
            <IoIosHeartEmpty
              className={`text-[1.6rem] duration-300 cursor-pointer ${
                scrolled ? "hover:text-primary" : "hover:text-white/50"
              }`}
            />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
