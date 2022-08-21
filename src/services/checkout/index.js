import createStripe from "stripe-client";

const stripe = createStripe(
  "pk_test_51KaMHIJc9rScA1Fb8rX9H51cahLih3GEwCPyAZvBX8imimxjkskxWQJHLqGcYYDerQ26I2bYFCET9irffQGAWfYt00VwGOv8UB"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });
