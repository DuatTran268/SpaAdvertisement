import React, { useEffect } from "react";
import AboutStatic from "../components/About/AboutStatic";

const About = () => {
  useEffect(() => {
    document.title = "Giới thiệu";
  }, []);

  return <AboutStatic />;
};

export default About;
