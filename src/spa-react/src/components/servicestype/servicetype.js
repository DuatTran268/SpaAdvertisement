import React, { useEffect, useState } from "react";
import ServiceList from "../serviceslist/servicelist";
import "./servicetype.scss";
import { getAllService } from "../../api/ServiceApi";




const ServiceType = () => {
  const [servicesType, setServiceType] = useState("");

  const [serviceList, setServiceList] = useState([]);

  useEffect(() => {
    getAllService().then((data) => {
      if (data) {
        setServiceList(data);
        console.log("check data service: ", data);
      } else {
        setServiceList([]);
      }
    });
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col mb-3 col-12 text-center">
            <h3 className="text-success mb-3 mt-5">Hãy chọn dịch vụ cho bạn</h3>
            <div className="btn-group">
              {serviceList.map((item, index) => (
                <div
                  type="button"
                  key={index}
                  className="btn btn-success"
                  onClick={() => setServiceType(item.urlSlug)}
                >
                  {item.name}
                </div>
              ))}
            </div>
          </div>

          <div className="col text-center">
            <p>{servicesType === "da" && <ServiceList/>}</p>
          </div>
        </div>
      </div>
    </>
  );
};




export default ServiceType;
