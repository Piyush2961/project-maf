import {
  CLEAR_ALL,
  DECREMENT_QUANTITY,
  GET_PRODUCT_ID,
  INCREMENT_QUANTITY,
  REMOVE_ITEM,
} from "../constants";
const dataHandler = (state, action) => {
  Object.defineProperty(action, "quantity", {
    value: 1,
    writable: true,
    enumerable: true,
    configurable: true,
  });
  return (state = [...state, action]);
};
const incrementHandler = (cart, currProd) => {
  const updatedCart = cart.map((curr) => {
    if (curr._id === currProd) {
      return { ...curr, quantity: curr.quantity + 1 };
    }
    return curr;
  });
  return updatedCart;
};
const decrementHandler = (cart, currProd) => {
  const updatedCart = cart
    .map((curr) => {
      if (curr._id === currProd) {
        return { ...curr, quantity: curr.quantity - 1 };
      }
      return curr;
    })
    .filter((val) => {
      return val.quantity !== 0;
    });
  return updatedCart;
};
const removeHandler = (cart, currProd) => {
  const updatedCart = cart.filter((val) => {
    return val._id !== currProd;
  });
  return updatedCart;
};

export const getProductId = (state = [], action) => {
  switch (action.type) {
    case GET_PRODUCT_ID:
      return dataHandler(state, action.payload);
    case INCREMENT_QUANTITY:
      return incrementHandler(state, action.payload);
    case DECREMENT_QUANTITY:
      return decrementHandler(state, action.payload);
    case REMOVE_ITEM:
      return removeHandler(state, action.payload);
    case CLEAR_ALL:
      return (state = []);
    default:
      return state;
  }
};
