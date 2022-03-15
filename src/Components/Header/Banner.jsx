import React from 'react'
import Login from './Login';
import './Banner.css'
import Typewriter from "typewriter-effect";
function Banner() {
    const [pop,setpop] = React.useState(false);
  return (<>
   <div class="background__img"></div>
    <div class="content"><div className='type text-danger w-50 border-danger'>
      <Typewriter
        onInit={(type)=>{
          type.typeString('Hey there welcome to our site :)')
          .pauseFor(1000)
          .deleteAll()
          .typeString("We are here to change the way you shop")
          .pauseFor(1000)
          .deleteAll()
          .typeString("Enhance your shoping skills with us")
          .pauseFor(1000)
          .deleteAll()
          .typeString("Very happy to serve you")
          .pauseFor(1000)
          .pauseFor(1000)
          .deleteAll()
          .typeString("We are here to change the way you shop")
          .pauseFor(1000)
          .deleteAll()
          .typeString("Enhance your shoping skills with us")
          .pauseFor(1000)
          .deleteAll()
          .typeString("Very happy to serve you")
          .pauseFor(1000)
          .start();
        }}></Typewriter>
    
    </div>
    <div className='d-flex flex-column'>
    <div class="content1" style={ !pop ? { display:'block'} : {display : 'none'} }   >
      <button class="cn" onClick={()=>{
        setpop(true);
    }}><a class="btn__a" href="#" >Explore US</a></button></div>
         <div>  <Login tri={pop}/></div>
                </div></div></>
           


          
  )
}

export default Banner