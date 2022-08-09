import PropTypes from "prop-types";
import React from "react";
import { restaurantsRequest, restaurantsTransform } from ".";

export const RestaurantContext = React.createContext();

export const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const retrieveRestaurants = () => {
    setLoading(true);
    setTimeout(() => {
      restaurantsRequest()
        .then(restaurantsTransform)
        .then((data) => {
          setLoading(false);
          setRestaurants(data);
        })
        .catch((err) => {
          setLoading(false);
          setError(err);
        });
    }, 2000);
  };

  React.useEffect(() => {
    retrieveRestaurants();
  }, []);

  return (
    <RestaurantContext.Provider value={{ restaurants, loading, error }}>
      {children}
    </RestaurantContext.Provider>
  );
};

RestaurantContextProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};
