import React from 'react'
import frt from "../Photos/frt1.jpg"
import veg from "../Photos/foood.jpg"
import food from "../Photos/fd2.jpg"

import ice from "../Photos/ice2.jpeg"
import swip1 from "../Photos/swip1.jpg"
import swip2 from "../Photos/swip2.jpg"
import swip3 from "../Photos/swip6.jpg"
import swip4 from "../Photos/swip4.jpg"
import swip5 from "../Photos/swip5.jpeg"
import { Link } from 'react-router-dom'
// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import './swiper.css'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {useNavigate} from 'react-router-dom';








export default function HomePage() {
    const navigate=useNavigate()
    const checkloginveg=()=>{
if(localStorage.getItem("logincheck")!==null){
                navigate("/Veg")
}
else{
    alert("You need a Create Account or Login")
    navigate("/Login")
}
}
    const checkloginfriut=()=>{
        if(localStorage.getItem("logincheck")!==null){
                        navigate("/Friut")
        }
        else{
            alert("You need a Create Account or Login")
            navigate("/Login")
        }
        
            }
            const checkloginfood=()=>{
                if(localStorage.getItem("logincheck")!==null){
                                navigate("/Food")
                }
                else{
                    alert("You need a Create Account or Login")
                    navigate("/Login")
                }
                
                    }
                    const checkloginice=()=>{
                        if(localStorage.getItem("logincheck")!==null){
                                        navigate("/Ice")
                        }
                        else{
                            alert("You need a Create Account or Login")
                            navigate("/Login")
                        }
                        
                            }
                          // swiper code functions
                          // 

        const Body1=     () =>{
          return (<body>
               <div class="product-img">
                <img src={swip1} height="350" width="400"/>
              </div>
             </body>)
        }  
        const Body2 =     () =>{
          return (<body>
               <div class="product-img">
                <img src={swip2} height="350" width="400"/>
              </div>
             </body>)
        } 
        const Body3 =     () =>{
          return (<body>
               <div class="product-img">
                <img src={swip3} height="350" width="400"/>
              </div>
             </body>)
        } 
        const Body4 =     () =>{
          return (<body>
               <div class="product-img">
                <img src={swip4} height="350" width="400"/>
              </div>
             </body>)
        } 
        const Body5 =     () =>{
          return (<body>
               <div class="product-img">
                <img src={swip5} height="350"  width="400"/>
              </div>
             </body>)
        }    
        const d=  new Date().toLocaleString()           
  return (
    <>
 {/* <h1 style={{textAlign:'center',color:'blue',backgroundColor:'yellow'}}>Categories</h1> */}
 {/*  Sllide Slower */}
<Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    
     >
      <div className="swiperimg">
      <SwiperSlide>{Body1}</SwiperSlide>
      <SwiperSlide>{Body2}</SwiperSlide>
      <SwiperSlide>{Body3}</SwiperSlide>
      <SwiperSlide>{Body4}</SwiperSlide>
      <SwiperSlide>{Body5}</SwiperSlide>
      </div>

      
    </Swiper>
{/* Home page card */}

<h1 style={{textAlign:'center',color:'blue',backgroundColor:'yellow'}}>Categories</h1>

<body>
  <div class="wrapper">
    <div class="product-img">
      <img src={food} height="420" width="327"/>
    </div>
    <div class="product-info">
      <div class="product-text">
        <h1>Food</h1>
        <h2>Pure Veg</h2>
      <p>
food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy.</p>
      </div>
<div class="product-price-btn">
       
        <button  onClick={checkloginfood} className="button"><span>Go Order </span></button>
      </div>
    </div>
  </div>

</body>



<body>
  <div class="wrapper">
    <div class="product-img">
      <img src={veg} height="420" width="327"/>
    </div>
    <div class="product-info">
      <div class="product-text">
        <h1>Vegitables</h1>
        <h2>Pure Veg</h2>
      <p>
food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy.</p>
      </div>
<div class="product-price-btn">
       
        <button  onClick={checkloginveg} className="button"><span>Go Order </span></button>
      </div>
    </div>
  </div>

</body>


<body>
  <div class="wrapper">
    <div class="product-img">
      <img src={frt} height="420" width="327"/>
    </div>
    <div class="product-info">
      <div class="product-text">
        <h1>Fruits</h1>
        <h2>Pure Veg</h2>
      <p>
food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy.</p>
      </div>
<div class="product-price-btn">
       
        <button  onClick={checkloginfriut} className="button"><span>Go Order </span></button>
      </div>
    </div>
  </div>

</body>

<body>
  <div class="wrapper">
    <div class="product-img">
      <img src={ice} height="420" width="327"/>
    </div>
    <div class="product-info">
      <div class="product-text">
        <h1>Ice-Cream</h1>
        <h2>Pure Veg</h2>
      <p>
food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy.</p>
      </div>
<div class="product-price-btn">
       
        <button  onClick={checkloginice} className="button"><span>Go Order </span></button>
      </div>
    </div>
  </div>

</body>
         
 
 </>

  )
}
