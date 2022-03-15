import React from 'react'
import TopPicked from '../TopPicked'
import { useDispatch } from 'react-redux';
import { getProductId } from '../../reducers/getProductId';
import { setProductId } from '../../actions/getGlobalData';
import { useSelector } from 'react-redux';
import { useRef } from 'react';
import { useParams } from 'react-router-dom';

function CatComp() {
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
  const CatProducts = useSelector((state)=> state.getProductData);
    console.log("catproducts=>"+CatProducts)
  return (<><h1> Category </h1>
    <div style={{width:"100vw",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap"}}>
   {
    CatProducts.map(cur=>{
 <TopPicked data={cur}/>
        })
    }
    </div></>
  )
}

export default CatComp