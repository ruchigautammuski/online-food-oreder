import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { AddEmail, AddPassword,Addname,Addaddress } from '../Store/Info';
import Forgetpassword from './Forgetpassword';
const getEmail=localStorage.getItem("emailData")
const getPassword=localStorage.getItem("passwordData")


export default function Register() {


 
    const navigate=useNavigate()
    const Dispatch = useDispatch();
    
    const [checkmail,SetNewmail]=useState(localStorage.getItem("emailData"));
    const [checkpassword,SetNewpassword]=useState('');
    const [name,Setname]=useState(localStorage.getItem("nameData"));
    const [address,Setaddress]=useState(localStorage.getItem("addressData"));
   
    const check=(event)=>{
event.preventDefault();
        if( checkpassword.length>=8 && name.length>4 && address.length>4 ) {
        if(checkmail.endsWith("@gmail.com")){
        if(/[A-Z]/.test(checkpassword) && /[a-z]/.test(checkpassword)){
        if(checkpassword.includes("@") || checkpassword.includes("#") || checkpassword.includes("$")){
        //   localStorage.setItem("emailData",checkmail)
        // localStorage.setItem("passwordData",checkpassword)
        // localStorage.setItem("nameData",name)
        // localStorage.setItem("addressData",address)
        alert("User registerd")
        Dispatch(AddEmail(checkmail))
        Dispatch(AddPassword(checkpassword))
        Dispatch(Addname(name))
        Dispatch(Addaddress(address))
        navigate("/Login")
        }
        else{
        alert("Please includes any one @,#,$ special character")
      }
    }
    else{
      alert("Please Add Lower Case And Upper Case Both")
          }
  }
    else{
      alert("Please includes @gmail.com on Email")
      }
    }
      else{
      alert("Please Fill up All  Fileds")
       }
    }



// other calling functions
// 


    const emailsize=(event)=>{
  SetNewmail(event.target.value)
     localStorage.setItem("emailData",event.target.value)

    
    }
    const passwordsize=(event)=>{
      SetNewpassword(event.target.value)
      localStorage.setItem("passwordData",checkpassword)
    
    }
    const checkname=(event)=>{
      Setname(event.target.value)
      localStorage.setItem("nameData",name)
    
    }
    const checkAddress=(event)=>{
      Setaddress(event.target.value)
      localStorage.setItem("addressData",address)
    
    }
   return (
     <>
    <body>
      <div className="bg-img">
<form  className="containersignup">
    <h1>Sign-up</h1>

    <label htmlFor="email"><b>Name</b></label>
    <input type="text" onChange={checkname} placeholder="Enter Name" name="Name" required/>


    <label htmlFor="email"><b>Address</b></label>
    <input type="text" onChange={checkAddress} placeholder="Enter Address" name="Address" required/>

    <label htmlFor="email"><b>Email</b></label>
    <input type="text" onChange={emailsize} placeholder="Enter Email" name="email" required/>

    <label htmlFor="psw"><b>Password</b></label>
    <input type="password" placeholder="Includes all @$# ,lower-upper character" onChange={passwordsize} name="psw" required/>

    <button type="submit" onClick={check} className="btnbtnreg">Sign-up</button> 

</form>
</div>
<form  className="containersignupabout">
    <h1>About</h1>
<p>Online food ordering gives customers the freedom and choice to place an order at virtually any time, from anywhere, saving the time and resources typically spent on travelling to pick up a meal. </p>
    </form>
</body>
      </>
  )
}
