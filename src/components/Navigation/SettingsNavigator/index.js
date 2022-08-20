import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import React from "react";
import FavouritesScreen from "../../../screens/Favourites";
//import SettingsScreen from "../../../screens/Settings";

const SettingsStack = createStackNavigator();

const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerShown: "screen",
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingsStack.Screen
        options={{ header: () => null }}
        name="Favourites"
        component={FavouritesScreen}
      />
      <SettingsStack.Screen
        options={{ header: () => null }}
        name="Settings"
        component={() => null}
      />
    </SettingsStack.Navigator>
  );
};

export default SettingsNavigator;
