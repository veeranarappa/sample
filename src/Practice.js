
import React, {useState} from 'react'





function Practice(){

   const[menu, setMenu] =useState(false);

   function  myFunction(){
   setMenu((prestate)=>{
        return !prestate
   })
    }

    return(
        <div>
           
   <div class={`topnav ${menu ?"responsive": ""}`} id="myTopnav">
  <a href="#home" class="active">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
  <a href="javascript:void(0);" class="icon" onClick={myFunction}>
    <i class="fa fa-bars"></i>
  </a>
</div>

        </div>
    )
}
export default Practice;