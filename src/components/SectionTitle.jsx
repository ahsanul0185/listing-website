import React from "react";

const SectionTitle = ({ title, description, isBlackText }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-[#e1e1e1] w-28 h-[3px] mb-5">
        <span className="block w-1/2 h-full mx-auto bg-primary"></span>
      </div>
      <h2 className={`text-2xl md:text-[1.9rem] font-bold ${isBlackText ? "text-[#333333]" : "text-white"}`}>{ title }</h2>
      <p className={`text-xl md:text-2xl px-2 text-center ${isBlackText ? "text-[#555555]" : "text-white"}`}>
        { description }
      </p>
    </div>
  );
};

export default SectionTitle;
