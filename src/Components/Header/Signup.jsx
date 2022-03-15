import React ,{useState}from 'react'
import Login from './Login'
import { useNavigate } from 'react-router-dom';
function Signup(prop) {
    const [pop3,setpop3] = useState(false);
    const [name , setSignInName] = useState('');
    const [ SignInEmail, setSignInEmail] = useState('');
    const [SignInPass , setSignInPass] = useState('');
    const [SignInConfrmPass , setSignInConfrmPass] = useState('');
    const history = useNavigate();
const onSubmit=()=>{
  
  const axios = require('axios');
  const data = JSON.stringify({
    name,
    email: SignInEmail,
    password: SignInPass,
    confirmPassword: SignInConfrmPass
  });
  
  var config = {
    method: 'post',
    url: 'https://maf-admin-api.herokuapp.com/api/users/signup',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    history('/home');
  })
  .catch(function (error) {
    console.log(error);
  });
}
    return (prop.tri)?(<>
    <Login tri={pop3}/>
        <div class="form" style={ !pop3 ? { display:'block'} : {display : 'none'} } >
        <h2>Sign up Here</h2>
        <input type="text" name="text" placeholder="Enter Your Name Here" onChange={(e)=>setSignInName(e.target.value)}/>
        <input type="email" name="email" placeholder="Enter Email Here" onChange={(e)=>setSignInEmail(e.target.value)}/>
        <input type="password" name="Password" placeholder="Enter Password Here" onChange={(e)=>setSignInPass(e.target.value)}/>
        <input type="password" name="ConfrmPassword" placeholder="Confirm your Password" onChange={(e)=>setSignInConfrmPass(e.target.value)}/>
        <button class="btnn" onClick={onSubmit}><a href="#">Sign Up</a></button>
        <p class="link">Already Member</p>
        <button className='submit__button' onClick={()=>{
      setpop3(true);
        }}>Login Here</button>
    </div></>
      ):"";
}

export default Signup