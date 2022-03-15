import React ,{useRef,useEffect}from 'react'
import TopPicked from '../Body/TopPicked'
import { useDispatch } from "react-redux";
import { setProductId } from "../../actions/getGlobalData";
import { useSelector } from "react-redux";
import { setProductdata } from '../../actions/getGlobalData';
export default function AllProduct() {
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
  return (
    <>
    <div style={{width:"100vw",gap:"8px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap"}}>
   {
    Products.map(cur=>{
      return<>
     
      <TopPicked data={cur}/></>
        })
    }
    </div></>
  )
}
