import React, { useEffect, useState } from "react";
import Dpostservice from "../../data/Dpostservice";
import { Button, Image } from "react-bootstrap";
import "./ServicePost.scss";
import { Link, useParams } from "react-router-dom";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import { isEmptyOrSpaces } from "../../Utils/Utils";
import { getServiceTypeBySlug } from "../../api/ServiceApi";

const ServicePost = () => {
  const params = useParams();
  const [serviceType, setServiceType] = useState(null);
  const { slug } = params;

  let imageUrl = !serviceType || isEmptyOrSpaces(serviceType.imageUrl)
  ? process.env.PUBLIC_URL + "/images/imagedefault.jpg"
  : `https://localhost:7024/${serviceType.imageUrl}`;

  useEffect(() => {
    document.title = "Chi tiết dịch vụ";
    getServiceTypeBySlug(slug).then((data) => {
      window.scroll(0, 0);
      if (data) {
        setServiceType(data);
        console.log("data check detail: ", data);
      } else {
        setServiceType({});
      }
    });
  }, [slug]);

  if (serviceType) {
    return (
      <>
        <Header />
        <div className="container">
          <h1 className="text-success text-center mt-5">Chi tiết dịch vụ</h1>

          <div className="container">
            <div className="row container-post-row">
              <h2 className="text-danger col">{serviceType.name}</h2>
            </div>
            <div className="text-center mt-3 mb-3">
              <Image className="" src={imageUrl} />
            </div>
            <h5 className="text-success">{serviceType.shortDescription}</h5>
            <p>{serviceType.description}</p>

            <div className="text-end">
              <Link to={`/service/booking`}>
                <div className="btn btn-success">
                    Book now
                </div>
              </Link>

            </div>

            <div className="text-center mt-5">
              <Link
                className="text-success text-decoration-none"
                to={`/service`}
              >
                Xem thêm các dịch vụ khác
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  } else {
    return <></>;
  }
};

export default ServicePost;
