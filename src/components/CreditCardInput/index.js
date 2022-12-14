import React from "react";
import { LiteCreditCardInput } from "react-native-credit-card-input";
import { cardTokenRequest } from "../../services/checkout";

const CreditCardInput = ({ name = "Jett" }) => {
  const onChange = async (formData) => {
    const { values, status } = formData;
    const isIncomplete = Object.values(status).includes("incomplete");
    const expiry = values.expiry.split("/");
    const card = {
      number: values.number,
      exp_month: expiry[0],
      exp_year: expiry[1],
      cvc: values.cvc,
      name,
    };
    const info = await cardTokenRequest(card);
    console.log(info);
  };

  return <LiteCreditCardInput onChange={onChange} />;
};

export default CreditCardInput;
