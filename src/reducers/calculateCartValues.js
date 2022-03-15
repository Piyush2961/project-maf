import { CALCULATE_AMOUNT, CALCULATE_QUANTITY } from "../constants";

const quantityHandler = (cartData) => {
  let quantity = 0;
  cartData.map((val) => {
    quantity += val.quantity;
    return val;
  });
  return quantity;
};

export const getQuantity = (state = 0, action) => {
  switch (action.type) {
    case CALCULATE_QUANTITY:
      return quantityHandler(action.payload);
    default:
      return state;
  }
};
const amountHandler = (cartData) => {
  let amount = 0;
  cartData.map((val) => {
    amount += val.quantity * val.price;
    return val;
  });
  return amount;
};
export const getAmount = (state = 0, action) => {
  switch (action.type) {
    case CALCULATE_AMOUNT:
      return amountHandler(action.payload);
    default:
      return state;
  }
};
