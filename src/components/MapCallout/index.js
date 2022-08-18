import React from "react";
import CompactRestaurantInfo from "../CompactRestaurantInfo";

const MapCallout = ({ restaurant }) => {
  return <CompactRestaurantInfo isMap restaurant={restaurant} />;
};

export default MapCallout;
