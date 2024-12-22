import React, { useEffect, useState } from "react";
import { categoryOptions } from "../menuItems";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { LiaAngleDownSolid } from "react-icons/lia";

const HeroForm = () => {
  const [showCategoryOptions, setShowCategoryOptions] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  // Close Category options on click outside
  useEffect(() => {
    const handleClickOutside = () => {
      setShowCategoryOptions(false);
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <form className="flex flex-col lg:flex-row justify-center px-5 gap-1.5 lg:gap-0">
        {/* Search bar */}
        <div className="relative lg:w-[310px] xl:w-[370px]">
          <input
            className="text-[0.9rem] font-semibold w-full outline-none py-3.5 pl-4 pr-10 text-[#272727] placeholder:text-[#6c757d] rounded-[4px] lg:rounded-none lg:rounded-tl-[4px] lg:rounded-bl-[4px]"
            type="text"
            placeholder="What are you looking for..."
          />
          <IoIosSearch className="text-2xl absolute top-1/2 -translate-y-1/2 right-3 text-[#9b9b9b] rotate-90" />
        </div>

        {/* Location */}
        <div className="relative lg:w-[232px] xl:w-[270px]">
          <input
            className="text-[0.9rem] font-semibold w-full outline-none py-3.5 pl-4 pr-10 text-[#272727] placeholder:text-[#6c757d] border-x-0  lg:border-x border-x-gray-300 rounded-[4px] lg:rounded-none"
            type="text"
            placeholder="Where"
          />
          <IoLocationOutline className="text-2xl absolute top-1/2 -translate-y-1/2 right-3 text-[#9b9b9b]" />
        </div>

        {/* Select */}
        <div
          onClick={(e) => {
            setShowCategoryOptions((prev) => !prev);
            e.stopPropagation();
          }}
          className="relative lg:w-[232px] xl:w-[270px] cursor-pointer"
        >
          <p className="bg-white  text-[0.9rem] font-semibold w-full py-3.5 pl-4 pr-10 text-[#6c757d] rounded-[4px] lg:rounded-none">
            {selectedCategory ? selectedCategory : "All Categories"}
          </p>
          <LiaAngleDownSolid
            className={`absolute top-1/2 -translate-y-1/2 right-3 text-[#9b9b9b] duration-150 ${
              showCategoryOptions ? "-rotate-180" : "rotate-0"
            }`}
          />

          {/* Options */}
          <div
            className={`absolute w-full h-[180px] top-full mt-1 bg-white rounded-[4px] origin-top duration-100 ease-in custom-scrollbar ${
              showCategoryOptions
                ? "visible opacity-100 scale-100"
                : "invisible opacity-0 scale-75"
            }`}
          >
            {categoryOptions.map((option, idx) => (
              <p
                onClick={() => setSelectedCategory(option.name)}
                key={idx}
                className="text-[0.9rem] font-medium py-2 px-4 text-[#272727] cursor-pointer hover:bg-[#f6f6f6] duration-300"
              >
                {option.name}
              </p>
            ))}
          </div>
        </div>

        <button className="mt-3.5 lg:mt-0 lg:w-[155px] xl:w-[185px] font-bold text-white bg-primary px-3 py-3 rounded-[4px] lg:rounded-none lg:rounded-tr-[4px] lg:rounded-br-[4px] hover:bg-gold hover:text-black duration-300 ease-in">
          Search
        </button>
      </form>
    </>
  );
};

export default HeroForm;
