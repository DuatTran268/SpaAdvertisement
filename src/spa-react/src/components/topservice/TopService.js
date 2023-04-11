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
        <div className="service-header row pt-5 pb-3">
          <div className="col">
            <h3 className="service-header-title ">Dịch vụ</h3>
          </div>
          <Link className="service-header-more col" to={`/service`}>
            Xem thêm
          </Link>
        </div>

        <Slider {...serviceSetting}>
          {Ddata.map((value) => {
            return (
              <>
                <div className="container">
                  <div className="top-service">
                    <div className="text-center">
                      <Link className="text-decoration-none" to={`/service`}>
                        <h5 className="top-service-title mb-3">{value.name}</h5>
                      </Link>
                      <div className="top-service-image rounded-circle">
                        <Link to={`/service`}>
                          <img
                            src={value.image}
                            alt="item top service"
                            className="top-service-img "
                          />
                        </Link>
                      </div>
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
