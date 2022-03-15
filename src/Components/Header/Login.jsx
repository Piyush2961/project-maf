import React , {useEffect, useState} from 'react'
import './Login.css'
import Signup from  "./Signup"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLoginData } from '../../actions/getGlobalData';
function Login(prop) {
   const dispatch = useDispatch();
   const [email , setEmail] = useState('');
   const [password , setPassword] = useState('');
   const history = useNavigate();
   const onSubmit = () =>{

  
    const axios = require('axios');
    const data = JSON.stringify({
      email,
      password
    });
    // console.log("product",productData);
    
    var config = {
      method: 'post',
      url: 'https://maf-admin-api.herokuapp.com/api/users/login',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
console.log("config",config);
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      dispatch(setLoginData(config.data))
      history('/home');
    })
    .catch(function (error) {
      console.log(error);
    });
    

   }

  
   
  const [pop2,setpop2] = React.useState(false);
  return (prop.tri)?(<>
  <Signup tri={pop2}/>
    <div class="form" style={ !pop2 ? { display:'block'} : {display : 'none'} } >
    <h2>Login Here</h2>
    <input type="email" name="email" placeholder="Enter Email Here" onChange={(e)=>setEmail(e.target.value)}/>
    <input type="password" name="" placeholder="Enter Password Here" onChange={(e)=>setPassword(e.target.value)}/>
    <button class="btnn" onClick={onSubmit }><a href="#">Login</a></button>
    <p class="link">Don't have an account</p>
    <button className='submit__button' onClick={()=>{
      setpop2(true)
      
    }}>Sign up  here</button>
</div></>
  ):"";
}


export default Login
