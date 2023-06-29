import React from 'react'
import { Navigation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function Login() {
const navigate=useNavigate()
    const selector = useSelector(state=>state.EmailId.email)
    const PassSelector = useSelector(state=>state.EmailId.password)
    const [checkmail,SetNewmail]=useState('');
    const [checkpassword,SetNewpassword]=useState('');
     
const check=(event)=>{
  event.preventDefault();
    if(checkmail===selector && checkpassword===PassSelector){
          // Setlogin(1)
      localStorage.setItem("logincheck","active")      
     alert("User Login")
     navigate("/")
        }
else
alert("wrong password or need to register")     
      }
    const emailsize=(event)=>{

      SetNewmail(event.target.value)
  
    
    }
    const passwordsize=(event)=>{
    
      SetNewpassword(event.target.value)
    
    }
    return (
     <>
          <body>
      <div className="bg-img">
<form  className="containerlogin">
    <h1>Login</h1>

    <label htmlFor="email"><b>Email</b></label>
    <input type="text" onChange={emailsize} placeholder="Enter Email" name="email" required/>

    <label htmlFor="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" onChange={passwordsize} name="psw" required/>

    <button type="submit" onClick={check} className="btnbtn">Login</button> 
    <hr />
    <Link to="/ForgetPassword">Forget Password ?</Link>
    <Link to="/Register"  style={{margin:"13%"}}>Sign-Up</Link>
</form>
</div>
<form  className="containerloginabout">
    <h1>About</h1>
<p>Online food ordering gives customers the freedom and choice to place an order at virtually any time, from anywhere, saving the time and resources typically spent on travelling to pick up a meal. </p>
    </form>
</body>
</>
    
  )
}
 