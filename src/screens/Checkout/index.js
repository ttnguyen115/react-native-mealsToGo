import React from "react";
import { Text } from "react-native";
import CreditCardInput from "../../components/CreditCardInput";
import { SafeArea } from "../../components/SafeArea";
import { CartContext } from "../../services/cart/context";
import { CartIcon, CartIconContainer } from "./style";

const CheckoutScreen = () => {
  const { cart, restaurant } = React.useContext(CartContext);

  if (!cart.length || !restaurant) {
    return (
      <SafeArea>
        <CartIconContainer>
          <CartIcon icon="cart-off" />
          <Text>Your cart is empty!</Text>
        </CartIconContainer>
      </SafeArea>
    );
  }

  return (
    <SafeArea>
      <Text>{JSON.stringify(cart)}</Text>
      <Text>{JSON.stringify(restaurant)}</Text>
      <CreditCardInput />
    </SafeArea>
  );
};

export default CheckoutScreen;
