import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import "./ServicePost.scss";
import { Link, useParams } from "react-router-dom";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import { getServiceTypeBySlug } from "../../api/ServiceApi";
import { FacebookShareButton } from "react-share";
import { FacebookOutlined } from "@mui/icons-material";

const ServicePost = () => {
  const params = useParams();
  const [serviceType, setServiceType] = useState(null);
  const { slug } = params;

  // let imageUrl = !serviceType || isEmptyOrSpaces(serviceType.imageUrl)
  // ? process.env.PUBLIC_URL + "/images/imagedefault.jpg"
  // : `https://localhost:7024/${serviceType.imageUrl}`;

  const getImage = (path) => {
    console.log(path);
    if (!path) {
      // set default image
      return `https://placehold.co/200x200?text=Image-not-found`;
    }

    return `https://localhost:7024/${path}`;
  };

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
              <Image className="image-width" src={getImage(serviceType.imageUrl)}/>
            </div>
            <h5 className="text-success">{serviceType.shortDescription}</h5>
            <p>{serviceType.description}</p>

            <div>
              <FacebookShareButton
                url={"https://dlu.edu.vn/"}
                quote={"Hello everyone"}
                hashtag="#spateam17"
              >
                <div className="text-primary">
                  Chia sẻ ngay <FacebookOutlined size={32} round />
                </div>
              </FacebookShareButton>
            </div>

            <div className="text-end">
              <Link to={`/service/booking`}>
                <div className="btn btn-success">Book now</div>
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
