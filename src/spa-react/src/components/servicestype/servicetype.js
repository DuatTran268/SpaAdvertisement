import React, { useState } from "react";
import ServiceList from "../serviceslist/servicelist";
import "./servicetype.scss";

const ServiceType = () => {
  const typeService = ["Tất cả", "Mụn", "Da", "Body", "Chân"];
  const [servicesType, setServiceType] = useState("");

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col mb-3 col-12 text-center">
            <h3 className="text-success mb-3 mt-5">Hãy chọn dịch vụ cho bạn</h3>
            <div className="btn-group" key={typeService}>
              {typeService.map((typeService) => (
                <button
                  type="button"
                  key={typeService}
                  className="btn btn-success"
                  onClick={() => setServiceType(typeService)}
                >
                  {typeService.toLocaleUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="col text-center">
              <p>{servicesType}</p>
              <p>
                {servicesType === "Tất cả" && 
                  <ServiceList/>
                }
              </p>
              <p>
                {servicesType === "Mụn" && 
                  <ServiceList/>
                }
              </p>
              <p>
                {servicesType === "Da" && 
                  <ServiceList/>
                }
              </p>
          </div>
        </div>
      </div>
    </>
  );
};




export default ServiceType;
