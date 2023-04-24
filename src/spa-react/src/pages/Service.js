import React, { useState } from "react";
import ServiceType from "../components/servicestype/servicetype";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

const Service = () => {
  useState(() =>{
    document.title = "Dịch vụ"
  }, [])

  return (
    <>
      <Header/>
      <ServiceType/>
      <Footer/>
    </>
  );
}

export default Service;