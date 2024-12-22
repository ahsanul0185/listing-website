import React from "react";
import { famousShops, populerHotels, topRestaurants } from "../menuItems";
import ImageBox from "../components/ImageBox";
import Title from "../components/Title";

const ExplorePlaces = () => {
  return (
    <div className="pt-28 md:pt-40 pb-20 container section-padding flex flex-col gap-16">
      {/* Famous Shops  */}
      <div>
        <Title
          title="Famous Shops"
          description="Cum doctus civibus efficiantur in imperdiet deterruisset."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-5">
          {famousShops.map((item, idx) => (
            <ImageBox key={idx} name={item.name} imgLink={item.imgLink} />
          ))}
        </div>
      </div>

      {/* Populer Hotels */}
      <div>
        <Title
          title="Populer Hotels"
          description="Cum doctus civibus efficiantur in imperdiet deterruisset."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-5">
          {populerHotels.map((item, idx) => (
            <ImageBox
              key={idx}
              name={item.name}
              imgLink={item.imgLink}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      {/* Top Restaurants  */}
      <div>
        <Title
          title="Top Restaurants"
          description="Cum doctus civibus efficiantur in imperdiet deterruisset."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-5">
          {topRestaurants.map((item, idx) => (
            <ImageBox key={idx} name={item.name} imgLink={item.imgLink} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExplorePlaces;
