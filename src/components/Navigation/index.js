import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import CheckoutScreen from "../../screens/Checkout";
import MapScreen from "../../screens/MapScreen";
import { AuthenticationContext } from "../../services/authentication/context";
import { CartContextProvider } from "../../services/cart/context";
import { FavouritesContextProvider } from "../../services/favourites/context";
import { LocationContextProvider } from "../../services/location/context";
import { RestaurantContextProvider } from "../../services/restaurants/context";
import AccountNavigator from "./AccountNavigator";
import RestaurantNavigator from "./RestaurantNavigator";
import SettingsNavigator from "./SettingsNavigator";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Checkout: "md-cart",
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
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantContextProvider>
          <CartContextProvider>
            <NavigationContainer>
              {isAuthenticated ? (
                <Tab.Navigator screenOptions={createScreenOptions}>
                  <Tab.Screen
                    name="Restaurants"
                    component={RestaurantNavigator}
                  />
                  <Tab.Screen name="Checkout" component={CheckoutScreen} />
                  <Tab.Screen name="Map" component={MapScreen} />
                  <Tab.Screen name="Settings" component={SettingsNavigator} />
                </Tab.Navigator>
              ) : (
                <AccountNavigator />
              )}
            </NavigationContainer>
          </CartContextProvider>
        </RestaurantContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};

export default Navigation;
