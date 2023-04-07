import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Ddata from "../../data/Dtopservice";
import "./TopService.scss";
import { Link } from "react-router-dom";

const TopService = () => {
  const serviceSetting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,

    // slider auto scroll
    autoplay: {
      delay: 3000, // delay 3s
      disableOnInteraction: false,
    },
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center mt-5 mb-5">Dịch vụ nổi bật </h1>
        <Slider {...serviceSetting}>
          {Ddata.map((value, index) => {
            return (
              <>
                <div className="container">
                  <div className="row top-service" key={index}>
                    <div className="col-sm text-center">
                      <Link className="text-decoration-none" to={`/service`}>
                        <h5 className="top-service-title mb-3">{value.name}</h5>
                      </Link>
                      <Link className="top-service-image" to={`/service`}>
                        <img
                          src={value.image}
                          alt="item top service"
                          className="top-service-img rounded-circle rounded mx-auto d-block"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default TopService;
