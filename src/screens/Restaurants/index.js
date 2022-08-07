import React from "react";
import { FlatList, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import RestaurantInfoCard from "../../components/RestaurantInfoCard";
import Spacer from "../../components/Spacer";

const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <RestaurantList
      data={[
        { name: 1 },
        { name: 2 },
        { name: 3 },
        { name: 4 },
        { name: 5 },
        { name: 6 },
        { name: 7 },
      ]}
      renderItem={() => (
        <React.Fragment>
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        </React.Fragment>
      )}
      keyExtractor={(item) => item.name}
    />
  </SafeArea>
);

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export default RestaurantsScreen;
