import React, { useState } from "react";
import { themes } from "../menuItems";
import { IoSettingsOutline } from "react-icons/io5";

const ColorSwitcher = ({ color, setTheme }) => {
  const [showColorSwitcher, setShowColorSwitcher] = useState(false);

  return (
    <div
      className={`hidden lg:block fixed top-56 left-0 z-10 duration-500 shadow-lg ${
        showColorSwitcher ? "-translate-x-0" : "-translate-x-[80%]"
      }`}
    >
      <div className="py-2.5 flex items-center justify-between pr-3 gap-16 bg-[#f8f8f8] rounded-tr-md rounded-br-md">
        <h2 className="font-semibold text-gray-700 px-5">Color Switcher</h2>
        <IoSettingsOutline
          onClick={() => setShowColorSwitcher((prev) => !prev)}
          className="text-2xl text-gray-700 cursor-pointer"
        />
      </div>

      {/* theme colors */}
      <div className="absolute flex flex-wrap rounded-br-md p-5 gap-2 shadow-lg top-full left-0 w-[80%] bg-white">
        {themes.map((theme, idx) => (
            <button
                key={idx}
            style={{ backgroundColor: theme.color }}
            onClick={() => setTheme(theme.name)}
            className={`rounded-sm size-4 duration-300 ${
              theme.name === color ? "scale-75" : "scale-100"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ColorSwitcher;
