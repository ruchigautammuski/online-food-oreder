import React from 'react'
import orderpic from "../Photos/order2.jpg"
import { useNavigate } from 'react-router-dom'
import { useDispatch ,useSelector} from 'react-redux';
import { Addcart } from '../Store/Info';
import { useState } from 'react';

export default function Order() {
  const navigate=useNavigate();
  const Dispatch = useDispatch();
  const Selector2 = useSelector(state=>state.Cart.addtocart);
  const Selectorname=useSelector(state=>state.Name.name);
  const Selectoraddress=useSelector(state=>state.Address.address);
  const [count,Setcount]=useState(Selector2);//+ss2
    // const ss2=localStorage.getItem("additem")
      


//All Calling Functions


    const goto = () =>{
if(Selector2!==0){
      Setcount(0) //count-count
      Dispatch(Addcart(0)) //count
    localStorage.setItem("additem",count)
    if(Selector2===0)
        navigate("/")
        alert("Thanks for Shopping Your Order Will be Delivered")
}
    else{
        navigate("/")
        alert("Please Do Order")
}
    }
  return (
    <>
  <body>
<div className="cardcat" style={{backgroundColor:'white'}}>
  <img src={orderpic} alt="Denim Jeans" style={{width:"100%"}}/>
  <h1>{Selectorname}</h1>
  <p className="price">Address:{Selectoraddress}</p>
  <p className="price"> Your Total Item is:  {Selector2}</p>
<p className="price"> Your Total Amount is: $ {Selector2*19}/-</p>
  <p><button  className="button"onClick={goto}><span>Checkout</span></button></p>
</div>
</body>


    </>
  )
}
