import React from "react";
import { ActivityIndicator, FlatList, TouchableOpacity } from "react-native";
import { Colors } from "react-native-paper";
import styled from "styled-components/native";
import RestaurantInfoCard from "../../components/RestaurantInfoCard";
import { SafeArea } from "../../components/SafeArea";
import Search from "../../components/Search";
import Spacer from "../../components/Spacer";
import { RestaurantContext } from "../../services/restaurants/context";

const RestaurantsScreen = ({ navigation }) => {
  const { loading, restaurants } = React.useContext(RestaurantContext);

  return (
    <SafeArea>
      {loading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <Search />
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
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

export default RestaurantsScreen;
