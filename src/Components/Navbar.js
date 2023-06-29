import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AddEmail } from '../Store/Info';

export default function Navbar() {
    const navigate=useNavigate()
    // const Dispatch = useDispatch();
    const Selector = useSelector(state=>state.EmailId.email);
    const Selector2 = useSelector(state=>state.Cart.addtocart);
    

    const indb=()=>{
      navigate("/Register")
}
const indb2=()=>{
      
  navigate("/Login")
}
    const outdb=()=>{
      let text="Are you sure"
      if(window. confirm(text))
      // alert("LogOut Sccessfully")
        localStorage.clear();
        localStorage.removeItem("passwordData");
        navigate("/")
}
const totalorder=()=>{
  navigate("/Order")
}

// var d = new Date();
// var dd = String(d.getDate()).padStart(2, '0');
// var mm = String(d.getMonth() + 1).padStart(2, '0'); //January is 0!
// var yyyy = d.getFullYear();

// d = mm + '/' + dd + '/' + yyyy;
  return (
    <>
    <div className="striky">
  <div className="navy">
   <nav className="navbar navbar-expand-lg bg-body-tertiar">
  <div className="container-fluid">
    {localStorage.getItem("emailData")!==null ? <Link className="navbar-brand cart" to="/">Shopping-App</Link> :<Link className="navbar-brand cart" to="/">Shopping-App</Link>}
    {/* <p>{d}</p> */}
   
 <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{textAlign:'center'}}>
 {localStorage.getItem("logincheck")!==null?  <li><button  type="button"className="button mx-3"onClick={outdb}><span>LogOut</span></button></li>
 :   <><li><button type="button" className="button mx-3 my-3" onClick={indb}><span>Register</span></button></li>
 <li><button type="button" className="button mx-3 my-3" onClick={indb2}><span>Login</span></button></li>
</>
}
</ul>
     </div>
    

 <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{textAlign:'center'}}>
  {localStorage.getItem("logincheck")===null ?   <img alt="" src="../Photos/icons8-add-shopping-cart-30.png"  />
 :<>
 <li style={{textAlign:'center'}}><h6  style={{textAlign:'center',margin: '7% -16% 0% -139%'}}>Email Id: {Selector}</h6></li>
  <li><button className="button"  onClick={totalorder}><span>items :{Selector2}</span></button></li>
 </>}
  
</ul>
 {/* {Selector2} */}
</nav>
</div>
</div>
</>
  )
}
