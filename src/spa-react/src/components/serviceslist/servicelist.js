import React, { useEffect } from "react";
import "./servicelist.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getAllServiceType } from "../../api/ServiceApi";

const ServiceList = () => {
  const [selected, setSelected] = useState(null);


  const [serviceType, setServiceType] = useState([]);
  useEffect(()=> {
    getAllServiceType().then((data) => {
      if(data) {
        setServiceType(data);
        console.log("data check: ", data);
      }
      else{
        setServiceType([]);
      }
    });
  }, [])



  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <>
      <div className="container">
        <div className="wrapper row">
          {serviceType.map((item, i) => (
            <div className="list-service accordition col-6">
              <div className="list-service-item ">
                <div className="list-service-title" onClick={() => toggle(i)}>
                  <h5 className="text-success">{item.name}</h5>
                  <span>{selected === i ? "-" : "+"}</span>
                </div>
                <div className={selected === i ? "content show" : "content"}>
                  <div className="list-service-description">
                    <Link to={`/service/${item.urlSlug}`} className="text-decoration-none">
                    {item.shortDescription}
                    </Link>
                  </div>

                  <div className="row d-flex align-items-center">
                    <div className="price col-6 text-danger">
                      {item.price} VNĐ
                    </div>
                    <div className="list-service-button col-6">
                      <Link to={`/service/booking`}>
                        <div className="btn btn-success ">Book now</div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServiceList;
