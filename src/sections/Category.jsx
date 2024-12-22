import React from "react";
import { GiShoppingBag } from "react-icons/gi";
import { FaBed, FaGlassMartini } from "react-icons/fa";
import { RiRestaurantFill } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";

const Category = () => {
  return (
    <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 container mx-auto px-6 md:px-12 z-10">
      <div className="flex justify-around items-center w-full md:max-w-[999px] mx-auto bg-white rounded-[4px] shadow-md px-3 md:px-5 py-3">
        <div className="flex flex-col items-center gap-1 cursor-pointer group">
          <GiShoppingBag className="text-2xl text-primary duration-200 group-hover:text-[#111111]" />
          <p className="hidden md:block text-[1.1rem] text-gray-900 font-semibold">
            Shops
          </p>
        </div>

        <div className="h-12 md:h-16 bg-gray-300 w-[0.2px]" />

        <div className="flex flex-col items-center gap-1 cursor-pointer group">
          <FaBed className="text-2xl text-primary duration-200 group-hover:text-[#111111]" />
          <p className="hidden md:block text-[1.1rem] text-gray-900 font-semibold">
            Hotels
          </p>
        </div>

        <div className="h-12 md:h-16 bg-gray-300 w-[0.2px]" />

        <div className="flex flex-col items-center gap-1 cursor-pointer group">
          <RiRestaurantFill className="text-2xl text-primary duration-200 group-hover:text-[#111111]" />
          <p className="hidden md:block text-[1.1rem] text-gray-900 font-semibold">
            Restaurants
          </p>
        </div>

        <div className="h-12 md:h-16 bg-gray-300 w-[0.2px]" />

        <div className="flex flex-col items-center gap-1 cursor-pointer group">
          <FaGlassMartini className="text-2xl text-primary duration-200 group-hover:text-[#111111]" />
          <p className="hidden md:block text-[1.1rem] text-gray-900 font-semibold">
            Bars
          </p>
        </div>

        <div className="h-12 md:h-16 bg-gray-300 w-[0.2px]" />

        <div className="flex flex-col items-center gap-1 cursor-pointer group">
          <BsThreeDots className="text-2xl text-primary duration-200 group-hover:text-[#111111]" />
          <p className="hidden md:block text-[1.1rem] text-gray-900 font-semibold">
            More
          </p>
        </div>
      </div>
    </div>
  );
};

export default Category;
