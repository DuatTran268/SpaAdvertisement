import { BrowserRouter, Route, Routes } from "react-router-dom";
// import './App.css';
import Layout from "../components/shared/Layout";
import About from "../pages/About";
import Cart from "../pages/Carts";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Service from "../pages/Service";
import NotFound from "../components/shared/NotFound";

const Routers = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about-us" element={<About/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/*" element={<NotFound/>}/>
        </Routes>

        {/* router admin define in here */}
        
      </Layout>
    </BrowserRouter>
  );
}

export default Routers;