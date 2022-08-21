import React from "react";
import { ScrollView, Text } from "react-native";
import { List } from "react-native-paper";
import CreditCardInput from "../../components/CreditCardInput";
import RestaurantInfoCard from "../../components/RestaurantInfoCard";
import { SafeArea } from "../../components/SafeArea";
import Spacer from "../../components/Spacer";
import Typography from "../../components/Typography";
import { CartContext } from "../../services/cart/context";
import {
  CartIcon,
  CartIconContainer,
  ClearButton,
  NameInput,
  PayButton,
} from "./style";

const CheckoutScreen = () => {
  const { cart, restaurant, sum, clearCart } = React.useContext(CartContext);
  const [name, setName] = React.useState("");

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
        <NameInput label="Name" value={name} onChangeText={(e) => setName(e)} />
        <Spacer position="top" size="large">
          {name.length > 0 && <CreditCardInput name={name} />}
        </Spacer>
        <Spacer position="top" size="large">
          <PayButton
            icon="cash"
            mode="contained"
            onPress={() => console.log("success!")}
          >
            Pay
          </PayButton>
        </Spacer>
        <Spacer position="top" size="large">
          <ClearButton icon="cart-off" mode="contained" onPress={clearCart}>
            Clear Cart
          </ClearButton>
        </Spacer>
      </ScrollView>
    </SafeArea>
  );
};

export default CheckoutScreen;
