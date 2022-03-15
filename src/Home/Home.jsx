import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setProductdata } from '../actions/getGlobalData';
import Card from "../Components/Body/Card";
import Body from "../Components/Body/Body";
import Body2 from "../Components/Body/Body2";
import Navbar from '../Components/Nav/Navbar';

function Home() {
  const dispatch = useDispatch();
  const productData = useSelector((state)=> state.getLoginData);
  console.log("pro",productData);
  const id = useSelector((state)=> state.getProductId);

  var axios = require('axios');
  var data = '';
  var config = {
    method: 'get',
    url: 'https://maf-admin-api.herokuapp.com/api/items',
    headers: { },
    data : data
  };
  
  useEffect(() => {
    axios(config)
    .then(function (response) {
      dispatch(setProductdata(response.data.data.items));
    })
    .catch(function (error) {
      console.log(error);
    });
  }, [])
  

  const Products = useSelector((state)=> state.getProductData);

  console.log("storerP",Products);
  console.log("id",id);
  
  return (
    <>
   
    <Body />
    <Card/>
    <Body2/>
    </>
   
  )
}

export default Home