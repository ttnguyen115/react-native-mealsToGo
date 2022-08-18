import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";

export const FavouritesContext = React.createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = React.useState([]);

  const saveFavourites = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@favourites", jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const loadFavourites = async (value) => {
    try {
      const value = await AsyncStorage.getItem("@favourites");
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
    loadFavourites();
  }, []);

  React.useEffect(() => {
    saveFavourites(favourites);
  }, [favourites]);

  return (
    <FavouritesContext.Provider
      value={{ favourites, addToFavourites: add, removeFromFavourites: remove }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
