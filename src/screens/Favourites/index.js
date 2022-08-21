import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import RestaurantInfoCard from "../../components/RestaurantInfoCard";
import { SafeArea } from "../../components/SafeArea";
import Spacer from "../../components/Spacer";
import Typography from "../../components/Typography";
import { FavouritesContext } from "../../services/favourites/context";
import { RestaurantList } from "../Restaurants/style";

const FavouritesScreen = ({ navigation }) => {
  const { favourites } = React.useContext(FavouritesContext);

  if (!favourites.length) {
    return (
      <NoFavouritesArea>
        <Typography center>No favourites yet</Typography>
      </NoFavouritesArea>
    );
  }

  return (
    <SafeArea>
      <RestaurantList
        data={favourites}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("RestaurantDetail", {
                restaurant: item,
              })
            }
          >
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};

const NoFavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

export default FavouritesScreen;
