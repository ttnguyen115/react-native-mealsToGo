import React from "react";
import { AuthenticationContext } from "../authentication/context";

export const CartContext = React.createContext();

export const CartContextProvider = ({ children }) => {
  const { user } = React.useContext(AuthenticationContext);
  const [cart, setCart] = React.useState([]);
  const [restaurant, setRestaurant] = React.useState(null);
  const [sum, setSum] = React.useState(0);

  React.useEffect(() => {
    if (!cart.length) {
      setSum(0);
      return;
    }
    const newSum = cart.reduce((acc, { price }) => (acc += price), 0);
    setSum(newSum);
  }, [cart]);

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
      value={{ cart, addToCart: add, clearCart: clear, restaurant, sum }}
    >
      {children}
    </CartContext.Provider>
  );
};
