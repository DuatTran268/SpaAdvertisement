import React, { useEffect } from "react";
import AboutStatic from "../components/staticabout/AboutStatic";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

const About = () => {
  useEffect(() => {
    document.title = "Giới thiệu";
  }, []);

  return( 
    <div>
      <Header/>
      <AboutStatic />;
      <Footer/>
    </div>
    
  ) 
};

export default About;
