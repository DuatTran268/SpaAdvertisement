import React, { useState } from "react";
import Dgalley from "../../data/Dgalley";
import "./Galley.scss";

const Galley = () => {
  const [file, setFile] = useState(null);

  return (
    <div className="container">
      <div className="container-media">
        <h3 className="text-success text-center pt-5 pb-3">
          Hình ảnh điều trị
        </h3>
        <div className="container-media-item">
          {Dgalley.map((file, index) => (
            <div
              className="container-media-image"
              key={index}
              onClick={() => setFile(file)}
            >
              {<img src={file.image} alt={file.image} />}
            </div>
          ))}
        </div>
        <span className="galley-note text-danger">
            * Tuỳ theo cơ địa khách hàng
          </span>
        <div className="popup-media"
          style={{ display: file ? "block" : "none" }}>
          <span onClick={() => setFile(null)}>&times;</span>
          {Dgalley.map((file, index) => (
            <>{<img src={file.image} alt={file.image} key={index}/>}</>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Galley;
