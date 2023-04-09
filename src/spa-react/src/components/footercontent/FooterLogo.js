import React from "react";
import imgLogo from "./images/logo.png";


const FooterLogo = () => {
  return (
    <div className="footer-logo col-4 text-center">
      <h4 className="footer-info-title">Trung tâm Spa Seventeen</h4>
      <div className="footer-logo-image">
        <img src={imgLogo} alt="Logo"/>
      </div>
    </div>
  );
} 


export default FooterLogo;
