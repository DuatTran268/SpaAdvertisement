import React, { useEffect, useState } from "react";
import ServiceList from "../serviceslist/servicelist";
import "./servicetype.scss";
import { getAllService } from "../../api/ServiceApi";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Button, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

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
        <>
          <Tabs
            defaultActiveKey="profile"
            id="fill-tab-example"
            className="mb-3"
            fill
          >
            {serviceList.map((item, index) => (
              <Tab eventKey={item.urlSlug} title={item.name} key={index}>
                <ButtonGroup>
                  {item.serviceTypes.map((serviceType, i) => (
                    <div key={i}>
                        <DropdownButton
                          id={serviceType.urlSlug}
                          title={serviceType.name}
                        >
                          <div className="">
                          {serviceType.name}
                          {serviceType.shortDescription}

                          </div>
                          {/* <Dropdown.Item>
                          </Dropdown.Item>
                          <Dropdown.Item >
                          </Dropdown.Item> */}
                        </DropdownButton>


                      {/* <div className="list-service-item ">
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
                              to={`/service/${item.urlSlug}`}
                              className="text-decoration-none"
                            >
                              {serviceType.shortDescription}
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
                      </div> */}
                    </div>
                  ))}
                </ButtonGroup>
              </Tab>
            ))}
          </Tabs>
        </>
      </div>
    </>
  );
};

export default ServiceType;
