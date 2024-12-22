import React from "react";
import SectionTitle from "../components/SectionTitle";
import { IoIosSearch } from "react-icons/io";
import { SlInfo } from "react-icons/sl";
import { TfiThumbUp } from "react-icons/tfi";
import { motion } from "framer-motion"

const HowItWorks = () => {
  return (
    <div className="bg-primaryDark duration-300 py-14 md:py-20">
      <div className="container section-padding">
        {/* title  */}
        <SectionTitle
          title="How It Works"
          description="Cum doctus civibus efficiantur in imperdiet deterruisset."
        />

        {/* Center divs */}
        <div className="mt-10 flex flex-col md:flex-row justify-between gap-10 md:gap-3">
          <div className="flex flex-col items-center gap-1.5">
            <IoIosSearch className="text-gold text-6xl" />
            <h2 className="text-[1.15rem] font-bold text-white text-center">
              Search Locations
            </h2>
            <p className="text-center text-white w-[90%] md:max-w-80">
              An nec placerat repudiare scripserit, temporibus complectitur at
              sea, vel ignota fierent eloquentiam id.
            </p>
          </div>

          <div className="flex flex-col items-center gap-1.5">
            <SlInfo className="text-gold text-5xl" />
            <h2 className="text-[1.15rem] font-bold text-white text-center">
              View Location Info
            </h2>
            <p className="text-center text-white w-[90%] md:max-w-80">
              An nec placerat repudiare scripserit, temporibus complectitur at
              sea, vel ignota fierent eloquentiam id.
            </p>
          </div>

          <div className="flex flex-col items-center gap-1.5">
            <TfiThumbUp className="text-gold text-6xl" />
            <h2 className="text-[1.15rem] font-bold text-white text-center">
              Book, Reach or Call
            </h2>
            <p className="text-center text-white w-[90%] md:max-w-80">
              An nec placerat repudiare scripserit, temporibus complectitur at
              sea, vel ignota fierent eloquentiam id.
            </p>
          </div>
        </div>

        {/* Register button */}
        <div
          className="text-center mt-14">
          <button
            
            className="font-bold text-white bg-primary px-6 py-2.5 rounded-full hover:bg-gold hover:text-black duration-300 ease-in">
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
