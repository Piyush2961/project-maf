import React,{useEffect} from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProductId } from "../actions/getGlobalData";
import { useSelector } from "react-redux";
import { setProductdata } from '../actions/getGlobalData';
import TopPicked from "./Body/TopPicked";

const ProductPage = () => {
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

  console.log("productData",Products);
  
  
  const ref = useParams();
  console.log(ref.id);
  return<>
  <div style={{width:"100vw",display:"flex",gap:"8px",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap"}}>
 {
  Products.map(cur=>{
    return<>{
    (ref.id==cur.type)?
    <TopPicked data={cur}/>:""}</>
      })
  }
  </div></>
};

export default ProductPage;
