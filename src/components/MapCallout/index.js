import React from "react";
import styled from "styled-components/native";

const MapCallout = ({ restaurant }) => {
  return <MyText>{restaurant.name}</MyText>;
};

const MyText = styled.Text``;

export default MapCallout;
