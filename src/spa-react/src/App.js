import { BrowserRouter, Route, Routes } from "react-router-dom";
// import './App.css';
// import Header from './components/shared/Header';
import Layout from "./components/shared/Layout";
import About from "./pages/About";
import Cart from "./pages/Carts";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Service from "./pages/Service";

function App() {
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
        </Routes>
      </Layout>
    </BrowserRouter>
    
    
  );
}

export default App;
