import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "../pages/About";
import Cart from "../pages/Carts";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Service from "../pages/Service";
import NotFound from "../components/shared/NotFound";
import AdminHome from "../pages/admin/home/Home";
import AdminLogin from "../pages/admin/login/Login";
import AdminList from "../pages/admin/list/User";
import AdminProduct from "../pages/admin/list/Product";
import AdminCart from "../pages/admin/list/Cart";
import "../pages/admin/style/dark.scss"
import { useContext } from "react";
import { DarkModeContext } from "../components/admin/context/darkModeReducer";
import AdminSetting from "../pages/admin/setting/Setting";
import AdminBooking from "../pages/admin/booking/Booking";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ServicePost from "../components/servicepost/ServicePost";
import Booking from "../components/booking/Booking";
import ProductDetails from "../components/productdetails/ProductDetails";

function Routers() {
  const {darkMode} = useContext(DarkModeContext)
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <BrowserRouter>
        <div className={darkMode ? "app dark" : "app"}>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/service/:slug" element={<ServicePost />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/service/booking" element={<Booking/>}/>
          <Route path="/product/:slug" element={<ProductDetails/>}/>


          <Route path="/admin" element={<AdminLogin/>}/>
          <Route path="/adminHome" element={<AdminHome/>}/>
          <Route path="/admin/users" element={<AdminList/>}/>
          <Route path="/admin/products" element={<AdminProduct/>}/>
          <Route path="/admin/cart" element={<AdminCart/>}/>
          <Route path="/admin/setting" element={<AdminSetting/>}/>
          <Route path="/admin/booking" element={<AdminBooking/>}/>
          

          <Route path="/*" element={<NotFound />} />
        </Routes>
        </div>
        
      
    </BrowserRouter>
  );
}

export default Routers;