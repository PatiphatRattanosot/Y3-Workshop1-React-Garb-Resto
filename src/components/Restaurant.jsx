import { useState } from "react";
import React from "react";
import Card from "./Card";

const Restaurant = ({ resto }) => {
  // loop create card
  // let restaurants;
  // if (resto) {
  //   restaurants = resto.map((restaurant, ) => (
  //     <Card
  //       key={restaurant.id}
  //       img={restaurant.img}
  //       title={restaurant.title}
  //       type={restaurant.type}
  //     />
  //   ));
  // } else {
  //   restaurants = <p>Loading...</p>;
  // }
  return (
    <div className="restaurantsList flex flex-wrap gap-4 justify-center ">
      {/* {restaurants} */}
      {resto &&
        resto.map((restaurant) => {
          return (
            <Card
              key={restaurant.id}
              img={restaurant.img}
              title={restaurant.title}
              type={restaurant.type}
            />
          );
        })}
    </div>
  );
};

export default Restaurant;
