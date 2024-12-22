import React, { useEffect } from "react";
import Hero from "../sections/Hero";
import Category from "../sections/Category";
import bg from "/img/bg_aside.svg";
import ExplorePlaces from "../sections/ExplorePlaces";
import HowItWorks from "../sections/HowItWorks";
import DomainApp from "../sections/DomainApp";
import SignInPopup from "../components/SignInPopup";

const Home = () => {
  return (
    <div className="relative bg-white z-0 -mt-20 overflow-hidden">
      <img
        src={bg}
        className="absolute w-full h-full object-cover bottom-0 left-0 md:scale-125 -z-10"
        alt=""
      />
      <div className="relative overflow-visible">
        <Hero />
        <Category />
      </div>
      <ExplorePlaces />
      <HowItWorks />
      <DomainApp />
    </div>
  );
};

export default Home;
