import React, { createContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAmount, setQuantity } from "../../../actions/getGlobalData";

import "./cart.css";
import CartWithContext from "./CartWithContext";
// import Products from './Products';

export const CartContext = createContext();

const Cart = () => {
  const Products = useSelector((state) => state.getProductId);

  const dispatch = useDispatch();
  useEffect(() => {
    console.log("dispached", Products);
    dispatch(setQuantity(Products));
    dispatch(setAmount(Products));
  }, [Products]);

  return (
    <>
      <CartWithContext />
    </>
  );
};

export default Cart;
