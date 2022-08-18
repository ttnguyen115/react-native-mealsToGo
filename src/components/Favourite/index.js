import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { FavouritesContext } from "../../services/favourites/context";

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

const Favourite = ({ restaurant }) => {
  const { favourites, addToFavourites, removeFromFavourites } =
    React.useContext(FavouritesContext);
  const isFavourite = favourites.find(
    (favourite) => favourite.placeId === restaurant.placeId
  );

  return (
    <FavouriteButton
      onPress={() =>
        !isFavourite
          ? addToFavourites(restaurant)
          : removeFromFavourites(restaurant)
      }
    >
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={24}
        color={isFavourite ? "red" : "white"}
      />
    </FavouriteButton>
  );
};

export default Favourite;
