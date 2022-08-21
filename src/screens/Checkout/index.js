import React from "react";
import { ScrollView, Text } from "react-native";
import { List } from "react-native-paper";
import CreditCardInput from "../../components/CreditCardInput";
import RestaurantInfoCard from "../../components/RestaurantInfoCard";
import { SafeArea } from "../../components/SafeArea";
import Spacer from "../../components/Spacer";
import Typography from "../../components/Typography";
import { CartContext } from "../../services/cart/context";
import { CartIcon, CartIconContainer } from "./style";

const CheckoutScreen = () => {
  const { cart, restaurant, sum } = React.useContext(CartContext);

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
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <Spacer position="left" size="medium">
          <Spacer position="top" size="large">
            <Typography>Your Order</Typography>
          </Spacer>
          <List.Section>
            {cart.map(({ item, price }) => {
              return <List.Item title={`${item} - ${price / 100}`} />;
            })}
          </List.Section>
          <Typography>Total: {sum / 100}</Typography>
        </Spacer>
        <CreditCardInput />
      </ScrollView>
    </SafeArea>
  );
};

export default CheckoutScreen;
