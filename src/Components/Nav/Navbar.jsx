import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "../../../node_modules/@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";

function Navbar() {
  const productList = useSelector((state) => state.getProductData);
  const items = useSelector((state) => state.getProductId);

  const itemCount = items.length;
  return (
    <>
      <div className="navbar">
        <div className="nav__1">
          <ul className="nav__1__ul">
            <li>
              <Link to="/home">
                <button className="nav_1_button">Home</button>
              </Link>
            </li>
            <li>
              <Link to="/allproducts">
                <button className="nav_1_button">AllProduct</button>
              </Link>
            </li>
            <li>
              <Link to="/account">
                <button className="nav_1_button">Account</button>
              </Link>
            </li>
          </ul>
          <div
            class="nav_searc_div"
            style={{ display: "grid", placeItems: "center" }}
          >
            <div className="navheader_div">
              <input className="search__input" type="text"></input>
              <button class="search__btn">Search</button>
              <Link to="/addtocart">
                <Badge color="secondary" badgeContent={itemCount}>
                  <ShoppingCartIcon fontSize="large" />{" "}
                </Badge>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
