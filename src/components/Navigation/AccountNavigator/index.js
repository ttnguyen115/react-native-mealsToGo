import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import AccountScreen from "../../../screens/Account";
import LoginScreen from "../../../screens/Login";
import RegisterScreen from "../../../screens/Register";

const Stack = createStackNavigator();

const AccountNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Main" component={AccountScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
