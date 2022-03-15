import React from "react";
// import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllProduct from "./Components/AllProduct/AllProduct";
import Account from "./Components/Account/Account";
import Home from "./Home/Home";
import Navbar from "./Components/Nav/Navbar";
import Banner from "./Components/Header/Banner";
import AddToCart from "./Components/AddToCart/AddToCart";
import ProductPage from "./Components/ProductPage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route default path="/" element={<Banner />} />

          <Route path="/account" element={<Account />} />

          <Route path="/allproducts/" element={<AllProduct />} />

          <Route path="/addtocart" element={<AddToCart />} />

          <Route path="/home" element={<Home />} />
          <Route path="/category/:id" element={<ProductPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
