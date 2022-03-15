import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Body.css";

const obj = {};
function Body() {
  const product = useSelector((state) => state.getProductData);

  const obj = [
    {
      src: "https://cdn.anscommerce.com/image/tr:h-416,w-314,cm-pad_resize/data/celio-india/18-Jan-2022/8055458_2.jpg",
      Type: "tshirts",
    },
    {
      src: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/11780968/2020/4/3/11591b03-97f1-4907-b735-906984c4bcd61585905051096HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt1.jpg",
      Type: "Shirts",
    },
    {
      src: "https://www.dapperconfidential.com/wp-content/uploads/2018/11/Distressed_Denim_2_-_Liquor_N_Poker-e1565713470511-480x360.jpg",
      Type: "Jeans",
    },
    {
      src: "https://images.pexels.com/photos/6540927/pexels-photo-6540927.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      Type: "shoes",
    },
    {
      src: "https://images.pexels.com/photos/5081914/pexels-photo-5081914.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      Type: "Watch",
    },
    {
      src: "https://images.pexels.com/photos/9555114/pexels-photo-9555114.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      Type: "Phones",
    },
    {
      src: "https://images.pexels.com/photos/3394656/pexels-photo-3394656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      Type: "Headphones",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgxSyiDH3wwc5axB3D5FdkNfGPdDCwXEB2mg&usqp=CAU",
      Type: "SunGlases",
    },
  ];
  return (
    <>
      <div className="card_top__div">
        <p className="card__cat">CATEGORIES FOR YOU</p>
        <div class="card__div">
          {obj.map((cur) => {
            return (
              <Link to={`/category/${cur.Type}`}>
                {" "}
                <button className="card__outer">
                  <img className="card__img" src={cur.src}></img>
                  <div className="card__text">
                    <p class="card__text__value">{cur.Type}</p>
                  </div>
                </button>{" "}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Body;
