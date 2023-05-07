import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "./images/slide1.png";
import slide2 from "./images/slide2.png";
import slide3 from "./images/slide3.png";
import slide4 from "./images/slide4.png";
import slide5 from "./images/slide5.jpg";
import "./style.scss";

const Slide = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    // slider auto scroll
    autoplay: {
      delay: 3000, // delay 3s
      disableOnInteraction: false,
    },
  };
  return (
    <div className="image_banner">
      <Slider {...settings}>
        <div>
          <img src={slide1} alt="slide1" className="image_slide" />
        </div>
        <div>
          <img src={slide2} alt="slide2" className="image_slide" />
        </div>
        <div>
          <img src={slide3} alt="slide3" className="image_slide" />
        </div>
        <div>
          <img src={slide4} alt="slide4" className="image_slide" />
        </div>
        <div>
          <img src={slide5} alt="slide5" className="image_slide" />
        </div>
      </Slider>
    </div>
  );
};

export default Slide;
