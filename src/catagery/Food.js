import React from 'react'
import food1 from "../Photos/food1.jpeg"
import food2 from "../Photos/food2.jpeg"
import food3 from "../Photos/food3.jpeg"
import food4 from "../Photos/food4.jpeg"
import { useDispatch ,useSelector} from 'react-redux';
import { useState } from 'react';
// import { useDispatch } from 'react-redux'
import { Addcart } from '../Store/Info';


export default function Food () {
const Dispatch=useDispatch()
const Selector2 = useSelector(state=>state.Cart.addtocart);
  const ss=localStorage.getItem("additem")
  const[count,Setcount]=useState(Selector2);
  localStorage.setItem("additem",count)
  const additem=()=>{
       Setcount(count+1)
      localStorage.setItem("additem",count)
      Dispatch(Addcart(count))
    
    }
    const removeitem=()=>{
      if(count>0)
      Setcount(count-1)
      localStorage.setItem("additem",count)
          Dispatch(Addcart(count))
      
      
        }
  return (
    <>
   <h2 style={{textAlign:'center',color:'blue',backgroundColor:'yellow'}}>Choose Items</h2>
  <hr />
  <body>
<div className="cardcat" style={{backgroundColor:'yellow'}}>
  <img src={food1} alt="Denim Jeans" style={{width:"100%"}}/>
  <h1>Tawa-Roti</h1>
  <p className="price">1 Item = $19.99/-</p>
 <p><button onClick={additem}>Add to Cart</button></p>
 {/* <button onClick={removeitem}>Remove Item</button> */}
</div>
</body>
<hr />
<body>
<div className="cardcat" style={{backgroundColor:'yellow' }}>
  <img src={food2} alt="Denim Jeans" style={{width:"100%"}}/>
  <h1>Burger</h1>
  <p className="price">1 Item = $19.99/-</p>
  <p><button onClick={additem}>Add to Cart</button></p>
  {/* <button onClick={removeitem}>Remove Item</button> */}
</div>
</body>
<hr />
<body>
<div className="cardcat" style={{backgroundColor:'yellow'}}>
  <img src={food3} alt="Denim Jeans" style={{width:"100%"}}/>
  <h1>Noodles</h1>
  <p className="price">1 Item = $19.99/-</p>
 <p><button onClick={additem}>Add to Cart</button></p>
 {/* <button onClick={removeitem}>Remove Item</button> */}
</div>
</body>
<hr />
<body>
<div className="cardcat" style={{backgroundColor:'yellow'}}>
  <img src={food4} alt="Denim Jeans" style={{width:"100%"}}/>
  <h1>Pasta</h1>
  <p className="price">1 Item = $19.99/-</p>
<p><button onClick={additem}>Add to Cart</button></p>
{/* <button onClick={removeitem}>Remove Item</button> */}
</div>
</body>
</>
  )
}
