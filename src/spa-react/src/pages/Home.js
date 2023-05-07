import React, { useEffect } from "react";
import BookService from "../components/booking/RegisterSupport";
import TopService from "../components/topservice/TopService";
import Slide from "../components/sliderbanner/Slider";
import './pages.scss'
import Products from "../components/product/Products"
import Galley from "../components/galley/Galley";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

const Home = () => {
  useEffect(() => {
    document.title = "Trang chủ";
  }, [])

  return (
    <div>
      <Header/>
      <div className="home_slide">
        <Slide />
        <div className="home_slide-service">
          <BookService />
        </div>
      </div>
      <div className="top_service">
        <TopService/>
      </div>
      <div className="top_product">
        <Products/>
      </div>
      <div className="galley">
        <Galley/>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
