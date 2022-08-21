import React from "react";
import { AuthenticationContext } from "../authentication/context";

export const CartContext = React.createContext();

export const CartContextProvider = ({ children }) => {
  const { user } = React.useContext(AuthenticationContext);
  const [cart, setCart] = React.useState([]);
  const [restaurant, setRestaurant] = React.useState(null);

  const add = (item, rst) => {
    if (!restaurant || restaurant.placeId !== rst.placeId) {
      setRestaurant(rst);
      setCart([item]);
    } else {
      setCart([...cart, item]);
    }
  };

  const clear = () => {
    setCart([]);
    setRestaurant(null);
  };

  //AsyncStorage.setItem();
  return (
    <CartContext.Provider
      value={{ cart, addToCart: add, clearCart: clear, restaurant }}
    >
      {children}
    </CartContext.Provider>
  );
};
