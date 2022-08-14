import React from "react";
import { restaurantsRequest, restaurantsTransform } from ".";
import { LocationContext } from "../location/context";

export const RestaurantContext = React.createContext();

export const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const { location } = React.useContext(LocationContext);

  const retrieveRestaurants = (loc) => {
    setLoading(true);
    setRestaurants([]);

    setTimeout(() => {
      restaurantsRequest(loc)
        .then(restaurantsTransform)
        .then((results) => {
          setLoading(false);
          setRestaurants(results);
        })
        .catch((err) => {
          setLoading(false);
          setError(err);
        });
    }, 2000);
  };

  React.useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retrieveRestaurants(locationString);
    }
  }, [location]);

  return (
    <RestaurantContext.Provider value={{ restaurants, loading, error }}>
      {children}
    </RestaurantContext.Provider>
  );
};
