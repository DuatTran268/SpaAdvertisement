import React, { useEffect, useState } from "react";
import ServiceList from "../serviceslist/servicelist";
import "./servicetype.scss";
import { getAllService } from "../../api/ServiceApi";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Link } from "react-router-dom";


// import Sonnet from "../../components/Sonnet";

const ServiceType = () => {
  // const [servicesType, setServiceType] = useState("");

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

  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <>
      <div className="container">
        <div className="text-center">
          <h3 className="text-success mb-5 mt-5">Chọn dịch vụ cho bạn</h3>
          <h5 className="text-danger mb-3">Chọn cho bạn một trong các loại dịch vụ dưới đây</h5>
        </div>
        <div className="mt-5 mb-5">
          <Tabs
            defaultActiveKey="profile"
            id="fill-tab-example"
            className="mb-5"
            fill
          >
            {serviceList.map((item, index) => (
              <Tab eventKey={item.urlSlug} title={item.name} key={index}>
                <div className="wrapper row">
                  {item.serviceTypes.map((serviceType, i) => (
                    <div className="col-6 mb-3" key={i}>
                      <div className="list-service-item">
                        <div
                          className="list-service-title"
                          onClick={() => toggle(i)}
                        >
                          <h5 className="text-success"> {serviceType.name}</h5>
                          <span>{selected === i ? "-" : "+"}</span>
                        </div>
                        <div
                          className={
                            selected === i ? "content show" : "content"
                          }
                        >
                          <div className="list-service-description">
                            <Link
                              to={`/service/${serviceType.urlSlug}`}
                              className="text-decoration-none"
                            >
                              {serviceType.shortDescription}
                            </Link>
                          </div>

                          <div className="row d-flex align-items-center">
                            <div className="price col-6 text-danger">
                              {serviceType.price} VNĐ
                            </div>
                            <div className="list-service-button col-6 text-end">
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
              </Tab>
            ))}
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default ServiceType;


// mai sửa limit cho service