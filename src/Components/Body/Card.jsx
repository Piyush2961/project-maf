import "./Card.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getProductId } from "../../reducers/getProductId";
import { setProductId } from "../../actions/getGlobalData";
import { useSelector } from "react-redux";
import TopPicked from "../Body/TopPicked";

export default function Card() {
  const product = useSelector((state) => state.getProductData);
  console.log("Prodo=>> " + product);
  const dispatch = useDispatch();
  

  return (
    <>
      <div class="type_div">
        {" "}
        <p className="type_div_p">Top Picked Products</p>
      </div>
      <ul className="crousel__ul" style={{ scrollX: "hidden" }}>
        {product.map((cur) => {
          return (
            <>
              {" "}
              <li class="crousel__li">
               <TopPicked data={cur}/>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
}
