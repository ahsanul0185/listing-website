import React, { useState } from "react";
import { menuItems } from "../menuItems";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const MobileMenu = () => {
  const [subMenuDepth, setSubMenuDepth] = useState(0);
  const [subMenuItems1, setSubMenuItems1] = useState({
    title: "",
    submenu: [],
  });
  const [subMenuItems2, setSubMenuItems2] = useState({
    title: "",
    submenu: [],
  });

  return (
    <div className="block md:hidden bg-[#333333] w-[75%] text-white h-screen fixed">
      <div className="relative">
        {/* ---------Main menu items--------- */}
        <div
          className={`duration-500  ${
            subMenuDepth > 0 ? "-translate-x-[30%]" : "-translate-x-0"
          }`}
        >
          <h2 className="text-center uppercase text-sm font-medium text-[#858585] py-3 border-b border-[#2b2b2b]">
            Menu
          </h2>
          {menuItems.map((item, idx) => (
            <div
              onClick={() => {
                setSubMenuDepth((prev) => prev + 1);
                setSubMenuItems1({ title: item.title, submenu: item.submenu });
              }}
              key={idx}
              className="pl-4 cursor-pointer text-sm"
            >
              <div className="py-3  border-b border-[#2b2b2b] flex justify-between items-center">
                {/* main menu title */}
                <p className="text-[#cccccc]">{item.title}</p>
                {/* main menu count left side */}
                <div className="flex items-center gap-2 text-[#858585] pr-4">
                  <span>{item.submenu.length}</span>
                  <FaAngleRight className="text-xl mt-[0.5px] scale-90" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ---------Sub menu items--------- */}
        <div
          className={`bg-[#333333] absolute top-0 left-0 w-full h-screen duration-500 ${
            subMenuDepth < 1
              ? "translate-x-full"
              : subMenuDepth > 1
              ? "-translate-x-[30%]"
              : "translate-x-0"
          }`}
        >
          <h2 className="relative text-center uppercase text-sm font-medium text-[#858585] py-3 border-b border-[#2b2b2b]">
            <span
              onClick={() => setSubMenuDepth((prev) => prev - 1)}
              className="cursor-pointer"
            >
              <FaAngleLeft className="text-2xl absolute left-3 top-1/2 -translate-y-1/2 mt-[0.35px] scale-90" />
            </span>
            {subMenuItems1.title}
          </h2>
          {subMenuItems1.submenu &&
            subMenuItems1.submenu.map((subMenuItem, idx) => (
              <div
                onClick={() => {
                  subMenuItem.submenu && setSubMenuDepth((prev) => prev + 1);
                  setSubMenuItems2({
                    title: subMenuItem.title,
                    submenu: subMenuItem.submenu,
                  });
                }}
                key={idx}
                className="pl-4 cursor-pointer text-sm"
              >
                <div className="py-3  border-b border-[#2b2b2b] flex justify-between items-center">
                  {/* sub menu title */}
                  <p className="text-[#cccccc]">{subMenuItem.title}</p>
                  {/* sub menu count left side */}
                  {subMenuItem.submenu && (
                    <div className="flex items-center gap-2 text-[#858585] pr-4">
                      <span>{subMenuItem.submenu.length}</span>
                      <FaAngleRight className="text-xl mt-[0.5px] scale-90" />
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>

        {/* ---------Sub Sub menu items--------- */}
        <div
          className={`bg-[#333333] absolute top-0 left-0 w-full h-screen duration-500 ${
            subMenuDepth < 2
              ? "translate-x-full"
              : subMenuDepth > 2
              ? "-translate-x-[30%]"
              : "translate-x-0"
          }`}
        >
          <h2 className="relative text-center uppercase text-sm font-medium text-[#858585] py-3 border-b border-[#2b2b2b]">
            <span
              onClick={() => setSubMenuDepth((prev) => prev - 1)}
              className="cursor-pointer"
            >
              <FaAngleLeft className="text-2xl absolute left-3 top-1/2 -translate-y-1/2 mt-[0.35px] scale-90" />
            </span>
            {subMenuItems2.title}
          </h2>
          {subMenuItems2.submenu &&
            subMenuItems2.submenu.map((subMenuItem, idx) => (
              <div
                onClick={() => {
                  subMenuItem.submenu && setSubMenuDepth((prev) => prev + 1);
                  setSubMenuItems2({
                    title: subMenuItem.title,
                    submenu: subMenuItem.submenu,
                  });
                }}
                key={idx}
                className="pl-4 cursor-pointer text-sm"
              >
                <div className="py-3  border-b border-[#2b2b2b] flex justify-between items-center">
                  {/* sub menu 2 title */}
                  <p className="text-[#cccccc]">{subMenuItem.title}</p>
                  {/* sub menu 2 count left side */}
                  {subMenuItem.submenu && (
                    <div className="flex items-center gap-2 text-[#858585] pr-4">
                      <span>{subMenuItem.submenu.length}</span>
                      <FaAngleRight className="mt-[0.35px] scale-90" />
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
