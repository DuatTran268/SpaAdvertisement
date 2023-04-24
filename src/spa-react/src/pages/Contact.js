import React, { useState } from "react";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";


const Contact = () => {
  useState(() => {
    document.title = "Liên hệ"
  }, [])

  return (
    <div>
      <Header/>
      <h1>Đây là trang liên hệ</h1>
      <Footer/>
    </div>
  );
}

export default Contact;