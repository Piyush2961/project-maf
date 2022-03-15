import React from 'react'
import { useDispatch } from "react-redux";
import { getProductId } from "../../reducers/getProductId";
import { setProductId } from "../../actions/getGlobalData";
import { useSelector } from "react-redux";

function TopPicked(prop) {
    const product = useSelector((state) => state.getProductData);
    console.log("Prodo=>> " + product);
    const dispatch = useDispatch();
  return (
   <> <a className='hover'><div className="product-box">
   <div className='anc'>
     <p class="header">{prop.data.tag}</p>
     <strong>{prop.data.brand}</strong>
     <img src={prop.data.img}></img>
     <div className="available-colors">
    <h3 style={{ color: "#d2d4db" }}>price:{prop.data.price}</h3>
    </div>
     <div className="rating">
       <h3 style={{ color: "#d2d4db" }}>Rating :{prop.data.rating}/5</h3>
     </div>
     <div class="buy-price">
       <div className="buy-price-name">
         {" "}
         <h4 style={{ color: "#d2d4db" }}>{prop.data.name}</h4>{" "}
       </div>
       <a
         onClick={() => {
           dispatch(setProductId(prop.data));
         }}
         class="buy-btn"
       >
         Buy
       </a>
     </div>
   </div>
 </div></a></>
  )
}

export default TopPicked