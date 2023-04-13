import React, { useEffect } from "react";
import AboutStatic from "../components/staticabout/AboutStatic";
const About = () => {
  useEffect(() => {
    document.title = "Giới thiệu";
  }, []);

  return <AboutStatic />;
};

export default About;
