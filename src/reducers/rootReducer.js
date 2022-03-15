import { combineReducers } from "redux";
import { getAmount, getQuantity } from "./calculateCartValues";
import { getLoginData, getProductData } from "./cartData";
import { getProductId } from "./getProductId";

const rootReducer = combineReducers({
  getLoginData,
  getProductData,
  getProductId,
  getQuantity,
  getAmount,
});
export default rootReducer;
