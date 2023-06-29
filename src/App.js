import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter,Routes,Route, createBrowserRouter,RouterProvider } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import HomePage from './Components/HomePage';
import Forgetpassword from './Components/Forgetpassword';
import Veg from './catagery/Veg';
import Ice from './catagery/Ice';
import Food from './catagery/Food';
import Friut from './catagery/Friut';
import Firstpage from './Components/Firstpage';
import Order from './Components/Order';
import Resetpassword from './Components/Resetpassword';




function App() {
  return (
    <>
  <BrowserRouter>
    <Navbar/>
       <Routes>
       <Route path="/" element={<HomePage/>}/>
       {/* <Route path="/" element={<Firstpage/>}/> */}
       <Route path="/Login" element={<Login/>}/>
       <Route path="/Register" element={<Register/>}/>
       <Route path="/Forgetpassword" element={<Forgetpassword/>}/>
       <Route path="/Veg" element={<Veg/>}/>
       <Route path="/Ice" element={<Ice/>}/>
       <Route path="/Food" element={<Food/>}/>
       <Route path="/Friut" element={<Friut/>}/>
       <Route path="/Order" element={<Order/>}/>
       <Route path="/Resetpassword" element={<Resetpassword/>}/>
       </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;
