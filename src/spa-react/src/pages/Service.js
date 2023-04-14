import React, { useState } from "react";
import ServiceType from "../components/servicestype/servicetype";

const Service = () => {
  useState(() =>{
    document.title = "Dịch vụ"
  }, [])

  return (
    <>
      <ServiceType/>
    </>
  );
}

export default Service;