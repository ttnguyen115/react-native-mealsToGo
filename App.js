import { Lato_400Regular, useFonts as useLato } from "@expo-google-fonts/lato";
import {
  Oswald_400Regular,
  useFonts as useOswald,
} from "@expo-google-fonts/oswald";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import Navigation from "./src/components/Navigation";
import { auth } from "./src/lib/firebase";
import { theme } from "./src/lib/styled-components";
import { AuthenticationContextProvider } from "./src/services/authentication/context";
import { FavouritesContextProvider } from "./src/services/favourites/context";
import { LocationContextProvider } from "./src/services/location/context";
import { RestaurantContextProvider } from "./src/services/restaurants/context";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  React.useEffect(() => {
    auth
      .signInWithEmailAndPassword("email@email.com", "password")
      .then((user) => {
        console.log(user);
        setIsAuthenticated(true);
      })
      .catch((e) => console.log(e));
  }, []);

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantContextProvider>
                <Navigation />
              </RestaurantContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </React.Fragment>
  );
}
