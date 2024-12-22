import React from "react";
import { MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";

const ImageBox = ({ name, imgLink, rating }) => {
  return (
    <div className="relative h-48 md:h-fit group rounded-[4px] overflow-hidden cursor-pointer z-0">
      <img
        src={imgLink}
        className="w-full h-full object-cover group-hover:scale-110 duration-300"
        alt=""
      />
      {/* Overlay */}
      <div className=" z-10 absolute bottom-0 left-0 w-full h-[40%] bg-black [mask-image:linear-gradient(to_top,black_10%,transparent)]" />
      <div className="z-10 absolute w-full left-0 bottom-0 py-1.5 px-3">
        {/* Rating */}
        {rating && (
          <div className="flex">
            {new Array(Number(rating)).fill(0).map((_, idx) => (
              <MdOutlineStar key={idx} className="text-[#ffc107]" />
            ))}
            {new Array(Number(4 - rating)).fill(0).map((_, idx) => (
              <MdOutlineStarBorder key={idx} className="text-[#ffc107]" />
            ))}
          </div>
        )}

        <h2 className="font-bold text-white">{name}</h2>
      </div>
    </div>
  );
};

export default ImageBox;
