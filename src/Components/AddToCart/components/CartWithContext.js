import React from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import Items from "./Items";

import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { CLEAR_ALL } from "../../../constants";

const CartWithContext = () => {
  const id = useSelector((state) => state.getProductId);
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.getProductId);
  const q = useSelector((state) => state.getQuantity);

  const amount = useSelector((state) => state.getAmount);

  return (
    <>
      <section className="main-cart-section">
        {console.log("id==>" + id)}
        <h1>Shopping Cart</h1>
        <p className="total-items">
          Total items: <span className="total-items-count">{q}</span>
        </p>
        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars className="scroll">
              {cartData.map((val, idx) => {
                return <Items key={idx} {...val} />;
              })}
            </Scrollbars>
          </div>
        </div>
        <div className="card-total">
          <h3>
            Cart Total : <span>{amount}</span>
          </h3>
          <Button size="large" type="primary">
            Checkout
          </Button>
          <Button
            onClick={() => {
              dispatch({
                type: CLEAR_ALL,
              });
            }}
            size="large"
            type="danger"
            className="clear-cart"
          >
            Clear All
          </Button>
        </div>
      </section>
    </>
  );
};

export default CartWithContext;
