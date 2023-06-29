import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import shop from "../Photos/shop page.jpg"

export default function Firstpage() {
    const navigate=useNavigate()
const click=()=>{
         navigate("/HomePage")
}
  return (
    <>
   
    {/* background-image: url("https://img.freepik.com/premium-photo/product-package-boxes-shopping-bag-cart-with-laptop-online-shopping-delivery-concept_38716-138.jpg"); */}
      <div>
{/* <div className="firstpage"> */}
    {/* <button type="button"  onClick={click} class="btn-change6">Click Me For Start</button> */}
    </div>
    {/* </div> */}
    
    <div  className="GeeksForGeeks">
      <h1>GeeksForGeeks</h1>
         <button type="button"  onClick={click} class="btn-change6">Click Me For Start</button> 
      </div>
    </>
  )
}
