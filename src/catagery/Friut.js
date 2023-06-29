import React from 'react'
import fruit1 from "../Photos/FRT1.jpeg"
import fruit2 from "../Photos/FRT2.jpeg"
import fruit3 from "../Photos/FRT3.jpeg"
import fruit4 from "../Photos/FRT4.jpeg"
import { useState } from 'react'
import { Dispatch } from 'react'
// import { useDispatch } from 'react-redux'
import { Addcart } from '../Store/Info'
import { useDispatch ,useSelector} from 'react-redux';
export default function Friut() {
  const Dispatch=useDispatch();
  const Selector2 = useSelector(state=>state.Cart.addtocart);
  const add=localStorage.getItem("additem")
  const[count,Setcount]=useState(Selector2)


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
  <img src={fruit1} alt="Denim Jeans" style={{width:"100%"}}/>
  <h1>Apple</h1>
  <p className="price">Price/Kg = $19.99/-</p>
  <p><button onClick={additem}>Add to Cart</button></p>
  {/* <button onClick={removeitem}>Remove Item</button> */}
</div>
</body>
<hr />
<body>
<div className="cardcat" style={{backgroundColor:'yellow' }}>
  <img src={fruit2} alt="Denim Jeans" style={{width:"100%"}}/>
  <h1>Grapes</h1>
  <p className="price">Price/Kg = $19.99/-</p>
  <p><button onClick={additem}>Add to Cart</button></p>
  {/* <button onClick={removeitem}>Remove Item</button> */}

</div>
</body>
<hr />
<body>
<div className="cardcat" style={{backgroundColor:'yellow'}}>
  <img src={fruit3} alt="Denim Jeans" style={{width:"100%"}}/>
  <h1>Strawberry</h1>
  <p className="price">Price/Kg = $19.99/-</p>
  <p><button onClick={additem}>Add to Cart</button></p>
  {/* <button onClick={removeitem}>Remove Item</button> */}

</div>
</body>
<hr />
<body>
<div className="cardcat" style={{backgroundColor:'yellow'}}>
  <img src={fruit4} alt="Denim Jeans" style={{width:"100%"}}/>
  <h1>PineApple</h1>
  <p className="price">Price/Kg = $19.99/-</p>
  <p><button onClick={additem}>Add to Cart</button></p>
  {/* <button onClick={removeitem}>Remove Item</button> */}

</div>
</body>

</>
  )
}
