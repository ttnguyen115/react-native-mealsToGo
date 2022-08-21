import React from "react";
import { ActivityIndicator, TouchableOpacity } from "react-native";
import { Colors } from "react-native-paper";
import styled from "styled-components/native";
import Animations from "../../components/Animations";
import FavouritesBar from "../../components/Favourite/FavouritesBar";
import RestaurantInfoCard from "../../components/RestaurantInfoCard";
import { SafeArea } from "../../components/SafeArea";
import Search from "../../components/Search";
import Spacer from "../../components/Spacer";
import { FavouritesContext } from "../../services/favourites/context";
import { RestaurantContext } from "../../services/restaurants/context";
import { RestaurantList } from "./style";

const RestaurantsScreen = ({ navigation }) => {
  const { loading, restaurants } = React.useContext(RestaurantContext);
  const { favourites } = React.useContext(FavouritesContext);
  const [isToggle, setIsToggle] = React.useState(false);

  return (
    <SafeArea>
      {loading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <Search
        isFavouritesToggle={isToggle}
        onFavouritesToggle={() => setIsToggle(!isToggle)}
      />
      {isToggle && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("RestaurantDetail", {
                restaurant: item,
              })
            }
          >
            <Spacer position="bottom" size="large">
              <Animations>
                <RestaurantInfoCard restaurant={item} />
              </Animations>
            </Spacer>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

export default RestaurantsScreen;
