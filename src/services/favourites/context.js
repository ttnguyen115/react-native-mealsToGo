import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { AuthenticationContext } from "../authentication/context";

export const FavouritesContext = React.createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = React.useState([]);
  const { user } = React.useContext(AuthenticationContext);

  const saveFavourites = async (value, uid) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const loadFavourites = async (uid) => {
    try {
      const value = await AsyncStorage.getItem(`@favourites-${uid}`);
      if (value !== null) {
        setFavourites(JSON.parse(value));
      }
    } catch (e) {
      console.log(e);
    }
  };

  const add = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };

  const remove = (restaurant) => {
    const newFavourites = favourites.filter(
      (favourite) => favourite.placeId !== restaurant.placeId
    );
    setFavourites(newFavourites);
  };

  React.useEffect(() => {
    if (user) {
      loadFavourites(user.uid);
    }
  }, [user]);

  React.useEffect(() => {
    if (user) {
      saveFavourites(favourites, user.uid);
    }
  }, [favourites, user]);

  return (
    <FavouritesContext.Provider
      value={{ favourites, addToFavourites: add, removeFromFavourites: remove }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
