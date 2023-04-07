import React from "react";
import BookService from "../components/booking/Bookservice";
import TopService from "../components/topservice/TopService";
import Slide from "../components/sliderbanner/Slider";
import './pages.scss'


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
    </div>
  );
};

export default Home;
