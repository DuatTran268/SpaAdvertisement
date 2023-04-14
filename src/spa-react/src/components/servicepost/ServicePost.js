import React, { useEffect } from "react";
import Dpostservice from "../../data/Dpostservice";
import { Image } from "react-bootstrap";
import "./ServicePost.scss";
import { Link } from "react-router-dom";

const ServicePost = () => {

  useEffect(() => {
    document.title = "Chi tiết dịch vụ"
    window.scroll(0,0)
  }, [])

  return (
    <div className="container">
      <h1 className="text-success text-center mt-5">Chi tiết dịch vụ</h1>

      {Dpostservice.map((post, index) => {
        return (
          <>
            <div className="container" key={index}>
              <div className="row container-post-row">
                <h2 className="text-danger col">{post.title}</h2>
                <span className="text-primary col container-post-viewcount ">
                  Lượt xem: {post.viewCount}
                </span>
              </div>
              <div className="text-center mt-3 mb-3">
                <Image className="" src={post.imageUrl} />
              </div>
              <p>{post.description}</p>

              <div className="text-center mt-5">
                <Link className="text-success text-decoration-none" to={`/service`}>Xem thêm các dịch vụ khác</Link>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default ServicePost;
