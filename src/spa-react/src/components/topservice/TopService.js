import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./TopService.scss";
import { Link } from "react-router-dom";
import { getNRamdomLitmitServiceType } from "../../api/ServiceApi";
import { isEmptyOrSpaces } from "../../Utils/Utils";

const TopService = ({serviceItem}) => {



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
  

  let imageUrl = !serviceItem || isEmptyOrSpaces(serviceItem.imageUrl)
  ? process.env.PUBLIC_URL + "/images/imagedefault.jpg"
  : `https://localhost:7024/${serviceItem.imageUrl}`;
  

  const [topNService, setTopNService] = useState([]);

  useEffect(() => {
    getNRamdomLitmitServiceType().then((data) => {
      if (data){
        setTopNService(data);
        console.log("data: ", data);
      }
      else{
        setTopNService([]);
      }
    });
  }, [])

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
          {topNService.map((value, index) => {
            return (
              <>
                <div className="container"  key={index}>
                  <div className="top-service">
                    <div className="text-center">
                      <Link className="text-decoration-none" to={`/service/${value.urlSlug}`}>
                        <h5 className="top-service-title mb-3">{value.name}</h5>
                      </Link>
                      <div className="top-service-image rounded-circle">
                        <Link to={`/service/${value.urlSlug}`}>
                          <img
                            src={imageUrl}
                            alt={value.name}
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
