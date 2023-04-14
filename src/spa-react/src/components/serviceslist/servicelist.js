import React from "react";
import "./servicelist.scss";
import typeservice from "../../data/Dservicelist";
import { useState } from "react";
import { Link } from "react-router-dom";

const ServiceList = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i){
      return setSelected(null)
    }
    setSelected(i)
  }
  return (
    <>
      <div className="container">
        <div className="wrapper row">
          {typeservice.map((item, i) => (
            <div className="list-service accordition col-6">
              <div className="list-service-item ">
                <div className="list-service-title" onClick={() => toggle(i)} >
                  <h5 className="text-success">{item.name}</h5>
                  <span>{selected === i ? '-' : '+'}</span>
                </div>
                <div className= {selected === i ? 'content show' : 'content'}>
                  <div className="list-service-description">{item.shorDescription}</div>
                  <div className="row d-flex align-items-center">
                    <div className="price col-6 text-danger">{item.price} VNĐ</div>
                    <div className="list-service-button col-6">
                    <Link to={`/service/booking`}>
                      <button className="btn btn-success ">
                        Book now
                      </button>
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
