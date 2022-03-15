import {
  GET_LOGIN_DATA,
  GET_PRODUCT_ID,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
  SET_CART_DATA,
  REMOVE_ITEM,
  CALCULATE_QUANTITY,
  CALCULATE_AMOUNT,
} from "../constants";

export const setLoginData = (data) => {
  return {
    type: GET_LOGIN_DATA,
    payload: data,
  };
};

export const setProductdata = (data) => {
  return {
    type: SET_CART_DATA,
    payload: data,
  };
};
export const setProductId = (id) => {
  return {
    type: GET_PRODUCT_ID,
    payload: id,
  };
};
export const incrementQuantity = (id) => {
  return {
    type: INCREMENT_QUANTITY,
    payload: id,
  };
};
export const deccrementQuantity = (id) => {
  return {
    type: DECREMENT_QUANTITY,
    payload: id,
  };
};
export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    payload: id,
  };
};
export const setQuantity = (cart) => {
  return {
    type: CALCULATE_QUANTITY,
    payload: cart,
  };
};
export const setAmount = (cart) => {
  return {
    type: CALCULATE_AMOUNT,
    payload: cart,
  };
};
