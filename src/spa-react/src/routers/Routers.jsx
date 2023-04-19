import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

import Layout from "../components/shared/Layout";
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



function Routers() {
  const {darkMode} = useContext(DarkModeContext)
  return (
    <BrowserRouter>
        <div className={darkMode ? "app dark" : "app"}>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          
          {/* <Route path="/" element={<AdminLogin/>}> */}
          
          <Route  path="/admin" element={<AdminHome/>}/>
          <Route path="/admin/users" element={<AdminList/>}/>
          <Route path="/admin/products" element={<AdminProduct/>}/>
          <Route path="/admin/cart" element={<AdminCart/>}/>
          <Route path="/admin/setting" element={<AdminSetting/>}/>
          <Route path="/admin/booking" element={<AdminBooking/>}/>
          {/* </Route> */}
          

          <Route path="/*" element={<NotFound />} />
        </Routes>
        </div>
        
      
    </BrowserRouter>
  );
}

export default Routers;