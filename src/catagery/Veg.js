import React, { useState } from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { Addcart } from '../Store/Info'
import Veg1 from "../Photos/veg1.jpeg"
import Veg2 from "../Photos/veg2.jpeg"
import Veg3 from "../Photos/veg3.jpeg"
import Veg4 from "../Photos/veg4.jpeg"


export default function Veg() {
  const Dispatch = useDispatch();
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
  <img src={Veg1} alt="Denim Jeans" style={{width:"100%"}}/>
  <h1>Tomato</h1>
  <p className="price">$19.99</p>
 <p><button onClick={additem}>Add to Cart</button></p>
 {/* <button onClick={removeitem}>Remove Item</button> */}

</div>
</body>
<hr />
<body>
<div className="cardcat" style={{backgroundColor:'yellow' }}>
  <img src={Veg2} alt="Denim Jeans" style={{width:"100%"}}/>
  <h1>Broccoli</h1>
  <p className="price">$19.99</p>
  <p><button onClick={additem}>Add to Cart</button></p>
  {/* <button onClick={removeitem}>Remove Item</button> */}

</div>
</body>
<hr />
<body>
<div className="cardcat" style={{backgroundColor:'yellow'}}>
  <img src={Veg3} alt="Denim Jeans" style={{width:"100%"}}/>
  <h1>Potato</h1>
  <p className="price">$19.99</p>
  <p><button onClick={additem}>Add to Cart</button></p>
  {/* <button onClick={removeitem}>Remove Item</button> */}

</div>
</body>
<hr />
<body>
<div className="cardcat" style={{backgroundColor:'yellow'}}>
  <img src={Veg4} alt="Denim Jeans" style={{width:"100%"}}/>
  <h1>ComboPack</h1>
  <p className="price">$19.99</p>
  <p><button onClick={additem}>Add to Cart</button></p>
  {/* <button onClick={removeitem}>Remove Item</button> */}

</div>
</body>

</>
  )
}
