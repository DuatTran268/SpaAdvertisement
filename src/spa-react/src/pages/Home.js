import React from "react";
import BookService from "../components/booking/Bookservice";
import TopService from "../components/topservice/TopService";
import Slide from "../components/sliderbanner/Slider";
import './pages.scss'
import Product from "../components/product/Product"
import Galley from "../components/galley/Galley";


const Home = () => {
  return (
    <div>
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
        <Product/>
      </div>
      <div className="galley">
        <Galley/>
      </div>
    </div>
  );
};

export default Home;
