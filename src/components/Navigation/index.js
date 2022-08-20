import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Text } from "react-native";
import MapScreen from "../../screens/MapScreen";
import { AuthenticationContext } from "../../services/authentication/context";
import { SafeArea } from "../SafeArea";
import AccountNavigator from "./AccountNavigator";
import RestaurantNavigator from "./RestaurantNavigator";

const Tab = createBottomTabNavigator();

const SettingsScreen = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const Navigation = () => {
  const { isAuthenticated } = React.useContext(AuthenticationContext);
  const createScreenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];
    return {
      headerShown: false,
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBarIcon: ({ size, color }) => (
        <Ionicons name={iconName} size={size} color={color} />
      ),
    };
  };

  return (
    <React.Fragment>
      <NavigationContainer>
        {isAuthenticated ? (
          <Tab.Navigator screenOptions={createScreenOptions}>
            <Tab.Screen name="Restaurants" component={RestaurantNavigator} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        ) : (
          <AccountNavigator />
        )}
      </NavigationContainer>
    </React.Fragment>
  );
};

export default Navigation;
